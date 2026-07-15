// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package ai.joinaffinity.sdk.resources;
import ai.joinaffinity.sdk.*; import ai.joinaffinity.sdk.api.*; import ai.joinaffinity.sdk.model.*;
public final class PracticesResource { private final PracticesApi api; public PracticesResource(ApiClient c){api=new PracticesApi(c);} public ListPractices200Response list()throws ApiException{return api.listPractices();} public CreatePractice200Response retrieve(String id)throws ApiException{return api.getPractice(id);} public CreatePractice200Response create(CreatePracticeRequest p,MutationOptions o)throws ApiException{return api.createPractice(o.idempotencyKey(),p);} public CreatePractice200Response update(String id,MutationOptions o)throws ApiException{return api.updatePractice(id,o.idempotencyKey());} }
