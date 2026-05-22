import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (ai) {
    return ai;
  }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Uncaught ApiError: API key must be set when using the Gemini API.");
    throw new Error("API key must be set when using the Gemini API.");
  }
  ai = new GoogleGenAI({ apiKey });
  return ai;
}

export const getTravelSuggestion = async (userInput: string) => {
  try {
    const genAI = getAiClient();
    const response = await genAI.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: `User request: "${userInput}". 
      Context: VisitChina.au is an Australian boutique travel agency. 
      LATEST UPDATE: Australians get 30-day visa-free entry. 
      Task: Provide a concise recommendation (100 words max) using Australian English.` }] }],
      config: {
        systemInstruction: "You are the Lead Travel Consultant for VisitChina.au. You specialize in crafting high-quality China trips for Australian residents. Be helpful, professional, and emphasize ease.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I encountered an error. Please try again or contact us directly.";
  }
};

export async function* getTravelSuggestionStream(userInput: string) {
  try {
    const genAI = getAiClient();
    const result = await genAI.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: `User request: "${userInput}". 
      Context: VisitChina.au is an Australian boutique travel agency. 
      LATEST UPDATE: Australians get 30-day visa-free entry. 
      Task: Provide a concise recommendation (100 words max) using Australian English.` }] }],
      config: {
        systemInstruction: "You are the Lead Travel Consultant for VisitChina.au. You specialize in crafting high-quality China trips for Australian residents. Be helpful, professional, and emphasize ease.",
        temperature: 0.7,
      },
    });

    for await (const chunk of result) {
      const text = chunk.text;
      if (text) yield text;
    }
  } catch (error) {
    console.error("Gemini Stream Error:", error);
    yield "Sorry, I encountered an error. Please try again or contact us directly.";
  }
}
