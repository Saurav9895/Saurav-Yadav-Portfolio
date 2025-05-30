'use server';
/**
 * @fileOverview This file defines a Genkit flow that uses AI to tailor contact form messages for job applications.
 *
 * - tailorContactMessage - A function that tailors a contact message based on the job role and company culture.
 * - TailorContactMessageInput - The input type for the tailorContactMessage function.
 * - TailorContactMessageOutput - The return type for the tailorContactMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TailorContactMessageInputSchema = z.object({
  jobRole: z.string().describe('The job role the user is applying for.'),
  companyCulture: z.string().describe('The description of the company culture.'),
  originalMessage: z.string().describe('The original contact message.'),
});
export type TailorContactMessageInput = z.infer<typeof TailorContactMessageInputSchema>;

const TailorContactMessageOutputSchema = z.object({
  tailoredMessage: z.string().describe('The tailored contact message.'),
});
export type TailorContactMessageOutput = z.infer<typeof TailorContactMessageOutputSchema>;

export async function tailorContactMessage(input: TailorContactMessageInput): Promise<TailorContactMessageOutput> {
  return tailorContactMessageFlow(input);
}

const tailorContactMessagePrompt = ai.definePrompt({
  name: 'tailorContactMessagePrompt',
  input: {schema: TailorContactMessageInputSchema},
  output: {schema: TailorContactMessageOutputSchema},
  prompt: `You are an expert in tailoring contact messages for job applications. Based on the job role, company culture, and original message provided, create a tailored message that is more likely to make a positive impression.

Job Role: {{{jobRole}}}
Company Culture: {{{companyCulture}}}
Original Message: {{{originalMessage}}}

Tailored Message:`, //Crucially important to include the words "Tailored Message" here.
});

const tailorContactMessageFlow = ai.defineFlow(
  {
    name: 'tailorContactMessageFlow',
    inputSchema: TailorContactMessageInputSchema,
    outputSchema: TailorContactMessageOutputSchema,
  },
  async input => {
    const {output} = await tailorContactMessagePrompt(input);
    return output!;
  }
);
