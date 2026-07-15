# CreateWebhookEndpoint200ResponseEndpoint


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
from affinity_sdk.models.create_webhook_endpoint200_response_endpoint import CreateWebhookEndpoint200ResponseEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWebhookEndpoint200ResponseEndpoint from a JSON string
create_webhook_endpoint200_response_endpoint_instance = CreateWebhookEndpoint200ResponseEndpoint.from_json(json)
# print the JSON string representation of the object
print(CreateWebhookEndpoint200ResponseEndpoint.to_json())

# convert the object into a dict
create_webhook_endpoint200_response_endpoint_dict = create_webhook_endpoint200_response_endpoint_instance.to_dict()
# create an instance of CreateWebhookEndpoint200ResponseEndpoint from a dict
create_webhook_endpoint200_response_endpoint_from_dict = CreateWebhookEndpoint200ResponseEndpoint.from_dict(create_webhook_endpoint200_response_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


