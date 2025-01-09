import React from 'react';
import { Menu, Home, Users, BarChart3, Settings, LogOut } from 'lucide-react';
import { NavItem } from './NavItem';
import { useLocation, useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className="text-xl font-bold text-violet-600">ValueSell</span>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Menu className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          <NavItem
            icon={<Home className="w-5 h-5" />}
            label="Dashboard"
            active={isActive('/')}
            onClick={() => navigate('/')}
          />
          <NavItem
            icon={<Users className="w-5 h-5" />}
            label="Prospects"
            active={isActive('/prospects')}
            onClick={() => navigate('/prospects')}
          />
          <NavItem
            icon={<BarChart3 className="w-5 h-5" />}
            label="Demos"
            active={isActive('/demos')}
            onClick={() => navigate('/demos')}
          />
          <NavItem
            icon={<Settings className="w-5 h-5" />}
            label="Settings"
            active={isActive('/settings')}
            onClick={() => navigate('/settings')}
          />
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
