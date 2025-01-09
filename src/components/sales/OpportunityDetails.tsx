import React from 'react';
import { ProcessStages } from './ProcessStages';
import { SpinQuestions } from './SpinQuestions';
import { SpinScoreCard } from './SpinScoreCard';
import { Card } from '../common/Card';
import { SectionHeader } from '../common/SectionHeader';
import { ClipboardList, MessageCircle } from 'lucide-react';
import type { Opportunity } from '../../types/sales';

interface OpportunityDetailsProps {
  opportunity: Opportunity;
}

export function OpportunityDetails({ opportunity }: OpportunityDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <SectionHeader icon={<ClipboardList />} title={`Process Stages - ${opportunity.title}`} />
            <div className="p-6">
              <ProcessStages prospectId={opportunity.prospectId} />
            </div>
          </Card>
        </div>
        <div>
          <SpinScoreCard score={7.5} />
        </div>
      </div>

      <Card>
        <SectionHeader icon={<MessageCircle />} title="SPIN Questions" />
        <div className="p-6">
          <SpinQuestions prospectId={opportunity.prospectId} />
        </div>
      </Card>
    </div>
  );
}
