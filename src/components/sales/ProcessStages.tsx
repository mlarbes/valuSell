import React from 'react';
import { Check, Clock } from 'lucide-react';

interface ProcessStagesProps {
  prospectId?: string;
}

const stages = [
  { id: 1, name: 'Qualification', completed: true },
  { id: 2, name: 'Discovery', completed: true },
  { id: 3, name: 'Présentation', completed: true },
  { id: 4, name: 'Demo', completed: false, current: true },
  { id: 5, name: 'POV', completed: false },
];

export function ProcessStages({ prospectId }: ProcessStagesProps) {
  return (
    <div className="p-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-between">
          {stages.map((stage, index) => (
            <div key={stage.id} className="flex flex-col items-center">
              <div
                className={`relative w-10 h-10 flex items-center justify-center rounded-full ${
                  stage.completed
                    ? 'bg-violet-600'
                    : stage.current
                    ? 'bg-violet-100 border-2 border-violet-600'
                    : 'bg-gray-100'
                }`}
              >
                {stage.completed ? (
                  <Check className="w-6 h-6 text-white" />
                ) : stage.current ? (
                  <Clock className="w-5 h-5 text-violet-600" />
                ) : (
                  <span className="text-sm font-medium text-gray-500">{index + 1}</span>
                )}
              </div>
              <div className="mt-3 flex flex-col items-center">
                <span
                  className={`text-sm font-medium ${
                    stage.current ? 'text-violet-600' : 'text-gray-500'
                  }`}
                >
                  {stage.name}
                </span>
                {stage.current && (
                  <span className="mt-1 text-xs text-gray-500">En cours</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
