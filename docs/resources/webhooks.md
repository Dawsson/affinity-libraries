<!-- Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT. -->
# Webhooks

Access this product through the shared authenticated client. The facade delegates to the generated
OpenAPI transport while keeping transport-class names out of application code.

## Methods

- `listEndpoints()`
- `createEndpoint()`
- `updateEndpoint()`
- `deleteEndpoint()`
- `rotateSecret()`
- `listEvents()`
- `retrieveEvent()`
- `replayEvent()`

## Examples

```ts
const result = await affinity.webhooks.listEndpoints();
```

```python
result = affinity.webhooks.list_endpoints()
```

```go
result, err := affinityClient.Webhooks.ListEndpoints(ctx)
```

```java
var result = affinity.webhooks().listEndpoints();
```

Mutation methods additionally require an idempotency key. Consult the generated model types for the
request and response fields accepted by the current dated API contract.
