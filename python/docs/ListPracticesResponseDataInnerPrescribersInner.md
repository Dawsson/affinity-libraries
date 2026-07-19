# ListPracticesResponseDataInnerPrescribersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | **str** |  | [optional]
**license_states** | **List[str]** |  |
**name** | **str** |  |
**npi** | **str** |  |

## Example

```python
from affinity_sdk.models.list_practices_response_data_inner_prescribers_inner import ListPracticesResponseDataInnerPrescribersInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListPracticesResponseDataInnerPrescribersInner from a JSON string
list_practices_response_data_inner_prescribers_inner_instance = ListPracticesResponseDataInnerPrescribersInner.from_json(json)
# print the JSON string representation of the object
print(ListPracticesResponseDataInnerPrescribersInner.to_json())

# convert the object into a dict
list_practices_response_data_inner_prescribers_inner_dict = list_practices_response_data_inner_prescribers_inner_instance.to_dict()
# create an instance of ListPracticesResponseDataInnerPrescribersInner from a dict
list_practices_response_data_inner_prescribers_inner_from_dict = ListPracticesResponseDataInnerPrescribersInner.from_dict(list_practices_response_data_inner_prescribers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


