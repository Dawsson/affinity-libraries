# PlatformsApi

All URIs are relative to *https://api.joinaffinityai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPlatformOrganization**](PlatformsApi.md#getPlatformOrganization) | **GET** /v1/platform/organization | Read platform organization |
| [**getPlatformOrganizationWithHttpInfo**](PlatformsApi.md#getPlatformOrganizationWithHttpInfo) | **GET** /v1/platform/organization | Read platform organization |



## getPlatformOrganization

> GetPlatformOrganization200Response getPlatformOrganization(orgId)

Read platform organization

Reads the authenticated platform organization and current role.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformsApi;

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

        PlatformsApi apiInstance = new PlatformsApi(defaultClient);
        String orgId = "orgId_example"; // String |
        try {
            GetPlatformOrganization200Response result = apiInstance.getPlatformOrganization(orgId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformsApi#getPlatformOrganization");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | **String**|  | [optional] |

### Return type

[**GetPlatformOrganization200Response**](GetPlatformOrganization200Response.md)


### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **409** | Conflict |  -  |
| **422** | The request could not be completed. |  -  |
| **429** | Too many requests |  -  |
| **500** | Internal server error |  -  |

## getPlatformOrganizationWithHttpInfo

> ApiResponse<GetPlatformOrganization200Response> getPlatformOrganizationWithHttpInfo(orgId)

Read platform organization

Reads the authenticated platform organization and current role.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformsApi;

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

        PlatformsApi apiInstance = new PlatformsApi(defaultClient);
        String orgId = "orgId_example"; // String |
        try {
            ApiResponse<GetPlatformOrganization200Response> response = apiInstance.getPlatformOrganizationWithHttpInfo(orgId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformsApi#getPlatformOrganization");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | **String**|  | [optional] |

### Return type

ApiResponse<[**GetPlatformOrganization200Response**](GetPlatformOrganization200Response.md)>


### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **409** | Conflict |  -  |
| **422** | The request could not be completed. |  -  |
| **429** | Too many requests |  -  |
| **500** | Internal server error |  -  |

