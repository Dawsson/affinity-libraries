# Affinity SDK agent guide

This repository contains public, generated clients for the Affinity platform API.

## Source of truth

- `spec/affinity.openapi.json` is exported from `publicApiDocument()` in the private `peptide-clinic-os` repository.
- Never hand-edit generated models, API classes, generated endpoint documentation, or the generated
  Stripe-style facade files. Change `scripts/generate-facades.ts` and regenerate instead.
- Hand-maintained files are the root documentation, `examples/`, `scripts/`, CI, and repository metadata.
- Run `bun run generate` after replacing the OpenAPI document, then `bun run check`.

## Terminology

- **Provider** is an individual clinician or prescriber.
- **Practice** is the customer organization and API tenant.
- **Location** is a physical practice site.
- **Affinity for Providers** is the product name. SDK resources remain `practices`, `practiceId`, and `practice_id`.
- Do not introduce a `clinic` API resource or use provider and practice interchangeably.

## Release boundary

- Keep all packages at `0.x` until Affinity explicitly begins publishing.
- Preparing package metadata, archives, documentation, and dry runs is allowed.
- Do not publish to npm, PyPI, Maven Central, or another registry without explicit authorization.
- Never commit service keys, webhook secrets, patient data, or real clinical payloads.

## Validation

Use Bun for the root workflow:

```sh
bun run generate
bun run check
```

Generated SDKs must build on TypeScript, Python, Go, and Java before a contract update is committed.
