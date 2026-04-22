/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { sendToPromptArchitect } from '../services/n8nClient';

interface ArchitectResult {
  masterPrompt: string;
  tokens: number;
}

export const usePromptArchitect = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ArchitectResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generatePrompt = async (text: string, targetAction: string, files: FileList | null) => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('text', text);
    formData.append('targetAction', targetAction);
    
    if (files) {
      Array.from(files).forEach((file, index) => {
        formData.append(`file${index}`, file);
      });
    }

    try {
      const data = await sendToPromptArchitect(formData);
      setResult(data);
    } catch (err: any) {
      console.error('Prompt Architect Error:', err);
      setError(err.message || 'Workflow connection failed. Check your n8n instance and CORS settings.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setError(null);
  };

  return { generatePrompt, loading, result, error, reset };
};