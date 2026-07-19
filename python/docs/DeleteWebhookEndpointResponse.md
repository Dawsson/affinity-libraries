# DeleteWebhookEndpointResponse


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
from affinity_sdk.models.delete_webhook_endpoint_response import DeleteWebhookEndpointResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteWebhookEndpointResponse from a JSON string
delete_webhook_endpoint_response_instance = DeleteWebhookEndpointResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteWebhookEndpointResponse.to_json())

# convert the object into a dict
delete_webhook_endpoint_response_dict = delete_webhook_endpoint_response_instance.to_dict()
# create an instance of DeleteWebhookEndpointResponse from a dict
delete_webhook_endpoint_response_from_dict = DeleteWebhookEndpointResponse.from_dict(delete_webhook_endpoint_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


