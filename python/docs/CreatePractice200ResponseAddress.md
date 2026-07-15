# CreatePractice200ResponseAddress


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
from affinity_sdk.models.create_practice200_response_address import CreatePractice200ResponseAddress

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePractice200ResponseAddress from a JSON string
create_practice200_response_address_instance = CreatePractice200ResponseAddress.from_json(json)
# print the JSON string representation of the object
print(CreatePractice200ResponseAddress.to_json())

# convert the object into a dict
create_practice200_response_address_dict = create_practice200_response_address_instance.to_dict()
# create an instance of CreatePractice200ResponseAddress from a dict
create_practice200_response_address_from_dict = CreatePractice200ResponseAddress.from_dict(create_practice200_response_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


