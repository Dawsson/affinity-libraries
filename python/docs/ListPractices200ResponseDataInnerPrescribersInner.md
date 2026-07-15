# ListPractices200ResponseDataInnerPrescribersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | **str** |  | [optional]
**license_states** | **List[str]** |  |
**name** | **str** |  |
**npi** | **str** |  |

## Example

```python
from affinity_sdk.models.list_practices200_response_data_inner_prescribers_inner import ListPractices200ResponseDataInnerPrescribersInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListPractices200ResponseDataInnerPrescribersInner from a JSON string
list_practices200_response_data_inner_prescribers_inner_instance = ListPractices200ResponseDataInnerPrescribersInner.from_json(json)
# print the JSON string representation of the object
print(ListPractices200ResponseDataInnerPrescribersInner.to_json())

# convert the object into a dict
list_practices200_response_data_inner_prescribers_inner_dict = list_practices200_response_data_inner_prescribers_inner_instance.to_dict()
# create an instance of ListPractices200ResponseDataInnerPrescribersInner from a dict
list_practices200_response_data_inner_prescribers_inner_from_dict = ListPractices200ResponseDataInnerPrescribersInner.from_dict(list_practices200_response_data_inner_prescribers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


