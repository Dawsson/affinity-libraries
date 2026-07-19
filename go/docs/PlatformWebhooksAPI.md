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

> CreateWebhookEndpointResponse CreateWebhookEndpoint(ctx).CreateWebhookEndpointRequest(createWebhookEndpointRequest).IdempotencyKey(idempotencyKey).Execute()

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
	idempotencyKey := "idempotencyKey_example" // string | Unique operation key required for every mutation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformWebhooksAPI.CreateWebhookEndpoint(context.Background()).CreateWebhookEndpointRequest(createWebhookEndpointRequest).IdempotencyKey(idempotencyKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformWebhooksAPI.CreateWebhookEndpoint``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateWebhookEndpoint`: CreateWebhookEndpointResponse
	fmt.Fprintf(os.Stdout, "Response from `PlatformWebhooksAPI.CreateWebhookEndpoint`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateWebhookEndpointRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWebhookEndpointRequest** | [**CreateWebhookEndpointRequest**](CreateWebhookEndpointRequest.md) |  |
 **idempotencyKey** | **string** | Unique operation key required for every mutation. |

### Return type

[**CreateWebhookEndpointResponse**](CreateWebhookEndpointResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteWebhookEndpoint

> DeleteWebhookEndpointResponse DeleteWebhookEndpoint(ctx, endpointId).IdempotencyKey(idempotencyKey).Execute()

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
	idempotencyKey := "idempotencyKey_example" // string | Unique operation key required for every mutation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformWebhooksAPI.DeleteWebhookEndpoint(context.Background(), endpointId).IdempotencyKey(idempotencyKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformWebhooksAPI.DeleteWebhookEndpoint``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteWebhookEndpoint`: DeleteWebhookEndpointResponse
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

 **idempotencyKey** | **string** | Unique operation key required for every mutation. |

### Return type

[**DeleteWebhookEndpointResponse**](DeleteWebhookEndpointResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWebhookEvent

> GetWebhookEventResponse GetWebhookEvent(ctx, eventId).Execute()

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
	// response from `GetWebhookEvent`: GetWebhookEventResponse
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

[**GetWebhookEventResponse**](GetWebhookEventResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListWebhookEndpoints

> ListWebhookEndpointsResponse ListWebhookEndpoints(ctx).Limit(limit).StartingAfter(startingAfter).EndingBefore(endingBefore).Execute()

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
	limit := int32(56) // int32 |  (optional) (default to 25)
	startingAfter := "startingAfter_example" // string |  (optional)
	endingBefore := "endingBefore_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformWebhooksAPI.ListWebhookEndpoints(context.Background()).Limit(limit).StartingAfter(startingAfter).EndingBefore(endingBefore).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformWebhooksAPI.ListWebhookEndpoints``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListWebhookEndpoints`: ListWebhookEndpointsResponse
	fmt.Fprintf(os.Stdout, "Response from `PlatformWebhooksAPI.ListWebhookEndpoints`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListWebhookEndpointsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** |  | [default to 25]
 **startingAfter** | **string** |  |
 **endingBefore** | **string** |  |

### Return type

[**ListWebhookEndpointsResponse**](ListWebhookEndpointsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListWebhookEvents

> ListWebhookEventsResponse ListWebhookEvents(ctx).Limit(limit).Status(status).StartingAfter(startingAfter).EndingBefore(endingBefore).Execute()

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
	limit := int32(56) // int32 |  (optional) (default to 25)
	status := "status_example" // string |  (optional) (default to "all")
	startingAfter := "startingAfter_example" // string |  (optional)
	endingBefore := "endingBefore_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformWebhooksAPI.ListWebhookEvents(context.Background()).Limit(limit).Status(status).StartingAfter(startingAfter).EndingBefore(endingBefore).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformWebhooksAPI.ListWebhookEvents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListWebhookEvents`: ListWebhookEventsResponse
	fmt.Fprintf(os.Stdout, "Response from `PlatformWebhooksAPI.ListWebhookEvents`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListWebhookEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** |  | [default to 25]
 **status** | **string** |  | [default to &quot;all&quot;]
 **startingAfter** | **string** |  |
 **endingBefore** | **string** |  |

### Return type

[**ListWebhookEventsResponse**](ListWebhookEventsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReplayWebhookEvent

> ReplayWebhookEventResponse ReplayWebhookEvent(ctx, eventId).IdempotencyKey(idempotencyKey).Execute()

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
	idempotencyKey := "idempotencyKey_example" // string | Unique operation key required for every mutation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformWebhooksAPI.ReplayWebhookEvent(context.Background(), eventId).IdempotencyKey(idempotencyKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformWebhooksAPI.ReplayWebhookEvent``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReplayWebhookEvent`: ReplayWebhookEventResponse
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

 **idempotencyKey** | **string** | Unique operation key required for every mutation. |

### Return type

[**ReplayWebhookEventResponse**](ReplayWebhookEventResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RotateWebhookEndpointSecret

> RotateWebhookEndpointSecretResponse RotateWebhookEndpointSecret(ctx, endpointId).IdempotencyKey(idempotencyKey).Execute()

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
	idempotencyKey := "idempotencyKey_example" // string | Unique operation key required for every mutation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformWebhooksAPI.RotateWebhookEndpointSecret(context.Background(), endpointId).IdempotencyKey(idempotencyKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformWebhooksAPI.RotateWebhookEndpointSecret``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RotateWebhookEndpointSecret`: RotateWebhookEndpointSecretResponse
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

 **idempotencyKey** | **string** | Unique operation key required for every mutation. |

### Return type

[**RotateWebhookEndpointSecretResponse**](RotateWebhookEndpointSecretResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateWebhookEndpoint

> UpdateWebhookEndpointResponse UpdateWebhookEndpoint(ctx, endpointId).UpdateWebhookEndpointRequest(updateWebhookEndpointRequest).IdempotencyKey(idempotencyKey).Execute()

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
	idempotencyKey := "idempotencyKey_example" // string | Unique operation key required for every mutation. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PlatformWebhooksAPI.UpdateWebhookEndpoint(context.Background(), endpointId).UpdateWebhookEndpointRequest(updateWebhookEndpointRequest).IdempotencyKey(idempotencyKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PlatformWebhooksAPI.UpdateWebhookEndpoint``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateWebhookEndpoint`: UpdateWebhookEndpointResponse
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
 **idempotencyKey** | **string** | Unique operation key required for every mutation. |

### Return type

[**UpdateWebhookEndpointResponse**](UpdateWebhookEndpointResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

