# ListPractices200ResponseDataInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | [**NullableListPractices200ResponseDataInnerAddress**](ListPractices200ResponseDataInnerAddress.md) |  |
**Contacts** | [**ListPractices200ResponseDataInnerContacts**](ListPractices200ResponseDataInnerContacts.md) |  |
**Created** | **NullableFloat32** |  |
**ExternalId** | **NullableString** |  |
**Id** | **NullableString** |  |
**LegalName** | **NullableString** |  |
**Name** | **NullableString** |  |
**Object** | **string** |  |
**Prescribers** | [**[]ListPractices200ResponseDataInnerPrescribersInner**](ListPractices200ResponseDataInnerPrescribersInner.md) |  |
**SupportEmail** | **NullableString** |  |
**SupportPhone** | **NullableString** |  |
**Timezone** | **NullableString** |  |

## Methods

### NewListPractices200ResponseDataInner

`func NewListPractices200ResponseDataInner(address NullableListPractices200ResponseDataInnerAddress, contacts ListPractices200ResponseDataInnerContacts, created NullableFloat32, externalId NullableString, id NullableString, legalName NullableString, name NullableString, object string, prescribers []ListPractices200ResponseDataInnerPrescribersInner, supportEmail NullableString, supportPhone NullableString, timezone NullableString, ) *ListPractices200ResponseDataInner`

NewListPractices200ResponseDataInner instantiates a new ListPractices200ResponseDataInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListPractices200ResponseDataInnerWithDefaults

`func NewListPractices200ResponseDataInnerWithDefaults() *ListPractices200ResponseDataInner`

NewListPractices200ResponseDataInnerWithDefaults instantiates a new ListPractices200ResponseDataInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *ListPractices200ResponseDataInner) GetAddress() ListPractices200ResponseDataInnerAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *ListPractices200ResponseDataInner) GetAddressOk() (*ListPractices200ResponseDataInnerAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *ListPractices200ResponseDataInner) SetAddress(v ListPractices200ResponseDataInnerAddress)`

SetAddress sets Address field to given value.


### SetAddressNil

`func (o *ListPractices200ResponseDataInner) SetAddressNil(b bool)`

 SetAddressNil sets the value for Address to be an explicit nil

### UnsetAddress
`func (o *ListPractices200ResponseDataInner) UnsetAddress()`

UnsetAddress ensures that no value is present for Address, not even an explicit nil
### GetContacts

`func (o *ListPractices200ResponseDataInner) GetContacts() ListPractices200ResponseDataInnerContacts`

GetContacts returns the Contacts field if non-nil, zero value otherwise.

### GetContactsOk

`func (o *ListPractices200ResponseDataInner) GetContactsOk() (*ListPractices200ResponseDataInnerContacts, bool)`

GetContactsOk returns a tuple with the Contacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContacts

`func (o *ListPractices200ResponseDataInner) SetContacts(v ListPractices200ResponseDataInnerContacts)`

SetContacts sets Contacts field to given value.


### GetCreated

`func (o *ListPractices200ResponseDataInner) GetCreated() float32`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ListPractices200ResponseDataInner) GetCreatedOk() (*float32, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ListPractices200ResponseDataInner) SetCreated(v float32)`

SetCreated sets Created field to given value.


### SetCreatedNil

`func (o *ListPractices200ResponseDataInner) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *ListPractices200ResponseDataInner) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetExternalId

`func (o *ListPractices200ResponseDataInner) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *ListPractices200ResponseDataInner) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *ListPractices200ResponseDataInner) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.


### SetExternalIdNil

`func (o *ListPractices200ResponseDataInner) SetExternalIdNil(b bool)`

 SetExternalIdNil sets the value for ExternalId to be an explicit nil

### UnsetExternalId
`func (o *ListPractices200ResponseDataInner) UnsetExternalId()`

UnsetExternalId ensures that no value is present for ExternalId, not even an explicit nil
### GetId

`func (o *ListPractices200ResponseDataInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ListPractices200ResponseDataInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ListPractices200ResponseDataInner) SetId(v string)`

SetId sets Id field to given value.


### SetIdNil

