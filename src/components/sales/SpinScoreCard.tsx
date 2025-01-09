import React from 'react';
import { Brain } from 'lucide-react';
import { Card } from '../common/Card';
import { SectionHeader } from '../common/SectionHeader';

interface SpinScoreCardProps {
  score: number;
  totalQuestions: number;
}

export function SpinScoreCard({ score, totalQuestions }: SpinScoreCardProps) {
  return (
    <Card>
      <SectionHeader icon={<Brain />} title="SPIN Score" />
      <div className="p-6">
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold text-violet-600">{score.toFixed(2)}</div>
          <p className="text-sm text-gray-600">Average Score</p>
          <p className="text-xs text-gray-500">{totalQuestions} questions generated</p>
        </div>
      </div>
    </Card>
  );
}
