
# ListOrdersResponseDataInner


## Properties

Name | Type
------------ | -------------
`cancellationReason` | string
`carrier` | string
`createdAt` | string
`currency` | string
`deliveredAt` | string
`directions` | string
`dosageForm` | string
`externalOrderId` | string
`externalSubmissionAttempted` | boolean
`externalSubmissionBlockedReason` | string
`livemode` | boolean
`medicationName` | string
`object` | string
`patientExternalId` | string
`patientName` | string
`patientState` | string
`prescriberName` | string
`prescriberNpi` | string
`quantity` | number
`quoteCents` | number
`routing` | [ListOrdersResponseDataInnerRouting](ListOrdersResponseDataInnerRouting.md)
`shippedAt` | string
`strength` | string
`trackingNumber` | string
`updatedAt` | string

## Example

```typescript
import type { ListOrdersResponseDataInner } from '@affinity/sdk'

// TODO: Update the object below with actual values
const example = {
  "cancellationReason": null,
  "carrier": null,
  "createdAt": null,
  "currency": null,
  "deliveredAt": null,
  "directions": null,
  "dosageForm": null,
  "externalOrderId": null,
  "externalSubmissionAttempted": null,
  "externalSubmissionBlockedReason": null,
  "livemode": null,
  "medicationName": null,
  "object": null,
  "patientExternalId": null,
  "patientName": null,
  "patientState": null,
  "prescriberName": null,
  "prescriberNpi": null,
  "quantity": null,
  "quoteCents": null,
  "routing": null,
  "shippedAt": null,
  "strength": null,
  "trackingNumber": null,
  "updatedAt": null,
} satisfies ListOrdersResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListOrdersResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


