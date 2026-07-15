# affinity_sdk.PracticesApi

All URIs are relative to *https://api.joinaffinityai.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_practice**](PracticesApi.md#create_practice) | **POST** /v1/practices | Create practice
[**get_practice**](PracticesApi.md#get_practice) | **GET** /v1/practices/{practiceId} | Read practice
[**list_practices**](PracticesApi.md#list_practices) | **GET** /v1/practices | List practices
[**update_practice**](PracticesApi.md#update_practice) | **PATCH** /v1/practices/{practiceId} | Update practice


# **create_practice**
> CreatePractice200Response create_practice(create_practice_request)

Create practice

Creates a platform-owned practice. Send Idempotency-Key to safely retry network failures.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.create_practice200_response import CreatePractice200Response
from affinity_sdk.models.create_practice_request import CreatePracticeRequest
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

    try:
        # Create practice
        api_response = api_instance.create_practice(create_practice_request)
        print("The response of PracticesApi->create_practice:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PracticesApi->create_practice: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_practice_request** | [**CreatePracticeRequest**](CreatePracticeRequest.md)|  | 

### Return type

[**CreatePractice200Response**](CreatePractice200Response.md)

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

# **get_practice**
> CreatePractice200Response get_practice(practice_id)

Read practice

Reads a platform-owned practice by id.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.create_practice200_response import CreatePractice200Response
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

[**CreatePractice200Response**](CreatePractice200Response.md)

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

# **list_practices**
> ListPractices200Response list_practices()

List practices

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.list_practices200_response import ListPractices200Response
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

    try:
        # List practices
        api_response = api_instance.list_practices()
        print("The response of PracticesApi->list_practices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PracticesApi->list_practices: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListPractices200Response**](ListPractices200Response.md)

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

# **update_practice**
> CreatePractice200Response update_practice(practice_id)

Update practice

Updates a platform-owned practice. Send Idempotency-Key for safe retries.

### Example

* Bearer Authentication (bearerAuth):
* Api Key Authentication (affinityApiKey):

```python
import affinity_sdk
from affinity_sdk.models.create_practice200_response import CreatePractice200Response
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
        # Update practice
        api_response = api_instance.update_practice(practice_id)
        print("The response of PracticesApi->update_practice:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PracticesApi->update_practice: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **practice_id** | **str**|  | 

### Return type

[**CreatePractice200Response**](CreatePractice200Response.md)

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

