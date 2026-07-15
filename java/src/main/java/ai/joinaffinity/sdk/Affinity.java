// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package ai.joinaffinity.sdk;
import ai.joinaffinity.sdk.resources.*;
import java.net.URI;
public final class Affinity {
  private final AccountResource account; private final CatalogResource catalog; private final OrdersResource orders; private final PracticesResource practices; private final WebhooksResource webhooks;
  public Affinity(String apiKey) { this(apiKey, new Options()); }
  public Affinity(String apiKey, Options options) {
    if (apiKey == null || apiKey.isBlank()) throw new IllegalArgumentException("Affinity requires a service API key");
    URI uri = URI.create(normalizeHost(options.host));
    String path = uri.getPath().isEmpty() ? "/" : uri.getPath();
    ApiClient client = new ApiClient().setScheme(uri.getScheme()).setHost(uri.getHost()).setPort(uri.getPort()).setBasePath(path);
    client.setRequestInterceptor(builder -> { builder.header("Authorization", "Bearer " + apiKey); builder.header("Affinity-Version", options.apiVersion); });
    account = new AccountResource(client); catalog = new CatalogResource(client); orders = new OrdersResource(client); practices = new PracticesResource(client); webhooks = new WebhooksResource(client);
  }
  public AccountResource account() { return account; } public CatalogResource catalog() { return catalog; } public OrdersResource orders() { return orders; } public PracticesResource practices() { return practices; } public WebhooksResource webhooks() { return webhooks; }
  private static String normalizeHost(String host) { String value = host.contains("://") ? host : "https://" + host; return value.replaceAll("/+$", ""); }
  public static final class Options { private String apiVersion = "2026-07-09"; private String host = "https://api.joinaffinityai.com"; public Options apiVersion(String value) { apiVersion=value; return this; } public Options host(String value) { host=value; return this; } }
}
