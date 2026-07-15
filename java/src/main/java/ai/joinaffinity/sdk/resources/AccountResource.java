// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package ai.joinaffinity.sdk.resources;
import ai.joinaffinity.sdk.*; import ai.joinaffinity.sdk.api.*; import ai.joinaffinity.sdk.model.*;
public final class AccountResource { private final ApiKeysApi access; private final PlatformsApi platforms; public AccountResource(ApiClient c){access=new ApiKeysApi(c);platforms=new PlatformsApi(c);} public GetApiAccess200Response retrieveAccess() throws ApiException{return access.getApiAccess();} public GetPlatformOrganization200Response retrieve() throws ApiException{return platforms.getPlatformOrganization(null);} public GetPlatformOrganization200Response retrieve(String id)throws ApiException{return platforms.getPlatformOrganization(id);} }
