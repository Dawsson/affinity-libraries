# CreateOrderRequestAnyOfPrescriber

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Credentials** | Pointer to **string** |  | [optional]
**LicenseStates** | **[]string** |  |
**Name** | **NullableString** |  |
**Npi** | **string** |  |

## Methods

### NewCreateOrderRequestAnyOfPrescriber

`func NewCreateOrderRequestAnyOfPrescriber(licenseStates []string, name NullableString, npi string, ) *CreateOrderRequestAnyOfPrescriber`

NewCreateOrderRequestAnyOfPrescriber instantiates a new CreateOrderRequestAnyOfPrescriber object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateOrderRequestAnyOfPrescriberWithDefaults

`func NewCreateOrderRequestAnyOfPrescriberWithDefaults() *CreateOrderRequestAnyOfPrescriber`

NewCreateOrderRequestAnyOfPrescriberWithDefaults instantiates a new CreateOrderRequestAnyOfPrescriber object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCredentials

`func (o *CreateOrderRequestAnyOfPrescriber) GetCredentials() string`

GetCredentials returns the Credentials field if non-nil, zero value otherwise.

### GetCredentialsOk

`func (o *CreateOrderRequestAnyOfPrescriber) GetCredentialsOk() (*string, bool)`

GetCredentialsOk returns a tuple with the Credentials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentials

`func (o *CreateOrderRequestAnyOfPrescriber) SetCredentials(v string)`

SetCredentials sets Credentials field to given value.

### HasCredentials

`func (o *CreateOrderRequestAnyOfPrescriber) HasCredentials() bool`

HasCredentials returns a boolean if a field has been set.

### GetLicenseStates

`func (o *CreateOrderRequestAnyOfPrescriber) GetLicenseStates() []string`

GetLicenseStates returns the LicenseStates field if non-nil, zero value otherwise.

### GetLicenseStatesOk

`func (o *CreateOrderRequestAnyOfPrescriber) GetLicenseStatesOk() (*[]string, bool)`

GetLicenseStatesOk returns a tuple with the LicenseStates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLicenseStates

`func (o *CreateOrderRequestAnyOfPrescriber) SetLicenseStates(v []string)`

SetLicenseStates sets LicenseStates field to given value.


### GetName

`func (o *CreateOrderRequestAnyOfPrescriber) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateOrderRequestAnyOfPrescriber) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateOrderRequestAnyOfPrescriber) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *CreateOrderRequestAnyOfPrescriber) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *CreateOrderRequestAnyOfPrescriber) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetNpi

`func (o *CreateOrderRequestAnyOfPrescriber) GetNpi() string`

GetNpi returns the Npi field if non-nil, zero value otherwise.

### GetNpiOk

`func (o *CreateOrderRequestAnyOfPrescriber) GetNpiOk() (*string, bool)`

GetNpiOk returns a tuple with the Npi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNpi

`func (o *CreateOrderRequestAnyOfPrescriber) SetNpi(v string)`

SetNpi sets Npi field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


