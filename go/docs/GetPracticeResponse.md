# GetPracticeResponse

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

### NewGetPracticeResponse

`func NewGetPracticeResponse(address NullableListPracticesResponseDataInnerAddress, contacts ListPracticesResponseDataInnerContacts, createdAt time.Time, externalId NullableString, id string, legalName NullableString, livemode bool, metadata map[string]interface{}, name string, object string, prescribers []ListPracticesResponseDataInnerPrescribersInner, productionAccess string, supportEmail NullableString, supportPhone NullableString, timezone string, ) *GetPracticeResponse`

NewGetPracticeResponse instantiates a new GetPracticeResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPracticeResponseWithDefaults

`func NewGetPracticeResponseWithDefaults() *GetPracticeResponse`

NewGetPracticeResponseWithDefaults instantiates a new GetPracticeResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *GetPracticeResponse) GetAddress() ListPracticesResponseDataInnerAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *GetPracticeResponse) GetAddressOk() (*ListPracticesResponseDataInnerAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *GetPracticeResponse) SetAddress(v ListPracticesResponseDataInnerAddress)`

SetAddress sets Address field to given value.


### SetAddressNil

`func (o *GetPracticeResponse) SetAddressNil(b bool)`

 SetAddressNil sets the value for Address to be an explicit nil

### UnsetAddress
`func (o *GetPracticeResponse) UnsetAddress()`

UnsetAddress ensures that no value is present for Address, not even an explicit nil
### GetContacts

`func (o *GetPracticeResponse) GetContacts() ListPracticesResponseDataInnerContacts`

GetContacts returns the Contacts field if non-nil, zero value otherwise.

### GetContactsOk

`func (o *GetPracticeResponse) GetContactsOk() (*ListPracticesResponseDataInnerContacts, bool)`

GetContactsOk returns a tuple with the Contacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContacts

`func (o *GetPracticeResponse) SetContacts(v ListPracticesResponseDataInnerContacts)`

SetContacts sets Contacts field to given value.


### GetCreatedAt

`func (o *GetPracticeResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GetPracticeResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GetPracticeResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetExternalId

`func (o *GetPracticeResponse) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *GetPracticeResponse) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *GetPracticeResponse) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.


### SetExternalIdNil

`func (o *GetPracticeResponse) SetExternalIdNil(b bool)`

 SetExternalIdNil sets the value for ExternalId to be an explicit nil

### UnsetExternalId
`func (o *GetPracticeResponse) UnsetExternalId()`

UnsetExternalId ensures that no value is present for ExternalId, not even an explicit nil
### GetId

`func (o *GetPracticeResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetPracticeResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetPracticeResponse) SetId(v string)`

SetId sets Id field to given value.


### GetLegalName

`func (o *GetPracticeResponse) GetLegalName() string`

GetLegalName returns the LegalName field if non-nil, zero value otherwise.

### GetLegalNameOk

`func (o *GetPracticeResponse) GetLegalNameOk() (*string, bool)`

GetLegalNameOk returns a tuple with the LegalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegalName

`func (o *GetPracticeResponse) SetLegalName(v string)`

SetLegalName sets LegalName field to given value.


### SetLegalNameNil

`func (o *GetPracticeResponse) SetLegalNameNil(b bool)`

 SetLegalNameNil sets the value for LegalName to be an explicit nil

### UnsetLegalName
`func (o *GetPracticeResponse) UnsetLegalName()`

UnsetLegalName ensures that no value is present for LegalName, not even an explicit nil
### GetLivemode

`func (o *GetPracticeResponse) GetLivemode() bool`

GetLivemode returns the Livemode field if non-nil, zero value otherwise.

### GetLivemodeOk

`func (o *GetPracticeResponse) GetLivemodeOk() (*bool, bool)`

GetLivemodeOk returns a tuple with the Livemode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLivemode

`func (o *GetPracticeResponse) SetLivemode(v bool)`

SetLivemode sets Livemode field to given value.


### GetMetadata

`func (o *GetPracticeResponse) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *GetPracticeResponse) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *GetPracticeResponse) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### GetName

`func (o *GetPracticeResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetPracticeResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetPracticeResponse) SetName(v string)`

SetName sets Name field to given value.


### GetObject

`func (o *GetPracticeResponse) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *GetPracticeResponse) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *GetPracticeResponse) SetObject(v string)`

SetObject sets Object field to given value.


### GetPrescribers

`func (o *GetPracticeResponse) GetPrescribers() []ListPracticesResponseDataInnerPrescribersInner`

GetPrescribers returns the Prescribers field if non-nil, zero value otherwise.

### GetPrescribersOk

`func (o *GetPracticeResponse) GetPrescribersOk() (*[]ListPracticesResponseDataInnerPrescribersInner, bool)`

GetPrescribersOk returns a tuple with the Prescribers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescribers

`func (o *GetPracticeResponse) SetPrescribers(v []ListPracticesResponseDataInnerPrescribersInner)`

SetPrescribers sets Prescribers field to given value.


### GetProductionAccess

`func (o *GetPracticeResponse) GetProductionAccess() string`

GetProductionAccess returns the ProductionAccess field if non-nil, zero value otherwise.

### GetProductionAccessOk

`func (o *GetPracticeResponse) GetProductionAccessOk() (*string, bool)`

GetProductionAccessOk returns a tuple with the ProductionAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductionAccess

`func (o *GetPracticeResponse) SetProductionAccess(v string)`

SetProductionAccess sets ProductionAccess field to given value.


### GetSupportEmail

`func (o *GetPracticeResponse) GetSupportEmail() string`

GetSupportEmail returns the SupportEmail field if non-nil, zero value otherwise.

### GetSupportEmailOk

`func (o *GetPracticeResponse) GetSupportEmailOk() (*string, bool)`

GetSupportEmailOk returns a tuple with the SupportEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportEmail

`func (o *GetPracticeResponse) SetSupportEmail(v string)`

SetSupportEmail sets SupportEmail field to given value.


### SetSupportEmailNil

`func (o *GetPracticeResponse) SetSupportEmailNil(b bool)`

 SetSupportEmailNil sets the value for SupportEmail to be an explicit nil

### UnsetSupportEmail
`func (o *GetPracticeResponse) UnsetSupportEmail()`

UnsetSupportEmail ensures that no value is present for SupportEmail, not even an explicit nil
### GetSupportPhone

`func (o *GetPracticeResponse) GetSupportPhone() string`

GetSupportPhone returns the SupportPhone field if non-nil, zero value otherwise.

### GetSupportPhoneOk

`func (o *GetPracticeResponse) GetSupportPhoneOk() (*string, bool)`

GetSupportPhoneOk returns a tuple with the SupportPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportPhone

`func (o *GetPracticeResponse) SetSupportPhone(v string)`

SetSupportPhone sets SupportPhone field to given value.


### SetSupportPhoneNil

`func (o *GetPracticeResponse) SetSupportPhoneNil(b bool)`

 SetSupportPhoneNil sets the value for SupportPhone to be an explicit nil

### UnsetSupportPhone
`func (o *GetPracticeResponse) UnsetSupportPhone()`

UnsetSupportPhone ensures that no value is present for SupportPhone, not even an explicit nil
### GetTimezone

`func (o *GetPracticeResponse) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *GetPracticeResponse) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *GetPracticeResponse) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


