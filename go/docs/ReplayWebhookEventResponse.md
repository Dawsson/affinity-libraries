# ReplayWebhookEventResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **string** |  |
**EventType** | **string** |  |
**Id** | **string** |  |
**Livemode** | **bool** |  |
**Object** | **string** |  |
**ObjectId** | **string** |  |
**ObjectType** | **string** |  |
**Status** | **string** |  |
**UpdatedAt** | **string** |  |
**Attempts** | [**[]GetWebhookEventResponseAttemptsInner**](GetWebhookEventResponseAttemptsInner.md) |  |
**Deliveries** | [**[]GetWebhookEventResponseDeliveriesInner**](GetWebhookEventResponseDeliveriesInner.md) |  |

## Methods

### NewReplayWebhookEventResponse

`func NewReplayWebhookEventResponse(createdAt string, eventType string, id string, livemode bool, object string, objectId string, objectType string, status string, updatedAt string, attempts []GetWebhookEventResponseAttemptsInner, deliveries []GetWebhookEventResponseDeliveriesInner, ) *ReplayWebhookEventResponse`

NewReplayWebhookEventResponse instantiates a new ReplayWebhookEventResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReplayWebhookEventResponseWithDefaults

`func NewReplayWebhookEventResponseWithDefaults() *ReplayWebhookEventResponse`

NewReplayWebhookEventResponseWithDefaults instantiates a new ReplayWebhookEventResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *ReplayWebhookEventResponse) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ReplayWebhookEventResponse) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ReplayWebhookEventResponse) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetEventType

`func (o *ReplayWebhookEventResponse) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *ReplayWebhookEventResponse) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *ReplayWebhookEventResponse) SetEventType(v string)`

SetEventType sets EventType field to given value.


### GetId

`func (o *ReplayWebhookEventResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReplayWebhookEventResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReplayWebhookEventResponse) SetId(v string)`

SetId sets Id field to given value.


### GetLivemode

`func (o *ReplayWebhookEventResponse) GetLivemode() bool`

GetLivemode returns the Livemode field if non-nil, zero value otherwise.

### GetLivemodeOk

`func (o *ReplayWebhookEventResponse) GetLivemodeOk() (*bool, bool)`

GetLivemodeOk returns a tuple with the Livemode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLivemode

`func (o *ReplayWebhookEventResponse) SetLivemode(v bool)`

SetLivemode sets Livemode field to given value.


### GetObject

`func (o *ReplayWebhookEventResponse) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *ReplayWebhookEventResponse) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *ReplayWebhookEventResponse) SetObject(v string)`

SetObject sets Object field to given value.


### GetObjectId

`func (o *ReplayWebhookEventResponse) GetObjectId() string`

GetObjectId returns the ObjectId field if non-nil, zero value otherwise.

### GetObjectIdOk

`func (o *ReplayWebhookEventResponse) GetObjectIdOk() (*string, bool)`

GetObjectIdOk returns a tuple with the ObjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectId

`func (o *ReplayWebhookEventResponse) SetObjectId(v string)`

SetObjectId sets ObjectId field to given value.


### GetObjectType

`func (o *ReplayWebhookEventResponse) GetObjectType() string`

GetObjectType returns the ObjectType field if non-nil, zero value otherwise.

### GetObjectTypeOk

`func (o *ReplayWebhookEventResponse) GetObjectTypeOk() (*string, bool)`

GetObjectTypeOk returns a tuple with the ObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectType

`func (o *ReplayWebhookEventResponse) SetObjectType(v string)`

SetObjectType sets ObjectType field to given value.


### GetStatus

`func (o *ReplayWebhookEventResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ReplayWebhookEventResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ReplayWebhookEventResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetUpdatedAt

`func (o *ReplayWebhookEventResponse) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ReplayWebhookEventResponse) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ReplayWebhookEventResponse) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetAttempts

`func (o *ReplayWebhookEventResponse) GetAttempts() []GetWebhookEventResponseAttemptsInner`

GetAttempts returns the Attempts field if non-nil, zero value otherwise.

### GetAttemptsOk

`func (o *ReplayWebhookEventResponse) GetAttemptsOk() (*[]GetWebhookEventResponseAttemptsInner, bool)`

GetAttemptsOk returns a tuple with the Attempts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttempts

`func (o *ReplayWebhookEventResponse) SetAttempts(v []GetWebhookEventResponseAttemptsInner)`

SetAttempts sets Attempts field to given value.


### GetDeliveries

`func (o *ReplayWebhookEventResponse) GetDeliveries() []GetWebhookEventResponseDeliveriesInner`

GetDeliveries returns the Deliveries field if non-nil, zero value otherwise.

### GetDeliveriesOk

`func (o *ReplayWebhookEventResponse) GetDeliveriesOk() (*[]GetWebhookEventResponseDeliveriesInner, bool)`

GetDeliveriesOk returns a tuple with the Deliveries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveries

`func (o *ReplayWebhookEventResponse) SetDeliveries(v []GetWebhookEventResponseDeliveriesInner)`

SetDeliveries sets Deliveries field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


