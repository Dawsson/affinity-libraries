# GetPlatformOrganization200ResponseUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  |
**email_verified** | **bool** |  | [optional]
**image** | **str** |  |
**name** | **str** |  |
**two_factor_enabled** | **bool** |  | [optional]
**user_id** | **str** |  |

## Example

```python
from affinity_sdk.models.get_platform_organization200_response_user import GetPlatformOrganization200ResponseUser

# TODO update the JSON string below
json = "{}"
# create an instance of GetPlatformOrganization200ResponseUser from a JSON string
get_platform_organization200_response_user_instance = GetPlatformOrganization200ResponseUser.from_json(json)
# print the JSON string representation of the object
print(GetPlatformOrganization200ResponseUser.to_json())

# convert the object into a dict
get_platform_organization200_response_user_dict = get_platform_organization200_response_user_instance.to_dict()
# create an instance of GetPlatformOrganization200ResponseUser from a dict
get_platform_organization200_response_user_from_dict = GetPlatformOrganization200ResponseUser.from_dict(get_platform_organization200_response_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


