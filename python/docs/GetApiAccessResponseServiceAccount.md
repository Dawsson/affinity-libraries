# GetApiAccessResponseServiceAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **str** |  |
**subject_id** | **str** |  |
**subject_type** | **str** |  |

## Example

```python
from affinity_sdk.models.get_api_access_response_service_account import GetApiAccessResponseServiceAccount

# TODO update the JSON string below
json = "{}"
# create an instance of GetApiAccessResponseServiceAccount from a JSON string
get_api_access_response_service_account_instance = GetApiAccessResponseServiceAccount.from_json(json)
# print the JSON string representation of the object
print(GetApiAccessResponseServiceAccount.to_json())

# convert the object into a dict
get_api_access_response_service_account_dict = get_api_access_response_service_account_instance.to_dict()
# create an instance of GetApiAccessResponseServiceAccount from a dict
get_api_access_response_service_account_from_dict = GetApiAccessResponseServiceAccount.from_dict(get_api_access_response_service_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


