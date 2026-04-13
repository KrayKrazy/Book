import { GoogleGenerativeAI } from "@google/generative-ai";
import { MARIANA_SYSTEM_INSTRUCTION } from "../constants";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error(" ERRO: VITE_GEMINI_API_KEY não encontrada no .env.local");
}

const genAI = new GoogleGenerativeAI(apiKey);

let chatSession: any = null;

export const startNewChat = async () => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: MARIANA_SYSTEM_INSTRUCTION,
    });

    chatSession = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });
    console.log(" Chat Mariana iniciado.");
  } catch (error) {
    console.error("Erro ao iniciar chat:", error);
  }
};

export const sendMessageToGemini = async (message: string) => {
  if (!chatSession) {
    await startNewChat();
  }

  try {
    const result = await chatSession.sendMessage(message);
    const fullResponse = result.response.text();
    return fullResponse;
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    return "Erro de conexão com a IA.";
  }
};
