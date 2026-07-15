# PracticesApi

All URIs are relative to *https://api.joinaffinityai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPractice**](PracticesApi.md#createPractice) | **POST** /v1/practices | Create practice |
| [**createPracticeWithHttpInfo**](PracticesApi.md#createPracticeWithHttpInfo) | **POST** /v1/practices | Create practice |
| [**getPractice**](PracticesApi.md#getPractice) | **GET** /v1/practices/{practiceId} | Read practice |
| [**getPracticeWithHttpInfo**](PracticesApi.md#getPracticeWithHttpInfo) | **GET** /v1/practices/{practiceId} | Read practice |
| [**listPractices**](PracticesApi.md#listPractices) | **GET** /v1/practices | List practices |
| [**listPracticesWithHttpInfo**](PracticesApi.md#listPracticesWithHttpInfo) | **GET** /v1/practices | List practices |
| [**updatePractice**](PracticesApi.md#updatePractice) | **PATCH** /v1/practices/{practiceId} | Update practice |
| [**updatePracticeWithHttpInfo**](PracticesApi.md#updatePracticeWithHttpInfo) | **PATCH** /v1/practices/{practiceId} | Update practice |



## createPractice

> CreatePractice200Response createPractice(createPracticeRequest)

Create practice

Creates a platform-owned practice. Send Idempotency-Key to safely retry network failures.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PracticesApi;

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

        PracticesApi apiInstance = new PracticesApi(defaultClient);
        CreatePracticeRequest createPracticeRequest = new CreatePracticeRequest(); // CreatePracticeRequest | 
        try {
            CreatePractice200Response result = apiInstance.createPractice(createPracticeRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PracticesApi#createPractice");
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
| **createPracticeRequest** | [**CreatePracticeRequest**](CreatePracticeRequest.md)|  | |

### Return type

[**CreatePractice200Response**](CreatePractice200Response.md)


### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
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

## createPracticeWithHttpInfo

> ApiResponse<CreatePractice200Response> createPracticeWithHttpInfo(createPracticeRequest)

Create practice

Creates a platform-owned practice. Send Idempotency-Key to safely retry network failures.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PracticesApi;

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

        PracticesApi apiInstance = new PracticesApi(defaultClient);
        CreatePracticeRequest createPracticeRequest = new CreatePracticeRequest(); // CreatePracticeRequest | 
        try {
            ApiResponse<CreatePractice200Response> response = apiInstance.createPracticeWithHttpInfo(createPracticeRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PracticesApi#createPractice");
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
| **createPracticeRequest** | [**CreatePracticeRequest**](CreatePracticeRequest.md)|  | |

### Return type

ApiResponse<[**CreatePractice200Response**](CreatePractice200Response.md)>


### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
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


## getPractice

> CreatePractice200Response getPractice(practiceId)

Read practice

Reads a platform-owned practice by id.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PracticesApi;

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

        PracticesApi apiInstance = new PracticesApi(defaultClient);
        String practiceId = "practiceId_example"; // String | 
        try {
            CreatePractice200Response result = apiInstance.getPractice(practiceId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PracticesApi#getPractice");
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
| **practiceId** | **String**|  | |

### Return type

[**CreatePractice200Response**](CreatePractice200Response.md)


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

## getPracticeWithHttpInfo

> ApiResponse<CreatePractice200Response> getPracticeWithHttpInfo(practiceId)

Read practice

Reads a platform-owned practice by id.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PracticesApi;

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

        PracticesApi apiInstance = new PracticesApi(defaultClient);
        String practiceId = "practiceId_example"; // String | 
        try {
            ApiResponse<CreatePractice200Response> response = apiInstance.getPracticeWithHttpInfo(practiceId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PracticesApi#getPractice");
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
| **practiceId** | **String**|  | |

### Return type

ApiResponse<[**CreatePractice200Response**](CreatePractice200Response.md)>


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


## listPractices

> ListPractices200Response listPractices()

List practices

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PracticesApi;

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

        PracticesApi apiInstance = new PracticesApi(defaultClient);
        try {
            ListPractices200Response result = apiInstance.listPractices();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PracticesApi#listPractices");
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

[**ListPractices200Response**](ListPractices200Response.md)


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

## listPracticesWithHttpInfo

> ApiResponse<ListPractices200Response> listPracticesWithHttpInfo()

List practices

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PracticesApi;

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

        PracticesApi apiInstance = new PracticesApi(defaultClient);
        try {
            ApiResponse<ListPractices200Response> response = apiInstance.listPracticesWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PracticesApi#listPractices");
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

ApiResponse<[**ListPractices200Response**](ListPractices200Response.md)>


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


## updatePractice

> CreatePractice200Response updatePractice(practiceId)

Update practice

Updates a platform-owned practice. Send Idempotency-Key for safe retries.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PracticesApi;

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

        PracticesApi apiInstance = new PracticesApi(defaultClient);
        String practiceId = "practiceId_example"; // String | 
        try {
            CreatePractice200Response result = apiInstance.updatePractice(practiceId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PracticesApi#updatePractice");
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
| **practiceId** | **String**|  | |

### Return type

[**CreatePractice200Response**](CreatePractice200Response.md)


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

## updatePracticeWithHttpInfo

> ApiResponse<CreatePractice200Response> updatePracticeWithHttpInfo(practiceId)

Update practice

Updates a platform-owned practice. Send Idempotency-Key for safe retries.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PracticesApi;

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

        PracticesApi apiInstance = new PracticesApi(defaultClient);
        String practiceId = "practiceId_example"; // String | 
        try {
            ApiResponse<CreatePractice200Response> response = apiInstance.updatePracticeWithHttpInfo(practiceId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PracticesApi#updatePractice");
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
| **practiceId** | **String**|  | |

### Return type

ApiResponse<[**CreatePractice200Response**](CreatePractice200Response.md)>


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

