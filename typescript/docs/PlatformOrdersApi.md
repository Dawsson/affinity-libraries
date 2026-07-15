# PlatformOrdersApi

All URIs are relative to *https://api.joinaffinityai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelOrder**](PlatformOrdersApi.md#cancelorderoperation) | **POST** /v1/orders/{orderId}/cancel | Cancel order |
| [**createOrder**](PlatformOrdersApi.md#createorderoperation) | **POST** /v1/orders | Create order |
| [**getOrder**](PlatformOrdersApi.md#getorder) | **GET** /v1/orders/{orderId} | Read order |
| [**listOrderEvents**](PlatformOrdersApi.md#listorderevents) | **GET** /v1/orders/{orderId}/events | List order events |
| [**listOrders**](PlatformOrdersApi.md#listorders) | **GET** /v1/orders | List platform orders |
| [**submitOrder**](PlatformOrdersApi.md#submitorder) | **POST** /v1/orders/{orderId}/submit | Submit order |
| [**updateOrder**](PlatformOrdersApi.md#updateorderoperation) | **PATCH** /v1/orders/{orderId} | Update draft order |



## cancelOrder

> CreateOrder200Response cancelOrder(orderId, cancelOrderRequest)

Cancel order

Cancels an order before shipment. Corrections use cancel-and-replace.

### Example

```ts
import {
  Configuration,
  PlatformOrdersApi,
} from '@affinity/sdk';
import type { CancelOrderOperationRequest } from '@affinity/sdk';

async function example() {
  console.log("🚀 Testing @affinity/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: affinityApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new PlatformOrdersApi(config);

  const body = {
    // string
    orderId: orderId_example,
    // CancelOrderRequest
    cancelOrderRequest: ...,
  } satisfies CancelOrderOperationRequest;

  try {
    const data = await api.cancelOrder(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orderId** | `string` |  | [Defaults to `undefined`] |
| **cancelOrderRequest** | [CancelOrderRequest](CancelOrderRequest.md) |  | |

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createOrder

> CreateOrder200Response createOrder(createOrderRequest)

Create order

Creates an editable synthetic draft in test mode or releases an existing signed immutable prescription version in live mode.

### Example

```ts
import {
  Configuration,
  PlatformOrdersApi,
} from '@affinity/sdk';
import type { CreateOrderOperationRequest } from '@affinity/sdk';

async function example() {
  console.log("🚀 Testing @affinity/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: affinityApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new PlatformOrdersApi(config);

  const body = {
    // CreateOrderRequest
    createOrderRequest: {"catalogItemId":"catalog_item_123","practiceId":"3f4bd943-a34d-4d4c-aa41-00556569a71d","directions":"Inject 0.25 mL subcutaneously once weekly.","externalOrderId":"order_123","patient":{"address":{"city":"Los Angeles","country":"US","line1":"100 Main Street","line2":null,"postalCode":"90001","state":"CA"},"dateOfBirth":"1988-05-12","email":"patient@example.com","externalPatientId":"patient_123","name":"Example Patient","state":"CA"},"prescriber":{"credentials":"MD","licenseStates":["CA"],"name":"Alex Morgan","npi":"1234567893"},"prescription":{"authorized":true,"signedAt":"2026-07-10T12:00:00.000Z"},"quantity":1},
  } satisfies CreateOrderOperationRequest;

  try {
    const data = await api.createOrder(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createOrderRequest** | [CreateOrderRequest](CreateOrderRequest.md) |  | |

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrder

> CreateOrder200Response getOrder(orderId)

Read order

### Example

```ts
import {
  Configuration,
  PlatformOrdersApi,
} from '@affinity/sdk';
import type { GetOrderRequest } from '@affinity/sdk';

async function example() {
  console.log("🚀 Testing @affinity/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: affinityApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new PlatformOrdersApi(config);

  const body = {
    // string
    orderId: orderId_example,
  } satisfies GetOrderRequest;

  try {
    const data = await api.getOrder(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orderId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listOrderEvents

> ListOrderEvents200Response listOrderEvents(orderId)

List order events

### Example

```ts
import {
  Configuration,
  PlatformOrdersApi,
} from '@affinity/sdk';
import type { ListOrderEventsRequest } from '@affinity/sdk';

async function example() {
  console.log("🚀 Testing @affinity/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: affinityApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new PlatformOrdersApi(config);

  const body = {
    // string
    orderId: orderId_example,
  } satisfies ListOrderEventsRequest;

  try {
    const data = await api.listOrderEvents(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orderId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ListOrderEvents200Response**](ListOrderEvents200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listOrders

> ListOrders200Response listOrders(externalOrderId, patientExternalId)

List platform orders

### Example

```ts
import {
  Configuration,
  PlatformOrdersApi,
} from '@affinity/sdk';
import type { ListOrdersRequest } from '@affinity/sdk';

async function example() {
  console.log("🚀 Testing @affinity/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: affinityApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new PlatformOrdersApi(config);

  const body = {
    // string (optional)
    externalOrderId: externalOrderId_example,
    // string (optional)
    patientExternalId: patientExternalId_example,
  } satisfies ListOrdersRequest;

  try {
    const data = await api.listOrders(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **externalOrderId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **patientExternalId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListOrders200Response**](ListOrders200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitOrder

> CreateOrder200Response submitOrder(orderId)

Submit order

Validates and submits an immutable order to the Affinity review queue.

### Example

```ts
import {
  Configuration,
  PlatformOrdersApi,
} from '@affinity/sdk';
import type { SubmitOrderRequest } from '@affinity/sdk';

async function example() {
  console.log("🚀 Testing @affinity/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: affinityApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new PlatformOrdersApi(config);

  const body = {
    // string
    orderId: orderId_example,
  } satisfies SubmitOrderRequest;

  try {
    const data = await api.submitOrder(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orderId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateOrder

> CreateOrder200Response updateOrder(orderId, updateOrderRequest)

Update draft order

Updates an order while it remains a draft.

### Example

```ts
import {
  Configuration,
  PlatformOrdersApi,
} from '@affinity/sdk';
import type { UpdateOrderOperationRequest } from '@affinity/sdk';

async function example() {
  console.log("🚀 Testing @affinity/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: affinityApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new PlatformOrdersApi(config);

  const body = {
    // string
    orderId: orderId_example,
    // UpdateOrderRequest
    updateOrderRequest: ...,
  } satisfies UpdateOrderOperationRequest;

  try {
    const data = await api.updateOrder(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orderId** | `string` |  | [Defaults to `undefined`] |
| **updateOrderRequest** | [UpdateOrderRequest](UpdateOrderRequest.md) |  | |

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

