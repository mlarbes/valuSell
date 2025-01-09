import React from 'react';
import { AdminCard } from './AdminCard';

export function UserManagement() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">User Management</h2>
      
      <AdminCard
        title="Users"
        description="Manage user accounts and permissions."
      >
        <div className="mt-4">
          <p className="text-sm text-gray-500">User management coming soon.</p>
        </div>
      </AdminCard>
    </div>
  );
}
