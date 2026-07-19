// Code generated from spec/affinity.openapi.json by scripts/generate-facades.ts. DO NOT EDIT.

package affinity

import (
	"crypto/rand"
	"encoding/hex"
	"net/http"
	"strings"
)

type ClientOptions struct {
	APIVersion string
	Host       string
	HTTPClient *http.Client
}
type MutationOptions struct{ IdempotencyKey string }

func idempotencyKey(options ...MutationOptions) string {
	if len(options) > 0 && options[0].IdempotencyKey != "" {
		return options[0].IdempotencyKey
	}
	value := make([]byte, 16)
	if _, err := rand.Read(value); err != nil {
		panic("affinity: could not generate idempotency key")
	}
	return hex.EncodeToString(value)
}

type Client struct {
	Account   *AccountResource
	Catalog   *CatalogResource
	Orders    *OrdersResource
	Practices *PracticesResource
	Webhooks  *WebhooksResource
}

func NewClient(apiKey string, options ...ClientOptions) *Client {
	if apiKey == "" {
		panic("affinity: service API key is required")
	}
	option := ClientOptions{}
	if len(options) > 0 {
		option = options[0]
	}
	if option.APIVersion == "" {
		option.APIVersion = "2026-07-19"
	}
	if option.Host == "" {
		option.Host = "https://api.joinaffinityai.com"
	}
	if !strings.Contains(option.Host, "://") {
		option.Host = "https://" + option.Host
	}
	option.Host = strings.TrimRight(option.Host, "/")
	cfg := NewConfiguration()
	cfg.Servers[0].URL = option.Host
	if option.HTTPClient != nil {
		cfg.HTTPClient = option.HTTPClient
	}
	cfg.AddDefaultHeader("Authorization", "Bearer "+apiKey)
	cfg.AddDefaultHeader("Affinity-Version", option.APIVersion)
	raw := NewAPIClient(cfg)
	return &Client{Account: &AccountResource{raw}, Catalog: &CatalogResource{raw}, Orders: &OrdersResource{raw}, Practices: &PracticesResource{raw}, Webhooks: &WebhooksResource{raw}}
}
