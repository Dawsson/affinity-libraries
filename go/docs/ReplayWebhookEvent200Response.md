# ReplayWebhookEvent200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attempts** | [**[]ReplayWebhookEvent200ResponseAttemptsInner**](ReplayWebhookEvent200ResponseAttemptsInner.md) |  |
**Deliveries** | [**[]ReplayWebhookEvent200ResponseDeliveriesInner**](ReplayWebhookEvent200ResponseDeliveriesInner.md) |  |
**Event** | [**GetWebhookEvent200ResponseEvent**](GetWebhookEvent200ResponseEvent.md) |  |

## Methods

### NewReplayWebhookEvent200Response

`func NewReplayWebhookEvent200Response(attempts []ReplayWebhookEvent200ResponseAttemptsInner, deliveries []ReplayWebhookEvent200ResponseDeliveriesInner, event GetWebhookEvent200ResponseEvent, ) *ReplayWebhookEvent200Response`

NewReplayWebhookEvent200Response instantiates a new ReplayWebhookEvent200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReplayWebhookEvent200ResponseWithDefaults

`func NewReplayWebhookEvent200ResponseWithDefaults() *ReplayWebhookEvent200Response`

NewReplayWebhookEvent200ResponseWithDefaults instantiates a new ReplayWebhookEvent200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttempts

`func (o *ReplayWebhookEvent200Response) GetAttempts() []ReplayWebhookEvent200ResponseAttemptsInner`

GetAttempts returns the Attempts field if non-nil, zero value otherwise.

### GetAttemptsOk

`func (o *ReplayWebhookEvent200Response) GetAttemptsOk() (*[]ReplayWebhookEvent200ResponseAttemptsInner, bool)`

GetAttemptsOk returns a tuple with the Attempts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttempts

`func (o *ReplayWebhookEvent200Response) SetAttempts(v []ReplayWebhookEvent200ResponseAttemptsInner)`

SetAttempts sets Attempts field to given value.


### GetDeliveries

`func (o *ReplayWebhookEvent200Response) GetDeliveries() []ReplayWebhookEvent200ResponseDeliveriesInner`

GetDeliveries returns the Deliveries field if non-nil, zero value otherwise.

### GetDeliveriesOk

`func (o *ReplayWebhookEvent200Response) GetDeliveriesOk() (*[]ReplayWebhookEvent200ResponseDeliveriesInner, bool)`

GetDeliveriesOk returns a tuple with the Deliveries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveries

`func (o *ReplayWebhookEvent200Response) SetDeliveries(v []ReplayWebhookEvent200ResponseDeliveriesInner)`

SetDeliveries sets Deliveries field to given value.


### GetEvent

`func (o *ReplayWebhookEvent200Response) GetEvent() GetWebhookEvent200ResponseEvent`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *ReplayWebhookEvent200Response) GetEventOk() (*GetWebhookEvent200ResponseEvent, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *ReplayWebhookEvent200Response) SetEvent(v GetWebhookEvent200ResponseEvent)`

SetEvent sets Event field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


