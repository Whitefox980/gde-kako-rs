import Groq from "groq";

export const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || ""
});
