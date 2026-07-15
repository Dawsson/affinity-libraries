# ListPractices200ResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**ListPractices200ResponseDataInnerAddress**](ListPractices200ResponseDataInnerAddress.md) |  |
**contacts** | [**ListPractices200ResponseDataInnerContacts**](ListPractices200ResponseDataInnerContacts.md) |  |
**created** | **float** |  |
**external_id** | **str** |  |
**id** | **str** |  |
**legal_name** | **str** |  |
**name** | **str** |  |
**object** | **str** |  |
**prescribers** | [**List[ListPractices200ResponseDataInnerPrescribersInner]**](ListPractices200ResponseDataInnerPrescribersInner.md) |  |
**support_email** | **str** |  |
**support_phone** | **str** |  |
**timezone** | **str** |  |

## Example

```python
from affinity_sdk.models.list_practices200_response_data_inner import ListPractices200ResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListPractices200ResponseDataInner from a JSON string
list_practices200_response_data_inner_instance = ListPractices200ResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListPractices200ResponseDataInner.to_json())

# convert the object into a dict
list_practices200_response_data_inner_dict = list_practices200_response_data_inner_instance.to_dict()
# create an instance of ListPractices200ResponseDataInner from a dict
list_practices200_response_data_inner_from_dict = ListPractices200ResponseDataInner.from_dict(list_practices200_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


