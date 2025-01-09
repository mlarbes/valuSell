import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
}

export function StatCard({ icon, title, value, trend, trendUp }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        {icon}
        <span className={`text-sm font-medium ${
          trendUp ? 'text-green-600' : 'text-red-600'
        }`}>
          {trend}
        </span>
      </div>
      <h3 className="mt-4 text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
}
