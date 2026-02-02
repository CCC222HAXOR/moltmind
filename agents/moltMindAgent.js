import groq from '../services/groqClient.js';
import { getBTCPriceUSD } from '../services/priceFeed.js';

export async function moltMindAgent(input) {
  const btcPrice = await getBTCPriceUSD();

  const completion = await groq.chat.completions.create({
    model: 'llama-3.1-8b-instant',
    max_tokens: 200,
    messages: [
      {
        role: 'system',
        content: `
You are MOLT MIND ($MMIND).
Anime narrator. Sarcastic.
Use the provided REAL price.
Do not invent numbers.
If price is given, reference it explicitly.
        `.trim(),
      },
      {
        role: 'user',
        content: `
Market context:
BTC price (USD): ${btcPrice}

User request:
${input}
        `,
      },
    ],
  });

  return completion.choices[0].message.content;
}
