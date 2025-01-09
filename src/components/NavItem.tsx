import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactElement<LucideIcon>;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function NavItem({ icon, label, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 w-full p-2 rounded-lg transition-colors ${
        active
          ? 'bg-violet-50 text-violet-600'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
