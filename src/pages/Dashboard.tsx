import React from 'react';
import { Users, BarChart3, TrendingUp } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { ActivityItem } from '../components/ActivityItem';

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Sarah!</h1>
        <p className="text-gray-600">Here's what's happening with your sales pipeline.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<Users className="w-6 h-6 text-violet-600" />}
          title="Active Prospects"
          value="24"
          trend="+12%"
          trendUp={true}
        />
        <StatCard
          icon={<BarChart3 className="w-6 h-6 text-pink-600" />}
          title="Demo Requests"
          value="8"
          trend="+5%"
          trendUp={true}
        />
        <StatCard
          icon={<TrendingUp className="w-6 h-6 text-rose-600" />}
          title="Success Rate"
          value="68%"
          trend="+3%"
          trendUp={true}
        />
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-200">
          <ActivityItem
            title="New demo request from Acme Corp"
            description="Enterprise security solution demo requested"
            time="2 hours ago"
          />
          <ActivityItem
            title="SPIN Discovery completed"
            description="High score achieved for TechCorp qualification"
            time="5 hours ago"
          />
          <ActivityItem
            title="Success criteria met"
            description="DataSafe PoV completed with all criteria met"
            time="1 day ago"
          />
        </div>
      </div>
    </div>
  );
}
