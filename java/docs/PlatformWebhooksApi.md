# PlatformWebhooksApi

All URIs are relative to *https://api.joinaffinityai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWebhookEndpoint**](PlatformWebhooksApi.md#createWebhookEndpoint) | **POST** /v1/webhook-endpoints | Create webhook endpoint |
| [**createWebhookEndpointWithHttpInfo**](PlatformWebhooksApi.md#createWebhookEndpointWithHttpInfo) | **POST** /v1/webhook-endpoints | Create webhook endpoint |
| [**deleteWebhookEndpoint**](PlatformWebhooksApi.md#deleteWebhookEndpoint) | **DELETE** /v1/webhook-endpoints/{endpointId} | Disable webhook endpoint |
| [**deleteWebhookEndpointWithHttpInfo**](PlatformWebhooksApi.md#deleteWebhookEndpointWithHttpInfo) | **DELETE** /v1/webhook-endpoints/{endpointId} | Disable webhook endpoint |
| [**getWebhookEvent**](PlatformWebhooksApi.md#getWebhookEvent) | **GET** /v1/webhook-events/{eventId} | Read webhook event attempts |
| [**getWebhookEventWithHttpInfo**](PlatformWebhooksApi.md#getWebhookEventWithHttpInfo) | **GET** /v1/webhook-events/{eventId} | Read webhook event attempts |
| [**listWebhookEndpoints**](PlatformWebhooksApi.md#listWebhookEndpoints) | **GET** /v1/webhook-endpoints | List webhook endpoints |
| [**listWebhookEndpointsWithHttpInfo**](PlatformWebhooksApi.md#listWebhookEndpointsWithHttpInfo) | **GET** /v1/webhook-endpoints | List webhook endpoints |
| [**listWebhookEvents**](PlatformWebhooksApi.md#listWebhookEvents) | **GET** /v1/webhook-events | List webhook events |
| [**listWebhookEventsWithHttpInfo**](PlatformWebhooksApi.md#listWebhookEventsWithHttpInfo) | **GET** /v1/webhook-events | List webhook events |
| [**replayWebhookEvent**](PlatformWebhooksApi.md#replayWebhookEvent) | **POST** /v1/webhook-events/{eventId}/replay | Replay webhook event |
| [**replayWebhookEventWithHttpInfo**](PlatformWebhooksApi.md#replayWebhookEventWithHttpInfo) | **POST** /v1/webhook-events/{eventId}/replay | Replay webhook event |
| [**rotateWebhookEndpointSecret**](PlatformWebhooksApi.md#rotateWebhookEndpointSecret) | **POST** /v1/webhook-endpoints/{endpointId}/rotate-secret | Rotate webhook signing secret |
| [**rotateWebhookEndpointSecretWithHttpInfo**](PlatformWebhooksApi.md#rotateWebhookEndpointSecretWithHttpInfo) | **POST** /v1/webhook-endpoints/{endpointId}/rotate-secret | Rotate webhook signing secret |
| [**updateWebhookEndpoint**](PlatformWebhooksApi.md#updateWebhookEndpoint) | **PATCH** /v1/webhook-endpoints/{endpointId} | Update webhook endpoint |
| [**updateWebhookEndpointWithHttpInfo**](PlatformWebhooksApi.md#updateWebhookEndpointWithHttpInfo) | **PATCH** /v1/webhook-endpoints/{endpointId} | Update webhook endpoint |



## createWebhookEndpoint

> CreateWebhookEndpoint200Response createWebhookEndpoint(idempotencyKey, createWebhookEndpointRequest)

Create webhook endpoint

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        String idempotencyKey = "idempotencyKey_example"; // String | Unique operation key required for every mutation.
        CreateWebhookEndpointRequest createWebhookEndpointRequest = new CreateWebhookEndpointRequest(); // CreateWebhookEndpointRequest |
        try {
            CreateWebhookEndpoint200Response result = apiInstance.createWebhookEndpoint(idempotencyKey, createWebhookEndpointRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#createWebhookEndpoint");
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
| **idempotencyKey** | **String**| Unique operation key required for every mutation. | |
| **createWebhookEndpointRequest** | [**CreateWebhookEndpointRequest**](CreateWebhookEndpointRequest.md)|  | |

### Return type

[**CreateWebhookEndpoint200Response**](CreateWebhookEndpoint200Response.md)


### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
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

## createWebhookEndpointWithHttpInfo

> ApiResponse<CreateWebhookEndpoint200Response> createWebhookEndpointWithHttpInfo(idempotencyKey, createWebhookEndpointRequest)

Create webhook endpoint

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        String idempotencyKey = "idempotencyKey_example"; // String | Unique operation key required for every mutation.
        CreateWebhookEndpointRequest createWebhookEndpointRequest = new CreateWebhookEndpointRequest(); // CreateWebhookEndpointRequest |
        try {
            ApiResponse<CreateWebhookEndpoint200Response> response = apiInstance.createWebhookEndpointWithHttpInfo(idempotencyKey, createWebhookEndpointRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#createWebhookEndpoint");
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
| **idempotencyKey** | **String**| Unique operation key required for every mutation. | |
| **createWebhookEndpointRequest** | [**CreateWebhookEndpointRequest**](CreateWebhookEndpointRequest.md)|  | |

### Return type

ApiResponse<[**CreateWebhookEndpoint200Response**](CreateWebhookEndpoint200Response.md)>


### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
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


## deleteWebhookEndpoint

> DeleteWebhookEndpoint200Response deleteWebhookEndpoint(endpointId, idempotencyKey)

Disable webhook endpoint

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        String endpointId = "endpointId_example"; // String |
        String idempotencyKey = "idempotencyKey_example"; // String | Unique operation key required for every mutation.
        try {
            DeleteWebhookEndpoint200Response result = apiInstance.deleteWebhookEndpoint(endpointId, idempotencyKey);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#deleteWebhookEndpoint");
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
| **endpointId** | **String**|  | |
| **idempotencyKey** | **String**| Unique operation key required for every mutation. | |

### Return type

[**DeleteWebhookEndpoint200Response**](DeleteWebhookEndpoint200Response.md)


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

## deleteWebhookEndpointWithHttpInfo

> ApiResponse<DeleteWebhookEndpoint200Response> deleteWebhookEndpointWithHttpInfo(endpointId, idempotencyKey)

Disable webhook endpoint

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        String endpointId = "endpointId_example"; // String |
        String idempotencyKey = "idempotencyKey_example"; // String | Unique operation key required for every mutation.
        try {
            ApiResponse<DeleteWebhookEndpoint200Response> response = apiInstance.deleteWebhookEndpointWithHttpInfo(endpointId, idempotencyKey);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#deleteWebhookEndpoint");
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
| **endpointId** | **String**|  | |
| **idempotencyKey** | **String**| Unique operation key required for every mutation. | |

### Return type

ApiResponse<[**DeleteWebhookEndpoint200Response**](DeleteWebhookEndpoint200Response.md)>


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


## getWebhookEvent

> GetWebhookEvent200Response getWebhookEvent(eventId)

Read webhook event attempts

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        String eventId = "eventId_example"; // String |
        try {
            GetWebhookEvent200Response result = apiInstance.getWebhookEvent(eventId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#getWebhookEvent");
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
| **eventId** | **String**|  | |

### Return type

[**GetWebhookEvent200Response**](GetWebhookEvent200Response.md)


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

## getWebhookEventWithHttpInfo

> ApiResponse<GetWebhookEvent200Response> getWebhookEventWithHttpInfo(eventId)

Read webhook event attempts

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        String eventId = "eventId_example"; // String |
        try {
            ApiResponse<GetWebhookEvent200Response> response = apiInstance.getWebhookEventWithHttpInfo(eventId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#getWebhookEvent");
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
| **eventId** | **String**|  | |

### Return type

ApiResponse<[**GetWebhookEvent200Response**](GetWebhookEvent200Response.md)>


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


## listWebhookEndpoints

> ListWebhookEndpoints200Response listWebhookEndpoints()

List webhook endpoints

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        try {
            ListWebhookEndpoints200Response result = apiInstance.listWebhookEndpoints();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#listWebhookEndpoints");
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

[**ListWebhookEndpoints200Response**](ListWebhookEndpoints200Response.md)


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

## listWebhookEndpointsWithHttpInfo

> ApiResponse<ListWebhookEndpoints200Response> listWebhookEndpointsWithHttpInfo()

List webhook endpoints

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        try {
            ApiResponse<ListWebhookEndpoints200Response> response = apiInstance.listWebhookEndpointsWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#listWebhookEndpoints");
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

ApiResponse<[**ListWebhookEndpoints200Response**](ListWebhookEndpoints200Response.md)>


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


## listWebhookEvents

> ListWebhookEvents200Response listWebhookEvents()

List webhook events

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        try {
            ListWebhookEvents200Response result = apiInstance.listWebhookEvents();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#listWebhookEvents");
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

[**ListWebhookEvents200Response**](ListWebhookEvents200Response.md)


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

## listWebhookEventsWithHttpInfo

> ApiResponse<ListWebhookEvents200Response> listWebhookEventsWithHttpInfo()

List webhook events

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        try {
            ApiResponse<ListWebhookEvents200Response> response = apiInstance.listWebhookEventsWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#listWebhookEvents");
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

ApiResponse<[**ListWebhookEvents200Response**](ListWebhookEvents200Response.md)>


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


## replayWebhookEvent

> ReplayWebhookEvent200Response replayWebhookEvent(eventId, idempotencyKey)

Replay webhook event

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        String eventId = "eventId_example"; // String |
        String idempotencyKey = "idempotencyKey_example"; // String | Unique operation key required for every mutation.
        try {
            ReplayWebhookEvent200Response result = apiInstance.replayWebhookEvent(eventId, idempotencyKey);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#replayWebhookEvent");
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
| **eventId** | **String**|  | |
| **idempotencyKey** | **String**| Unique operation key required for every mutation. | |

### Return type

[**ReplayWebhookEvent200Response**](ReplayWebhookEvent200Response.md)


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

## replayWebhookEventWithHttpInfo

> ApiResponse<ReplayWebhookEvent200Response> replayWebhookEventWithHttpInfo(eventId, idempotencyKey)

Replay webhook event

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        String eventId = "eventId_example"; // String |
        String idempotencyKey = "idempotencyKey_example"; // String | Unique operation key required for every mutation.
        try {
            ApiResponse<ReplayWebhookEvent200Response> response = apiInstance.replayWebhookEventWithHttpInfo(eventId, idempotencyKey);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#replayWebhookEvent");
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
| **eventId** | **String**|  | |
| **idempotencyKey** | **String**| Unique operation key required for every mutation. | |

### Return type

ApiResponse<[**ReplayWebhookEvent200Response**](ReplayWebhookEvent200Response.md)>


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


## rotateWebhookEndpointSecret

> CreateWebhookEndpoint200Response rotateWebhookEndpointSecret(endpointId, idempotencyKey)

Rotate webhook signing secret

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        String endpointId = "endpointId_example"; // String |
        String idempotencyKey = "idempotencyKey_example"; // String | Unique operation key required for every mutation.
        try {
            CreateWebhookEndpoint200Response result = apiInstance.rotateWebhookEndpointSecret(endpointId, idempotencyKey);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#rotateWebhookEndpointSecret");
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
| **endpointId** | **String**|  | |
| **idempotencyKey** | **String**| Unique operation key required for every mutation. | |

### Return type

[**CreateWebhookEndpoint200Response**](CreateWebhookEndpoint200Response.md)


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

## rotateWebhookEndpointSecretWithHttpInfo

> ApiResponse<CreateWebhookEndpoint200Response> rotateWebhookEndpointSecretWithHttpInfo(endpointId, idempotencyKey)

Rotate webhook signing secret

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        String endpointId = "endpointId_example"; // String |
        String idempotencyKey = "idempotencyKey_example"; // String | Unique operation key required for every mutation.
        try {
            ApiResponse<CreateWebhookEndpoint200Response> response = apiInstance.rotateWebhookEndpointSecretWithHttpInfo(endpointId, idempotencyKey);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#rotateWebhookEndpointSecret");
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
| **endpointId** | **String**|  | |
| **idempotencyKey** | **String**| Unique operation key required for every mutation. | |

### Return type

ApiResponse<[**CreateWebhookEndpoint200Response**](CreateWebhookEndpoint200Response.md)>


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


## updateWebhookEndpoint

> DeleteWebhookEndpoint200Response updateWebhookEndpoint(endpointId, idempotencyKey, updateWebhookEndpointRequest)

Update webhook endpoint

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        String endpointId = "endpointId_example"; // String |
        String idempotencyKey = "idempotencyKey_example"; // String | Unique operation key required for every mutation.
        UpdateWebhookEndpointRequest updateWebhookEndpointRequest = new UpdateWebhookEndpointRequest(); // UpdateWebhookEndpointRequest |
        try {
            DeleteWebhookEndpoint200Response result = apiInstance.updateWebhookEndpoint(endpointId, idempotencyKey, updateWebhookEndpointRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#updateWebhookEndpoint");
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
| **endpointId** | **String**|  | |
| **idempotencyKey** | **String**| Unique operation key required for every mutation. | |
| **updateWebhookEndpointRequest** | [**UpdateWebhookEndpointRequest**](UpdateWebhookEndpointRequest.md)|  | |

### Return type

[**DeleteWebhookEndpoint200Response**](DeleteWebhookEndpoint200Response.md)


### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
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

## updateWebhookEndpointWithHttpInfo

> ApiResponse<DeleteWebhookEndpoint200Response> updateWebhookEndpointWithHttpInfo(endpointId, idempotencyKey, updateWebhookEndpointRequest)

Update webhook endpoint

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformWebhooksApi;

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

        PlatformWebhooksApi apiInstance = new PlatformWebhooksApi(defaultClient);
        String endpointId = "endpointId_example"; // String |
        String idempotencyKey = "idempotencyKey_example"; // String | Unique operation key required for every mutation.
        UpdateWebhookEndpointRequest updateWebhookEndpointRequest = new UpdateWebhookEndpointRequest(); // UpdateWebhookEndpointRequest |
        try {
            ApiResponse<DeleteWebhookEndpoint200Response> response = apiInstance.updateWebhookEndpointWithHttpInfo(endpointId, idempotencyKey, updateWebhookEndpointRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformWebhooksApi#updateWebhookEndpoint");
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
| **endpointId** | **String**|  | |
| **idempotencyKey** | **String**| Unique operation key required for every mutation. | |
| **updateWebhookEndpointRequest** | [**UpdateWebhookEndpointRequest**](UpdateWebhookEndpointRequest.md)|  | |

### Return type

ApiResponse<[**DeleteWebhookEndpoint200Response**](DeleteWebhookEndpoint200Response.md)>


### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
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

