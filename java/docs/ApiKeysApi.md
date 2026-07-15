# ApiKeysApi

All URIs are relative to *https://api.joinaffinityai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getApiAccess**](ApiKeysApi.md#getApiAccess) | **GET** /v1/auth/access | Read API key access |
| [**getApiAccessWithHttpInfo**](ApiKeysApi.md#getApiAccessWithHttpInfo) | **GET** /v1/auth/access | Read API key access |



## getApiAccess

> GetApiAccess200Response getApiAccess()

Read API key access

Returns the authenticated API key subject, mode, and scopes.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.ApiKeysApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.joinaffinityai.com");
        
        // Configure HTTP bearer authorization: bearerAuth
        HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
        bearerAuth.setBearerToken("BEARER TOKEN");

        // Configure API key authorization: affinityApiKey
        ApiKeyAuth affinityApiKey = (ApiKeyAuth) defaultClient.getAuthentication("affinityApiKey");
        affinityApiKey.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //affinityApiKey.setApiKeyPrefix("Token");

        ApiKeysApi apiInstance = new ApiKeysApi(defaultClient);
        try {
            GetApiAccess200Response result = apiInstance.getApiAccess();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ApiKeysApi#getApiAccess");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetApiAccess200Response**](GetApiAccess200Response.md)


### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | The request could not be completed. |  -  |
| **401** | The request could not be completed. |  -  |
| **403** | The request could not be completed. |  -  |
| **404** | The request could not be completed. |  -  |
| **409** | The request could not be completed. |  -  |
| **422** | The request could not be completed. |  -  |
| **429** | The request could not be completed. |  -  |

## getApiAccessWithHttpInfo

> ApiResponse<GetApiAccess200Response> getApiAccessWithHttpInfo()

Read API key access

Returns the authenticated API key subject, mode, and scopes.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.ApiKeysApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.joinaffinityai.com");
        
        // Configure HTTP bearer authorization: bearerAuth
        HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
        bearerAuth.setBearerToken("BEARER TOKEN");

        // Configure API key authorization: affinityApiKey
        ApiKeyAuth affinityApiKey = (ApiKeyAuth) defaultClient.getAuthentication("affinityApiKey");
        affinityApiKey.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //affinityApiKey.setApiKeyPrefix("Token");

        ApiKeysApi apiInstance = new ApiKeysApi(defaultClient);
        try {
            ApiResponse<GetApiAccess200Response> response = apiInstance.getApiAccessWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ApiKeysApi#getApiAccess");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**GetApiAccess200Response**](GetApiAccess200Response.md)>


### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | The request could not be completed. |  -  |
| **401** | The request could not be completed. |  -  |
| **403** | The request could not be completed. |  -  |
| **404** | The request could not be completed. |  -  |
| **409** | The request could not be completed. |  -  |
| **422** | The request could not be completed. |  -  |
| **429** | The request could not be completed. |  -  |

