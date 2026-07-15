# CreateWebhookEndpoint200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | [**CreateWebhookEndpoint200ResponseEndpoint**](CreateWebhookEndpoint200ResponseEndpoint.md) |  | 
**signing_secret** | **str** |  | 

## Example

```python
from affinity_sdk.models.create_webhook_endpoint200_response import CreateWebhookEndpoint200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWebhookEndpoint200Response from a JSON string
create_webhook_endpoint200_response_instance = CreateWebhookEndpoint200Response.from_json(json)
# print the JSON string representation of the object
print(CreateWebhookEndpoint200Response.to_json())

# convert the object into a dict
create_webhook_endpoint200_response_dict = create_webhook_endpoint200_response_instance.to_dict()
# create an instance of CreateWebhookEndpoint200Response from a dict
create_webhook_endpoint200_response_from_dict = CreateWebhookEndpoint200Response.from_dict(create_webhook_endpoint200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


