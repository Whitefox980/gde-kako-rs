// app/api/chat/route.ts (FULL WORKING VERSION)
export async function POST(req: Request) {
  const { messages } = await req.json();
  
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'mixtral-8x7b-32768',
      messages,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Groq API Error:', error);
    return new Response(error, { status: 500 });
  }

  return new Response(await response.text());
}
