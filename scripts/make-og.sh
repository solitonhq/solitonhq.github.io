#!/bin/sh
# Regenerates public/og/*.png from scripts/og/template.html using headless Chrome.
set -eu
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
cd "$(dirname "$0")/og"
shot() { "$CHROME" --headless --hide-scrollbars --screenshot="../../public/og/$1.png" --window-size=1200,630 "file://$PWD/template.html#$2" >/dev/null 2>&1; }
shot en "Tools shaped by a DevOps engineer’s perspective."
shot tr "Bir DevOps mühendisinin bakış açısıyla şekillenen araçlar."
