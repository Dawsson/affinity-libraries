# RotateWebhookEndpointSecretResponse


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
from affinity_sdk.models.rotate_webhook_endpoint_secret_response import RotateWebhookEndpointSecretResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RotateWebhookEndpointSecretResponse from a JSON string
rotate_webhook_endpoint_secret_response_instance = RotateWebhookEndpointSecretResponse.from_json(json)
# print the JSON string representation of the object
print(RotateWebhookEndpointSecretResponse.to_json())

# convert the object into a dict
rotate_webhook_endpoint_secret_response_dict = rotate_webhook_endpoint_secret_response_instance.to_dict()
# create an instance of RotateWebhookEndpointSecretResponse from a dict
rotate_webhook_endpoint_secret_response_from_dict = RotateWebhookEndpointSecretResponse.from_dict(rotate_webhook_endpoint_secret_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


