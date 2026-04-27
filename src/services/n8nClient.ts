/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Use an environment variable for the webhook URL, fallback to a placeholder for development
const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://abs2000.app.n8n.cloud/webhook-test/architect';

export const sendToPromptArchitect = async (formData: FormData) => {
  const response = await fetch(N8N_WEBHOOK_URL, {
    method: 'POST',
    body: formData,
    // Note: Fetch automatically sets the correct Content-Type for FormData (multipart/form-data)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to connect to the Prompt Architect workflow');
  }

  return response.json();
};