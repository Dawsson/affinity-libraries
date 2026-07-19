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

Mutation methods generate an idempotency key automatically. Pass one through mutation options only
when retrying the same logical request. Consult the generated model types for current fields.
