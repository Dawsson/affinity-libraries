

# GetAccountResponseMembership


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**permissions** | [**List&lt;PermissionsEnum&gt;**](#List&lt;PermissionsEnum&gt;) |  |  |
|**role** | [**RoleEnum**](#RoleEnum) |  |  |
|**roleName** | **String** |  |  |
|**status** | [**StatusEnum**](#StatusEnum) |  |  |



## Enum: List&lt;PermissionsEnum&gt;

| Name | Value |
|---- | -----|
| MANAGE_API | &quot;manage_api&quot; |
| MANAGE_ORDERS | &quot;manage_orders&quot; |
| MANAGE_ORGANIZATION | &quot;manage_organization&quot; |
| READ_CATALOG | &quot;read_catalog&quot; |
| READ_ORDERS | &quot;read_orders&quot; |
| REVIEW_ORDERS | &quot;review_orders&quot; |



## Enum: RoleEnum

| Name | Value |
|---- | -----|
| CLINICAL_REVIEWER | &quot;clinical_reviewer&quot; |
| DEVELOPER | &quot;developer&quot; |
| OPERATIONS | &quot;operations&quot; |
| OWNER | &quot;owner&quot; |
| VIEWER | &quot;viewer&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;active&quot; |
| DISABLED | &quot;disabled&quot; |
| INVITED | &quot;invited&quot; |



