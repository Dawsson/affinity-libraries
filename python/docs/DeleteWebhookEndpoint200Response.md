# DeleteWebhookEndpoint200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | [**CreateWebhookEndpoint200ResponseEndpoint**](CreateWebhookEndpoint200ResponseEndpoint.md) |  | 

## Example

```python
from affinity_sdk.models.delete_webhook_endpoint200_response import DeleteWebhookEndpoint200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteWebhookEndpoint200Response from a JSON string
delete_webhook_endpoint200_response_instance = DeleteWebhookEndpoint200Response.from_json(json)
# print the JSON string representation of the object
print(DeleteWebhookEndpoint200Response.to_json())

# convert the object into a dict
delete_webhook_endpoint200_response_dict = delete_webhook_endpoint200_response_instance.to_dict()
# create an instance of DeleteWebhookEndpoint200Response from a dict
delete_webhook_endpoint200_response_from_dict = DeleteWebhookEndpoint200Response.from_dict(delete_webhook_endpoint200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


