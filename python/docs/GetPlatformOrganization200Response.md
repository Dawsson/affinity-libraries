# GetPlatformOrganization200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**GetPlatformOrganization200ResponseAccount**](GetPlatformOrganization200ResponseAccount.md) |  |
**membership** | [**GetPlatformOrganization200ResponseMembership**](GetPlatformOrganization200ResponseMembership.md) |  |
**user** | [**GetPlatformOrganization200ResponseUser**](GetPlatformOrganization200ResponseUser.md) |  |

## Example

```python
from affinity_sdk.models.get_platform_organization200_response import GetPlatformOrganization200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetPlatformOrganization200Response from a JSON string
get_platform_organization200_response_instance = GetPlatformOrganization200Response.from_json(json)
# print the JSON string representation of the object
print(GetPlatformOrganization200Response.to_json())

# convert the object into a dict
get_platform_organization200_response_dict = get_platform_organization200_response_instance.to_dict()
# create an instance of GetPlatformOrganization200Response from a dict
get_platform_organization200_response_from_dict = GetPlatformOrganization200Response.from_dict(get_platform_organization200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


