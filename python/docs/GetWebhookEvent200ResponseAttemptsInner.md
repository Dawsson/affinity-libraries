# GetWebhookEvent200ResponseAttemptsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempted_at** | **str** |  |
**error_message** | **str** |  |
**id** | **str** |  |
**response_body** | **str** |  |
**response_status** | **float** |  |
**success** | **bool** |  |

## Example

```python
from affinity_sdk.models.get_webhook_event200_response_attempts_inner import GetWebhookEvent200ResponseAttemptsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetWebhookEvent200ResponseAttemptsInner from a JSON string
get_webhook_event200_response_attempts_inner_instance = GetWebhookEvent200ResponseAttemptsInner.from_json(json)
# print the JSON string representation of the object
print(GetWebhookEvent200ResponseAttemptsInner.to_json())

# convert the object into a dict
get_webhook_event200_response_attempts_inner_dict = get_webhook_event200_response_attempts_inner_instance.to_dict()
# create an instance of GetWebhookEvent200ResponseAttemptsInner from a dict
get_webhook_event200_response_attempts_inner_from_dict = GetWebhookEvent200ResponseAttemptsInner.from_dict(get_webhook_event200_response_attempts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


