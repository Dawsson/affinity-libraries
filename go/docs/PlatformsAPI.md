# \PlatformsAPI

All URIs are relative to *https://api.joinaffinityai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetPlatformOrganization**](PlatformsAPI.md#GetPlatformOrganization) | **Get** /v1/platform/organization | Read platform organization



## GetPlatformOrganization

> GetPlatformOrganization200Response GetPlatformOrganization(ctx).OrgId(orgId).Execute()

Read platform organization



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/Dawsson/affinity-libraries/go"
)

func main() {
	orgId := "orgId_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformsAPI.GetPlatformOrganization(context.Background()).OrgId(orgId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformsAPI.GetPlatformOrganization``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPlatformOrganization`: GetPlatformOrganization200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformsAPI.GetPlatformOrganization`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPlatformOrganizationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgId** | **string** |  |

### Return type

[**GetPlatformOrganization200Response**](GetPlatformOrganization200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

