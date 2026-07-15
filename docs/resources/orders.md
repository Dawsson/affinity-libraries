<!-- Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT. -->
# Orders

Access this product through the shared authenticated client. The facade delegates to the generated
OpenAPI transport while keeping transport-class names out of application code.

## Methods

- `list()`
- `retrieve()`
- `create()`
- `update()`
- `submit()`
- `cancel()`
- `listEvents()`

## Examples

```ts
const result = await affinity.orders.list();
```

```python
result = affinity.orders.list()
```

```go
result, err := affinityClient.Orders.List(ctx)
```

```java
var result = affinity.orders().list();
```

Mutation methods additionally require an idempotency key. Consult the generated model types for the
request and response fields accepted by the current dated API contract.
