# Quick-start examples

Each example reads `AFFINITY_API_KEY` and runs the same read-only first-client workflow:

1. Inspect the service key's organization, mode, and scopes.
2. Refuse to run with a live-mode key.
3. Read the selected platform organization.
4. Search the synthetic catalog for `semaglutide`.
5. List practices, sandbox orders, and test webhook endpoints.

Use a test-mode key. The examples intentionally do not create a practice, submit an order, mutate a
webhook, or access production data.

- [TypeScript](./typescript/quickstart.ts)
- [Python](./python/quickstart.py)
- [Go](./go/quickstart.go)
- [Java](./java/Quickstart.java)

The generated SDK READMEs contain every endpoint and model. These longer examples are intended as
an executable integration diagnostic before a client begins creating synthetic practices or orders.
