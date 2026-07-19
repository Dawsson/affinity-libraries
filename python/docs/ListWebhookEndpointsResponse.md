# ListWebhookEndpointsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ListWebhookEndpointsResponseDataInner]**](ListWebhookEndpointsResponseDataInner.md) |  |
**has_more** | **bool** |  |
**object** | **str** |  |
**url** | **str** |  |

## Example

```python
from affinity_sdk.models.list_webhook_endpoints_response import ListWebhookEndpointsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWebhookEndpointsResponse from a JSON string
list_webhook_endpoints_response_instance = ListWebhookEndpointsResponse.from_json(json)
# print the JSON string representation of the object
print(ListWebhookEndpointsResponse.to_json())

# convert the object into a dict
list_webhook_endpoints_response_dict = list_webhook_endpoints_response_instance.to_dict()
# create an instance of ListWebhookEndpointsResponse from a dict
list_webhook_endpoints_response_from_dict = ListWebhookEndpointsResponse.from_dict(list_webhook_endpoints_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


