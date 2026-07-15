# Affinity SDKs

Official server-side clients for the Affinity platform API.

| Language | Package name | Directory |
| --- | --- | --- |
| TypeScript | `@affinity/sdk` | [`typescript`](./typescript) |
| Python | `affinity-sdk` | [`python`](./python) |
| Go | `github.com/Dawsson/affinity-libraries/go` | [`go`](./go) |
| Java | `ai.joinaffinity:affinity-sdk` | [`java`](./java) |

The packages are ready for source-based client testing but are not published to package registries
yet. Start with the [examples](./examples) or the [first-client checklist](./docs/first-client-checklist.md).

## Quick start

Set a test service key on your server:

```sh
export AFFINITY_API_KEY=aff_sk_test_...
```

Then run the example for your language. Every SDK defaults to
`https://api.joinaffinityai.com`. Never put an Affinity service key in a browser or mobile app.

## API model

- A **practice** is the customer organization and API tenant.
- A **provider** is an individual clinician or prescriber.
- A **location** is a physical practice site.
- **Affinity for Providers** is the product name; API resources remain `/v1/practices`.

See the complete [terminology guide](./docs/terminology.md).

## Authentication and safety

Send a service key using `Authorization: Bearer <key>` or `x-affinity-api-key: <key>`. Use a
test-mode key until Affinity separately approves production access. Keep test and live data,
credentials, webhooks, and logs isolated.

Mutations require an `Idempotency-Key`; reuse the same key only when retrying the same operation.
Production integrations should pin `Affinity-Version`. Webhook consumers must verify signatures
before processing payloads.

## One-command maintenance

The root workflow uses Bun:

```sh
bun run generate  # validate the OpenAPI contract and regenerate all four SDKs
bun run check     # validate and build TypeScript, Python, Go, and Java
```

[`spec/affinity.openapi.json`](./spec/affinity.openapi.json) is the source of truth. It is exported
from the private Affinity application repository; generated models and endpoint docs should not be
edited by hand. OpenAPI Generator 7.22.0 is pinned by the repository workflow.

## Current scope

The dated contract covers authentication inspection, catalog search, practice CRUD, order
lifecycle, order events, webhook endpoints, webhook event inspection, and replay. Billing and
automatic production approval are intentionally excluded.
