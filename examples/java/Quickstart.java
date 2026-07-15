import ai.joinaffinity.sdk.Affinity;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.model.GetApiAccess200Response;
import ai.joinaffinity.sdk.model.GetPlatformOrganization200Response;
import ai.joinaffinity.sdk.model.ListCatalogItems200Response;
import ai.joinaffinity.sdk.model.ListOrders200Response;
import ai.joinaffinity.sdk.model.ListPractices200Response;
import ai.joinaffinity.sdk.model.ListWebhookEndpoints200Response;

public final class Quickstart {
  public static void main(String[] args) throws Exception {
    String apiKey = System.getenv("AFFINITY_API_KEY");
    if (apiKey == null || apiKey.isBlank()) {
      throw new IllegalStateException("Set AFFINITY_API_KEY to a test-mode service key");
    }

    Affinity affinity =
        new Affinity(
            apiKey,
            new Affinity.Options()
                .apiVersion("2026-07-09")
                .host("api.joinaffinityai.com"));

    try {
      // Confirm the key's account, environment, and scopes before reading resources.
      GetApiAccess200Response access = affinity.account().retrieveAccess();
      System.out.printf(
          "Authenticated: livemode=%s scopes=%s serviceAccount=%s%n",
          access.getLivemode(), access.getScopes(), access.getServiceAccount());

      if (Boolean.TRUE.equals(access.getLivemode())) {
        throw new IllegalStateException("This quickstart only runs with a test-mode service key");
      }
      if (!access.getScopes().contains("catalog:read")) {
        throw new IllegalStateException("The service key needs the catalog:read scope");
      }

      GetPlatformOrganization200Response organization =
          affinity.account().retrieve();
      ListCatalogItems200Response catalog = affinity.catalog().list("semaglutide");
      ListPractices200Response practices = affinity.practices().list();
      ListOrders200Response orders = affinity.orders().list();
      ListWebhookEndpoints200Response webhooks = affinity.webhooks().listEndpoints();

      System.out.println("Organization: " + organization.getAccount());
      System.out.printf("Found %d matching sandbox catalog items%n", catalog.getItems().size());
      catalog.getItems().stream().limit(3).forEach(item -> System.out.println("Catalog item: " + item));
      System.out.printf("Found %d practices%n", practices.getData().size());
      System.out.printf("Found %d sandbox orders%n", orders.getOrders().size());
      System.out.printf("Found %d test webhook endpoints%n", webhooks.getEndpoints().size());
      System.out.println("The SDK is authenticated and ready for sandbox integration work.");
    } catch (ApiException error) {
      System.err.println("Affinity API request failed with status " + error.getCode());
      throw error;
    }
  }
}
