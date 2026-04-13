
import React, { useState, useEffect, useRef } from 'react';
import { Send, RotateCcw, Sparkles, User, ShieldCheck, Target } from 'lucide-react';
import { Message } from '../types';
import { sendMessageToGemini, startNewChat } from '../services/geminiService';
import { INITIAL_GREETING } from '../constants';

const ChatInterface: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const initChat = async () => {
      try {
        await startNewChat();
        setMessages([
          {
            id: 'init',
            role: 'model',
            text: INITIAL_GREETING,
            timestamp: new Date(),
          },
        ]);
      } catch (e) {
        console.error("Failed to start chat", e);
      }
    };
    initChat();
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "Erro de conexão. Tente reenviar a mensagem.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = async () => {
    setMessages([]);
    setIsLoading(true);
    await startNewChat();
    setMessages([
      {
        id: 'init-reset',
        role: 'model',
        text: INITIAL_GREETING,
        timestamp: new Date(),
      },
    ]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-stone-50 relative">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center shadow-sm z-10">
        <div className="flex items-center gap-3">
            <div className="bg-floresta-100 p-2 rounded-lg">
                <ShieldCheck className="text-floresta-700" size={24} />
            </div>
            <div>
                <h1 className="text-xl font-serif font-bold text-floresta-900 leading-tight">
                Mariana Strategist
                </h1>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold flex items-center gap-1">
                  <Target size={10} className="text-gold-500" /> 
                  Qualificar para Visita e Agendar
                </p>
            </div>
        </div>
        <button
          onClick={handleReset}
          className="text-gray-400 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-50"
          title="Resetar Estratégia"
        >
          <RotateCcw size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 shadow-md text-sm leading-relaxed ${
                  isUser
                    ? 'bg-floresta-700 text-white rounded-br-none'
                    : 'bg-white text-gray-800 border border-floresta-100 rounded-bl-none'
                }`}
              >
                <div className="flex items-center gap-2 mb-2 border-b border-black/5 pb-1">
                    {isUser ? (
                        <>
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Investigação SDR</span>
                            <User size={12} className="opacity-70" />
                        </>
                    ) : (
                        <>
                            <Sparkles size={12} className="text-gold-500" />
                            <span className="text-[10px] font-bold text-gold-600 uppercase tracking-widest">Mariana Strategist</span>
                        </>
                    )}
                </div>
                
                <div className="whitespace-pre-wrap font-sans prose prose-sm prose-stone">
                    {msg.text}
                </div>
              </div>
            </div>
          );
        })}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-floresta-100 rounded-2xl rounded-bl-none p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-floresta-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 bg-floresta-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-floresta-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span className="text-[10px] text-floresta-400 font-bold uppercase tracking-tighter">Analisando Tática...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-floresta-500/30 focus-within:border-floresta-500 transition-all shadow-inner">
          <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="O que o cliente disse?"
            className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 resize-none max-h-32"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className={`p-2.5 rounded-xl transition-all ${
              isLoading || !input.trim()
                ? 'text-gray-300'
                : 'bg-floresta-600 text-white hover:bg-floresta-700 shadow-md transform active:scale-95'
            }`}
          >
            <Send size={18} />
          </button>
        </div>
        <div className="flex justify-between items-center mt-3 px-1">
            <p className="text-[9px] text-gray-400">
                Data Atual: <span className="font-bold text-floresta-600 uppercase">Janeiro 2026</span>
            </p>
            <p className="text-[9px] text-gray-400 italic">
                Pilar: Qualificação para Visita
            </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
