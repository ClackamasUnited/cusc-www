#!/bin/bash

# This script downloads all the necessary images for the news articles.
# Run it from the root of your website project.

echo "Creating image directory if it doesn't exist..."
mkdir -p news/images

echo "Fetching news images..."

# Function to download a file if it doesn't exist
download_if_missing() {
  URL=$1
  FILE=$2
  echo "Downloading to $FILE"
  # The -f flag is removed from the check to force overwrite.
  # curl will automatically overwrite the file specified with -o
  curl -L "$URL" -o "$FILE"
}

download_if_missing "https://lirp.cdn-website.com/71477833/dms3rep/multi/opt/2025-26+Tryouts-1920w.png" "news/images/2025-26-tryouts.png"
download_if_missing "https://lirp.cdn-website.com/3993768a/dms3rep/multi/opt/2025-26+Classic+Season+Tryout+Schedule-1920w.png" "news/images/2025-26-classic-season-tryout-schedule.png"
download_if_missing "https://lirp.cdn-website.com/71477833/dms3rep/multi/opt/Rangers+Academy+Summer+Soccer+Camp-1920w.png" "news/images/rangers-academy-summer-soccer-camp.png"
download_if_missing "https://lirp.cdn-website.com/71477833/dms3rep/multi/opt/Happy+Valley+Fun+Run+2025-1920w.png" "news/images/happy-valley-fun-run-2025.png"
download_if_missing "https://lirp.cdn-website.com/71477833/dms3rep/multi/opt/Scholarship+Program+Update-1920w.png" "news/images/scholarship-program-update.png"
download_if_missing "https://lirp.cdn-website.com/71477833/dms3rep/multi/opt/Rangers+Summer+Camp+Academy-1920w.png" "news/images/rangers-summer-camp-academy.png"
download_if_missing "https://lirp.cdn-website.com/71477833/dms3rep/multi/opt/2025-26+Winter+Academy+-+Coming+Soon-1920w.png" "news/images/2025-26-winter-academy-coming-soon.png"
download_if_missing "https://lirp.cdn-website.com/71477833/dms3rep/multi/opt/High+School+Tryouts+Registration+Now+Open-1920w.png" "news/images/high-school-tryouts-registration-now-open.png"
download_if_missing "https://lirp.cdn-website.com/71477833/dms3rep/multi/opt/2025-26+Winter+Academy+-+Registration+Now+Open-1920w.png" "news/images/2025-26-winter-academy-registration-now-open.png"
download_if_missing "https://lirp.cdn-website.com/3993768a/dms3rep/multi/opt/2026+Spring+Recreational+Registration-1920w.png" "news/images/2026-spring-recreational-registration.png"
download_if_missing "https://lirp.cdn-website.com/3993768a/dms3rep/multi/opt/We%27re+Hiring-1920w.png" "news/images/we-re-hiring.png"
download_if_missing "https://lirp.cdn-website.com/3993768a/dms3rep/multi/opt/Upcoming+Changes-1920w.png" "news/images/upcoming-changes.png"
download_if_missing "https://lirp.cdn-website.com/3993768a/dms3rep/multi/opt/US+Youth+Soccer+Age+Group+Changes-1920w.png" "news/images/us-youth-soccer-age-group-changes.png"
download_if_missing "https://lirp.cdn-website.com/3993768a/dms3rep/multi/opt/Untitled+design+%281%29-1920w.jpeg" "news/images/celebrating-girls-women-in-sports.jpeg"
download_if_missing "https://lirp.cdn-website.com/3993768a/dms3rep/multi/opt/Scholarship+Program+Updates-1920w.png" "news/images/scholarship-program-updates.png"

echo "Image fetch complete."
