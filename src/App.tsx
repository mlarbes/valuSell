import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Prospects } from './pages/Prospects';
import { Demos } from './pages/Demos';
import { Settings } from './pages/Settings';
import { SalesProcess } from './pages/SalesProcess';
import { AdminConsole } from './pages/AdminConsole';
import { AdminSwitch } from './components/AdminSwitch';

export default function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminConsole />} />
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/prospects" element={<Prospects />} />
              <Route path="/demos" element={<Demos />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/sales-process/:prospectId" element={<SalesProcess />} />
            </Routes>
            <AdminSwitch />
          </Layout>
        }
      />
    </Routes>
  );
}
