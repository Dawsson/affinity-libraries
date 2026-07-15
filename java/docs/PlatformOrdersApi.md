# PlatformOrdersApi

All URIs are relative to *https://api.joinaffinityai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelOrder**](PlatformOrdersApi.md#cancelOrder) | **POST** /v1/orders/{orderId}/cancel | Cancel order |
| [**cancelOrderWithHttpInfo**](PlatformOrdersApi.md#cancelOrderWithHttpInfo) | **POST** /v1/orders/{orderId}/cancel | Cancel order |
| [**createOrder**](PlatformOrdersApi.md#createOrder) | **POST** /v1/orders | Create order |
| [**createOrderWithHttpInfo**](PlatformOrdersApi.md#createOrderWithHttpInfo) | **POST** /v1/orders | Create order |
| [**getOrder**](PlatformOrdersApi.md#getOrder) | **GET** /v1/orders/{orderId} | Read order |
| [**getOrderWithHttpInfo**](PlatformOrdersApi.md#getOrderWithHttpInfo) | **GET** /v1/orders/{orderId} | Read order |
| [**listOrderEvents**](PlatformOrdersApi.md#listOrderEvents) | **GET** /v1/orders/{orderId}/events | List order events |
| [**listOrderEventsWithHttpInfo**](PlatformOrdersApi.md#listOrderEventsWithHttpInfo) | **GET** /v1/orders/{orderId}/events | List order events |
| [**listOrders**](PlatformOrdersApi.md#listOrders) | **GET** /v1/orders | List platform orders |
| [**listOrdersWithHttpInfo**](PlatformOrdersApi.md#listOrdersWithHttpInfo) | **GET** /v1/orders | List platform orders |
| [**submitOrder**](PlatformOrdersApi.md#submitOrder) | **POST** /v1/orders/{orderId}/submit | Submit order |
| [**submitOrderWithHttpInfo**](PlatformOrdersApi.md#submitOrderWithHttpInfo) | **POST** /v1/orders/{orderId}/submit | Submit order |
| [**updateOrder**](PlatformOrdersApi.md#updateOrder) | **PATCH** /v1/orders/{orderId} | Update draft order |
| [**updateOrderWithHttpInfo**](PlatformOrdersApi.md#updateOrderWithHttpInfo) | **PATCH** /v1/orders/{orderId} | Update draft order |



## cancelOrder

> CreateOrder200Response cancelOrder(orderId, cancelOrderRequest)

Cancel order

Cancels an order before shipment. Corrections use cancel-and-replace.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformOrdersApi;

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

        PlatformOrdersApi apiInstance = new PlatformOrdersApi(defaultClient);
        String orderId = "orderId_example"; // String | 
        CancelOrderRequest cancelOrderRequest = new CancelOrderRequest(); // CancelOrderRequest | 
        try {
            CreateOrder200Response result = apiInstance.cancelOrder(orderId, cancelOrderRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformOrdersApi#cancelOrder");
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
| **orderId** | **String**|  | |
| **cancelOrderRequest** | [**CancelOrderRequest**](CancelOrderRequest.md)|  | |

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)


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

## cancelOrderWithHttpInfo

> ApiResponse<CreateOrder200Response> cancelOrderWithHttpInfo(orderId, cancelOrderRequest)

Cancel order

Cancels an order before shipment. Corrections use cancel-and-replace.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformOrdersApi;

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

        PlatformOrdersApi apiInstance = new PlatformOrdersApi(defaultClient);
        String orderId = "orderId_example"; // String | 
        CancelOrderRequest cancelOrderRequest = new CancelOrderRequest(); // CancelOrderRequest | 
        try {
            ApiResponse<CreateOrder200Response> response = apiInstance.cancelOrderWithHttpInfo(orderId, cancelOrderRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformOrdersApi#cancelOrder");
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
| **orderId** | **String**|  | |
| **cancelOrderRequest** | [**CancelOrderRequest**](CancelOrderRequest.md)|  | |

### Return type

ApiResponse<[**CreateOrder200Response**](CreateOrder200Response.md)>


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


## createOrder

> CreateOrder200Response createOrder(createOrderRequest)

Create order

Creates an editable synthetic draft in test mode or releases an existing signed immutable prescription version in live mode.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformOrdersApi;

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

        PlatformOrdersApi apiInstance = new PlatformOrdersApi(defaultClient);
        CreateOrderRequest createOrderRequest = new CreateOrderRequest(); // CreateOrderRequest | 
        try {
            CreateOrder200Response result = apiInstance.createOrder(createOrderRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformOrdersApi#createOrder");
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
| **createOrderRequest** | [**CreateOrderRequest**](CreateOrderRequest.md)|  | |

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)


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

## createOrderWithHttpInfo

> ApiResponse<CreateOrder200Response> createOrderWithHttpInfo(createOrderRequest)

Create order

Creates an editable synthetic draft in test mode or releases an existing signed immutable prescription version in live mode.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformOrdersApi;

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

        PlatformOrdersApi apiInstance = new PlatformOrdersApi(defaultClient);
        CreateOrderRequest createOrderRequest = new CreateOrderRequest(); // CreateOrderRequest | 
        try {
            ApiResponse<CreateOrder200Response> response = apiInstance.createOrderWithHttpInfo(createOrderRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformOrdersApi#createOrder");
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
| **createOrderRequest** | [**CreateOrderRequest**](CreateOrderRequest.md)|  | |

### Return type

ApiResponse<[**CreateOrder200Response**](CreateOrder200Response.md)>


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


## getOrder

> CreateOrder200Response getOrder(orderId)

Read order

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformOrdersApi;

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

        PlatformOrdersApi apiInstance = new PlatformOrdersApi(defaultClient);
        String orderId = "orderId_example"; // String | 
        try {
            CreateOrder200Response result = apiInstance.getOrder(orderId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformOrdersApi#getOrder");
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
| **orderId** | **String**|  | |

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)


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

## getOrderWithHttpInfo

> ApiResponse<CreateOrder200Response> getOrderWithHttpInfo(orderId)

Read order

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformOrdersApi;

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

        PlatformOrdersApi apiInstance = new PlatformOrdersApi(defaultClient);
        String orderId = "orderId_example"; // String | 
        try {
            ApiResponse<CreateOrder200Response> response = apiInstance.getOrderWithHttpInfo(orderId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformOrdersApi#getOrder");
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
| **orderId** | **String**|  | |

### Return type

ApiResponse<[**CreateOrder200Response**](CreateOrder200Response.md)>


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


## listOrderEvents

> ListOrderEvents200Response listOrderEvents(orderId)

List order events

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformOrdersApi;

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

        PlatformOrdersApi apiInstance = new PlatformOrdersApi(defaultClient);
        String orderId = "orderId_example"; // String | 
        try {
            ListOrderEvents200Response result = apiInstance.listOrderEvents(orderId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformOrdersApi#listOrderEvents");
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
| **orderId** | **String**|  | |

### Return type

[**ListOrderEvents200Response**](ListOrderEvents200Response.md)


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

## listOrderEventsWithHttpInfo

> ApiResponse<ListOrderEvents200Response> listOrderEventsWithHttpInfo(orderId)

List order events

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformOrdersApi;

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

        PlatformOrdersApi apiInstance = new PlatformOrdersApi(defaultClient);
        String orderId = "orderId_example"; // String | 
        try {
            ApiResponse<ListOrderEvents200Response> response = apiInstance.listOrderEventsWithHttpInfo(orderId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformOrdersApi#listOrderEvents");
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
| **orderId** | **String**|  | |

### Return type

ApiResponse<[**ListOrderEvents200Response**](ListOrderEvents200Response.md)>


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


## listOrders

> ListOrders200Response listOrders(externalOrderId, patientExternalId)

List platform orders

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformOrdersApi;

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

        PlatformOrdersApi apiInstance = new PlatformOrdersApi(defaultClient);
        String externalOrderId = "externalOrderId_example"; // String | 
        String patientExternalId = "patientExternalId_example"; // String | 
        try {
            ListOrders200Response result = apiInstance.listOrders(externalOrderId, patientExternalId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformOrdersApi#listOrders");
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
| **externalOrderId** | **String**|  | [optional] |
| **patientExternalId** | **String**|  | [optional] |

### Return type

[**ListOrders200Response**](ListOrders200Response.md)


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

## listOrdersWithHttpInfo

> ApiResponse<ListOrders200Response> listOrdersWithHttpInfo(externalOrderId, patientExternalId)

List platform orders

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformOrdersApi;

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

        PlatformOrdersApi apiInstance = new PlatformOrdersApi(defaultClient);
        String externalOrderId = "externalOrderId_example"; // String | 
        String patientExternalId = "patientExternalId_example"; // String | 
        try {
            ApiResponse<ListOrders200Response> response = apiInstance.listOrdersWithHttpInfo(externalOrderId, patientExternalId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformOrdersApi#listOrders");
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
| **externalOrderId** | **String**|  | [optional] |
| **patientExternalId** | **String**|  | [optional] |

### Return type

ApiResponse<[**ListOrders200Response**](ListOrders200Response.md)>


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


## submitOrder

> CreateOrder200Response submitOrder(orderId)

Submit order

Validates and submits an immutable order to the Affinity review queue.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformOrdersApi;

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

        PlatformOrdersApi apiInstance = new PlatformOrdersApi(defaultClient);
        String orderId = "orderId_example"; // String | 
        try {
            CreateOrder200Response result = apiInstance.submitOrder(orderId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformOrdersApi#submitOrder");
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
| **orderId** | **String**|  | |

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)


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

## submitOrderWithHttpInfo

> ApiResponse<CreateOrder200Response> submitOrderWithHttpInfo(orderId)

Submit order

Validates and submits an immutable order to the Affinity review queue.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformOrdersApi;

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

        PlatformOrdersApi apiInstance = new PlatformOrdersApi(defaultClient);
        String orderId = "orderId_example"; // String | 
        try {
            ApiResponse<CreateOrder200Response> response = apiInstance.submitOrderWithHttpInfo(orderId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformOrdersApi#submitOrder");
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
| **orderId** | **String**|  | |

### Return type

ApiResponse<[**CreateOrder200Response**](CreateOrder200Response.md)>


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


## updateOrder

> CreateOrder200Response updateOrder(orderId, updateOrderRequest)

Update draft order

Updates an order while it remains a draft.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformOrdersApi;

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

        PlatformOrdersApi apiInstance = new PlatformOrdersApi(defaultClient);
        String orderId = "orderId_example"; // String | 
        UpdateOrderRequest updateOrderRequest = new UpdateOrderRequest(); // UpdateOrderRequest | 
        try {
            CreateOrder200Response result = apiInstance.updateOrder(orderId, updateOrderRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformOrdersApi#updateOrder");
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
| **orderId** | **String**|  | |
| **updateOrderRequest** | [**UpdateOrderRequest**](UpdateOrderRequest.md)|  | |

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)


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

## updateOrderWithHttpInfo

> ApiResponse<CreateOrder200Response> updateOrderWithHttpInfo(orderId, updateOrderRequest)

Update draft order

Updates an order while it remains a draft.

### Example

```java
// Import classes:
import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.ApiResponse;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.auth.*;
import ai.joinaffinity.sdk.models.*;
import ai.joinaffinity.sdk.api.PlatformOrdersApi;

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

        PlatformOrdersApi apiInstance = new PlatformOrdersApi(defaultClient);
        String orderId = "orderId_example"; // String | 
        UpdateOrderRequest updateOrderRequest = new UpdateOrderRequest(); // UpdateOrderRequest | 
        try {
            ApiResponse<CreateOrder200Response> response = apiInstance.updateOrderWithHttpInfo(orderId, updateOrderRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PlatformOrdersApi#updateOrder");
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
| **orderId** | **String**|  | |
| **updateOrderRequest** | [**UpdateOrderRequest**](UpdateOrderRequest.md)|  | |

### Return type

ApiResponse<[**CreateOrder200Response**](CreateOrder200Response.md)>


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

