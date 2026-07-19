
# GetPracticeResponse


## Properties

Name | Type
------------ | -------------
`address` | [ListPracticesResponseDataInnerAddress](ListPracticesResponseDataInnerAddress.md)
`contacts` | [ListPracticesResponseDataInnerContacts](ListPracticesResponseDataInnerContacts.md)
`createdAt` | string
`externalId` | string
`legalName` | string
`livemode` | boolean
`name` | string
`object` | string
`prescribers` | [Array&lt;ListPracticesResponseDataInnerPrescribersInner&gt;](ListPracticesResponseDataInnerPrescribersInner.md)
`supportEmail` | string
`supportPhone` | string
`timezone` | string

## Example

```typescript
import type { GetPracticeResponse } from '@affinity/sdk'

// TODO: Update the object below with actual values
const example = {
  "address": null,
  "contacts": null,
  "createdAt": null,
  "externalId": null,
  "legalName": null,
  "livemode": null,
  "name": null,
  "object": null,
  "prescribers": null,
  "supportEmail": null,
  "supportPhone": null,
  "timezone": null,
} satisfies GetPracticeResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetPracticeResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


