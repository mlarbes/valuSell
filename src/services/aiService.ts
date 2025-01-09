import type { SpinQuestion } from '../types/sales';
import { adminService } from './adminService';

interface GenerateQuestionsParams {
  industry: string;
  persona: string;
  prospectId: string;
  spinType: 'situation' | 'problem' | 'implication' | 'need';
}

export async function generateAIQuestions({
  industry,
  persona,
  prospectId,
  spinType,
}: GenerateQuestionsParams): Promise<SpinQuestion[]> {
  const config = adminService.getWebhookConfig();
  
  if (!config?.url) {
    throw new Error('Webhook URL not configured');
  }

  try {
    const response = await fetch(config.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': config.secretKey,
        'X-SPIN-Type': spinType
      },
      body: JSON.stringify({ 
        industry, 
        persona, 
        prospectId,
        type: spinType // Include in body as well for flexibility
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate questions');
    }

    return response.json();
  } catch (error) {
    console.error('Error generating AI questions:', error);
    throw error;
  }
}
