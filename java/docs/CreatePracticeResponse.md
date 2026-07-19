

# CreatePracticeResponse


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**address** | [**ListPracticesResponseDataInnerAddress**](ListPracticesResponseDataInnerAddress.md) |  |  |
|**contacts** | [**ListPracticesResponseDataInnerContacts**](ListPracticesResponseDataInnerContacts.md) |  |  |
|**createdAt** | **OffsetDateTime** |  |  |
|**externalId** | **String** |  |  |
|**id** | **String** |  |  |
|**legalName** | **String** |  |  |
|**livemode** | **Boolean** |  |  |
|**metadata** | **Map&lt;String, Object&gt;** |  |  |
|**name** | **String** |  |  |
|**_object** | [**ObjectEnum**](#ObjectEnum) |  |  |
|**prescribers** | [**List&lt;ListPracticesResponseDataInnerPrescribersInner&gt;**](ListPracticesResponseDataInnerPrescribersInner.md) |  |  |
|**productionAccess** | [**ProductionAccessEnum**](#ProductionAccessEnum) |  |  |
|**supportEmail** | **String** |  |  |
|**supportPhone** | **String** |  |  |
|**timezone** | **String** |  |  |



## Enum: ObjectEnum

| Name | Value |
|---- | -----|
| PRACTICE | &quot;practice&quot; |



## Enum: ProductionAccessEnum

| Name | Value |
|---- | -----|
| APPROVED | &quot;approved&quot; |
| NOT_APPLICABLE | &quot;not_applicable&quot; |
| PENDING | &quot;pending&quot; |



