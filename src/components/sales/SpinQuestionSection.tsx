import React, { useState } from 'react';
import { MessageSquarePlus, Loader2, ThumbsUp, ThumbsDown } from 'lucide-react';
import { generateSpinQuestions } from '../../services/webhookService';
import type { SpinQuestion } from '../../types/sales';

interface SpinQuestionSectionProps {
  type: 'situation' | 'problem' | 'implication' | 'need';
  questions: SpinQuestion[];
  prospectId?: string;
  industry: string;
  persona: string;
  onQuestionsGenerated: (newQuestions: SpinQuestion[]) => void;
}

export function SpinQuestionSection({ 
  type, 
  questions, 
  prospectId,
  industry,
  persona,
  onQuestionsGenerated 
}: SpinQuestionSectionProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateQuestions = async () => {
    if (!prospectId) return;
    
    setIsGenerating(true);
    setError(null);
    
    try {
      const params = {
        spinType: type,
        industry,
        context: `Generating ${type} questions for ${industry} ${persona}`,
        prospectId,
        persona
      };

      const newQuestions = await generateSpinQuestions(params);
      console.log('Generated questions:', newQuestions); // Debug log
      onQuestionsGenerated(newQuestions);
    } catch (err) {
      console.error('Error in SpinQuestionSection:', err); // Debug log
      setError('Failed to generate questions. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const typeQuestions = questions.filter(q => q.type === type);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium capitalize text-gray-900">{type} Questions</h3>
        <button
          onClick={handleGenerateQuestions}
          disabled={isGenerating}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 disabled:opacity-50"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <MessageSquarePlus className="w-4 h-4 mr-2" />
              Generate {type}
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 text-sm text-red-700 bg-red-50 rounded-md">
          {error}
        </div>
      )}

      <div className="space-y-4">
        {typeQuestions.length === 0 && !isGenerating && (
          <div className="text-center py-8 text-gray-500">
            No {type} questions generated yet. Click the generate button to start.
          </div>
        )}

        {typeQuestions.map((question, index) => (
          <div
            key={`${question.type}-${index}`}
            className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-violet-200 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <p className="text-gray-900 font-medium">{question.text}</p>
                {question.context && (
                  <p className="text-sm text-gray-600">{question.context}</p>
                )}
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{question.industry}</span>
                  <span>•</span>
                  <span>{question.persona}</span>
                </div>
              </div>
              <div className="ml-4 flex flex-col items-end space-y-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-100 text-violet-800">
                  Score: {question.score.toFixed(2)}
                </span>
                <div className="flex space-x-2">
                  <button 
                    className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-green-600"
                    title="Good question"
                  >
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                  <button 
                    className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-red-600"
                    title="Not relevant"
                  >
                    <ThumbsDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
