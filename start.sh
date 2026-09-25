#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
PORT=${1:-8000}
echo "Sirviendo proyecto en http://localhost:${PORT} (Ctrl-C para detener)"
python3 -m http.server "${PORT}"
