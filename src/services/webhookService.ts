const BASE_WEBHOOK_URL = 'https://n8n-rleebzjn.cloud-station.app/webhook-test/780199b6-be4b-45da-a306-748762e4ade2';

export interface SpinQuestionParams {
  spinType: 'situation' | 'problem' | 'implication' | 'need';
  industry: string;
  context: string;
  prospectId: string;
  persona: string;
}

export interface SpinQuestionResponse {
  text: string;
  type: string;
  context?: string;
  industry: string;
  persona: string;
  score: number;
}

export interface WebhookResponse {
  status: 'success' | 'error';
  data: SpinQuestionResponse[];
}

export const generateSpinQuestions = async (params: SpinQuestionParams): Promise<SpinQuestionResponse[]> => {
  const queryParams = new URLSearchParams({
    spintype: params.spinType,
    industry: params.industry,
    context: params.context,
    prospectid: params.prospectId,
    persona: params.persona
  });

  const url = `${BASE_WEBHOOK_URL}?${queryParams.toString()}`;
  console.log('Calling webhook:', url); // Debug log

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch SPIN questions: ${response.statusText}`);
    }

    const result: WebhookResponse = await response.json();
    console.log('Webhook response:', result); // Debug log
    
    if (result.status === 'success' && Array.isArray(result.data)) {
      return result.data;
    } else {
      throw new Error('Invalid response format from webhook');
    }
  } catch (error) {
    console.error('Error generating SPIN questions:', error);
    throw error;
  }
};
