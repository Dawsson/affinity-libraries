# GetApiAccess200ResponseApiKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  |
**key_prefix** | **str** |  |
**object** | **str** |  |

## Example

```python
from affinity_sdk.models.get_api_access200_response_api_key import GetApiAccess200ResponseApiKey

# TODO update the JSON string below
json = "{}"
# create an instance of GetApiAccess200ResponseApiKey from a JSON string
get_api_access200_response_api_key_instance = GetApiAccess200ResponseApiKey.from_json(json)
# print the JSON string representation of the object
print(GetApiAccess200ResponseApiKey.to_json())

# convert the object into a dict
get_api_access200_response_api_key_dict = get_api_access200_response_api_key_instance.to_dict()
# create an instance of GetApiAccess200ResponseApiKey from a dict
get_api_access200_response_api_key_from_dict = GetApiAccess200ResponseApiKey.from_dict(get_api_access200_response_api_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


