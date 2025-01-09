import React from 'react';
import { DollarSign, Calendar, ArrowUpRight } from 'lucide-react';
import type { Opportunity } from '../../types/sales';

interface OpportunityListProps {
  prospectId?: string;
}

const opportunities: Opportunity[] = [
  {
    id: '1',
    prospectId: '1',
    title: 'Enterprise DLP Solution',
    status: 'Discovery',
    value: 150000,
    expectedCloseDate: new Date('2024-06-30'),
    source: 'Salesforce',
    createdAt: new Date('2024-03-01')
  },
  {
    id: '2',
    prospectId: '1',
    title: 'Data Classification Module',
    status: 'Qualification',
    value: 75000,
    expectedCloseDate: new Date('2024-07-15'),
    source: 'HubSpot',
    createdAt: new Date('2024-03-10')
  }
];

export function OpportunityList({ prospectId }: OpportunityListProps) {
  return (
    <div className="space-y-4">
      {opportunities.map((opportunity) => (
        <div
          key={opportunity.id}
          className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">{opportunity.title}</h3>
              <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-1" />
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(opportunity.value)}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(opportunity.expectedCloseDate).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  opportunity.source === 'Salesforce'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-orange-100 text-orange-800'
                }`}
              >
                {opportunity.source}
              </span>
              <button className="p-2 text-gray-400 hover:text-violet-600">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
