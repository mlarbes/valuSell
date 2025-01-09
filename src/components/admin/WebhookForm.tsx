import React, { useState, useEffect } from 'react';
import { adminService } from '../../services/adminService';
import type { WebhookConfig } from '../../types/admin';

export function WebhookForm() {
  const [config, setConfig] = useState<WebhookConfig>({
    url: '',
    secretKey: ''
  });
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedConfig = adminService.getWebhookConfig();
    if (savedConfig) {
      setConfig(savedConfig);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    adminService.saveWebhookConfig(config);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          AI Questions Webhook URL
        </label>
        <input
          type="url"
          value={config.url}
          onChange={(e) => setConfig({ ...config, url: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
          placeholder="https://api.example.com/generate-questions"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Secret Key
        </label>
        <input
          type="password"
          value={config.secretKey}
          onChange={(e) => setConfig({ ...config, secretKey: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          Save Configuration
        </button>
        {isSaved && (
          <span className="text-green-600 text-sm">Configuration saved successfully!</span>
        )}
      </div>
    </form>
  );
}
