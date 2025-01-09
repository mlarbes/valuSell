import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
}

export function ActivityItem({ title, description, time }: ActivityItemProps) {
  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">{time}</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
