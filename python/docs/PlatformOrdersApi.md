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
> CreateOrder200Response cancel_order(order_id, cancel_order_request)

Cancel order

Cancels an order before shipment. Corrections use cancel-and-replace.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.cancel_order_request import CancelOrderRequest
from affinity_sdk.models.create_order200_response import CreateOrder200Response
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

    try:
        # Cancel order
        api_response = api_instance.cancel_order(order_id, cancel_order_request)
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

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)

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

# **create_order**
> CreateOrder200Response create_order(create_order_request)

Create order

Creates an editable synthetic draft in test mode or releases an existing signed immutable prescription version in live mode.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.create_order200_response import CreateOrder200Response
from affinity_sdk.models.create_order_request import CreateOrderRequest
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
    create_order_request = {"catalogItemId":"catalog_item_123","practiceId":"3f4bd943-a34d-4d4c-aa41-00556569a71d","directions":"Inject 0.25 mL subcutaneously once weekly.","externalOrderId":"order_123","patient":{"address":{"city":"Los Angeles","country":"US","line1":"100 Main Street","line2":null,"postalCode":"90001","state":"CA"},"dateOfBirth":"1988-05-12","email":"patient@example.com","externalPatientId":"patient_123","name":"Example Patient","state":"CA"},"prescriber":{"credentials":"MD","licenseStates":["CA"],"name":"Alex Morgan","npi":"1234567893"},"prescription":{"authorized":true,"signedAt":"2026-07-10T12:00:00.000Z"},"quantity":1} # CreateOrderRequest | 

    try:
        # Create order
        api_response = api_instance.create_order(create_order_request)
        print("The response of PlatformOrdersApi->create_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformOrdersApi->create_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_order_request** | [**CreateOrderRequest**](CreateOrderRequest.md)|  | 

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)

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

# **get_order**
> CreateOrder200Response get_order(order_id)

Read order

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.create_order200_response import CreateOrder200Response
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

[**CreateOrder200Response**](CreateOrder200Response.md)

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

# **list_order_events**
> ListOrderEvents200Response list_order_events(order_id)

List order events

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.list_order_events200_response import ListOrderEvents200Response
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
        # List order events
        api_response = api_instance.list_order_events(order_id)
        print("The response of PlatformOrdersApi->list_order_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformOrdersApi->list_order_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 

### Return type

[**ListOrderEvents200Response**](ListOrderEvents200Response.md)

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

# **list_orders**
> ListOrders200Response list_orders(external_order_id=external_order_id, patient_external_id=patient_external_id)

List platform orders

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.list_orders200_response import ListOrders200Response
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

    try:
        # List platform orders
        api_response = api_instance.list_orders(external_order_id=external_order_id, patient_external_id=patient_external_id)
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

### Return type

[**ListOrders200Response**](ListOrders200Response.md)

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

# **submit_order**
> CreateOrder200Response submit_order(order_id)

Submit order

Validates and submits an immutable order to the Affinity review queue.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.create_order200_response import CreateOrder200Response
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
        # Submit order
        api_response = api_instance.submit_order(order_id)
        print("The response of PlatformOrdersApi->submit_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlatformOrdersApi->submit_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**|  | 

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)

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

# **update_order**
> CreateOrder200Response update_order(order_id, update_order_request)

Update draft order

Updates an order while it remains a draft.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.create_order200_response import CreateOrder200Response
from affinity_sdk.models.update_order_request import UpdateOrderRequest
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

    try:
        # Update draft order
        api_response = api_instance.update_order(order_id, update_order_request)
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

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)

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

