# PracticesApi

All URIs are relative to *https://api.joinaffinityai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPractice**](PracticesApi.md#createpracticeoperation) | **POST** /v1/practices | Create practice |
| [**getPractice**](PracticesApi.md#getpractice) | **GET** /v1/practices/{practiceId} | Read practice |
| [**listPractices**](PracticesApi.md#listpractices) | **GET** /v1/practices | List practices |
| [**updatePractice**](PracticesApi.md#updatepractice) | **PATCH** /v1/practices/{practiceId} | Update practice |



## createPractice

> CreatePractice200Response createPractice(createPracticeRequest)

Create practice

Creates a platform-owned practice. Send Idempotency-Key to safely retry network failures.

### Example

```ts
import {
  Configuration,
  PracticesApi,
} from '@affinity/sdk';
import type { CreatePracticeOperationRequest } from '@affinity/sdk';

async function example() {
  console.log("🚀 Testing @affinity/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: affinityApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new PracticesApi(config);

  const body = {
    // CreatePracticeRequest
    createPracticeRequest: {"address":{"city":"Los Angeles","country":"US","line1":"100 Practice Way","line2":null,"postalCode":"90001","state":"CA"},"attestations":{"authorizedPracticeRelationship":true,"authorizedPhiTransfer":true,"minimumNecessaryPhi":true,"providerDataAccuracy":true},"complianceContact":null,"externalId":"practice_123","legalName":"Example Medical Group PLLC","metadata":{},"name":"Example Medical Group","prescribers":[{"credentials":"MD","licenseStates":["CA"],"name":"Alex Morgan","npi":"1234567893"}],"primaryContact":{"email":"operations@example-practice.com","name":"Jordan Lee","phone":null},"supportEmail":"support@example-practice.com","supportPhone":null,"timezone":"America/Los_Angeles"},
  } satisfies CreatePracticeOperationRequest;

  try {
    const data = await api.createPractice(body);
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
| **createPracticeRequest** | [CreatePracticeRequest](CreatePracticeRequest.md) |  | |

### Return type

[**CreatePractice200Response**](CreatePractice200Response.md)

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


## getPractice

> CreatePractice200Response getPractice(practiceId)

Read practice

Reads a platform-owned practice by id.

### Example

```ts
import {
  Configuration,
  PracticesApi,
} from '@affinity/sdk';
import type { GetPracticeRequest } from '@affinity/sdk';

async function example() {
  console.log("🚀 Testing @affinity/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: affinityApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new PracticesApi(config);

  const body = {
    // string
    practiceId: practiceId_example,
  } satisfies GetPracticeRequest;

  try {
    const data = await api.getPractice(body);
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
| **practiceId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CreatePractice200Response**](CreatePractice200Response.md)

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


## listPractices

> ListPractices200Response listPractices()

List practices

### Example

```ts
import {
  Configuration,
  PracticesApi,
} from '@affinity/sdk';
import type { ListPracticesRequest } from '@affinity/sdk';

async function example() {
  console.log("🚀 Testing @affinity/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: affinityApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new PracticesApi(config);

  try {
    const data = await api.listPractices();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListPractices200Response**](ListPractices200Response.md)

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


## updatePractice

> CreatePractice200Response updatePractice(practiceId)

Update practice

Updates a platform-owned practice. Send Idempotency-Key for safe retries.

### Example

```ts
import {
  Configuration,
  PracticesApi,
} from '@affinity/sdk';
import type { UpdatePracticeRequest } from '@affinity/sdk';

async function example() {
  console.log("🚀 Testing @affinity/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: affinityApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new PracticesApi(config);

  const body = {
    // string
    practiceId: practiceId_example,
  } satisfies UpdatePracticeRequest;

  try {
    const data = await api.updatePractice(body);
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
| **practiceId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CreatePractice200Response**](CreatePractice200Response.md)

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

