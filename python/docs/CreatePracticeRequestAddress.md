# CreatePracticeRequestAddress


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
from affinity_sdk.models.create_practice_request_address import CreatePracticeRequestAddress

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePracticeRequestAddress from a JSON string
create_practice_request_address_instance = CreatePracticeRequestAddress.from_json(json)
# print the JSON string representation of the object
print(CreatePracticeRequestAddress.to_json())

# convert the object into a dict
create_practice_request_address_dict = create_practice_request_address_instance.to_dict()
# create an instance of CreatePracticeRequestAddress from a dict
create_practice_request_address_from_dict = CreatePracticeRequestAddress.from_dict(create_practice_request_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


