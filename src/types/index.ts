export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'sales' | 'presales';
  tenantId: string;
}

export interface Tenant {
  id: string;
  name: string;
  domain: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SalesMethodology {
  id: string;
  name: string;
  description: string;
  type: 'MEDDPICC' | 'SPIN' | 'CommandOfMessage';
  questions: Question[];
  tenantId: string;
}

export interface Question {
  id: string;
  text: string;
  type: 'situation' | 'problem' | 'implication' | 'need';
  methodology: string;
  industry?: string;
  persona?: string;
  score: number;
}

export interface Demo {
  id: string;
  title: string;
  description: string;
  url: string;
  industry: string;
  successCriteria: string[];
  viewCount: number;
  averageViewDuration: number;
  tenantId: string;
}
