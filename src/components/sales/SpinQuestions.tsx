import React, { useState, useCallback } from 'react';
import type { SpinQuestion } from '../../types/sales';
import { SpinQuestionSection } from './SpinQuestionSection';
import { SpinScoreCard } from './SpinScoreCard';
import { QuestionFilters } from './QuestionFilters';

interface SpinQuestionsProps {
  prospectId?: string;
}

const spinTypes = ['situation', 'problem', 'implication', 'need'] as const;

export function SpinQuestions({ prospectId }: SpinQuestionsProps) {
  const [questions, setQuestions] = useState<SpinQuestion[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState('Technology');
  const [selectedPersona, setSelectedPersona] = useState('CISO');

  const handleQuestionsGenerated = useCallback((newQuestions: SpinQuestion[]) => {
    setQuestions(current => {
      const type = newQuestions[0]?.type;
      const updatedQuestions = [
        ...current.filter(q => q.type !== type),
        ...newQuestions
      ];
      console.log('Updated questions:', updatedQuestions); // Debug log
      return updatedQuestions;
    });
  }, []);

  const calculateAverageScore = useCallback(() => {
    if (questions.length === 0) return 0;
    const total = questions.reduce((sum, q) => sum + q.score, 0);
    return total / questions.length;
  }, [questions]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          {spinTypes.map((type) => (
            <SpinQuestionSection
              key={type}
              type={type}
              questions={questions}
              prospectId={prospectId}
              industry={selectedIndustry}
              persona={selectedPersona}
              onQuestionsGenerated={handleQuestionsGenerated}
            />
          ))}
        </div>
        <div className="space-y-6">
          <SpinScoreCard 
            score={calculateAverageScore()} 
            totalQuestions={questions.length}
          />
          <QuestionFilters
            selectedIndustry={selectedIndustry}
            selectedPersona={selectedPersona}
            onIndustryChange={setSelectedIndustry}
            onPersonaChange={setSelectedPersona}
          />
        </div>
      </div>

      {/* Debug section */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Debug Info:</h4>
          <pre className="text-xs text-gray-600 overflow-auto">
            {JSON.stringify({ questions, selectedIndustry, selectedPersona }, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
