

# GetWebhookEventResponse


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **String** |  |  |
|**eventType** | **String** |  |  |
|**id** | **String** |  |  |
|**livemode** | **Boolean** |  |  |
|**_object** | [**ObjectEnum**](#ObjectEnum) |  |  |
|**objectId** | **String** |  |  |
|**objectType** | **String** |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |
|**updatedAt** | **String** |  |  |
|**attempts** | [**List&lt;GetWebhookEventResponseAttemptsInner&gt;**](GetWebhookEventResponseAttemptsInner.md) |  |  |
|**deliveries** | [**List&lt;GetWebhookEventResponseDeliveriesInner&gt;**](GetWebhookEventResponseDeliveriesInner.md) |  |  |



## Enum: ObjectEnum

| Name | Value |
|---- | -----|
| WEBHOOK_EVENT | &quot;webhook_event&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| DELIVERED | &quot;delivered&quot; |
| FAILED | &quot;failed&quot; |
| PENDING | &quot;pending&quot; |
| SKIPPED | &quot;skipped&quot; |



