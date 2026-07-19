
# DeleteWebhookEndpointResponse


## Properties

Name | Type
------------ | -------------
`createdAt` | string
`enabledEvents` | Array&lt;string&gt;
`livemode` | boolean
`object` | string
`updatedAt` | string
`url` | string

## Example

```typescript
import type { DeleteWebhookEndpointResponse } from '@affinity/sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "enabledEvents": null,
  "livemode": null,
  "object": null,
  "updatedAt": null,
  "url": null,
} satisfies DeleteWebhookEndpointResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeleteWebhookEndpointResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


