# ListPractices200ResponseDataInnerAddress


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
from affinity_sdk.models.list_practices200_response_data_inner_address import ListPractices200ResponseDataInnerAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ListPractices200ResponseDataInnerAddress from a JSON string
list_practices200_response_data_inner_address_instance = ListPractices200ResponseDataInnerAddress.from_json(json)
# print the JSON string representation of the object
print(ListPractices200ResponseDataInnerAddress.to_json())

# convert the object into a dict
list_practices200_response_data_inner_address_dict = list_practices200_response_data_inner_address_instance.to_dict()
# create an instance of ListPractices200ResponseDataInnerAddress from a dict
list_practices200_response_data_inner_address_from_dict = ListPractices200ResponseDataInnerAddress.from_dict(list_practices200_response_data_inner_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


