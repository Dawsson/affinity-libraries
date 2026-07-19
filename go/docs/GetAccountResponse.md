# GetAccountResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | [**GetAccountResponseAccount**](GetAccountResponseAccount.md) |  |
**Membership** | [**GetAccountResponseMembership**](GetAccountResponseMembership.md) |  |
**OperatingMode** | **string** |  |
**User** | [**GetAccountResponseUser**](GetAccountResponseUser.md) |  |

## Methods

### NewGetAccountResponse

`func NewGetAccountResponse(account GetAccountResponseAccount, membership GetAccountResponseMembership, operatingMode string, user GetAccountResponseUser, ) *GetAccountResponse`

NewGetAccountResponse instantiates a new GetAccountResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAccountResponseWithDefaults

`func NewGetAccountResponseWithDefaults() *GetAccountResponse`

NewGetAccountResponseWithDefaults instantiates a new GetAccountResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *GetAccountResponse) GetAccount() GetAccountResponseAccount`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *GetAccountResponse) GetAccountOk() (*GetAccountResponseAccount, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *GetAccountResponse) SetAccount(v GetAccountResponseAccount)`

SetAccount sets Account field to given value.


### GetMembership

`func (o *GetAccountResponse) GetMembership() GetAccountResponseMembership`

GetMembership returns the Membership field if non-nil, zero value otherwise.

### GetMembershipOk

`func (o *GetAccountResponse) GetMembershipOk() (*GetAccountResponseMembership, bool)`

GetMembershipOk returns a tuple with the Membership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembership

`func (o *GetAccountResponse) SetMembership(v GetAccountResponseMembership)`

SetMembership sets Membership field to given value.


### GetOperatingMode

`func (o *GetAccountResponse) GetOperatingMode() string`

GetOperatingMode returns the OperatingMode field if non-nil, zero value otherwise.

### GetOperatingModeOk

`func (o *GetAccountResponse) GetOperatingModeOk() (*string, bool)`

GetOperatingModeOk returns a tuple with the OperatingMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperatingMode

`func (o *GetAccountResponse) SetOperatingMode(v string)`

SetOperatingMode sets OperatingMode field to given value.


### GetUser

`func (o *GetAccountResponse) GetUser() GetAccountResponseUser`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *GetAccountResponse) GetUserOk() (*GetAccountResponseUser, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *GetAccountResponse) SetUser(v GetAccountResponseUser)`

SetUser sets User field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


