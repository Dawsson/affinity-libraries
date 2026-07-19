# CreateWebhookEndpointResponse


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
**signing_secret** | **str** |  |

## Example

```python
from affinity_sdk.models.create_webhook_endpoint_response import CreateWebhookEndpointResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWebhookEndpointResponse from a JSON string
create_webhook_endpoint_response_instance = CreateWebhookEndpointResponse.from_json(json)
# print the JSON string representation of the object
print(CreateWebhookEndpointResponse.to_json())

# convert the object into a dict
create_webhook_endpoint_response_dict = create_webhook_endpoint_response_instance.to_dict()
# create an instance of CreateWebhookEndpointResponse from a dict
create_webhook_endpoint_response_from_dict = CreateWebhookEndpointResponse.from_dict(create_webhook_endpoint_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


