import React from 'react';
import { Building2, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Prospect {
  id: string;
  company: string;
  contact: string;
  email: string;
  phone: string;
  status: 'New' | 'Qualified' | 'Discovery' | 'Demo' | 'POV';
  lastActivity: string;
}

const prospects: Prospect[] = [
  {
    id: '1',
    company: 'Acme Corp',
    contact: 'John Smith',
    email: 'john@acme.com',
    phone: '+1 234 567 890',
    status: 'Demo',
    lastActivity: '2 hours ago'
  },
  {
    id: '2',
    company: 'TechCorp',
    contact: 'Sarah Johnson',
    email: 'sarah@techcorp.com',
    phone: '+1 234 567 891',
    status: 'Discovery',
    lastActivity: '1 day ago'
  },
  {
    id: '3',
    company: 'DataSafe',
    contact: 'Mike Wilson',
    email: 'mike@datasafe.com',
    phone: '+1 234 567 892',
    status: 'POV',
    lastActivity: '3 days ago'
  }
];

export function Prospects() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Prospects</h1>
        <p className="text-gray-600">Manage and track your sales opportunities</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Activity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {prospects.map((prospect) => (
                <tr key={prospect.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Building2 className="w-5 h-5 text-gray-400 mr-2" />
                      <div>
                        <div className="font-medium text-gray-900">{prospect.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="font-medium text-gray-900">{prospect.contact}</div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-1" />
                          {prospect.email}
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          {prospect.phone}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-100 text-violet-800">
                      {prospect.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {prospect.lastActivity}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <Link
                      to={`/sales-process/${prospect.id}`}
                      className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-violet-600 bg-violet-50 hover:bg-violet-100"
                    >
                      View Process
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
