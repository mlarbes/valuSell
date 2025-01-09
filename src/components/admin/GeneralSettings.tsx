import React from 'react';
import { AdminCard } from './AdminCard';

export function GeneralSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">General Settings</h2>
      
      <AdminCard
        title="Application Settings"
        description="Configure general application settings and preferences."
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Application Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
              defaultValue="ValueSell"
            />
          </div>
          {/* Add more general settings as needed */}
        </div>
      </AdminCard>
    </div>
  );
}
