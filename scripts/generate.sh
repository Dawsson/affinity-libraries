#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
spec="$root/spec/affinity.openapi.json"
generator_spec="$(mktemp "${TMPDIR:-/tmp}/affinity-generator-spec.XXXXXX")"
trap 'rm -f "$generator_spec"' EXIT
generator="$(command -v openapi-generator || command -v openapi-generator-cli)"
common='hideGenerationTimestamp=true,licenseName=MIT'

"$generator" validate -i "$spec"
bun "$root/scripts/prepare-generator-spec.ts" "$spec" "$generator_spec"
"$generator" generate -i "$generator_spec" -g typescript-fetch -o "$root/typescript" --git-user-id Dawsson --git-repo-id affinity-libraries --additional-properties="${common},npmName=@affinity/sdk,npmVersion=0.1.0,npmRepository=https://github.com/Dawsson/affinity-libraries,supportsES6=true,typescriptThreePlus=true"
"$generator" generate -i "$generator_spec" -g python -o "$root/python" --git-user-id Dawsson --git-repo-id affinity-libraries --additional-properties="${common},packageName=affinity_sdk,projectName=affinity-sdk,packageVersion=0.1.0"
"$generator" generate -i "$generator_spec" -g go -o "$root/go" --git-user-id Dawsson --git-repo-id affinity-libraries/go --additional-properties="${common},packageName=affinity,packageVersion=0.1.0"
"$generator" generate -i "$generator_spec" -g java -o "$root/java" --git-user-id Dawsson --git-repo-id affinity-libraries --additional-properties="${common},invokerPackage=ai.joinaffinity.sdk,apiPackage=ai.joinaffinity.sdk.api,modelPackage=ai.joinaffinity.sdk.model,groupId=ai.joinaffinity,artifactId=affinity-sdk,artifactVersion=0.1.0,library=native"

# Generator test templates are empty endpoint call stubs, not offline tests. Keep the public
# repository's validation focused on compiling each generated client and the maintained examples.
rm -rf "$root/go/test" "$root/python/test" "$root/java/src/test"
gofmt -w "$root/go"/*.go
bun "$root/scripts/normalize.ts"
bun "$root/scripts/generate-facades.ts"
