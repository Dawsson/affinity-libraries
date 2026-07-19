# GetWebhookEventResponseAttemptsInner


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
from affinity_sdk.models.get_webhook_event_response_attempts_inner import GetWebhookEventResponseAttemptsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetWebhookEventResponseAttemptsInner from a JSON string
get_webhook_event_response_attempts_inner_instance = GetWebhookEventResponseAttemptsInner.from_json(json)
# print the JSON string representation of the object
print(GetWebhookEventResponseAttemptsInner.to_json())

# convert the object into a dict
get_webhook_event_response_attempts_inner_dict = get_webhook_event_response_attempts_inner_instance.to_dict()
# create an instance of GetWebhookEventResponseAttemptsInner from a dict
get_webhook_event_response_attempts_inner_from_dict = GetWebhookEventResponseAttemptsInner.from_dict(get_webhook_event_response_attempts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


