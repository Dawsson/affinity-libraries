# ListWebhookEndpointsResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  |
**enabled_events** | **List[str]** |  |
**livemode** | **bool** |  |
**object** | **str** |  |
**updated_at** | **str** |  |
**url** | **str** |  |

## Example

```python
from affinity_sdk.models.list_webhook_endpoints_response_data_inner import ListWebhookEndpointsResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListWebhookEndpointsResponseDataInner from a JSON string
list_webhook_endpoints_response_data_inner_instance = ListWebhookEndpointsResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListWebhookEndpointsResponseDataInner.to_json())

# convert the object into a dict
list_webhook_endpoints_response_data_inner_dict = list_webhook_endpoints_response_data_inner_instance.to_dict()
# create an instance of ListWebhookEndpointsResponseDataInner from a dict
list_webhook_endpoints_response_data_inner_from_dict = ListWebhookEndpointsResponseDataInner.from_dict(list_webhook_endpoints_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


