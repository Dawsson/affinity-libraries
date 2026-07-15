#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
spec="$root/spec/affinity.openapi.json"

openapi-generator validate -i "$spec"
openapi-generator generate -i "$spec" -g typescript-fetch -o "$root/typescript" --additional-properties='npmName=@affinity/sdk,npmVersion=0.1.0,supportsES6=true,typescriptThreePlus=true'
openapi-generator generate -i "$spec" -g python -o "$root/python" --additional-properties='packageName=affinity_sdk,projectName=affinity-sdk,packageVersion=0.1.0'
openapi-generator generate -i "$spec" -g go -o "$root/go" --additional-properties='packageName=affinity,moduleName=github.com/Dawsson/affinity-libraries/go,packageVersion=0.1.0'
grep -rl 'github.com/GIT_USER_ID/GIT_REPO_ID' "$root/go" | xargs sed -i '' 's#github.com/GIT_USER_ID/GIT_REPO_ID#github.com/Dawsson/affinity-libraries/go#g'
openapi-generator generate -i "$spec" -g java -o "$root/java" --additional-properties='invokerPackage=ai.joinaffinity.sdk,apiPackage=ai.joinaffinity.sdk.api,modelPackage=ai.joinaffinity.sdk.model,groupId=ai.joinaffinity,artifactId=affinity-sdk,artifactVersion=0.1.0,library=native'
