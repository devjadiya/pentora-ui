'use server';
/**
 * @fileOverview An AI agent to enhance security-focused phrasing in website copy.
 *
 * - enhanceSecurityPhrasing - A function that handles the process of enhancing the security phrasing.
 * - EnhanceSecurityPhrasingInput - The input type for the enhanceSecurityPhrasing function.
 * - EnhanceSecurityPhrasingOutput - The return type for the enhanceSecurityPhrasing function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceSecurityPhrasingInputSchema = z.object({
  text: z
    .string()
    .describe("The website copy to be analyzed and improved for security-focused phrasing."),
});
export type EnhanceSecurityPhrasingInput = z.infer<typeof EnhanceSecurityPhrasingInputSchema>;

const EnhanceSecurityPhrasingOutputSchema = z.object({
  enhancedText: z
    .string()
    .describe("The improved website copy with enhanced security-focused phrasing."),
});
export type EnhanceSecurityPhrasingOutput = z.infer<typeof EnhanceSecurityPhrasingOutputSchema>;

export async function enhanceSecurityPhrasing(input: EnhanceSecurityPhrasingInput): Promise<EnhanceSecurityPhrasingOutput> {
  return enhanceSecurityPhrasingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceSecurityPhrasingPrompt',
  input: {schema: EnhanceSecurityPhrasingInputSchema},
  output: {schema: EnhanceSecurityPhrasingOutputSchema},
  prompt: `You are an expert cybersecurity copywriter. You will be provided with website copy, and your task is to rewrite it to enhance its security focus, clarity, and trustworthiness.

Original Text: {{{text}}}

Enhanced Text:`, // Removed explicit safetySettings from prompt
});

const enhanceSecurityPhrasingFlow = ai.defineFlow(
  {
    name: 'enhanceSecurityPhrasingFlow',
    inputSchema: EnhanceSecurityPhrasingInputSchema,
    outputSchema: EnhanceSecurityPhrasingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
