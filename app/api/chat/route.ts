// Groq API endpoint
   import { Groq } from 'groq-sdk';

   export async function POST(req: Request) {
     const { messages } = await req.json();
     const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

     const response = await groq.chat.completions.create({
       messages,
       model: 'mixtral-8x7b-32768',
     });

     return Response.json({ response: response.choices[0].message.content });
   }
