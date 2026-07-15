# \PlatformOrdersAPI

All URIs are relative to *https://api.joinaffinityai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CancelOrder**](PlatformOrdersAPI.md#CancelOrder) | **Post** /v1/orders/{orderId}/cancel | Cancel order
[**CreateOrder**](PlatformOrdersAPI.md#CreateOrder) | **Post** /v1/orders | Create order
[**GetOrder**](PlatformOrdersAPI.md#GetOrder) | **Get** /v1/orders/{orderId} | Read order
[**ListOrderEvents**](PlatformOrdersAPI.md#ListOrderEvents) | **Get** /v1/orders/{orderId}/events | List order events
[**ListOrders**](PlatformOrdersAPI.md#ListOrders) | **Get** /v1/orders | List platform orders
[**SubmitOrder**](PlatformOrdersAPI.md#SubmitOrder) | **Post** /v1/orders/{orderId}/submit | Submit order
[**UpdateOrder**](PlatformOrdersAPI.md#UpdateOrder) | **Patch** /v1/orders/{orderId} | Update draft order



## CancelOrder

> CreateOrder200Response CancelOrder(ctx, orderId).CancelOrderRequest(cancelOrderRequest).Execute()

Cancel order



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
	orderId := "orderId_example" // string | 
	cancelOrderRequest := *openapiclient.NewCancelOrderRequest("Reason_example") // CancelOrderRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformOrdersAPI.CancelOrder(context.Background(), orderId).CancelOrderRequest(cancelOrderRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformOrdersAPI.CancelOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CancelOrder`: CreateOrder200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformOrdersAPI.CancelOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**orderId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelOrderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cancelOrderRequest** | [**CancelOrderRequest**](CancelOrderRequest.md) |  | 

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateOrder

> CreateOrder200Response CreateOrder(ctx).CreateOrderRequest(createOrderRequest).Execute()

Create order



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/Dawsson/affinity-libraries/go"
)

func main() {
	createOrderRequest := *openapiclient.NewCreateOrderRequest("CatalogItemId_example", "PracticeId_example", "Directions_example", "ExternalOrderId_example", *openapiclient.NewCreateOrderRequestAnyOfPatient(*openapiclient.NewCreateOrderRequestAnyOfPatientAddress("City_example", "Line1_example", "PostalCode_example", "State_example"), time.Now(), "ExternalPatientId_example", "Name_example", "State_example"), *openapiclient.NewCreateOrderRequestAnyOfPrescriber([]string{"LicenseStates_example"}, "Name_example", "Npi_example"), *openapiclient.NewCreateOrderRequestAnyOfPrescription(false, time.Now()), "PharmacyOrganizationId_example", "PrescriptionId_example", "PrescriptionVersionId_example", "RegisteredLocationId_example", *openapiclient.NewCreateOrderRequestAnyOf1ShippingAddress("City_example", "Line1_example", "PostalCode_example", "State_example")) // CreateOrderRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformOrdersAPI.CreateOrder(context.Background()).CreateOrderRequest(createOrderRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformOrdersAPI.CreateOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateOrder`: CreateOrder200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformOrdersAPI.CreateOrder`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateOrderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrderRequest** | [**CreateOrderRequest**](CreateOrderRequest.md) |  | 

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetOrder

> CreateOrder200Response GetOrder(ctx, orderId).Execute()

Read order

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
	orderId := "orderId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformOrdersAPI.GetOrder(context.Background(), orderId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformOrdersAPI.GetOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetOrder`: CreateOrder200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformOrdersAPI.GetOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**orderId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOrderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListOrderEvents

> ListOrderEvents200Response ListOrderEvents(ctx, orderId).Execute()

List order events

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
	orderId := "orderId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformOrdersAPI.ListOrderEvents(context.Background(), orderId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformOrdersAPI.ListOrderEvents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListOrderEvents`: ListOrderEvents200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformOrdersAPI.ListOrderEvents`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**orderId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiListOrderEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ListOrderEvents200Response**](ListOrderEvents200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListOrders

> ListOrders200Response ListOrders(ctx).ExternalOrderId(externalOrderId).PatientExternalId(patientExternalId).Execute()

List platform orders

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
	externalOrderId := "externalOrderId_example" // string |  (optional)
	patientExternalId := "patientExternalId_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformOrdersAPI.ListOrders(context.Background()).ExternalOrderId(externalOrderId).PatientExternalId(patientExternalId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformOrdersAPI.ListOrders``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListOrders`: ListOrders200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformOrdersAPI.ListOrders`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListOrdersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalOrderId** | **string** |  | 
 **patientExternalId** | **string** |  | 

### Return type

[**ListOrders200Response**](ListOrders200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SubmitOrder

> CreateOrder200Response SubmitOrder(ctx, orderId).Execute()

Submit order



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
	orderId := "orderId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformOrdersAPI.SubmitOrder(context.Background(), orderId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformOrdersAPI.SubmitOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitOrder`: CreateOrder200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformOrdersAPI.SubmitOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**orderId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiSubmitOrderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateOrder

> CreateOrder200Response UpdateOrder(ctx, orderId).UpdateOrderRequest(updateOrderRequest).Execute()

Update draft order



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
	orderId := "orderId_example" // string | 
	updateOrderRequest := *openapiclient.NewUpdateOrderRequest() // UpdateOrderRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformOrdersAPI.UpdateOrder(context.Background(), orderId).UpdateOrderRequest(updateOrderRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformOrdersAPI.UpdateOrder``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateOrder`: CreateOrder200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformOrdersAPI.UpdateOrder`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**orderId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateOrderRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateOrderRequest** | [**UpdateOrderRequest**](UpdateOrderRequest.md) |  | 

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

