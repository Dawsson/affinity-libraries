# PlatformsApi

All URIs are relative to *https://api.joinaffinityai.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPlatformOrganization**](PlatformsApi.md#getplatformorganization) | **GET** /v1/platform/organization | Read platform organization |



## getPlatformOrganization

> GetPlatformOrganization200Response getPlatformOrganization(orgId)

Read platform organization

Reads the authenticated platform organization and current role.

### Example

```ts
import {
  Configuration,
  PlatformsApi,
} from '@affinity/sdk';
import type { GetPlatformOrganizationRequest } from '@affinity/sdk';

async function example() {
  console.log("🚀 Testing @affinity/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: affinityApiKey
    apiKey: "YOUR API KEY",
  });
  const api = new PlatformsApi(config);

  const body = {
    // string (optional)
    orgId: orgId_example,
  } satisfies GetPlatformOrganizationRequest;

  try {
    const data = await api.getPlatformOrganization(body);
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
| **orgId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetPlatformOrganization200Response**](GetPlatformOrganization200Response.md)

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

