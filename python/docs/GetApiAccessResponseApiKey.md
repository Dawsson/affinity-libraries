# GetApiAccessResponseApiKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_prefix** | **str** |  |
**object** | **str** |  |

## Example

```python
from affinity_sdk.models.get_api_access_response_api_key import GetApiAccessResponseApiKey

# TODO update the JSON string below
json = "{}"
# create an instance of GetApiAccessResponseApiKey from a JSON string
get_api_access_response_api_key_instance = GetApiAccessResponseApiKey.from_json(json)
# print the JSON string representation of the object
print(GetApiAccessResponseApiKey.to_json())

# convert the object into a dict
get_api_access_response_api_key_dict = get_api_access_response_api_key_instance.to_dict()
# create an instance of GetApiAccessResponseApiKey from a dict
get_api_access_response_api_key_from_dict = GetApiAccessResponseApiKey.from_dict(get_api_access_response_api_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


