# ListPracticesResponseDataInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | [**NullableListPracticesResponseDataInnerAddress**](ListPracticesResponseDataInnerAddress.md) |  |
**Contacts** | [**ListPracticesResponseDataInnerContacts**](ListPracticesResponseDataInnerContacts.md) |  |
**CreatedAt** | **string** |  |
**ExternalId** | **NullableString** |  |
**LegalName** | **NullableString** |  |
**Livemode** | **bool** |  |
**Name** | **string** |  |
**Object** | **string** |  |
**Prescribers** | [**[]ListPracticesResponseDataInnerPrescribersInner**](ListPracticesResponseDataInnerPrescribersInner.md) |  |
**SupportEmail** | **NullableString** |  |
**SupportPhone** | **NullableString** |  |
**Timezone** | **string** |  |

## Methods

### NewListPracticesResponseDataInner

`func NewListPracticesResponseDataInner(address NullableListPracticesResponseDataInnerAddress, contacts ListPracticesResponseDataInnerContacts, createdAt string, externalId NullableString, legalName NullableString, livemode bool, name string, object string, prescribers []ListPracticesResponseDataInnerPrescribersInner, supportEmail NullableString, supportPhone NullableString, timezone string, ) *ListPracticesResponseDataInner`

NewListPracticesResponseDataInner instantiates a new ListPracticesResponseDataInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListPracticesResponseDataInnerWithDefaults

`func NewListPracticesResponseDataInnerWithDefaults() *ListPracticesResponseDataInner`

NewListPracticesResponseDataInnerWithDefaults instantiates a new ListPracticesResponseDataInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *ListPracticesResponseDataInner) GetAddress() ListPracticesResponseDataInnerAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *ListPracticesResponseDataInner) GetAddressOk() (*ListPracticesResponseDataInnerAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *ListPracticesResponseDataInner) SetAddress(v ListPracticesResponseDataInnerAddress)`

SetAddress sets Address field to given value.


### SetAddressNil

`func (o *ListPracticesResponseDataInner) SetAddressNil(b bool)`

 SetAddressNil sets the value for Address to be an explicit nil

### UnsetAddress
`func (o *ListPracticesResponseDataInner) UnsetAddress()`

UnsetAddress ensures that no value is present for Address, not even an explicit nil
### GetContacts

`func (o *ListPracticesResponseDataInner) GetContacts() ListPracticesResponseDataInnerContacts`

GetContacts returns the Contacts field if non-nil, zero value otherwise.

### GetContactsOk

`func (o *ListPracticesResponseDataInner) GetContactsOk() (*ListPracticesResponseDataInnerContacts, bool)`

GetContactsOk returns a tuple with the Contacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContacts

`func (o *ListPracticesResponseDataInner) SetContacts(v ListPracticesResponseDataInnerContacts)`

SetContacts sets Contacts field to given value.


### GetCreatedAt

`func (o *ListPracticesResponseDataInner) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ListPracticesResponseDataInner) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ListPracticesResponseDataInner) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.


### GetExternalId

