# affinity_sdk.PlatformWebhooksApi

All URIs are relative to *https://api.joinaffinityai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_webhook_endpoint**](PlatformWebhooksApi.md#create_webhook_endpoint) | **POST** /v1/webhook-endpoints | Create webhook endpoint
[**delete_webhook_endpoint**](PlatformWebhooksApi.md#delete_webhook_endpoint) | **DELETE** /v1/webhook-endpoints/{endpointId} | Disable webhook endpoint
[**get_webhook_event**](PlatformWebhooksApi.md#get_webhook_event) | **GET** /v1/webhook-events/{eventId} | Read webhook event attempts
[**list_webhook_endpoints**](PlatformWebhooksApi.md#list_webhook_endpoints) | **GET** /v1/webhook-endpoints | List webhook endpoints
[**list_webhook_events**](PlatformWebhooksApi.md#list_webhook_events) | **GET** /v1/webhook-events | List webhook events
[**replay_webhook_event**](PlatformWebhooksApi.md#replay_webhook_event) | **POST** /v1/webhook-events/{eventId}/replay | Replay webhook event
[**rotate_webhook_endpoint_secret**](PlatformWebhooksApi.md#rotate_webhook_endpoint_secret) | **POST** /v1/webhook-endpoints/{endpointId}/rotate-secret | Rotate webhook signing secret
[**update_webhook_endpoint**](PlatformWebhooksApi.md#update_webhook_endpoint) | **PATCH** /v1/webhook-endpoints/{endpointId} | Update webhook endpoint


# **create_webhook_endpoint**
> CreateWebhookEndpoint200Response create_webhook_endpoint(create_webhook_endpoint_request)

Create webhook endpoint

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.create_webhook_endpoint200_response import CreateWebhookEndpoint200Response
from affinity_sdk.models.create_webhook_endpoint_request import CreateWebhookEndpointRequest
from affinity_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.joinaffinityai.com
# See configuration.py for a list of all supported configuration parameters.
configuration = affinity_sdk.Configuration(
    host = "https://api.joinaffinityai.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = affinity_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: affinityApiKey
configuration.api_key['affinityApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['affinityApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with affinity_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = affinity_sdk.PlatformWebhooksApi(api_client)
    create_webhook_endpoint_request = affinity_sdk.CreateWebhookEndpointRequest() # CreateWebhookEndpointRequest | 

    try:
        # Create webhook endpoint
        api_response = api_instance.create_webhook_endpoint(create_webhook_endpoint_request)
        print("The response of PlatformWebhooksApi->create_webhook_endpoint:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformWebhooksApi->create_webhook_endpoint: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_webhook_endpoint_request** | [**CreateWebhookEndpointRequest**](CreateWebhookEndpointRequest.md)|  | 

### Return type

[**CreateWebhookEndpoint200Response**](CreateWebhookEndpoint200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | The request could not be completed. |  -  |
**401** | The request could not be completed. |  -  |
**403** | The request could not be completed. |  -  |
**404** | The request could not be completed. |  -  |
**409** | The request could not be completed. |  -  |
**422** | The request could not be completed. |  -  |
**429** | The request could not be completed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_webhook_endpoint**
> DeleteWebhookEndpoint200Response delete_webhook_endpoint(endpoint_id)

Disable webhook endpoint

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.delete_webhook_endpoint200_response import DeleteWebhookEndpoint200Response
from affinity_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.joinaffinityai.com
# See configuration.py for a list of all supported configuration parameters.
configuration = affinity_sdk.Configuration(
    host = "https://api.joinaffinityai.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = affinity_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: affinityApiKey
configuration.api_key['affinityApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['affinityApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with affinity_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = affinity_sdk.PlatformWebhooksApi(api_client)
    endpoint_id = 'endpoint_id_example' # str | 

    try:
        # Disable webhook endpoint
        api_response = api_instance.delete_webhook_endpoint(endpoint_id)
        print("The response of PlatformWebhooksApi->delete_webhook_endpoint:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformWebhooksApi->delete_webhook_endpoint: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**|  | 

### Return type

[**DeleteWebhookEndpoint200Response**](DeleteWebhookEndpoint200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | The request could not be completed. |  -  |
**401** | The request could not be completed. |  -  |
**403** | The request could not be completed. |  -  |
**404** | The request could not be completed. |  -  |
**409** | The request could not be completed. |  -  |
**422** | The request could not be completed. |  -  |
**429** | The request could not be completed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_webhook_event**
> GetWebhookEvent200Response get_webhook_event(event_id)

Read webhook event attempts

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.get_webhook_event200_response import GetWebhookEvent200Response
from affinity_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.joinaffinityai.com
# See configuration.py for a list of all supported configuration parameters.
configuration = affinity_sdk.Configuration(
    host = "https://api.joinaffinityai.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = affinity_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: affinityApiKey
configuration.api_key['affinityApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['affinityApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with affinity_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = affinity_sdk.PlatformWebhooksApi(api_client)
    event_id = 'event_id_example' # str | 

    try:
        # Read webhook event attempts
        api_response = api_instance.get_webhook_event(event_id)
        print("The response of PlatformWebhooksApi->get_webhook_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformWebhooksApi->get_webhook_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **str**|  | 

### Return type

[**GetWebhookEvent200Response**](GetWebhookEvent200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | The request could not be completed. |  -  |
**401** | The request could not be completed. |  -  |
**403** | The request could not be completed. |  -  |
**404** | The request could not be completed. |  -  |
**409** | The request could not be completed. |  -  |
**422** | The request could not be completed. |  -  |
**429** | The request could not be completed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_webhook_endpoints**
> ListWebhookEndpoints200Response list_webhook_endpoints()

List webhook endpoints

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.list_webhook_endpoints200_response import ListWebhookEndpoints200Response
from affinity_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.joinaffinityai.com
# See configuration.py for a list of all supported configuration parameters.
configuration = affinity_sdk.Configuration(
    host = "https://api.joinaffinityai.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = affinity_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: affinityApiKey
configuration.api_key['affinityApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['affinityApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with affinity_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = affinity_sdk.PlatformWebhooksApi(api_client)

    try:
        # List webhook endpoints
        api_response = api_instance.list_webhook_endpoints()
        print("The response of PlatformWebhooksApi->list_webhook_endpoints:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformWebhooksApi->list_webhook_endpoints: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListWebhookEndpoints200Response**](ListWebhookEndpoints200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | The request could not be completed. |  -  |
**401** | The request could not be completed. |  -  |
**403** | The request could not be completed. |  -  |
**404** | The request could not be completed. |  -  |
**409** | The request could not be completed. |  -  |
**422** | The request could not be completed. |  -  |
**429** | The request could not be completed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_webhook_events**
> ListWebhookEvents200Response list_webhook_events()

List webhook events

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.list_webhook_events200_response import ListWebhookEvents200Response
from affinity_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.joinaffinityai.com
# See configuration.py for a list of all supported configuration parameters.
configuration = affinity_sdk.Configuration(
    host = "https://api.joinaffinityai.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = affinity_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: affinityApiKey
configuration.api_key['affinityApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['affinityApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with affinity_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = affinity_sdk.PlatformWebhooksApi(api_client)

    try:
        # List webhook events
        api_response = api_instance.list_webhook_events()
        print("The response of PlatformWebhooksApi->list_webhook_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformWebhooksApi->list_webhook_events: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListWebhookEvents200Response**](ListWebhookEvents200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | The request could not be completed. |  -  |
**401** | The request could not be completed. |  -  |
**403** | The request could not be completed. |  -  |
**404** | The request could not be completed. |  -  |
**409** | The request could not be completed. |  -  |
**422** | The request could not be completed. |  -  |
**429** | The request could not be completed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replay_webhook_event**
> ReplayWebhookEvent200Response replay_webhook_event(event_id)

Replay webhook event

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.replay_webhook_event200_response import ReplayWebhookEvent200Response
from affinity_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.joinaffinityai.com
# See configuration.py for a list of all supported configuration parameters.
configuration = affinity_sdk.Configuration(
    host = "https://api.joinaffinityai.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = affinity_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: affinityApiKey
configuration.api_key['affinityApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['affinityApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with affinity_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = affinity_sdk.PlatformWebhooksApi(api_client)
    event_id = 'event_id_example' # str | 

    try:
        # Replay webhook event
        api_response = api_instance.replay_webhook_event(event_id)
        print("The response of PlatformWebhooksApi->replay_webhook_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformWebhooksApi->replay_webhook_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **str**|  | 

### Return type

[**ReplayWebhookEvent200Response**](ReplayWebhookEvent200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | The request could not be completed. |  -  |
**401** | The request could not be completed. |  -  |
**403** | The request could not be completed. |  -  |
**404** | The request could not be completed. |  -  |
**409** | The request could not be completed. |  -  |
**422** | The request could not be completed. |  -  |
**429** | The request could not be completed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rotate_webhook_endpoint_secret**
> CreateWebhookEndpoint200Response rotate_webhook_endpoint_secret(endpoint_id)

Rotate webhook signing secret

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.create_webhook_endpoint200_response import CreateWebhookEndpoint200Response
from affinity_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.joinaffinityai.com
# See configuration.py for a list of all supported configuration parameters.
configuration = affinity_sdk.Configuration(
    host = "https://api.joinaffinityai.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = affinity_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: affinityApiKey
configuration.api_key['affinityApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['affinityApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with affinity_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = affinity_sdk.PlatformWebhooksApi(api_client)
    endpoint_id = 'endpoint_id_example' # str | 

    try:
        # Rotate webhook signing secret
        api_response = api_instance.rotate_webhook_endpoint_secret(endpoint_id)
        print("The response of PlatformWebhooksApi->rotate_webhook_endpoint_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformWebhooksApi->rotate_webhook_endpoint_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**|  | 

### Return type

[**CreateWebhookEndpoint200Response**](CreateWebhookEndpoint200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | The request could not be completed. |  -  |
**401** | The request could not be completed. |  -  |
**403** | The request could not be completed. |  -  |
**404** | The request could not be completed. |  -  |
**409** | The request could not be completed. |  -  |
**422** | The request could not be completed. |  -  |
**429** | The request could not be completed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_webhook_endpoint**
> DeleteWebhookEndpoint200Response update_webhook_endpoint(endpoint_id, update_webhook_endpoint_request)

Update webhook endpoint

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.delete_webhook_endpoint200_response import DeleteWebhookEndpoint200Response
from affinity_sdk.models.update_webhook_endpoint_request import UpdateWebhookEndpointRequest
from affinity_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.joinaffinityai.com
# See configuration.py for a list of all supported configuration parameters.
configuration = affinity_sdk.Configuration(
    host = "https://api.joinaffinityai.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: bearerAuth
configuration = affinity_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Configure API key authorization: affinityApiKey
configuration.api_key['affinityApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['affinityApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with affinity_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = affinity_sdk.PlatformWebhooksApi(api_client)
    endpoint_id = 'endpoint_id_example' # str | 
    update_webhook_endpoint_request = affinity_sdk.UpdateWebhookEndpointRequest() # UpdateWebhookEndpointRequest | 

    try:
        # Update webhook endpoint
        api_response = api_instance.update_webhook_endpoint(endpoint_id, update_webhook_endpoint_request)
        print("The response of PlatformWebhooksApi->update_webhook_endpoint:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformWebhooksApi->update_webhook_endpoint: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**|  | 
 **update_webhook_endpoint_request** | [**UpdateWebhookEndpointRequest**](UpdateWebhookEndpointRequest.md)|  | 

### Return type

[**DeleteWebhookEndpoint200Response**](DeleteWebhookEndpoint200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | The request could not be completed. |  -  |
**401** | The request could not be completed. |  -  |
**403** | The request could not be completed. |  -  |
**404** | The request could not be completed. |  -  |
**409** | The request could not be completed. |  -  |
**422** | The request could not be completed. |  -  |
**429** | The request could not be completed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

