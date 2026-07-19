# ListPracticesResponseDataInnerAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** |  |
**country** | **str** |  | [optional]
**line1** | **str** |  |
**line2** | **str** |  | [optional]
**postal_code** | **str** |  |
**state** | **str** |  |

## Example

```python
from affinity_sdk.models.list_practices_response_data_inner_address import ListPracticesResponseDataInnerAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ListPracticesResponseDataInnerAddress from a JSON string
list_practices_response_data_inner_address_instance = ListPracticesResponseDataInnerAddress.from_json(json)
# print the JSON string representation of the object
print(ListPracticesResponseDataInnerAddress.to_json())

# convert the object into a dict
list_practices_response_data_inner_address_dict = list_practices_response_data_inner_address_instance.to_dict()
# create an instance of ListPracticesResponseDataInnerAddress from a dict
list_practices_response_data_inner_address_from_dict = ListPracticesResponseDataInnerAddress.from_dict(list_practices_response_data_inner_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


