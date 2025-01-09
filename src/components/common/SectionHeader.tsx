import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
}

export function SectionHeader({ icon, title }: SectionHeaderProps) {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        {React.cloneElement(icon, { className: 'w-5 h-5 text-violet-600' })}
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
      </div>
    </div>
  );
}
