# UpdateWebhookEndpointResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  |
**enabled_events** | **List[str]** |  |
**id** | **str** |  |
**livemode** | **bool** |  |
**object** | **str** |  |
**status** | **str** |  |
**updated_at** | **str** |  |
**url** | **str** |  |

## Example

```python
from affinity_sdk.models.update_webhook_endpoint_response import UpdateWebhookEndpointResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateWebhookEndpointResponse from a JSON string
update_webhook_endpoint_response_instance = UpdateWebhookEndpointResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateWebhookEndpointResponse.to_json())

# convert the object into a dict
update_webhook_endpoint_response_dict = update_webhook_endpoint_response_instance.to_dict()
# create an instance of UpdateWebhookEndpointResponse from a dict
update_webhook_endpoint_response_from_dict = UpdateWebhookEndpointResponse.from_dict(update_webhook_endpoint_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


