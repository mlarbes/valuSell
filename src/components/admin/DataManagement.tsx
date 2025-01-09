import React from 'react';
import { AdminCard } from './AdminCard';

export function DataManagement() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">Data Management</h2>
      
      <AdminCard
        title="Data Operations"
        description="Manage application data and perform maintenance operations."
      >
        <div className="mt-4">
          <p className="text-sm text-gray-500">Data management features coming soon.</p>
        </div>
      </AdminCard>
    </div>
  );
}
