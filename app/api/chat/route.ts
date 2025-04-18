import { NextResponse } from "next/server";
import { groq } from "@/lib/groq";

export async function POST(req: Request) {
  const { messages } = await req.json();
  
  const response = await groq.chat.completions.create({
    messages,
    model: "mixtral-8x7b-32768",
  });

  return NextResponse.json(response);
}
