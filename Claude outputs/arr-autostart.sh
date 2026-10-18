#!/bin/sh
# arr-autostart.sh — run at login by launchd (com.pctony.arr-autostart).
#  1. starts Apple's container service
#  2. waits for the SMB share to be mounted
#  3. checks each config volume with e2fsck (catches power loss / unclean stops)
#  4. starts the containers
#  5. stays running; on logout/shutdown it stops the containers cleanly
set -u
export PATH="/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"

# container-name:volume-name — add Radarr etc. here
CONTAINERS="Sonarr:sonarr-config"
SHARE=/Users/admin/mnt/arr
SHARE_WAIT=300   # seconds to wait for the SMB mount
VOLDIR="$HOME/Library/Application Support/com.apple.container/volumes"

log() { printf '%s %s\n' "$(date '+%F %T')" "$*"; }

E2FSCK="$(brew --prefix e2fsprogs 2>/dev/null)/sbin/e2fsck"
[ -x "$E2FSCK" ] || { log "e2fsck not found — run: brew install e2fsprogs"; E2FSCK=""; }

stop_all() {
  log "Shutdown/logout — stopping containers"
  for pair in $CONTAINERS; do
    name=${pair%%:*}
    container stop "$name" >/dev/null 2>&1 && log "stopped $name"
  done
  exit 0
}
trap stop_all TERM INT HUP

# 1. container service
log "Starting container service"
container system start || log "WARNING: 'container system start' returned an error"

# 2. wait for the share (Sonarr needs it for /mnt/arr)
i=0
until mount | grep -q " on $SHARE "; do
  if [ $i -ge $SHARE_WAIT ]; then
    log "ERROR: $SHARE not mounted after ${SHARE_WAIT}s — not starting containers"
    break
  fi
  sleep 5; i=$((i + 5))
done

if mount | grep -q " on $SHARE "; then
  log "$SHARE is mounted"
  for pair in $CONTAINERS; do
    name=${pair%%:*}; vol=${pair#*:}
    img="$VOLDIR/$vol/volume.img"

    # make sure it's not running before checking its volume
    container stop "$name" >/dev/null 2>&1 || true

    # 3. filesystem check (replays the journal if the last stop was unclean)
    if [ -n "$E2FSCK" ] && [ -f "$img" ]; then
      "$E2FSCK" -fy "$img"; rc=$?
      if [ $rc -ge 4 ]; then
        log "ERROR: e2fsck could not repair $vol (exit $rc) — NOT starting $name"
        continue
      fi
      [ $rc -ne 0 ] && log "$vol: errors found and repaired (exit $rc)"
      [ $rc -eq 0 ] && log "$vol: clean"
    fi

    # 4. start
    if container start "$name"; then log "started $name"; else log "ERROR: failed to start $name"; fi
  done
fi

# 5. stay alive so launchd sends us SIGTERM at logout/shutdown
log "Running; will stop containers on shutdown"
while :; do sleep 86400 & wait $!; done
