# CatalogApi

All URIs are relative to *https://api.joinaffinityai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listCatalogItems**](CatalogApi.md#listcatalogitems) | **GET** /v1/catalog/items | List catalog items |



## listCatalogItems

> ListCatalogItems200Response listCatalogItems(query)

List catalog items

Searches the Affinity catalog across all connected compounders and routing restrictions.

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '@affinity/sdk';
import type { ListCatalogItemsRequest } from '@affinity/sdk';

async function example() {
  console.log("🚀 Testing @affinity/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: affinityApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new CatalogApi(config);

  const body = {
    // string (optional)
    query: query_example,
  } satisfies ListCatalogItemsRequest;

  try {
    const data = await api.listCatalogItems(body);
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
| **query** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListCatalogItems200Response**](ListCatalogItems200Response.md)

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

