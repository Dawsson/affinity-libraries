# GetWebhookEventResponseDeliveriesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_count** | **float** |  |
**endpoint_id** | **str** |  |
**id** | **str** |  |
**last_error** | **str** |  |
**status** | **str** |  |

## Example

```python
from affinity_sdk.models.get_webhook_event_response_deliveries_inner import GetWebhookEventResponseDeliveriesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetWebhookEventResponseDeliveriesInner from a JSON string
get_webhook_event_response_deliveries_inner_instance = GetWebhookEventResponseDeliveriesInner.from_json(json)
# print the JSON string representation of the object
print(GetWebhookEventResponseDeliveriesInner.to_json())

# convert the object into a dict
get_webhook_event_response_deliveries_inner_dict = get_webhook_event_response_deliveries_inner_instance.to_dict()
# create an instance of GetWebhookEventResponseDeliveriesInner from a dict
get_webhook_event_response_deliveries_inner_from_dict = GetWebhookEventResponseDeliveriesInner.from_dict(get_webhook_event_response_deliveries_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


