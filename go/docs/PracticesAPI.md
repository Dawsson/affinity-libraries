# \PracticesAPI

All URIs are relative to *https://api.joinaffinityai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreatePractice**](PracticesAPI.md#CreatePractice) | **Post** /v1/practices | Create practice
[**GetPractice**](PracticesAPI.md#GetPractice) | **Get** /v1/practices/{practiceId} | Read practice
[**ListPractices**](PracticesAPI.md#ListPractices) | **Get** /v1/practices | List practices
[**UpdatePractice**](PracticesAPI.md#UpdatePractice) | **Patch** /v1/practices/{practiceId} | Update practice



## CreatePractice

> CreatePractice200Response CreatePractice(ctx).IdempotencyKey(idempotencyKey).CreatePracticeRequest(createPracticeRequest).Execute()

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
	idempotencyKey := "idempotencyKey_example" // string | Unique operation key required for every mutation.
	createPracticeRequest := *openapiclient.NewCreatePracticeRequest(*openapiclient.NewCreatePracticeRequestAddress("City_example", "Line1_example", "PostalCode_example", "State_example"), *openapiclient.NewCreatePracticeRequestAttestations(false, false, false, false), "Name_example") // CreatePracticeRequest |

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PracticesAPI.CreatePractice(context.Background()).IdempotencyKey(idempotencyKey).CreatePracticeRequest(createPracticeRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PracticesAPI.CreatePractice``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreatePractice`: CreatePractice200Response
	fmt.Fprintf(os.Stdout, "Response from `PracticesAPI.CreatePractice`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreatePracticeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotencyKey** | **string** | Unique operation key required for every mutation. |
 **createPracticeRequest** | [**CreatePracticeRequest**](CreatePracticeRequest.md) |  |

### Return type

[**CreatePractice200Response**](CreatePractice200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPractice

> CreatePractice200Response GetPractice(ctx, practiceId).Execute()

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
	// response from `GetPractice`: CreatePractice200Response
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

[**CreatePractice200Response**](CreatePractice200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListPractices

> ListPractices200Response ListPractices(ctx).Execute()

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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PracticesAPI.ListPractices(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PracticesAPI.ListPractices``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListPractices`: ListPractices200Response
	fmt.Fprintf(os.Stdout, "Response from `PracticesAPI.ListPractices`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListPracticesRequest struct via the builder pattern


### Return type

[**ListPractices200Response**](ListPractices200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdatePractice

> CreatePractice200Response UpdatePractice(ctx, practiceId).IdempotencyKey(idempotencyKey).Execute()

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
	idempotencyKey := "idempotencyKey_example" // string | Unique operation key required for every mutation.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PracticesAPI.UpdatePractice(context.Background(), practiceId).IdempotencyKey(idempotencyKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PracticesAPI.UpdatePractice``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdatePractice`: CreatePractice200Response
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

 **idempotencyKey** | **string** | Unique operation key required for every mutation. |

### Return type

[**CreatePractice200Response**](CreatePractice200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

