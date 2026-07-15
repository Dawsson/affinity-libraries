# \APIKeysAPI

All URIs are relative to *https://api.joinaffinityai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetApiAccess**](APIKeysAPI.md#GetApiAccess) | **Get** /v1/auth/access | Read API key access



## GetApiAccess

> GetApiAccess200Response GetApiAccess(ctx).Execute()

Read API key access



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.APIKeysAPI.GetApiAccess(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `APIKeysAPI.GetApiAccess``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetApiAccess`: GetApiAccess200Response
	fmt.Fprintf(os.Stdout, "Response from `APIKeysAPI.GetApiAccess`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetApiAccessRequest struct via the builder pattern


### Return type

[**GetApiAccess200Response**](GetApiAccess200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

