# ListWebhookEndpoints200ResponseEndpointsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  |
**enabled_events** | **List[str]** |  |
**id** | **str** |  |
**livemode** | **bool** |  |
**updated_at** | **str** |  |
**url** | **str** |  |

## Example

```python
from affinity_sdk.models.list_webhook_endpoints200_response_endpoints_inner import ListWebhookEndpoints200ResponseEndpointsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListWebhookEndpoints200ResponseEndpointsInner from a JSON string
list_webhook_endpoints200_response_endpoints_inner_instance = ListWebhookEndpoints200ResponseEndpointsInner.from_json(json)
# print the JSON string representation of the object
print(ListWebhookEndpoints200ResponseEndpointsInner.to_json())

# convert the object into a dict
list_webhook_endpoints200_response_endpoints_inner_dict = list_webhook_endpoints200_response_endpoints_inner_instance.to_dict()
# create an instance of ListWebhookEndpoints200ResponseEndpointsInner from a dict
list_webhook_endpoints200_response_endpoints_inner_from_dict = ListWebhookEndpoints200ResponseEndpointsInner.from_dict(list_webhook_endpoints200_response_endpoints_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


