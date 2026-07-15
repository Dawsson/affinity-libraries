# \PlatformWebhooksAPI

All URIs are relative to *https://api.joinaffinityai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateWebhookEndpoint**](PlatformWebhooksAPI.md#CreateWebhookEndpoint) | **Post** /v1/webhook-endpoints | Create webhook endpoint
[**DeleteWebhookEndpoint**](PlatformWebhooksAPI.md#DeleteWebhookEndpoint) | **Delete** /v1/webhook-endpoints/{endpointId} | Disable webhook endpoint
[**GetWebhookEvent**](PlatformWebhooksAPI.md#GetWebhookEvent) | **Get** /v1/webhook-events/{eventId} | Read webhook event attempts
[**ListWebhookEndpoints**](PlatformWebhooksAPI.md#ListWebhookEndpoints) | **Get** /v1/webhook-endpoints | List webhook endpoints
[**ListWebhookEvents**](PlatformWebhooksAPI.md#ListWebhookEvents) | **Get** /v1/webhook-events | List webhook events
[**ReplayWebhookEvent**](PlatformWebhooksAPI.md#ReplayWebhookEvent) | **Post** /v1/webhook-events/{eventId}/replay | Replay webhook event
[**RotateWebhookEndpointSecret**](PlatformWebhooksAPI.md#RotateWebhookEndpointSecret) | **Post** /v1/webhook-endpoints/{endpointId}/rotate-secret | Rotate webhook signing secret
[**UpdateWebhookEndpoint**](PlatformWebhooksAPI.md#UpdateWebhookEndpoint) | **Patch** /v1/webhook-endpoints/{endpointId} | Update webhook endpoint



## CreateWebhookEndpoint

> CreateWebhookEndpoint200Response CreateWebhookEndpoint(ctx).CreateWebhookEndpointRequest(createWebhookEndpointRequest).Execute()

Create webhook endpoint

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
	createWebhookEndpointRequest := *openapiclient.NewCreateWebhookEndpointRequest() // CreateWebhookEndpointRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformWebhooksAPI.CreateWebhookEndpoint(context.Background()).CreateWebhookEndpointRequest(createWebhookEndpointRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformWebhooksAPI.CreateWebhookEndpoint``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateWebhookEndpoint`: CreateWebhookEndpoint200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformWebhooksAPI.CreateWebhookEndpoint`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateWebhookEndpointRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWebhookEndpointRequest** | [**CreateWebhookEndpointRequest**](CreateWebhookEndpointRequest.md) |  | 

### Return type

[**CreateWebhookEndpoint200Response**](CreateWebhookEndpoint200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteWebhookEndpoint

> DeleteWebhookEndpoint200Response DeleteWebhookEndpoint(ctx, endpointId).Execute()

Disable webhook endpoint

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
	endpointId := "endpointId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformWebhooksAPI.DeleteWebhookEndpoint(context.Background(), endpointId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformWebhooksAPI.DeleteWebhookEndpoint``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteWebhookEndpoint`: DeleteWebhookEndpoint200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformWebhooksAPI.DeleteWebhookEndpoint`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**endpointId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWebhookEndpointRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DeleteWebhookEndpoint200Response**](DeleteWebhookEndpoint200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWebhookEvent

> GetWebhookEvent200Response GetWebhookEvent(ctx, eventId).Execute()

Read webhook event attempts

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
	eventId := "eventId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformWebhooksAPI.GetWebhookEvent(context.Background(), eventId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformWebhooksAPI.GetWebhookEvent``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetWebhookEvent`: GetWebhookEvent200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformWebhooksAPI.GetWebhookEvent`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWebhookEventRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetWebhookEvent200Response**](GetWebhookEvent200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListWebhookEndpoints

> ListWebhookEndpoints200Response ListWebhookEndpoints(ctx).Execute()

List webhook endpoints

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
	resp, r, err := apiClient.PlatformWebhooksAPI.ListWebhookEndpoints(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformWebhooksAPI.ListWebhookEndpoints``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListWebhookEndpoints`: ListWebhookEndpoints200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformWebhooksAPI.ListWebhookEndpoints`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListWebhookEndpointsRequest struct via the builder pattern


### Return type

[**ListWebhookEndpoints200Response**](ListWebhookEndpoints200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListWebhookEvents

> ListWebhookEvents200Response ListWebhookEvents(ctx).Execute()

List webhook events

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
	resp, r, err := apiClient.PlatformWebhooksAPI.ListWebhookEvents(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformWebhooksAPI.ListWebhookEvents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListWebhookEvents`: ListWebhookEvents200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformWebhooksAPI.ListWebhookEvents`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListWebhookEventsRequest struct via the builder pattern


### Return type

[**ListWebhookEvents200Response**](ListWebhookEvents200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplayWebhookEvent

> ReplayWebhookEvent200Response ReplayWebhookEvent(ctx, eventId).Execute()

Replay webhook event

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
	eventId := "eventId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformWebhooksAPI.ReplayWebhookEvent(context.Background(), eventId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformWebhooksAPI.ReplayWebhookEvent``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplayWebhookEvent`: ReplayWebhookEvent200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformWebhooksAPI.ReplayWebhookEvent`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiReplayWebhookEventRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ReplayWebhookEvent200Response**](ReplayWebhookEvent200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RotateWebhookEndpointSecret

> CreateWebhookEndpoint200Response RotateWebhookEndpointSecret(ctx, endpointId).Execute()

Rotate webhook signing secret

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
	endpointId := "endpointId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformWebhooksAPI.RotateWebhookEndpointSecret(context.Background(), endpointId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformWebhooksAPI.RotateWebhookEndpointSecret``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RotateWebhookEndpointSecret`: CreateWebhookEndpoint200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformWebhooksAPI.RotateWebhookEndpointSecret`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**endpointId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRotateWebhookEndpointSecretRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CreateWebhookEndpoint200Response**](CreateWebhookEndpoint200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateWebhookEndpoint

> DeleteWebhookEndpoint200Response UpdateWebhookEndpoint(ctx, endpointId).UpdateWebhookEndpointRequest(updateWebhookEndpointRequest).Execute()

Update webhook endpoint

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
	endpointId := "endpointId_example" // string | 
	updateWebhookEndpointRequest := *openapiclient.NewUpdateWebhookEndpointRequest([]string{"EnabledEvents_example"}) // UpdateWebhookEndpointRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformWebhooksAPI.UpdateWebhookEndpoint(context.Background(), endpointId).UpdateWebhookEndpointRequest(updateWebhookEndpointRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformWebhooksAPI.UpdateWebhookEndpoint``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateWebhookEndpoint`: DeleteWebhookEndpoint200Response
	fmt.Fprintf(os.Stdout, "Response from `PlatformWebhooksAPI.UpdateWebhookEndpoint`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**endpointId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateWebhookEndpointRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateWebhookEndpointRequest** | [**UpdateWebhookEndpointRequest**](UpdateWebhookEndpointRequest.md) |  | 

### Return type

[**DeleteWebhookEndpoint200Response**](DeleteWebhookEndpoint200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

