# GetApiAccess200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiKey** | [**GetApiAccess200ResponseApiKey**](GetApiAccess200ResponseApiKey.md) |  |
**Livemode** | **bool** |  |
**Object** | **string** |  |
**Scopes** | **[]string** |  |
**ServiceAccount** | [**GetApiAccess200ResponseServiceAccount**](GetApiAccess200ResponseServiceAccount.md) |  |

## Methods

### NewGetApiAccess200Response

`func NewGetApiAccess200Response(apiKey GetApiAccess200ResponseApiKey, livemode bool, object string, scopes []string, serviceAccount GetApiAccess200ResponseServiceAccount, ) *GetApiAccess200Response`

NewGetApiAccess200Response instantiates a new GetApiAccess200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetApiAccess200ResponseWithDefaults

`func NewGetApiAccess200ResponseWithDefaults() *GetApiAccess200Response`

NewGetApiAccess200ResponseWithDefaults instantiates a new GetApiAccess200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiKey

`func (o *GetApiAccess200Response) GetApiKey() GetApiAccess200ResponseApiKey`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *GetApiAccess200Response) GetApiKeyOk() (*GetApiAccess200ResponseApiKey, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *GetApiAccess200Response) SetApiKey(v GetApiAccess200ResponseApiKey)`

SetApiKey sets ApiKey field to given value.


### GetLivemode

`func (o *GetApiAccess200Response) GetLivemode() bool`

GetLivemode returns the Livemode field if non-nil, zero value otherwise.

### GetLivemodeOk

`func (o *GetApiAccess200Response) GetLivemodeOk() (*bool, bool)`

GetLivemodeOk returns a tuple with the Livemode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLivemode

`func (o *GetApiAccess200Response) SetLivemode(v bool)`

SetLivemode sets Livemode field to given value.


### GetObject

`func (o *GetApiAccess200Response) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *GetApiAccess200Response) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *GetApiAccess200Response) SetObject(v string)`

SetObject sets Object field to given value.


### GetScopes

`func (o *GetApiAccess200Response) GetScopes() []string`

GetScopes returns the Scopes field if non-nil, zero value otherwise.

### GetScopesOk

`func (o *GetApiAccess200Response) GetScopesOk() (*[]string, bool)`

GetScopesOk returns a tuple with the Scopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopes

`func (o *GetApiAccess200Response) SetScopes(v []string)`

SetScopes sets Scopes field to given value.


### GetServiceAccount

`func (o *GetApiAccess200Response) GetServiceAccount() GetApiAccess200ResponseServiceAccount`

GetServiceAccount returns the ServiceAccount field if non-nil, zero value otherwise.

### GetServiceAccountOk

`func (o *GetApiAccess200Response) GetServiceAccountOk() (*GetApiAccess200ResponseServiceAccount, bool)`

GetServiceAccountOk returns a tuple with the ServiceAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceAccount

`func (o *GetApiAccess200Response) SetServiceAccount(v GetApiAccess200ResponseServiceAccount)`

SetServiceAccount sets ServiceAccount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


