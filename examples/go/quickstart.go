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

	client := affinity.NewClient(apiKey, affinity.ClientOptions{
		APIVersion: "2026-07-09",
		Host:       "https://api.joinaffinityai.com",
	})

	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()

	// Confirm the key's account, environment, and scopes before reading resources.
	access, err := client.Account.RetrieveAccess(ctx)
	if err != nil {
		log.Fatalf("inspect API access: %v", err)
	}
	fmt.Printf("Authenticated: livemode=%t scopes=%v serviceAccount=%+v\n", access.Livemode, access.Scopes, access.ServiceAccount)
	if access.Livemode {
		log.Fatal("this quickstart only runs with a test-mode service key")
	}

	organization, err := client.Account.Retrieve(ctx)
	if err != nil {
		log.Fatalf("get organization: %v", err)
	}
	fmt.Printf("Organization: %+v\n", organization.Account)

	catalog, err := client.Catalog.List(ctx, affinity.CatalogListParams{Query: "semaglutide"})
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

	practices, err := client.Practices.List(ctx)
	if err != nil {
		log.Fatalf("list practices: %v", err)
	}
	fmt.Printf("Found %d practices\n", len(practices.Data))

	orders, err := client.Orders.List(ctx)
	if err != nil {
		log.Fatalf("list orders: %v", err)
	}
	fmt.Printf("Found %d sandbox orders\n", len(orders.Orders))

	webhooks, err := client.Webhooks.ListEndpoints(ctx)
	if err != nil {
		log.Fatalf("list webhook endpoints: %v", err)
	}
	fmt.Printf("Found %d test webhook endpoints\n", len(webhooks.Endpoints))
	fmt.Println("The SDK is authenticated and ready for sandbox integration work.")
}
