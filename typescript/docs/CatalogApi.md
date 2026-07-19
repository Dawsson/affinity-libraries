# CatalogApi

All URIs are relative to *https://api.joinaffinityai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listCatalogItems**](CatalogApi.md#listcatalogitems) | **GET** /v1/catalog/items | List catalog items |



## listCatalogItems

> ListCatalogItemsResponse listCatalogItems(query, limit, startingAfter, endingBefore, route)

List catalog items

Lists the catalog items that are eligible for the authenticated account and mode.

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
    // number (optional)
    limit: 56,
    // string (optional)
    startingAfter: startingAfter_example,
    // string (optional)
    endingBefore: endingBefore_example,
    // 'all' | 'injectable' | 'nasal' | 'oral' | 'sublingual' | 'topical' | 'unknown' (optional)
    route: route_example,
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
| **limit** | `number` |  | [Optional] [Defaults to `50`] |
| **startingAfter** | `string` |  | [Optional] [Defaults to `undefined`] |
| **endingBefore** | `string` |  | [Optional] [Defaults to `undefined`] |
| **route** | `all`, `injectable`, `nasal`, `oral`, `sublingual`, `topical`, `unknown` |  | [Optional] [Defaults to `&#39;all&#39;`] [Enum: all, injectable, nasal, oral, sublingual, topical, unknown] |

### Return type

[**ListCatalogItemsResponse**](ListCatalogItemsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
| **400** | Bad request |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
| **401** | Unauthorized |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
| **403** | Forbidden |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
| **429** | Too many requests |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
| **500** | Internal server error |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