`func (o *ListPracticesResponseDataInner) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *ListPracticesResponseDataInner) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *ListPracticesResponseDataInner) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.


### SetExternalIdNil

`func (o *ListPracticesResponseDataInner) SetExternalIdNil(b bool)`

 SetExternalIdNil sets the value for ExternalId to be an explicit nil

### UnsetExternalId
`func (o *ListPracticesResponseDataInner) UnsetExternalId()`

UnsetExternalId ensures that no value is present for ExternalId, not even an explicit nil
### GetLegalName

`func (o *ListPracticesResponseDataInner) GetLegalName() string`

GetLegalName returns the LegalName field if non-nil, zero value otherwise.

### GetLegalNameOk

`func (o *ListPracticesResponseDataInner) GetLegalNameOk() (*string, bool)`

GetLegalNameOk returns a tuple with the LegalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegalName

`func (o *ListPracticesResponseDataInner) SetLegalName(v string)`

SetLegalName sets LegalName field to given value.


### SetLegalNameNil

`func (o *ListPracticesResponseDataInner) SetLegalNameNil(b bool)`

 SetLegalNameNil sets the value for LegalName to be an explicit nil

### UnsetLegalName
`func (o *ListPracticesResponseDataInner) UnsetLegalName()`

UnsetLegalName ensures that no value is present for LegalName, not even an explicit nil
### GetLivemode

`func (o *ListPracticesResponseDataInner) GetLivemode() bool`

GetLivemode returns the Livemode field if non-nil, zero value otherwise.

### GetLivemodeOk

`func (o *ListPracticesResponseDataInner) GetLivemodeOk() (*bool, bool)`

GetLivemodeOk returns a tuple with the Livemode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLivemode

`func (o *ListPracticesResponseDataInner) SetLivemode(v bool)`

SetLivemode sets Livemode field to given value.


### GetName

`func (o *ListPracticesResponseDataInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ListPracticesResponseDataInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ListPracticesResponseDataInner) SetName(v string)`

SetName sets Name field to given value.


### GetObject

`func (o *ListPracticesResponseDataInner) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *ListPracticesResponseDataInner) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *ListPracticesResponseDataInner) SetObject(v string)`

SetObject sets Object field to given value.


### GetPrescribers

`func (o *ListPracticesResponseDataInner) GetPrescribers() []ListPracticesResponseDataInnerPrescribersInner`

GetPrescribers returns the Prescribers field if non-nil, zero value otherwise.

### GetPrescribersOk

`func (o *ListPracticesResponseDataInner) GetPrescribersOk() (*[]ListPracticesResponseDataInnerPrescribersInner, bool)`

GetPrescribersOk returns a tuple with the Prescribers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescribers

`func (o *ListPracticesResponseDataInner) SetPrescribers(v []ListPracticesResponseDataInnerPrescribersInner)`

SetPrescribers sets Prescribers field to given value.


### GetSupportEmail

`func (o *ListPracticesResponseDataInner) GetSupportEmail() string`

GetSupportEmail returns the SupportEmail field if non-nil, zero value otherwise.

### GetSupportEmailOk

`func (o *ListPracticesResponseDataInner) GetSupportEmailOk() (*string, bool)`

GetSupportEmailOk returns a tuple with the SupportEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportEmail

`func (o *ListPracticesResponseDataInner) SetSupportEmail(v string)`

SetSupportEmail sets SupportEmail field to given value.


### SetSupportEmailNil

`func (o *ListPracticesResponseDataInner) SetSupportEmailNil(b bool)`

 SetSupportEmailNil sets the value for SupportEmail to be an explicit nil

### UnsetSupportEmail
`func (o *ListPracticesResponseDataInner) UnsetSupportEmail()`

UnsetSupportEmail ensures that no value is present for SupportEmail, not even an explicit nil
### GetSupportPhone

`func (o *ListPracticesResponseDataInner) GetSupportPhone() string`

GetSupportPhone returns the SupportPhone field if non-nil, zero value otherwise.

### GetSupportPhoneOk

`func (o *ListPracticesResponseDataInner) GetSupportPhoneOk() (*string, bool)`

GetSupportPhoneOk returns a tuple with the SupportPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportPhone

`func (o *ListPracticesResponseDataInner) SetSupportPhone(v string)`

SetSupportPhone sets SupportPhone field to given value.


### SetSupportPhoneNil

`func (o *ListPracticesResponseDataInner) SetSupportPhoneNil(b bool)`

 SetSupportPhoneNil sets the value for SupportPhone to be an explicit nil

### UnsetSupportPhone
`func (o *ListPracticesResponseDataInner) UnsetSupportPhone()`

UnsetSupportPhone ensures that no value is present for SupportPhone, not even an explicit nil
### GetTimezone

`func (o *ListPracticesResponseDataInner) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *ListPracticesResponseDataInner) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *ListPracticesResponseDataInner) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


