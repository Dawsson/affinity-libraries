# \CatalogAPI

All URIs are relative to *https://api.joinaffinityai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ListCatalogItems**](CatalogAPI.md#ListCatalogItems) | **Get** /v1/catalog/items | List catalog items



## ListCatalogItems

> ListCatalogItems200Response ListCatalogItems(ctx).Query(query).Execute()

List catalog items



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
	query := "query_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CatalogAPI.ListCatalogItems(context.Background()).Query(query).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CatalogAPI.ListCatalogItems``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCatalogItems`: ListCatalogItems200Response
	fmt.Fprintf(os.Stdout, "Response from `CatalogAPI.ListCatalogItems`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCatalogItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **string** |  | 

### Return type

[**ListCatalogItems200Response**](ListCatalogItems200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

