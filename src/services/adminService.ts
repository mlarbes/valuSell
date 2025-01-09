import { WebhookConfig } from '../types/admin';

const WEBHOOK_CONFIG_KEY = 'webhook_config';

export const adminService = {
  saveWebhookConfig: (config: WebhookConfig): void => {
    localStorage.setItem(WEBHOOK_CONFIG_KEY, JSON.stringify(config));
  },

  getWebhookConfig: (): WebhookConfig | null => {
    const stored = localStorage.getItem(WEBHOOK_CONFIG_KEY);
    return stored ? JSON.parse(stored) : null;
  }
};
