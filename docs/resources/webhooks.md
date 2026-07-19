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

Mutation methods generate an idempotency key automatically. Pass one through mutation options only
when retrying the same logical request. Consult the generated model types for current fields.
