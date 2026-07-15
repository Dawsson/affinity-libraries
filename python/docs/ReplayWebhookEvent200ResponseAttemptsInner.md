# ReplayWebhookEvent200ResponseAttemptsInner


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
from affinity_sdk.models.replay_webhook_event200_response_attempts_inner import ReplayWebhookEvent200ResponseAttemptsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReplayWebhookEvent200ResponseAttemptsInner from a JSON string
replay_webhook_event200_response_attempts_inner_instance = ReplayWebhookEvent200ResponseAttemptsInner.from_json(json)
# print the JSON string representation of the object
print(ReplayWebhookEvent200ResponseAttemptsInner.to_json())

# convert the object into a dict
replay_webhook_event200_response_attempts_inner_dict = replay_webhook_event200_response_attempts_inner_instance.to_dict()
# create an instance of ReplayWebhookEvent200ResponseAttemptsInner from a dict
replay_webhook_event200_response_attempts_inner_from_dict = ReplayWebhookEvent200ResponseAttemptsInner.from_dict(replay_webhook_event200_response_attempts_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


