# GetApiAccessResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiKey** | [**GetApiAccessResponseApiKey**](GetApiAccessResponseApiKey.md) |  |
**Livemode** | **bool** |  |
**Object** | **string** |  |
**Scopes** | **[]string** |  |
**ServiceAccount** | [**GetApiAccessResponseServiceAccount**](GetApiAccessResponseServiceAccount.md) |  |

## Methods

### NewGetApiAccessResponse

`func NewGetApiAccessResponse(apiKey GetApiAccessResponseApiKey, livemode bool, object string, scopes []string, serviceAccount GetApiAccessResponseServiceAccount, ) *GetApiAccessResponse`

NewGetApiAccessResponse instantiates a new GetApiAccessResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetApiAccessResponseWithDefaults

`func NewGetApiAccessResponseWithDefaults() *GetApiAccessResponse`

NewGetApiAccessResponseWithDefaults instantiates a new GetApiAccessResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiKey

`func (o *GetApiAccessResponse) GetApiKey() GetApiAccessResponseApiKey`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *GetApiAccessResponse) GetApiKeyOk() (*GetApiAccessResponseApiKey, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *GetApiAccessResponse) SetApiKey(v GetApiAccessResponseApiKey)`

SetApiKey sets ApiKey field to given value.


### GetLivemode

`func (o *GetApiAccessResponse) GetLivemode() bool`

GetLivemode returns the Livemode field if non-nil, zero value otherwise.

### GetLivemodeOk

`func (o *GetApiAccessResponse) GetLivemodeOk() (*bool, bool)`

GetLivemodeOk returns a tuple with the Livemode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLivemode

`func (o *GetApiAccessResponse) SetLivemode(v bool)`

SetLivemode sets Livemode field to given value.


### GetObject

`func (o *GetApiAccessResponse) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *GetApiAccessResponse) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *GetApiAccessResponse) SetObject(v string)`

SetObject sets Object field to given value.


### GetScopes

`func (o *GetApiAccessResponse) GetScopes() []string`

GetScopes returns the Scopes field if non-nil, zero value otherwise.

### GetScopesOk

`func (o *GetApiAccessResponse) GetScopesOk() (*[]string, bool)`

GetScopesOk returns a tuple with the Scopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopes

`func (o *GetApiAccessResponse) SetScopes(v []string)`

SetScopes sets Scopes field to given value.


### GetServiceAccount

`func (o *GetApiAccessResponse) GetServiceAccount() GetApiAccessResponseServiceAccount`

GetServiceAccount returns the ServiceAccount field if non-nil, zero value otherwise.

### GetServiceAccountOk

`func (o *GetApiAccessResponse) GetServiceAccountOk() (*GetApiAccessResponseServiceAccount, bool)`

GetServiceAccountOk returns a tuple with the ServiceAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceAccount

`func (o *GetApiAccessResponse) SetServiceAccount(v GetApiAccessResponseServiceAccount)`

SetServiceAccount sets ServiceAccount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


