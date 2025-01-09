import React from 'react';
import { WebhookForm } from './WebhookForm';
import { AdminCard } from './AdminCard';

export function WebhookSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">Webhook Settings</h2>
      
      <AdminCard
        title="AI Questions Webhook"
        description="Configure the webhook endpoint for generating AI-powered SPIN selling questions."
      >
        <WebhookForm />
      </AdminCard>
    </div>
  );
}
