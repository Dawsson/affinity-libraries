// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package ai.joinaffinity.sdk.resources;
import ai.joinaffinity.sdk.*; import ai.joinaffinity.sdk.api.*; import ai.joinaffinity.sdk.model.*;
public final class CatalogResource { private final CatalogApi api; public CatalogResource(ApiClient c){api=new CatalogApi(c);} public ListCatalogItemsResponse list()throws ApiException{return api.listCatalogItems(null,null,null,null,null);} public ListCatalogItemsResponse list(String query)throws ApiException{return api.listCatalogItems(query,null,null,null,null);} }
