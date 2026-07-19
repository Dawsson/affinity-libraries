# \CatalogAPI

All URIs are relative to *https://api.joinaffinityai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ListCatalogItems**](CatalogAPI.md#ListCatalogItems) | **Get** /v1/catalog/items | List catalog items



## ListCatalogItems

> ListCatalogItemsResponse ListCatalogItems(ctx).Query(query).Limit(limit).StartingAfter(startingAfter).EndingBefore(endingBefore).Route(route).Execute()

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
	limit := int32(56) // int32 |  (optional) (default to 50)
	startingAfter := "startingAfter_example" // string |  (optional)
	endingBefore := "endingBefore_example" // string |  (optional)
	route := "route_example" // string |  (optional) (default to "all")

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CatalogAPI.ListCatalogItems(context.Background()).Query(query).Limit(limit).StartingAfter(startingAfter).EndingBefore(endingBefore).Route(route).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CatalogAPI.ListCatalogItems``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCatalogItems`: ListCatalogItemsResponse
	fmt.Fprintf(os.Stdout, "Response from `CatalogAPI.ListCatalogItems`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCatalogItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **string** |  |
 **limit** | **int32** |  | [default to 50]
 **startingAfter** | **string** |  |
 **endingBefore** | **string** |  |
 **route** | **string** |  | [default to &quot;all&quot;]

### Return type

[**ListCatalogItemsResponse**](ListCatalogItemsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

