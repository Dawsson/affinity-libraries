# \PracticesAPI

All URIs are relative to *https://api.joinaffinityai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreatePractice**](PracticesAPI.md#CreatePractice) | **Post** /v1/practices | Create practice
[**GetPractice**](PracticesAPI.md#GetPractice) | **Get** /v1/practices/{practiceId} | Read practice
[**ListPractices**](PracticesAPI.md#ListPractices) | **Get** /v1/practices | List practices
[**UpdatePractice**](PracticesAPI.md#UpdatePractice) | **Patch** /v1/practices/{practiceId} | Update practice



## CreatePractice

> CreatePracticeResponse CreatePractice(ctx).CreatePracticeRequest(createPracticeRequest).IdempotencyKey(idempotencyKey).Execute()

Create practice



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
	createPracticeRequest := *openapiclient.NewCreatePracticeRequest(*openapiclient.NewCreateOrderRequestAnyOfPatientAddress("City_example", "Line1_example", "PostalCode_example", "State_example"), *openapiclient.NewCreatePracticeRequestAttestations(false, false, false, false), "Name_example") // CreatePracticeRequest |
	idempotencyKey := "idempotencyKey_example" // string | Unique operation key required for every mutation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PracticesAPI.CreatePractice(context.Background()).CreatePracticeRequest(createPracticeRequest).IdempotencyKey(idempotencyKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PracticesAPI.CreatePractice``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreatePractice`: CreatePracticeResponse
	fmt.Fprintf(os.Stdout, "Response from `PracticesAPI.CreatePractice`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreatePracticeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPracticeRequest** | [**CreatePracticeRequest**](CreatePracticeRequest.md) |  |
 **idempotencyKey** | **string** | Unique operation key required for every mutation. |

### Return type

[**CreatePracticeResponse**](CreatePracticeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPractice

> GetPracticeResponse GetPractice(ctx, practiceId).Execute()

Read practice



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
	practiceId := "practiceId_example" // string |

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PracticesAPI.GetPractice(context.Background(), practiceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PracticesAPI.GetPractice``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPractice`: GetPracticeResponse
	fmt.Fprintf(os.Stdout, "Response from `PracticesAPI.GetPractice`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**practiceId** | **string** |  |

### Other Parameters

Other parameters are passed through a pointer to a apiGetPracticeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetPracticeResponse**](GetPracticeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListPractices

> ListPracticesResponse ListPractices(ctx).Limit(limit).StartingAfter(startingAfter).EndingBefore(endingBefore).Execute()

List practices

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
	limit := int32(56) // int32 |  (optional) (default to 25)
	startingAfter := "startingAfter_example" // string |  (optional)
	endingBefore := "endingBefore_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PracticesAPI.ListPractices(context.Background()).Limit(limit).StartingAfter(startingAfter).EndingBefore(endingBefore).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PracticesAPI.ListPractices``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListPractices`: ListPracticesResponse
	fmt.Fprintf(os.Stdout, "Response from `PracticesAPI.ListPractices`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPracticesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** |  | [default to 25]
 **startingAfter** | **string** |  |
 **endingBefore** | **string** |  |

### Return type

[**ListPracticesResponse**](ListPracticesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdatePractice

> UpdatePracticeResponse UpdatePractice(ctx, practiceId).UpdatePracticeRequest(updatePracticeRequest).IdempotencyKey(idempotencyKey).Execute()

Update practice



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
	practiceId := "practiceId_example" // string |
	updatePracticeRequest := *openapiclient.NewUpdatePracticeRequest() // UpdatePracticeRequest |
	idempotencyKey := "idempotencyKey_example" // string | Unique operation key required for every mutation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PracticesAPI.UpdatePractice(context.Background(), practiceId).UpdatePracticeRequest(updatePracticeRequest).IdempotencyKey(idempotencyKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PracticesAPI.UpdatePractice``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdatePractice`: UpdatePracticeResponse
	fmt.Fprintf(os.Stdout, "Response from `PracticesAPI.UpdatePractice`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**practiceId** | **string** |  |

### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePracticeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updatePracticeRequest** | [**UpdatePracticeRequest**](UpdatePracticeRequest.md) |  |
 **idempotencyKey** | **string** | Unique operation key required for every mutation. |

### Return type

[**UpdatePracticeResponse**](UpdatePracticeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

