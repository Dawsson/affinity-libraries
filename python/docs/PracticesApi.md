# affinity_sdk.PracticesApi

All URIs are relative to *https://api.joinaffinityai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_practice**](PracticesApi.md#create_practice) | **POST** /v1/practices | Create practice
[**get_practice**](PracticesApi.md#get_practice) | **GET** /v1/practices/{practiceId} | Read practice
[**list_practices**](PracticesApi.md#list_practices) | **GET** /v1/practices | List practices
[**update_practice**](PracticesApi.md#update_practice) | **PATCH** /v1/practices/{practiceId} | Update practice


# **create_practice**
> CreatePracticeResponse create_practice(create_practice_request, idempotency_key=idempotency_key)

Create practice

Creates a practice for the platform. Send Idempotency-Key when you retry the same request.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.create_practice_request import CreatePracticeRequest
from affinity_sdk.models.create_practice_response import CreatePracticeResponse
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
    api_instance = affinity_sdk.PracticesApi(api_client)
    create_practice_request = {"address":{"city":"Los Angeles","country":"US","line1":"100 Practice Way","line2":null,"postalCode":"90001","state":"CA"},"attestations":{"authorizedPracticeRelationship":true,"authorizedPhiTransfer":true,"minimumNecessaryPhi":true,"providerDataAccuracy":true},"complianceContact":null,"externalId":"practice_123","legalName":"Example Medical Group PLLC","metadata":{},"name":"Example Medical Group","prescribers":[{"credentials":"MD","licenseStates":["CA"],"name":"Alex Morgan","npi":"1234567893"}],"primaryContact":{"email":"operations@example-practice.com","name":"Jordan Lee","phone":null},"supportEmail":"support@example-practice.com","supportPhone":null,"timezone":"America/Los_Angeles"} # CreatePracticeRequest |
    idempotency_key = 'idempotency_key_example' # str | Unique operation key required for every mutation. (optional)

    try:
        # Create practice
        api_response = api_instance.create_practice(create_practice_request, idempotency_key=idempotency_key)
        print("The response of PracticesApi->create_practice:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PracticesApi->create_practice: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_practice_request** | [**CreatePracticeRequest**](CreatePracticeRequest.md)|  |
 **idempotency_key** | **str**| Unique operation key required for every mutation. | [optional]

### Return type

[**CreatePracticeResponse**](CreatePracticeResponse.md)

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

# **get_practice**
> GetPracticeResponse get_practice(practice_id)

Read practice

Returns one practice that belongs to the platform.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.get_practice_response import GetPracticeResponse
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
    api_instance = affinity_sdk.PracticesApi(api_client)
    practice_id = 'practice_id_example' # str |

    try:
        # Read practice
        api_response = api_instance.get_practice(practice_id)
        print("The response of PracticesApi->get_practice:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PracticesApi->get_practice: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **practice_id** | **str**|  |

### Return type

[**GetPracticeResponse**](GetPracticeResponse.md)

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

# **list_practices**
> ListPracticesResponse list_practices(limit=limit, starting_after=starting_after, ending_before=ending_before)

List practices

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.list_practices_response import ListPracticesResponse
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
    api_instance = affinity_sdk.PracticesApi(api_client)
    limit = 25 # int |  (optional) (default to 25)
    starting_after = 'starting_after_example' # str |  (optional)
    ending_before = 'ending_before_example' # str |  (optional)

    try:
        # List practices
        api_response = api_instance.list_practices(limit=limit, starting_after=starting_after, ending_before=ending_before)
        print("The response of PracticesApi->list_practices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PracticesApi->list_practices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**|  | [optional] [default to 25]
 **starting_after** | **str**|  | [optional]
 **ending_before** | **str**|  | [optional]

### Return type

[**ListPracticesResponse**](ListPracticesResponse.md)

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

# **update_practice**
> UpdatePracticeResponse update_practice(practice_id, update_practice_request, idempotency_key=idempotency_key)

Update practice

Updates one practice that belongs to the platform. Send Idempotency-Key when you retry the same request.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.update_practice_request import UpdatePracticeRequest
from affinity_sdk.models.update_practice_response import UpdatePracticeResponse
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
    api_instance = affinity_sdk.PracticesApi(api_client)
    practice_id = 'practice_id_example' # str |
    update_practice_request = affinity_sdk.UpdatePracticeRequest() # UpdatePracticeRequest |
    idempotency_key = 'idempotency_key_example' # str | Unique operation key required for every mutation. (optional)

    try:
        # Update practice
        api_response = api_instance.update_practice(practice_id, update_practice_request, idempotency_key=idempotency_key)
        print("The response of PracticesApi->update_practice:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PracticesApi->update_practice: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **practice_id** | **str**|  |
 **update_practice_request** | [**UpdatePracticeRequest**](UpdatePracticeRequest.md)|  |
 **idempotency_key** | **str**| Unique operation key required for every mutation. | [optional]

### Return type

[**UpdatePracticeResponse**](UpdatePracticeResponse.md)

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

