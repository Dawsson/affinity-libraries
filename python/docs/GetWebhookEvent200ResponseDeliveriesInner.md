# GetWebhookEvent200ResponseDeliveriesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_count** | **float** |  |
**endpoint_id** | **str** |  |
**id** | **str** |  |
**last_error** | **str** |  |

## Example

```python
from affinity_sdk.models.get_webhook_event200_response_deliveries_inner import GetWebhookEvent200ResponseDeliveriesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetWebhookEvent200ResponseDeliveriesInner from a JSON string
get_webhook_event200_response_deliveries_inner_instance = GetWebhookEvent200ResponseDeliveriesInner.from_json(json)
# print the JSON string representation of the object
print(GetWebhookEvent200ResponseDeliveriesInner.to_json())

# convert the object into a dict
get_webhook_event200_response_deliveries_inner_dict = get_webhook_event200_response_deliveries_inner_instance.to_dict()
# create an instance of GetWebhookEvent200ResponseDeliveriesInner from a dict
get_webhook_event200_response_deliveries_inner_from_dict = GetWebhookEvent200ResponseDeliveriesInner.from_dict(get_webhook_event200_response_deliveries_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


