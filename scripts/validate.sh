#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
"$root/scripts/validate-spec.sh"
bun "$root/scripts/generate-facades.ts" --check
(cd "$root/typescript" && bun install --frozen-lockfile && bun run build)
(cd "$root/python" && python3 -m compileall -q affinity_sdk)
(cd "$root/go" && go test ./...)
"$root/java/gradlew" -p "$root/java" test
bun build "$root/examples/typescript/quickstart.ts" --target=node --outfile=/tmp/affinity-typescript-example.js
PYTHONPATH="$root/python" python3 -m py_compile "$root/examples/python/quickstart.py"
(cd "$root/go" && go test "$root/examples/go/quickstart.go")
