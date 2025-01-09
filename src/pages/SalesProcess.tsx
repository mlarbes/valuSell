import React from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Brain } from 'lucide-react';
import { OpportunityList } from '../components/sales/OpportunityList';
import { OpportunityDetails } from '../components/sales/OpportunityDetails';
import { SpinQuestions } from '../components/sales/SpinQuestions';
import { Card } from '../components/common/Card';
import { SectionHeader } from '../components/common/SectionHeader';

export function SalesProcess() {
  const { prospectId } = useParams();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Sales Process</h1>
        <p className="text-gray-600">Manage and track the sales journey</p>
      </div>

      <Card>
        <SectionHeader icon={<LineChart />} title="Opportunities" />
        <div className="p-6">
          <OpportunityList prospectId={prospectId} />
        </div>
      </Card>

      <Card>
        <SectionHeader icon={<Brain />} title="SPIN Selling Questions" />
        <div className="p-6">
          <SpinQuestions prospectId={prospectId} />
        </div>
      </Card>
    </div>
  );
}
