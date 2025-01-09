export interface WebhookConfig {
  url: string;
  secretKey: string;
}

export interface AdminState {
  webhookConfig: WebhookConfig;
}
