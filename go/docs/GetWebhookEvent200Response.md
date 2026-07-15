# GetWebhookEvent200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attempts** | [**[]GetWebhookEvent200ResponseAttemptsInner**](GetWebhookEvent200ResponseAttemptsInner.md) |  |
**Deliveries** | [**[]GetWebhookEvent200ResponseDeliveriesInner**](GetWebhookEvent200ResponseDeliveriesInner.md) |  |
**Event** | [**GetWebhookEvent200ResponseEvent**](GetWebhookEvent200ResponseEvent.md) |  |

## Methods

### NewGetWebhookEvent200Response

`func NewGetWebhookEvent200Response(attempts []GetWebhookEvent200ResponseAttemptsInner, deliveries []GetWebhookEvent200ResponseDeliveriesInner, event GetWebhookEvent200ResponseEvent, ) *GetWebhookEvent200Response`

NewGetWebhookEvent200Response instantiates a new GetWebhookEvent200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetWebhookEvent200ResponseWithDefaults

`func NewGetWebhookEvent200ResponseWithDefaults() *GetWebhookEvent200Response`

NewGetWebhookEvent200ResponseWithDefaults instantiates a new GetWebhookEvent200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttempts

`func (o *GetWebhookEvent200Response) GetAttempts() []GetWebhookEvent200ResponseAttemptsInner`

GetAttempts returns the Attempts field if non-nil, zero value otherwise.

### GetAttemptsOk

`func (o *GetWebhookEvent200Response) GetAttemptsOk() (*[]GetWebhookEvent200ResponseAttemptsInner, bool)`

GetAttemptsOk returns a tuple with the Attempts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttempts

`func (o *GetWebhookEvent200Response) SetAttempts(v []GetWebhookEvent200ResponseAttemptsInner)`

SetAttempts sets Attempts field to given value.


### GetDeliveries

`func (o *GetWebhookEvent200Response) GetDeliveries() []GetWebhookEvent200ResponseDeliveriesInner`

GetDeliveries returns the Deliveries field if non-nil, zero value otherwise.

### GetDeliveriesOk

`func (o *GetWebhookEvent200Response) GetDeliveriesOk() (*[]GetWebhookEvent200ResponseDeliveriesInner, bool)`

GetDeliveriesOk returns a tuple with the Deliveries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveries

`func (o *GetWebhookEvent200Response) SetDeliveries(v []GetWebhookEvent200ResponseDeliveriesInner)`

SetDeliveries sets Deliveries field to given value.


### GetEvent

`func (o *GetWebhookEvent200Response) GetEvent() GetWebhookEvent200ResponseEvent`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *GetWebhookEvent200Response) GetEventOk() (*GetWebhookEvent200ResponseEvent, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *GetWebhookEvent200Response) SetEvent(v GetWebhookEvent200ResponseEvent)`

SetEvent sets Event field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


