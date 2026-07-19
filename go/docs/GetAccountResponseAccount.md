# GetAccountResponseAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlertEmails** | **[]string** |  |
**AlertIntegrationIssues** | **bool** |  |
**AlertNewOrders** | **bool** |  |
**AlertStatusChanges** | **bool** |  |
**DisplayName** | **string** |  |
**Id** | **string** |  |
**Object** | **string** |  |
**Slug** | **string** |  |
**Status** | **string** |  |
**SupportEmail** | **NullableString** |  |
**WebsiteUrl** | **NullableString** |  |

## Methods

### NewGetAccountResponseAccount

`func NewGetAccountResponseAccount(alertEmails []string, alertIntegrationIssues bool, alertNewOrders bool, alertStatusChanges bool, displayName string, id string, object string, slug string, status string, supportEmail NullableString, websiteUrl NullableString, ) *GetAccountResponseAccount`

NewGetAccountResponseAccount instantiates a new GetAccountResponseAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAccountResponseAccountWithDefaults

`func NewGetAccountResponseAccountWithDefaults() *GetAccountResponseAccount`

NewGetAccountResponseAccountWithDefaults instantiates a new GetAccountResponseAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlertEmails

`func (o *GetAccountResponseAccount) GetAlertEmails() []string`

GetAlertEmails returns the AlertEmails field if non-nil, zero value otherwise.

### GetAlertEmailsOk

`func (o *GetAccountResponseAccount) GetAlertEmailsOk() (*[]string, bool)`

GetAlertEmailsOk returns a tuple with the AlertEmails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertEmails

`func (o *GetAccountResponseAccount) SetAlertEmails(v []string)`

SetAlertEmails sets AlertEmails field to given value.


### GetAlertIntegrationIssues

`func (o *GetAccountResponseAccount) GetAlertIntegrationIssues() bool`

GetAlertIntegrationIssues returns the AlertIntegrationIssues field if non-nil, zero value otherwise.

### GetAlertIntegrationIssuesOk

`func (o *GetAccountResponseAccount) GetAlertIntegrationIssuesOk() (*bool, bool)`

GetAlertIntegrationIssuesOk returns a tuple with the AlertIntegrationIssues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertIntegrationIssues

`func (o *GetAccountResponseAccount) SetAlertIntegrationIssues(v bool)`

SetAlertIntegrationIssues sets AlertIntegrationIssues field to given value.


### GetAlertNewOrders

`func (o *GetAccountResponseAccount) GetAlertNewOrders() bool`

GetAlertNewOrders returns the AlertNewOrders field if non-nil, zero value otherwise.

### GetAlertNewOrdersOk

`func (o *GetAccountResponseAccount) GetAlertNewOrdersOk() (*bool, bool)`

GetAlertNewOrdersOk returns a tuple with the AlertNewOrders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertNewOrders

`func (o *GetAccountResponseAccount) SetAlertNewOrders(v bool)`

SetAlertNewOrders sets AlertNewOrders field to given value.


### GetAlertStatusChanges

`func (o *GetAccountResponseAccount) GetAlertStatusChanges() bool`

GetAlertStatusChanges returns the AlertStatusChanges field if non-nil, zero value otherwise.

### GetAlertStatusChangesOk

`func (o *GetAccountResponseAccount) GetAlertStatusChangesOk() (*bool, bool)`

GetAlertStatusChangesOk returns a tuple with the AlertStatusChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertStatusChanges

`func (o *GetAccountResponseAccount) SetAlertStatusChanges(v bool)`

SetAlertStatusChanges sets AlertStatusChanges field to given value.


### GetDisplayName

`func (o *GetAccountResponseAccount) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *GetAccountResponseAccount) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *GetAccountResponseAccount) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetId

`func (o *GetAccountResponseAccount) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetAccountResponseAccount) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetAccountResponseAccount) SetId(v string)`

SetId sets Id field to given value.


### GetObject

`func (o *GetAccountResponseAccount) GetObject() string`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *GetAccountResponseAccount) GetObjectOk() (*string, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *GetAccountResponseAccount) SetObject(v string)`

SetObject sets Object field to given value.


### GetSlug

`func (o *GetAccountResponseAccount) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *GetAccountResponseAccount) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *GetAccountResponseAccount) SetSlug(v string)`

SetSlug sets Slug field to given value.


### GetStatus

`func (o *GetAccountResponseAccount) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetAccountResponseAccount) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetAccountResponseAccount) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetSupportEmail

`func (o *GetAccountResponseAccount) GetSupportEmail() string`

GetSupportEmail returns the SupportEmail field if non-nil, zero value otherwise.

### GetSupportEmailOk

`func (o *GetAccountResponseAccount) GetSupportEmailOk() (*string, bool)`

GetSupportEmailOk returns a tuple with the SupportEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportEmail

`func (o *GetAccountResponseAccount) SetSupportEmail(v string)`

SetSupportEmail sets SupportEmail field to given value.


### SetSupportEmailNil

`func (o *GetAccountResponseAccount) SetSupportEmailNil(b bool)`

 SetSupportEmailNil sets the value for SupportEmail to be an explicit nil

### UnsetSupportEmail
`func (o *GetAccountResponseAccount) UnsetSupportEmail()`

UnsetSupportEmail ensures that no value is present for SupportEmail, not even an explicit nil
### GetWebsiteUrl

`func (o *GetAccountResponseAccount) GetWebsiteUrl() string`

GetWebsiteUrl returns the WebsiteUrl field if non-nil, zero value otherwise.

### GetWebsiteUrlOk

`func (o *GetAccountResponseAccount) GetWebsiteUrlOk() (*string, bool)`

GetWebsiteUrlOk returns a tuple with the WebsiteUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebsiteUrl

`func (o *GetAccountResponseAccount) SetWebsiteUrl(v string)`

SetWebsiteUrl sets WebsiteUrl field to given value.


### SetWebsiteUrlNil

`func (o *GetAccountResponseAccount) SetWebsiteUrlNil(b bool)`

 SetWebsiteUrlNil sets the value for WebsiteUrl to be an explicit nil

### UnsetWebsiteUrl
`func (o *GetAccountResponseAccount) UnsetWebsiteUrl()`

UnsetWebsiteUrl ensures that no value is present for WebsiteUrl, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


