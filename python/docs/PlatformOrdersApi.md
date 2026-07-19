# affinity_sdk.PlatformOrdersApi

All URIs are relative to *https://api.joinaffinityai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_order**](PlatformOrdersApi.md#cancel_order) | **POST** /v1/orders/{orderId}/cancel | Cancel order
[**create_order**](PlatformOrdersApi.md#create_order) | **POST** /v1/orders | Create order
[**get_order**](PlatformOrdersApi.md#get_order) | **GET** /v1/orders/{orderId} | Read order
[**list_order_events**](PlatformOrdersApi.md#list_order_events) | **GET** /v1/orders/{orderId}/events | List order events
[**list_orders**](PlatformOrdersApi.md#list_orders) | **GET** /v1/orders | List platform orders
[**submit_order**](PlatformOrdersApi.md#submit_order) | **POST** /v1/orders/{orderId}/submit | Submit order
[**update_order**](PlatformOrdersApi.md#update_order) | **PATCH** /v1/orders/{orderId} | Update draft order


# **cancel_order**
> CancelOrderResponse cancel_order(order_id, cancel_order_request, idempotency_key=idempotency_key)

Cancel order

Cancels an order before shipment. To correct an order, cancel it and create a replacement.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.cancel_order_request import CancelOrderRequest
from affinity_sdk.models.cancel_order_response import CancelOrderResponse
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
    api_instance = affinity_sdk.PlatformOrdersApi(api_client)
    order_id = 'order_id_example' # str |
    cancel_order_request = affinity_sdk.CancelOrderRequest() # CancelOrderRequest |
    idempotency_key = 'idempotency_key_example' # str | Unique operation key required for every mutation. (optional)

    try:
        # Cancel order
        api_response = api_instance.cancel_order(order_id, cancel_order_request, idempotency_key=idempotency_key)
        print("The response of PlatformOrdersApi->cancel_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformOrdersApi->cancel_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  |
 **cancel_order_request** | [**CancelOrderRequest**](CancelOrderRequest.md)|  |
 **idempotency_key** | **str**| Unique operation key required for every mutation. | [optional]

### Return type

[**CancelOrderResponse**](CancelOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**400** | Bad request |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**401** | Unauthorized |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**403** | Forbidden |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**404** | Not found |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**409** | Conflict |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**429** | Too many requests |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**500** | Internal server error |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_order**
> CreateOrderResponse create_order(create_order_request, idempotency_key=idempotency_key)

Create order

Creates an editable test draft. In live mode, it releases an existing signed prescription version.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.create_order_request import CreateOrderRequest
from affinity_sdk.models.create_order_response import CreateOrderResponse
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
    api_instance = affinity_sdk.PlatformOrdersApi(api_client)
    create_order_request = {"catalogItemId":"cat_01j00000000000000000000000","practiceId":"prac_01j00000000000000000000000","directions":"Inject 0.25 mL subcutaneously once weekly.","externalOrderId":"order_123","patient":{"address":{"city":"Los Angeles","country":"US","line1":"100 Main Street","line2":null,"postalCode":"90001","state":"CA"},"dateOfBirth":"1988-05-12","email":"patient@example.com","externalPatientId":"patient_123","name":"Example Patient","state":"CA"},"prescriber":{"credentials":"MD","licenseStates":["CA"],"name":"Alex Morgan","npi":"1234567893"},"prescription":{"authorized":true,"signedAt":"2026-07-10T12:00:00.000Z"},"quantity":1} # CreateOrderRequest |
    idempotency_key = 'idempotency_key_example' # str | Unique operation key required for every mutation. (optional)

    try:
        # Create order
        api_response = api_instance.create_order(create_order_request, idempotency_key=idempotency_key)
        print("The response of PlatformOrdersApi->create_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformOrdersApi->create_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_order_request** | [**CreateOrderRequest**](CreateOrderRequest.md)|  |
 **idempotency_key** | **str**| Unique operation key required for every mutation. | [optional]

### Return type

[**CreateOrderResponse**](CreateOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**400** | Bad request |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**401** | Unauthorized |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**403** | Forbidden |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**409** | Conflict |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**429** | Too many requests |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**500** | Internal server error |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_order**
> GetOrderResponse get_order(order_id)

Read order

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.get_order_response import GetOrderResponse
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
    api_instance = affinity_sdk.PlatformOrdersApi(api_client)
    order_id = 'order_id_example' # str |

    try:
        # Read order
        api_response = api_instance.get_order(order_id)
        print("The response of PlatformOrdersApi->get_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformOrdersApi->get_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  |

### Return type

[**GetOrderResponse**](GetOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**400** | Bad request |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**401** | Unauthorized |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**403** | Forbidden |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**404** | Not found |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**429** | Too many requests |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**500** | Internal server error |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_order_events**
> ListOrderEventsResponse list_order_events(order_id, limit=limit, starting_after=starting_after, ending_before=ending_before)

List order events

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.list_order_events_response import ListOrderEventsResponse
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
    api_instance = affinity_sdk.PlatformOrdersApi(api_client)
    order_id = 'order_id_example' # str |
    limit = 25 # int |  (optional) (default to 25)
    starting_after = 'starting_after_example' # str |  (optional)
    ending_before = 'ending_before_example' # str |  (optional)

    try:
        # List order events
        api_response = api_instance.list_order_events(order_id, limit=limit, starting_after=starting_after, ending_before=ending_before)
        print("The response of PlatformOrdersApi->list_order_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformOrdersApi->list_order_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  |
 **limit** | **int**|  | [optional] [default to 25]
 **starting_after** | **str**|  | [optional]
 **ending_before** | **str**|  | [optional]

### Return type

[**ListOrderEventsResponse**](ListOrderEventsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**400** | Bad request |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**401** | Unauthorized |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**403** | Forbidden |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**404** | Not found |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**429** | Too many requests |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**500** | Internal server error |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_orders**
> ListOrdersResponse list_orders(external_order_id=external_order_id, patient_external_id=patient_external_id, limit=limit, starting_after=starting_after, ending_before=ending_before, practice_id=practice_id, status=status)

List platform orders

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.list_orders_response import ListOrdersResponse
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
    api_instance = affinity_sdk.PlatformOrdersApi(api_client)
    external_order_id = 'external_order_id_example' # str |  (optional)
    patient_external_id = 'patient_external_id_example' # str |  (optional)
    limit = 100 # int |  (optional) (default to 100)
    starting_after = 'starting_after_example' # str |  (optional)
    ending_before = 'ending_before_example' # str |  (optional)
    practice_id = 'practice_id_example' # str |  (optional)
    status = 'status_example' # str |  (optional)

    try:
        # List platform orders
        api_response = api_instance.list_orders(external_order_id=external_order_id, patient_external_id=patient_external_id, limit=limit, starting_after=starting_after, ending_before=ending_before, practice_id=practice_id, status=status)
        print("The response of PlatformOrdersApi->list_orders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformOrdersApi->list_orders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_order_id** | **str**|  | [optional]
 **patient_external_id** | **str**|  | [optional]
 **limit** | **int**|  | [optional] [default to 100]
 **starting_after** | **str**|  | [optional]
 **ending_before** | **str**|  | [optional]
 **practice_id** | **str**|  | [optional]
 **status** | **str**|  | [optional]

### Return type

[**ListOrdersResponse**](ListOrdersResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**400** | Bad request |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**401** | Unauthorized |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**403** | Forbidden |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**429** | Too many requests |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**500** | Internal server error |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_order**
> SubmitOrderResponse submit_order(order_id, idempotency_key=idempotency_key)

Submit order

Checks a test draft and submits it to the test review queue.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.submit_order_response import SubmitOrderResponse
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
    api_instance = affinity_sdk.PlatformOrdersApi(api_client)
    order_id = 'order_id_example' # str |
    idempotency_key = 'idempotency_key_example' # str | Unique operation key required for every mutation. (optional)

    try:
        # Submit order
        api_response = api_instance.submit_order(order_id, idempotency_key=idempotency_key)
        print("The response of PlatformOrdersApi->submit_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformOrdersApi->submit_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  |
 **idempotency_key** | **str**| Unique operation key required for every mutation. | [optional]

### Return type

[**SubmitOrderResponse**](SubmitOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**400** | Bad request |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**401** | Unauthorized |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**403** | Forbidden |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**404** | Not found |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**409** | Conflict |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**429** | Too many requests |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**500** | Internal server error |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_order**
> UpdateOrderResponse update_order(order_id, update_order_request, idempotency_key=idempotency_key)

Update draft order

Updates a test order that is in the draft state.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.update_order_request import UpdateOrderRequest
from affinity_sdk.models.update_order_response import UpdateOrderResponse
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
    api_instance = affinity_sdk.PlatformOrdersApi(api_client)
    order_id = 'order_id_example' # str |
    update_order_request = affinity_sdk.UpdateOrderRequest() # UpdateOrderRequest |
    idempotency_key = 'idempotency_key_example' # str | Unique operation key required for every mutation. (optional)

    try:
        # Update draft order
        api_response = api_instance.update_order(order_id, update_order_request, idempotency_key=idempotency_key)
        print("The response of PlatformOrdersApi->update_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformOrdersApi->update_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  |
 **update_order_request** | [**UpdateOrderRequest**](UpdateOrderRequest.md)|  |
 **idempotency_key** | **str**| Unique operation key required for every mutation. | [optional]

### Return type

[**UpdateOrderResponse**](UpdateOrderResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth), [affinityApiKey](../README.md#affinityApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**400** | Bad request |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**401** | Unauthorized |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**403** | Forbidden |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**404** | Not found |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**409** | Conflict |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**429** | Too many requests |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |
**500** | Internal server error |  * Affinity-Version -  <br>  * RateLimit-Limit -  <br>  * RateLimit-Remaining -  <br>  * RateLimit-Reset -  <br>  * Request-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

