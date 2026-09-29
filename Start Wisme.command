#!/bin/zsh
set -e
cd -- "$(dirname -- "$0")"
WISME_NODE="$(command -v node || true)"
if [[ -z "$WISME_NODE" ]]; then
  WISME_NODE="$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node"
fi
if [[ ! -x "$WISME_NODE" ]]; then
  print 'Node.js 20 or later is required. Install Node.js, then run this launcher again.'
  exit 1
fi
"$WISME_NODE" scripts/build.mjs
if curl --silent --fail http://127.0.0.1:4174/ | grep -q 'Wisme Education'; then
  open http://127.0.0.1:4174/
else
  open http://127.0.0.1:4174/
  "$WISME_NODE" scripts/serve.mjs
fi