`func (o *ListPractices200ResponseDataInner) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *ListPractices200ResponseDataInner) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetLegalName

`func (o *ListPractices200ResponseDataInner) GetLegalName() string`

GetLegalName returns the LegalName field if non-nil, zero value otherwise.

### GetLegalNameOk

`func (o *ListPractices200ResponseDataInner) GetLegalNameOk() (*string, bool)`

GetLegalNameOk returns a tuple with the LegalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegalName

`func (o *ListPractices200ResponseDataInner) SetLegalName(v string)`

SetLegalName sets LegalName field to given value.


### SetLegalNameNil

`func (o *ListPractices200ResponseDataInner) SetLegalNameNil(b bool)`

 SetLegalNameNil sets the value for LegalName to be an explicit nil

### UnsetLegalName
`func (o *ListPractices200ResponseDataInner) UnsetLegalName()`

UnsetLegalName ensures that no value is present for LegalName, not even an explicit nil
### GetName

`func (o *ListPractices200ResponseDataInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ListPractices200ResponseDataInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ListPractices200ResponseDataInner) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *ListPractices200ResponseDataInner) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *ListPractices200ResponseDataInner) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetObject

`func (o *ListPractices200ResponseDataInner) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *ListPractices200ResponseDataInner) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *ListPractices200ResponseDataInner) SetObject(v string)`

SetObject sets Object field to given value.


### GetPrescribers

`func (o *ListPractices200ResponseDataInner) GetPrescribers() []ListPractices200ResponseDataInnerPrescribersInner`

GetPrescribers returns the Prescribers field if non-nil, zero value otherwise.

### GetPrescribersOk

`func (o *ListPractices200ResponseDataInner) GetPrescribersOk() (*[]ListPractices200ResponseDataInnerPrescribersInner, bool)`

GetPrescribersOk returns a tuple with the Prescribers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrescribers

`func (o *ListPractices200ResponseDataInner) SetPrescribers(v []ListPractices200ResponseDataInnerPrescribersInner)`

SetPrescribers sets Prescribers field to given value.


### GetSupportEmail

`func (o *ListPractices200ResponseDataInner) GetSupportEmail() string`

GetSupportEmail returns the SupportEmail field if non-nil, zero value otherwise.

### GetSupportEmailOk

`func (o *ListPractices200ResponseDataInner) GetSupportEmailOk() (*string, bool)`

GetSupportEmailOk returns a tuple with the SupportEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportEmail

`func (o *ListPractices200ResponseDataInner) SetSupportEmail(v string)`

SetSupportEmail sets SupportEmail field to given value.


### SetSupportEmailNil

`func (o *ListPractices200ResponseDataInner) SetSupportEmailNil(b bool)`

 SetSupportEmailNil sets the value for SupportEmail to be an explicit nil

### UnsetSupportEmail
`func (o *ListPractices200ResponseDataInner) UnsetSupportEmail()`

UnsetSupportEmail ensures that no value is present for SupportEmail, not even an explicit nil
### GetSupportPhone

`func (o *ListPractices200ResponseDataInner) GetSupportPhone() string`

GetSupportPhone returns the SupportPhone field if non-nil, zero value otherwise.

### GetSupportPhoneOk

`func (o *ListPractices200ResponseDataInner) GetSupportPhoneOk() (*string, bool)`

GetSupportPhoneOk returns a tuple with the SupportPhone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportPhone

`func (o *ListPractices200ResponseDataInner) SetSupportPhone(v string)`

SetSupportPhone sets SupportPhone field to given value.


### SetSupportPhoneNil

`func (o *ListPractices200ResponseDataInner) SetSupportPhoneNil(b bool)`

 SetSupportPhoneNil sets the value for SupportPhone to be an explicit nil

### UnsetSupportPhone
`func (o *ListPractices200ResponseDataInner) UnsetSupportPhone()`

UnsetSupportPhone ensures that no value is present for SupportPhone, not even an explicit nil
### GetTimezone

`func (o *ListPractices200ResponseDataInner) GetTimezone() string`

GetTimezone returns the Timezone field if non-nil, zero value otherwise.

### GetTimezoneOk

`func (o *ListPractices200ResponseDataInner) GetTimezoneOk() (*string, bool)`

GetTimezoneOk returns a tuple with the Timezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimezone

`func (o *ListPractices200ResponseDataInner) SetTimezone(v string)`

SetTimezone sets Timezone field to given value.


### SetTimezoneNil

`func (o *ListPractices200ResponseDataInner) SetTimezoneNil(b bool)`

 SetTimezoneNil sets the value for Timezone to be an explicit nil

### UnsetTimezone
`func (o *ListPractices200ResponseDataInner) UnsetTimezone()`

UnsetTimezone ensures that no value is present for Timezone, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


