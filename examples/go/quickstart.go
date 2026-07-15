package main

import (
	"context"
	"fmt"
	"log"
	"os"

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
	result, _, err := affinity.NewAPIClient(configuration).APIKeysAPI.GetApiAccess(context.Background()).Execute()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("%+v\n", result)
}
