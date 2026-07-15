# affinity_sdk.PlatformsApi

All URIs are relative to *https://api.joinaffinityai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_platform_organization**](PlatformsApi.md#get_platform_organization) | **GET** /v1/platform/organization | Read platform organization


# **get_platform_organization**
> GetPlatformOrganization200Response get_platform_organization(org_id=org_id)

Read platform organization

Reads the authenticated platform organization and current role.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.get_platform_organization200_response import GetPlatformOrganization200Response
from affinity_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.joinaffinityai.com
# See configuration.py for a list of all supported configuration parameters.
configuration = affinity_sdk.Configuration(
    host = "https://api.joinaffinityai.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = affinity_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: affinityApiKey
configuration.api_key['affinityApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['affinityApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with affinity_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = affinity_sdk.PlatformsApi(api_client)
    org_id = 'org_id_example' # str |  (optional)

    try:
        # Read platform organization
        api_response = api_instance.get_platform_organization(org_id=org_id)
        print("The response of PlatformsApi->get_platform_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformsApi->get_platform_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**|  | [optional] 

### Return type

[**GetPlatformOrganization200Response**](GetPlatformOrganization200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | The request could not be completed. |  -  |
**401** | The request could not be completed. |  -  |
**403** | The request could not be completed. |  -  |
**404** | The request could not be completed. |  -  |
**409** | The request could not be completed. |  -  |
**422** | The request could not be completed. |  -  |
**429** | The request could not be completed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

