#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
generator="$(command -v openapi-generator || command -v openapi-generator-cli)"

"$generator" validate -i "$root/spec/affinity.openapi.json"
