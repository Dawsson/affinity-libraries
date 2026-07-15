# CreateWebhookEndpoint200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Endpoint** | [**CreateWebhookEndpoint200ResponseEndpoint**](CreateWebhookEndpoint200ResponseEndpoint.md) |  | 
**SigningSecret** | **NullableString** |  | 

## Methods

### NewCreateWebhookEndpoint200Response

`func NewCreateWebhookEndpoint200Response(endpoint CreateWebhookEndpoint200ResponseEndpoint, signingSecret NullableString, ) *CreateWebhookEndpoint200Response`

NewCreateWebhookEndpoint200Response instantiates a new CreateWebhookEndpoint200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateWebhookEndpoint200ResponseWithDefaults

`func NewCreateWebhookEndpoint200ResponseWithDefaults() *CreateWebhookEndpoint200Response`

NewCreateWebhookEndpoint200ResponseWithDefaults instantiates a new CreateWebhookEndpoint200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndpoint

`func (o *CreateWebhookEndpoint200Response) GetEndpoint() CreateWebhookEndpoint200ResponseEndpoint`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *CreateWebhookEndpoint200Response) GetEndpointOk() (*CreateWebhookEndpoint200ResponseEndpoint, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *CreateWebhookEndpoint200Response) SetEndpoint(v CreateWebhookEndpoint200ResponseEndpoint)`

SetEndpoint sets Endpoint field to given value.


### GetSigningSecret

`func (o *CreateWebhookEndpoint200Response) GetSigningSecret() string`

GetSigningSecret returns the SigningSecret field if non-nil, zero value otherwise.

### GetSigningSecretOk

`func (o *CreateWebhookEndpoint200Response) GetSigningSecretOk() (*string, bool)`

GetSigningSecretOk returns a tuple with the SigningSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningSecret

`func (o *CreateWebhookEndpoint200Response) SetSigningSecret(v string)`

SetSigningSecret sets SigningSecret field to given value.


### SetSigningSecretNil

`func (o *CreateWebhookEndpoint200Response) SetSigningSecretNil(b bool)`

 SetSigningSecretNil sets the value for SigningSecret to be an explicit nil

### UnsetSigningSecret
`func (o *CreateWebhookEndpoint200Response) UnsetSigningSecret()`

UnsetSigningSecret ensures that no value is present for SigningSecret, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


