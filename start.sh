#!/usr/bin/env bash
# Serves the game-night site on this computer only (port 8000 by default).
cd "$(dirname "$0")"
PORT="${1:-8000}"
echo "Open: http://localhost:$PORT   (Ctrl+C to stop)"
exec python3 -m http.server "$PORT" --bind 127.0.0.1
