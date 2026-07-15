package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	affinity "github.com/Dawsson/affinity-libraries/go"
)

func main() {
	apiKey := os.Getenv("AFFINITY_API_KEY")
	if apiKey == "" {
		log.Fatal("set AFFINITY_API_KEY to a test-mode service key")
	}

	configuration := affinity.NewConfiguration()
	configuration.AddDefaultHeader("Authorization", "Bearer "+apiKey)
	configuration.AddDefaultHeader("Affinity-Version", "2026-07-09")
	client := affinity.NewAPIClient(configuration)

	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()

	// Confirm the key's account, environment, and scopes before reading resources.
	access, _, err := client.APIKeysAPI.GetApiAccess(ctx).Execute()
	if err != nil {
		log.Fatalf("inspect API access: %v", err)
	}
	fmt.Printf("Authenticated: livemode=%t scopes=%v serviceAccount=%+v\n", access.Livemode, access.Scopes, access.ServiceAccount)
	if access.Livemode {
		log.Fatal("this quickstart only runs with a test-mode service key")
	}

	organization, _, err := client.PlatformsAPI.GetPlatformOrganization(ctx).Execute()
	if err != nil {
		log.Fatalf("get organization: %v", err)
	}
	fmt.Printf("Organization: %+v\n", organization.Account)

	catalog, _, err := client.CatalogAPI.ListCatalogItems(ctx).Query("semaglutide").Execute()
	if err != nil {
		log.Fatalf("search catalog: %v", err)
	}
	fmt.Printf("Found %d matching sandbox catalog items\n", len(catalog.Items))
	for index, item := range catalog.Items {
		if index == 3 {
			break
		}
		fmt.Printf("Catalog item: %+v\n", item)
	}

	practices, _, err := client.PracticesAPI.ListPractices(ctx).Execute()
	if err != nil {
		log.Fatalf("list practices: %v", err)
	}
	fmt.Printf("Found %d practices\n", len(practices.Data))

	orders, _, err := client.PlatformOrdersAPI.ListOrders(ctx).Execute()
	if err != nil {
		log.Fatalf("list orders: %v", err)
	}
	fmt.Printf("Found %d sandbox orders\n", len(orders.Orders))

	webhooks, _, err := client.PlatformWebhooksAPI.ListWebhookEndpoints(ctx).Execute()
	if err != nil {
		log.Fatalf("list webhook endpoints: %v", err)
	}
	fmt.Printf("Found %d test webhook endpoints\n", len(webhooks.Endpoints))
	fmt.Println("The SDK is authenticated and ready for sandbox integration work.")
}
