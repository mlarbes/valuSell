import React from 'react';
import { Filter } from 'lucide-react';

interface QuestionFiltersProps {
  selectedIndustry: string;
  selectedPersona: string;
  onIndustryChange: (industry: string) => void;
  onPersonaChange: (persona: string) => void;
}

const industries = ['Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail'];
const personas = ['CISO', 'CTO', 'CIO', 'IT Director', 'Security Manager'];

export function QuestionFilters({
  selectedIndustry,
  selectedPersona,
  onIndustryChange,
  onPersonaChange
}: QuestionFiltersProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg space-y-4">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Filter className="w-4 h-4" />
        <span>Filters</span>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Industry</label>
          <select
            value={selectedIndustry}
            onChange={(e) => onIndustryChange(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
          >
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Persona</label>
          <select
            value={selectedPersona}
            onChange={(e) => onPersonaChange(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
          >
            {personas.map((persona) => (
              <option key={persona} value={persona}>
                {persona}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
