# GetWebhookEventResponse

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

### NewGetWebhookEventResponse

`func NewGetWebhookEventResponse(createdAt string, eventType string, id string, livemode bool, object string, objectId string, objectType string, status string, updatedAt string, attempts []GetWebhookEventResponseAttemptsInner, deliveries []GetWebhookEventResponseDeliveriesInner, ) *GetWebhookEventResponse`

NewGetWebhookEventResponse instantiates a new GetWebhookEventResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetWebhookEventResponseWithDefaults

`func NewGetWebhookEventResponseWithDefaults() *GetWebhookEventResponse`

NewGetWebhookEventResponseWithDefaults instantiates a new GetWebhookEventResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *GetWebhookEventResponse) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GetWebhookEventResponse) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GetWebhookEventResponse) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetEventType

`func (o *GetWebhookEventResponse) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *GetWebhookEventResponse) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *GetWebhookEventResponse) SetEventType(v string)`

SetEventType sets EventType field to given value.


### GetId

`func (o *GetWebhookEventResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetWebhookEventResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetWebhookEventResponse) SetId(v string)`

SetId sets Id field to given value.


### GetLivemode

`func (o *GetWebhookEventResponse) GetLivemode() bool`

GetLivemode returns the Livemode field if non-nil, zero value otherwise.

### GetLivemodeOk

`func (o *GetWebhookEventResponse) GetLivemodeOk() (*bool, bool)`

GetLivemodeOk returns a tuple with the Livemode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLivemode

`func (o *GetWebhookEventResponse) SetLivemode(v bool)`

SetLivemode sets Livemode field to given value.


### GetObject

`func (o *GetWebhookEventResponse) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *GetWebhookEventResponse) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *GetWebhookEventResponse) SetObject(v string)`

SetObject sets Object field to given value.


### GetObjectId

`func (o *GetWebhookEventResponse) GetObjectId() string`

GetObjectId returns the ObjectId field if non-nil, zero value otherwise.

### GetObjectIdOk

`func (o *GetWebhookEventResponse) GetObjectIdOk() (*string, bool)`

GetObjectIdOk returns a tuple with the ObjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectId

`func (o *GetWebhookEventResponse) SetObjectId(v string)`

SetObjectId sets ObjectId field to given value.


### GetObjectType

`func (o *GetWebhookEventResponse) GetObjectType() string`

GetObjectType returns the ObjectType field if non-nil, zero value otherwise.

### GetObjectTypeOk

`func (o *GetWebhookEventResponse) GetObjectTypeOk() (*string, bool)`

GetObjectTypeOk returns a tuple with the ObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectType

`func (o *GetWebhookEventResponse) SetObjectType(v string)`

SetObjectType sets ObjectType field to given value.


### GetStatus

`func (o *GetWebhookEventResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetWebhookEventResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetWebhookEventResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetUpdatedAt

`func (o *GetWebhookEventResponse) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *GetWebhookEventResponse) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *GetWebhookEventResponse) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetAttempts

`func (o *GetWebhookEventResponse) GetAttempts() []GetWebhookEventResponseAttemptsInner`

GetAttempts returns the Attempts field if non-nil, zero value otherwise.

### GetAttemptsOk

`func (o *GetWebhookEventResponse) GetAttemptsOk() (*[]GetWebhookEventResponseAttemptsInner, bool)`

GetAttemptsOk returns a tuple with the Attempts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttempts

`func (o *GetWebhookEventResponse) SetAttempts(v []GetWebhookEventResponseAttemptsInner)`

SetAttempts sets Attempts field to given value.


### GetDeliveries

`func (o *GetWebhookEventResponse) GetDeliveries() []GetWebhookEventResponseDeliveriesInner`

GetDeliveries returns the Deliveries field if non-nil, zero value otherwise.

### GetDeliveriesOk

`func (o *GetWebhookEventResponse) GetDeliveriesOk() (*[]GetWebhookEventResponseDeliveriesInner, bool)`

GetDeliveriesOk returns a tuple with the Deliveries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveries

`func (o *GetWebhookEventResponse) SetDeliveries(v []GetWebhookEventResponseDeliveriesInner)`

SetDeliveries sets Deliveries field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


