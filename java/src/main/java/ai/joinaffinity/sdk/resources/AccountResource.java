// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package ai.joinaffinity.sdk.resources;
import ai.joinaffinity.sdk.*; import ai.joinaffinity.sdk.api.*; import ai.joinaffinity.sdk.model.*;
public final class AccountResource { private final ApiKeysApi access; private final PlatformsApi platforms; public AccountResource(ApiClient c){access=new ApiKeysApi(c);platforms=new PlatformsApi(c);} public GetApiAccessResponse retrieveAccess() throws ApiException{return access.getApiAccess();} public GetAccountResponse retrieve() throws ApiException{return platforms.getAccount(null);} public GetAccountResponse retrieve(String id)throws ApiException{return platforms.getAccount(id);} }
