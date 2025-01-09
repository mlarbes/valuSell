export interface SpinQuestion {
  text: string;
  type: 'situation' | 'problem' | 'implication' | 'need';
  context?: string;
  industry: string;
  persona: string;
  score: number;
}

export interface SalesProcess {
  id: string;
  prospectId: string;
  currentStage: 'Qualification' | 'Discovery' | 'Presentation' | 'Demo' | 'POV';
  spinScore: number;
  questions: SpinQuestion[];
  nextSteps: string[];
  lastUpdated: Date;
}
