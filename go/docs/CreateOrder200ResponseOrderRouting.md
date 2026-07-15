# CreateOrder200ResponseOrderRouting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockedReasons** | **[]string** |  | 
**CandidateCompounderIds** | **[]string** |  | 
**ColdShip** | **bool** |  | 
**SelectedCompounderId** | **NullableString** |  | 

## Methods

### NewCreateOrder200ResponseOrderRouting

`func NewCreateOrder200ResponseOrderRouting(blockedReasons []string, candidateCompounderIds []string, coldShip bool, selectedCompounderId NullableString, ) *CreateOrder200ResponseOrderRouting`

NewCreateOrder200ResponseOrderRouting instantiates a new CreateOrder200ResponseOrderRouting object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateOrder200ResponseOrderRoutingWithDefaults

`func NewCreateOrder200ResponseOrderRoutingWithDefaults() *CreateOrder200ResponseOrderRouting`

NewCreateOrder200ResponseOrderRoutingWithDefaults instantiates a new CreateOrder200ResponseOrderRouting object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockedReasons

`func (o *CreateOrder200ResponseOrderRouting) GetBlockedReasons() []string`

GetBlockedReasons returns the BlockedReasons field if non-nil, zero value otherwise.

### GetBlockedReasonsOk

`func (o *CreateOrder200ResponseOrderRouting) GetBlockedReasonsOk() (*[]string, bool)`

GetBlockedReasonsOk returns a tuple with the BlockedReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockedReasons

`func (o *CreateOrder200ResponseOrderRouting) SetBlockedReasons(v []string)`

SetBlockedReasons sets BlockedReasons field to given value.


### GetCandidateCompounderIds

`func (o *CreateOrder200ResponseOrderRouting) GetCandidateCompounderIds() []string`

GetCandidateCompounderIds returns the CandidateCompounderIds field if non-nil, zero value otherwise.

### GetCandidateCompounderIdsOk

`func (o *CreateOrder200ResponseOrderRouting) GetCandidateCompounderIdsOk() (*[]string, bool)`

GetCandidateCompounderIdsOk returns a tuple with the CandidateCompounderIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCandidateCompounderIds

`func (o *CreateOrder200ResponseOrderRouting) SetCandidateCompounderIds(v []string)`

SetCandidateCompounderIds sets CandidateCompounderIds field to given value.


### GetColdShip

`func (o *CreateOrder200ResponseOrderRouting) GetColdShip() bool`

GetColdShip returns the ColdShip field if non-nil, zero value otherwise.

### GetColdShipOk

`func (o *CreateOrder200ResponseOrderRouting) GetColdShipOk() (*bool, bool)`

GetColdShipOk returns a tuple with the ColdShip field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColdShip

`func (o *CreateOrder200ResponseOrderRouting) SetColdShip(v bool)`

SetColdShip sets ColdShip field to given value.


### GetSelectedCompounderId

`func (o *CreateOrder200ResponseOrderRouting) GetSelectedCompounderId() string`

GetSelectedCompounderId returns the SelectedCompounderId field if non-nil, zero value otherwise.

### GetSelectedCompounderIdOk

`func (o *CreateOrder200ResponseOrderRouting) GetSelectedCompounderIdOk() (*string, bool)`

GetSelectedCompounderIdOk returns a tuple with the SelectedCompounderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectedCompounderId

`func (o *CreateOrder200ResponseOrderRouting) SetSelectedCompounderId(v string)`

SetSelectedCompounderId sets SelectedCompounderId field to given value.


### SetSelectedCompounderIdNil

`func (o *CreateOrder200ResponseOrderRouting) SetSelectedCompounderIdNil(b bool)`

 SetSelectedCompounderIdNil sets the value for SelectedCompounderId to be an explicit nil

### UnsetSelectedCompounderId
`func (o *CreateOrder200ResponseOrderRouting) UnsetSelectedCompounderId()`

UnsetSelectedCompounderId ensures that no value is present for SelectedCompounderId, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


