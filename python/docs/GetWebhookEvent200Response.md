# GetWebhookEvent200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempts** | [**List[GetWebhookEvent200ResponseAttemptsInner]**](GetWebhookEvent200ResponseAttemptsInner.md) |  | 
**deliveries** | [**List[GetWebhookEvent200ResponseDeliveriesInner]**](GetWebhookEvent200ResponseDeliveriesInner.md) |  | 
**event** | [**GetWebhookEvent200ResponseEvent**](GetWebhookEvent200ResponseEvent.md) |  | 

## Example

```python
from affinity_sdk.models.get_webhook_event200_response import GetWebhookEvent200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetWebhookEvent200Response from a JSON string
get_webhook_event200_response_instance = GetWebhookEvent200Response.from_json(json)
# print the JSON string representation of the object
print(GetWebhookEvent200Response.to_json())

# convert the object into a dict
get_webhook_event200_response_dict = get_webhook_event200_response_instance.to_dict()
# create an instance of GetWebhookEvent200Response from a dict
get_webhook_event200_response_from_dict = GetWebhookEvent200Response.from_dict(get_webhook_event200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


