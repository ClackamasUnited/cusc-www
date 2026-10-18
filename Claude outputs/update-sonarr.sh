#!/bin/sh
# update-sonarr.sh — create or update the Sonarr container, with a filesystem
# check (and journal check) on the config volume every time.
#
# Safe to run when nothing exists yet: it creates the volume, adds a journal,
# and starts Sonarr. On later runs it pulls the latest image, stops Sonarr
# cleanly, backs up + checks the volume, and recreates the container.
set -eu

NAME=Sonarr
IMG=ghcr.io/hotio/sonarr:release
VOL=sonarr-config
VOL_IMG="$HOME/Library/Application Support/com.apple.container/volumes/$VOL/volume.img"
BACKUP_DIR="$HOME/container-backups"
KEEP_BACKUPS=3

log() { printf '\n==> %s\n' "$*"; }
die() { printf '\nERROR: %s\n' "$*" >&2; exit 1; }

# --- e2fsprogs (keg-only in Homebrew) ---------------------------------------
command -v brew >/dev/null 2>&1 || die "Homebrew not found"
E2P="$(brew --prefix e2fsprogs 2>/dev/null || true)"
if [ -z "$E2P" ] || [ ! -x "$E2P/sbin/e2fsck" ]; then
  log "Installing e2fsprogs"
  brew install e2fsprogs
  E2P="$(brew --prefix e2fsprogs)"
fi
E2FSCK="$E2P/sbin/e2fsck"
TUNE2FS="$E2P/sbin/tune2fs"

# --- 1. Pull first, so downtime is only the restart --------------------------
log "Pulling $IMG"
container image pull "$IMG"

# --- 2. Stop and remove the old container (if any) ---------------------------
if container inspect "$NAME" >/dev/null 2>&1; then
  log "Stopping $NAME"
  container stop "$NAME" || true
  container rm "$NAME"
else
  log "No existing $NAME container — creating fresh"
fi

# --- 3. Make sure the volume exists ------------------------------------------
if [ ! -f "$VOL_IMG" ]; then
  log "Creating volume $VOL"
  container volume create "$VOL"
  [ -f "$VOL_IMG" ] || die "Volume image not found at: $VOL_IMG"
fi

# --- 4. Back up (APFS clone, instant) ----------------------------------------
mkdir -p "$BACKUP_DIR"
BK="$BACKUP_DIR/$VOL-$(date +%Y%m%d-%H%M%S).img"
log "Backing up volume to $BK"
cp -c "$VOL_IMG" "$BK"
# prune old backups, keep the newest $KEEP_BACKUPS
ls -1t "$BACKUP_DIR/$VOL-"*.img 2>/dev/null | tail -n +$((KEEP_BACKUPS + 1)) |
  while IFS= read -r old; do rm -f "$old"; done

# --- 5. Forced filesystem check + repair -------------------------------------
log "Checking filesystem"
set +e
"$E2FSCK" -fy "$VOL_IMG"
rc=$?
set -e
# e2fsck exit codes: 0 clean, 1 errors fixed, 2 fixed (reboot), 4+ NOT fixed
case $rc in
  0)   echo "Filesystem clean." ;;
  1|2) echo "Errors were found AND repaired. Backup of the pre-repair state: $BK" ;;
  *)   die "e2fsck could not repair the volume (exit $rc). Container NOT started. Backup: $BK" ;;
esac

# --- 6. Make sure the volume has a journal -----------------------------------
if ! "$TUNE2FS" -l "$VOL_IMG" | grep -q has_journal; then
  log "Adding journal to $VOL"
  "$TUNE2FS" -O has_journal -J size=128 "$VOL_IMG"
  "$E2FSCK" -fn "$VOL_IMG" || die "Volume not clean after adding journal. Backup: $BK"
fi

# --- 7. Start Sonarr ---------------------------------------------------------
log "Starting $NAME"
container run -d --name "$NAME" \
  --cpus 2 --memory 2G \
  -p 8989:8989 \
  -e PUID=502 -e PGID=20 -e UMASK=002 -e TZ=America/Los_Angeles \
  -v /Users/admin/mnt/arr:/mnt/arr \
  -v "$VOL":/config \
  "$IMG"

# --- 8. Verify this boot -----------------------------------------------------
sleep 5
# keep only the lines from the most recent boot
BOOT="$(container logs --boot "$NAME" | awk '/vminitd booting/{buf=""} {buf=buf $0 "\n"} END{printf "%s", buf}')"
if printf '%s' "$BOOT" | grep -q "EXT4-fs error"; then
  printf '%s\n' "$BOOT" | grep "EXT4-fs"
  die "Filesystem errors on this boot — check the output above"
fi
UUID="$("$TUNE2FS" -l "$VOL_IMG" | awk -F': *' '/Filesystem UUID/{print $2}')"
MOUNT_LINE="$(printf '%s' "$BOOT" | grep "mounted filesystem $UUID" || true)"
case "$MOUNT_LINE" in
  *"ordered data mode"*) echo "Config volume mounted with journal: OK" ;;
  *"without journal"*)   echo "WARNING: config volume mounted WITHOUT a journal." ;;
  *)                     echo "Note: couldn't find the config volume's mount line in the boot log." ;;
esac

log "Done. $NAME is running: http://localhost:8989"
