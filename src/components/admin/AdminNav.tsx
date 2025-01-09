import React from 'react';
import { NavLink } from 'react-router-dom';
import { Settings, Webhook, Users, Database } from 'lucide-react';

const navItems = [
  { to: '/admin', icon: <Settings />, label: 'General', exact: true },
  { to: '/admin/webhooks', icon: <Webhook />, label: 'Webhooks' },
  { to: '/admin/users', icon: <Users />, label: 'Users' },
  { to: '/admin/data', icon: <Database />, label: 'Data Management' },
];

export function AdminNav() {
  return (
    <nav className="w-64 bg-white shadow rounded-lg p-4 h-fit">
      <ul className="space-y-2">
        {navItems.map(({ to, icon, label, exact }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={exact}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-violet-50 text-violet-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              {React.cloneElement(icon, { className: 'w-5 h-5' })}
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
