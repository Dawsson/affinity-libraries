# Affinity SDKs

Official, generated clients for the Affinity platform API.

This repository contains the same dated API contract and clients for:

- [TypeScript](./typescript)
- [Python](./python)
- [Go](./go)
- [Java](./java)

The packages are not published yet. They can be installed directly from their language directory for first-client testing.

## Authentication

Affinity service keys are server-side credentials. Never embed them in a browser or mobile application. Send a key using `Authorization: Bearer <key>` or `x-affinity-api-key: <key>`. Every client defaults to `https://api.joinaffinityai.com`.

Use a test-mode key until Affinity separately approves production access. Creating test data cannot promote it into production.

## Contract

[`spec/affinity.openapi.json`](./spec/affinity.openapi.json) is the source of truth for every generated client. The current dated contract is `2026-07-09`.

Mutations support `Idempotency-Key`; use a stable unique value for retries. Pin `Affinity-Version` in production integrations. Webhook consumers must verify signatures before processing payloads.

## Regeneration

OpenAPI Generator 7.22.0 is currently pinned by [`scripts/generate.sh`](./scripts/generate.sh).

```bash
./scripts/generate.sh
```

The script validates the contract and regenerates all four clients. Generated packages should never be edited by hand.

## Status

The SDKs cover authentication inspection, catalog search, practice CRUD, order lifecycle, order events, webhook endpoints, webhook event inspection, and replay. Billing is intentionally not part of this contract yet.
