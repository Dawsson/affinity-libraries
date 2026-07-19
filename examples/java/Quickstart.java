import ai.joinaffinity.sdk.Affinity;
import ai.joinaffinity.sdk.ApiException;
import ai.joinaffinity.sdk.model.GetAccountResponse;
import ai.joinaffinity.sdk.model.GetApiAccessResponse;
import ai.joinaffinity.sdk.model.ListCatalogItemsResponse;
import ai.joinaffinity.sdk.model.ListOrdersResponse;
import ai.joinaffinity.sdk.model.ListPracticesResponse;
import ai.joinaffinity.sdk.model.ListWebhookEndpointsResponse;

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
                .apiVersion("2026-07-19")
                .host("api.joinaffinityai.com"));

    try {
      // Confirm the key's account, environment, and scopes before reading resources.
      GetApiAccessResponse access = affinity.account().retrieveAccess();
      System.out.printf(
          "Authenticated: livemode=%s scopes=%s serviceAccount=%s%n",
          access.getLivemode(), access.getScopes(), access.getServiceAccount());

      if (Boolean.TRUE.equals(access.getLivemode())) {
        throw new IllegalStateException("This quickstart only runs with a test-mode service key");
      }
      if (!access.getScopes().contains("catalog:read")) {
        throw new IllegalStateException("The service key needs the catalog:read scope");
      }

      GetAccountResponse organization = affinity.account().retrieve();
      ListCatalogItemsResponse catalog = affinity.catalog().list("semaglutide");
      ListPracticesResponse practices = affinity.practices().list();
      ListOrdersResponse orders = affinity.orders().list();
      ListWebhookEndpointsResponse webhooks = affinity.webhooks().listEndpoints();

      System.out.println("Organization: " + organization.getAccount());
      System.out.printf("Found %d matching sandbox catalog items%n", catalog.getData().size());
      catalog.getData().stream().limit(3).forEach(item -> System.out.println("Catalog item: " + item));
      System.out.printf("Found %d practices%n", practices.getData().size());
      System.out.printf("Found %d sandbox orders%n", orders.getData().size());
      System.out.printf("Found %d test webhook endpoints%n", webhooks.getData().size());
      System.out.println("The SDK is authenticated and ready for sandbox integration work.");
    } catch (ApiException error) {
      System.err.println("Affinity API request failed with status " + error.getCode());
      throw error;
    }
  }
}
