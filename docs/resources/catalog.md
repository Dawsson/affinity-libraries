<!-- Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT. -->
# Catalog

Access this product through the shared authenticated client. The facade delegates to the generated
OpenAPI transport while keeping transport-class names out of application code.

## Methods

- `list()`

## Examples

```ts
const result = await affinity.catalog.list();
```

```python
result = affinity.catalog.list()
```

```go
result, err := affinityClient.Catalog.List(ctx)
```

```java
var result = affinity.catalog().list();
```

Mutation methods additionally require an idempotency key. Consult the generated model types for the
request and response fields accepted by the current dated API contract.
