

# SubmitOrderResponse


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**cancellationReason** | **String** |  |  |
|**carrier** | **String** |  |  |
|**catalogItemId** | **String** |  |  |
|**practiceId** | **String** |  |  |
|**compounderId** | **String** |  |  |
|**createdAt** | **String** |  |  |
|**currency** | **String** |  |  |
|**directions** | **String** |  |  |
|**dosageForm** | **String** |  |  |
|**externalOrderId** | **String** |  |  |
|**externalSubmissionAttempted** | **Boolean** |  |  |
|**externalSubmissionBlockedReason** | **String** |  |  |
|**id** | **String** |  |  |
|**livemode** | **Boolean** |  |  |
|**medicationName** | **String** |  |  |
|**patientExternalId** | **String** |  |  |
|**patientName** | **String** |  |  |
|**patientState** | **String** |  |  |
|**prescriberName** | **String** |  |  |
|**prescriberNpi** | **String** |  |  |
|**quantity** | **BigDecimal** |  |  |
|**quoteCents** | **BigDecimal** |  |  |
|**_object** | [**ObjectEnum**](#ObjectEnum) |  |  |
|**replacesOrderId** | **String** |  |  |
|**routing** | [**ListOrdersResponseDataInnerRouting**](ListOrdersResponseDataInnerRouting.md) |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**strength** | **String** |  |  |
|**trackingNumber** | **String** |  |  |
|**shippedAt** | **String** |  |  |
|**deliveredAt** | **String** |  |  |
|**updatedAt** | **String** |  |  |



## Enum: ObjectEnum

| Name | Value |
|---- | -----|
| ORDER | &quot;order&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| BLOCKED | &quot;blocked&quot; |
| CANCELLED | &quot;cancelled&quot; |
| DELIVERED | &quot;delivered&quot; |
| DRAFT | &quot;draft&quot; |
| PROCESSING | &quot;processing&quot; |
| SHIPPED | &quot;shipped&quot; |
| SUBMITTED | &quot;submitted&quot; |



