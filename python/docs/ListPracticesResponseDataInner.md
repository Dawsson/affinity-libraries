# ListPracticesResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**ListPracticesResponseDataInnerAddress**](ListPracticesResponseDataInnerAddress.md) |  |
**contacts** | [**ListPracticesResponseDataInnerContacts**](ListPracticesResponseDataInnerContacts.md) |  |
**created_at** | **str** |  |
**external_id** | **str** |  |
**legal_name** | **str** |  |
**livemode** | **bool** |  |
**name** | **str** |  |
**object** | **str** |  |
**prescribers** | [**List[ListPracticesResponseDataInnerPrescribersInner]**](ListPracticesResponseDataInnerPrescribersInner.md) |  |
**support_email** | **str** |  |
**support_phone** | **str** |  |
**timezone** | **str** |  |

## Example

```python
from affinity_sdk.models.list_practices_response_data_inner import ListPracticesResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListPracticesResponseDataInner from a JSON string
list_practices_response_data_inner_instance = ListPracticesResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(ListPracticesResponseDataInner.to_json())

# convert the object into a dict
list_practices_response_data_inner_dict = list_practices_response_data_inner_instance.to_dict()
# create an instance of ListPracticesResponseDataInner from a dict
list_practices_response_data_inner_from_dict = ListPracticesResponseDataInner.from_dict(list_practices_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


