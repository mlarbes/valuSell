import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminLayout } from '../components/admin/AdminLayout';
import { GeneralSettings } from '../components/admin/GeneralSettings';
import { WebhookSettings } from '../components/admin/WebhookSettings';
import { UserManagement } from '../components/admin/UserManagement';
import { DataManagement } from '../components/admin/DataManagement';

export function AdminConsole() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<GeneralSettings />} />
        <Route path="/webhooks" element={<WebhookSettings />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/data" element={<DataManagement />} />
      </Routes>
    </AdminLayout>
  );
}
