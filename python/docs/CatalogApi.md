# affinity_sdk.CatalogApi

All URIs are relative to *https://api.joinaffinityai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_catalog_items**](CatalogApi.md#list_catalog_items) | **GET** /v1/catalog/items | List catalog items


# **list_catalog_items**
> ListCatalogItems200Response list_catalog_items(query=query)

List catalog items

Searches the Affinity catalog across all connected compounders and routing restrictions.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.list_catalog_items200_response import ListCatalogItems200Response
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
    api_instance = affinity_sdk.CatalogApi(api_client)
    query = 'query_example' # str |  (optional)

    try:
        # List catalog items
        api_response = api_instance.list_catalog_items(query=query)
        print("The response of CatalogApi->list_catalog_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogApi->list_catalog_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**|  | [optional]

### Return type

[**ListCatalogItems200Response**](ListCatalogItems200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**422** | The request could not be completed. |  -  |
**429** | Too many requests |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

