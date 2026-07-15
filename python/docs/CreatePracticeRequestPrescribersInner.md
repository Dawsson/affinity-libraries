# CreatePracticeRequestPrescribersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | **str** |  | [optional]
**license_states** | **List[str]** |  |
**name** | **str** |  |
**npi** | **str** |  |

## Example

```python
from affinity_sdk.models.create_practice_request_prescribers_inner import CreatePracticeRequestPrescribersInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePracticeRequestPrescribersInner from a JSON string
create_practice_request_prescribers_inner_instance = CreatePracticeRequestPrescribersInner.from_json(json)
# print the JSON string representation of the object
print(CreatePracticeRequestPrescribersInner.to_json())

# convert the object into a dict
create_practice_request_prescribers_inner_dict = create_practice_request_prescribers_inner_instance.to_dict()
# create an instance of CreatePracticeRequestPrescribersInner from a dict
create_practice_request_prescribers_inner_from_dict = CreatePracticeRequestPrescribersInner.from_dict(create_practice_request_prescribers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


