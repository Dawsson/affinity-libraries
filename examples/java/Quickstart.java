import ai.joinaffinity.sdk.ApiClient;
import ai.joinaffinity.sdk.Configuration;
import ai.joinaffinity.sdk.api.ApiKeysApi;

public final class Quickstart {
  public static void main(String[] args) throws Exception {
    String apiKey = System.getenv("AFFINITY_API_KEY");
    if (apiKey == null || apiKey.isBlank()) {
      throw new IllegalStateException("Set AFFINITY_API_KEY to a test-mode service key");
    }

    ApiClient client = Configuration.getDefaultApiClient();
    client.addDefaultHeader("Authorization", "Bearer " + apiKey);
    client.addDefaultHeader("Affinity-Version", "2026-07-09");
    System.out.println(new ApiKeysApi(client).getApiAccess());
  }
}
