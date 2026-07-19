# CreatePracticeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | [**NullableListPracticesResponseDataInnerAddress**](ListPracticesResponseDataInnerAddress.md) |  |
**Contacts** | [**ListPracticesResponseDataInnerContacts**](ListPracticesResponseDataInnerContacts.md) |  |
**CreatedAt** | **time.Time** |  |
**ExternalId** | **NullableString** |  |
**Id** | **string** |  |
**LegalName** | **NullableString** |  |
**Livemode** | **bool** |  |
**Metadata** | **map[string]interface{}** |  |
**Name** | **string** |  |
**Object** | **string** |  |
**Prescribers** | [**[]ListPracticesResponseDataInnerPrescribersInner**](ListPracticesResponseDataInnerPrescribersInner.md) |  |
**ProductionAccess** | **string** |  |
**SupportEmail** | **NullableString** |  |
**SupportPhone** | **NullableString** |  |
**Timezone** | **string** |  |

## Methods

### NewCreatePracticeResponse

`func NewCreatePracticeResponse(address NullableListPracticesResponseDataInnerAddress, contacts ListPracticesResponseDataInnerContacts, createdAt time.Time, externalId NullableString, id string, legalName NullableString, livemode bool, metadata map[string]interface{}, name string, object string, prescribers []ListPracticesResponseDataInnerPrescribersInner, productionAccess string, supportEmail NullableString, supportPhone NullableString, timezone string, ) *CreatePracticeResponse`

NewCreatePracticeResponse instantiates a new CreatePracticeResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatePracticeResponseWithDefaults

`func NewCreatePracticeResponseWithDefaults() *CreatePracticeResponse`

NewCreatePracticeResponseWithDefaults instantiates a new CreatePracticeResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *CreatePracticeResponse) GetAddress() ListPracticesResponseDataInnerAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *CreatePracticeResponse) GetAddressOk() (*ListPracticesResponseDataInnerAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *CreatePracticeResponse) SetAddress(v ListPracticesResponseDataInnerAddress)`

SetAddress sets Address field to given value.


### SetAddressNil

`func (o *CreatePracticeResponse) SetAddressNil(b bool)`

 SetAddressNil sets the value for Address to be an explicit nil

### UnsetAddress
`func (o *CreatePracticeResponse) UnsetAddress()`

UnsetAddress ensures that no value is present for Address, not even an explicit nil
### GetContacts

`func (o *CreatePracticeResponse) GetContacts() ListPracticesResponseDataInnerContacts`

GetContacts returns the Contacts field if non-nil, zero value otherwise.

### GetContactsOk

`func (o *CreatePracticeResponse) GetContactsOk() (*ListPracticesResponseDataInnerContacts, bool)`

GetContactsOk returns a tuple with the Contacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContacts

`func (o *CreatePracticeResponse) SetContacts(v ListPracticesResponseDataInnerContacts)`

SetContacts sets Contacts field to given value.


### GetCreatedAt

`func (o *CreatePracticeResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CreatePracticeResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CreatePracticeResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetExternalId

`func (o *CreatePracticeResponse) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *CreatePracticeResponse) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *CreatePracticeResponse) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.


### SetExternalIdNil

`func (o *CreatePracticeResponse) SetExternalIdNil(b bool)`

 SetExternalIdNil sets the value for ExternalId to be an explicit nil

### UnsetExternalId
`func (o *CreatePracticeResponse) UnsetExternalId()`

UnsetExternalId ensures that no value is present for ExternalId, not even an explicit nil
### GetId

`func (o *CreatePracticeResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CreatePracticeResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CreatePracticeResponse) SetId(v string)`

SetId sets Id field to given value.


### GetLegalName

`func (o *CreatePracticeResponse) GetLegalName() string`

GetLegalName returns the LegalName field if non-nil, zero value otherwise.

### GetLegalNameOk

`func (o *CreatePracticeResponse) GetLegalNameOk() (*string, bool)`

GetLegalNameOk returns a tuple with the LegalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegalName

`func (o *CreatePracticeResponse) SetLegalName(v string)`

SetLegalName sets LegalName field to given value.


### SetLegalNameNil

`func (o *CreatePracticeResponse) SetLegalNameNil(b bool)`

 SetLegalNameNil sets the value for LegalName to be an explicit nil

### UnsetLegalName
`func (o *CreatePracticeResponse) UnsetLegalName()`

UnsetLegalName ensures that no value is present for LegalName, not even an explicit nil
### GetLivemode

`func (o *CreatePracticeResponse) GetLivemode() bool`

GetLivemode returns the Livemode field if non-nil, zero value otherwise.

### GetLivemodeOk

`func (o *CreatePracticeResponse) GetLivemodeOk() (*bool, bool)`

GetLivemodeOk returns a tuple with the Livemode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLivemode

`func (o *CreatePracticeResponse) SetLivemode(v bool)`

SetLivemode sets Livemode field to given value.


### GetMetadata

`func (o *CreatePracticeResponse) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *CreatePracticeResponse) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *CreatePracticeResponse) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### GetName

