import groq from '../services/groqClient.js';

export async function moltMindAgent(input) {
  const completion = await groq.chat.completions.create({
    model: 'llama-3.1-8b-instant',
    max_tokens: 180,
    messages: [
      {
        role: 'system',
        content: `
You are MOLT MIND ($MMIND).
Tone: anime narrator with dry sarcasm.
Rules:
- Be concise.
- No markdown.
- No symbols spam.
- State insight, risk, and a blunt closing line.
Persona:
- Confident, witty, slightly mocking bad risk management.
        `.trim(),
      },
      { role: 'user', content: input },
    ],
  });

  return completion.choices[0].message.content;
}
