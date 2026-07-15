#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

openapi-generator validate -i "$root/spec/affinity.openapi.json"
(cd "$root/typescript" && bun install --frozen-lockfile && bun run build)
(cd "$root/python" && python3 -m compileall -q affinity_sdk)
(cd "$root/go" && go test ./...)
"$root/java/gradlew" -p "$root/java" test