`func (o *CreatePracticeResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreatePracticeResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreatePracticeResponse) SetName(v string)`

SetName sets Name field to given value.


### GetObject

`func (o *CreatePracticeResponse) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *CreatePracticeResponse) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *CreatePracticeResponse) SetObject(v string)`

SetObject sets Object field to given value.


### GetPrescribers

`func (o *CreatePracticeResponse) GetPrescribers() []ListPracticesResponseDataInnerPrescribersInner`

GetPrescribers returns the Prescribers field if non-nil, zero value otherwise.

### GetPrescribersOk

`func (o *CreatePracticeResponse) GetPrescribersOk() (*[]ListPracticesResponseDataInnerPrescribersInner, bool)`

GetPrescribersOk returns a tuple with the Prescribers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescribers

`func (o *CreatePracticeResponse) SetPrescribers(v []ListPracticesResponseDataInnerPrescribersInner)`

SetPrescribers sets Prescribers field to given value.


### GetProductionAccess

`func (o *CreatePracticeResponse) GetProductionAccess() string`

GetProductionAccess returns the ProductionAccess field if non-nil, zero value otherwise.

### GetProductionAccessOk

`func (o *CreatePracticeResponse) GetProductionAccessOk() (*string, bool)`

GetProductionAccessOk returns a tuple with the ProductionAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductionAccess

`func (o *CreatePracticeResponse) SetProductionAccess(v string)`

SetProductionAccess sets ProductionAccess field to given value.


### GetSupportEmail

`func (o *CreatePracticeResponse) GetSupportEmail() string`

GetSupportEmail returns the SupportEmail field if non-nil, zero value otherwise.

### GetSupportEmailOk

`func (o *CreatePracticeResponse) GetSupportEmailOk() (*string, bool)`

GetSupportEmailOk returns a tuple with the SupportEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportEmail

`func (o *CreatePracticeResponse) SetSupportEmail(v string)`

SetSupportEmail sets SupportEmail field to given value.


### SetSupportEmailNil

`func (o *CreatePracticeResponse) SetSupportEmailNil(b bool)`

 SetSupportEmailNil sets the value for SupportEmail to be an explicit nil

### UnsetSupportEmail
`func (o *CreatePracticeResponse) UnsetSupportEmail()`

UnsetSupportEmail ensures that no value is present for SupportEmail, not even an explicit nil
### GetSupportPhone

`func (o *CreatePracticeResponse) GetSupportPhone() string`

GetSupportPhone returns the SupportPhone field if non-nil, zero value otherwise.

### GetSupportPhoneOk

`func (o *CreatePracticeResponse) GetSupportPhoneOk() (*string, bool)`

GetSupportPhoneOk returns a tuple with the SupportPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportPhone

`func (o *CreatePracticeResponse) SetSupportPhone(v string)`

SetSupportPhone sets SupportPhone field to given value.


### SetSupportPhoneNil

`func (o *CreatePracticeResponse) SetSupportPhoneNil(b bool)`

 SetSupportPhoneNil sets the value for SupportPhone to be an explicit nil

### UnsetSupportPhone
`func (o *CreatePracticeResponse) UnsetSupportPhone()`

UnsetSupportPhone ensures that no value is present for SupportPhone, not even an explicit nil
### GetTimezone

`func (o *CreatePracticeResponse) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *CreatePracticeResponse) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *CreatePracticeResponse) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


