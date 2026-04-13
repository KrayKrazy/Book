
import React, { useState } from 'react';
import { 
  ChevronLeft, ChevronRight, PlayCircle, Quote, Info, Target, 
  Lightbulb, Users, ShieldCheck, BarChart3, Presentation, 
  Handshake, Search, Construction, PiggyBank, Crown, Calendar, Sparkles
} from 'lucide-react';

interface Slide {
  module: string;
  title: string;
  bullets: string[];
  speakerNotes: string;
  icon: React.ReactNode;
  color: string;
}

const slides: Slide[] = [
  {
    module: "BOAS-VINDAS",
    title: "O Superpoder de Agendar Reuniões",
    bullets: ["Bem-vindo ao time de elite!", "O que é um SDR? É um 'Arquiteto'", "Nossa meta: Reuniões que viram festa"],
    speakerNotes: "Olá, time! Imagine que vocês são arquitetos. Vocês não constroem a casa ainda, vocês desenham o sonho. Hoje vamos aprender a desenhar o sonho tão bem que o cliente vai implorar para entrar na casa.",
    icon: <Target className="text-floresta-600" />,
    color: "bg-floresta-50"
  },
  {
    module: "MÓDULO 1: O JEITO DE PENSAR",
    title: "Você é a Ponte, não o Vendedor",
    bullets: ["Não vendemos o buffet hoje", "Vendemos um café com um especialista", "Curiosidade é seu melhor amigo", "Mantenha a conversa andando"],
    speakerNotes: "Pense assim: você não está vendendo o bolo. Você está vendendo um convite para provar o bolo amanhã. Se você der o bolo todo agora, o cliente não vai na festa. Guarde os segredos para a reunião!",
    icon: <Construction className="text-gold-500" />,
    color: "bg-stone-50"
  },
  {
    module: "MÓDULO 1: O JEITO DE PENSAR",
    title: "Lead Frio vs. Lead Quente",
    bullets: ["Lead Frio: Só está dando uma 'olhadinha'", "Lead Quente: Tem um problema e quer resolver", "Qualificar é separar o joio do trigo"],
    speakerNotes: "Qualificar é como ser um detetive. Você quer saber quem realmente quer fazer uma festa e quem está só sonhando acordado. Não queremos que nosso vendedor perca tempo com quem não quer comprar.",
    icon: <BarChart3 className="text-floresta-600" />,
    color: "bg-floresta-50"
  },
  {
    module: "MÓDULO 2: O MÉTODO SPIN (S)",
    title: "S de Situação: O Detetive Gentil",
    bullets: ["Entenda onde o cliente está agora", "Não faça interrogatório!", "Use: 'Pelo que vi no seu perfil...'"],
    speakerNotes: "Comece como um detetive amigo. Em vez de perguntar 'O que você faz?', diga: 'Vi que você tem uma empresa legal, como vocês cuidam dos eventos hoje?'. É muito mais suave.",
    icon: <Search className="text-blue-500" />,
    color: "bg-blue-50"
  },
  {
    module: "MÓDULO 2: O MÉTODO SPIN (P)",
    title: "P de Problema: Onde dói?",
    bullets: ["Todo mundo tem uma 'pedra no sapato'", "Ache a pedra do cliente", "Ex: 'O que te faz perder o sono hoje?'"],
    speakerNotes: "Todo serviço resolve um problema. Se não tem problema, não tem venda. Pergunte sobre o que não está funcionando bem. É aqui que a mágica da ajuda começa.",
    icon: <ShieldCheck className="text-red-500" />,
    color: "bg-red-50"
  },
  {
    module: "MÓDULO 2: O MÉTODO SPIN (I)",
    title: "I de Implicação: O 'Uh-Oh!'",
    bullets: ["O que acontece se não consertar?", "Mostre o perigo de não agir", "Transforme a pedra em uma montanha"],
    speakerNotes: "Aqui você mostra as consequências. Se o cliente não resolver o problema agora, ele vai perder dinheiro? Vai ficar estressado? Faça ele sentir que precisa de ajuda agora mesmo.",
    icon: <Info className="text-orange-500" />,
    color: "bg-orange-50"
  },
  {
    module: "MÓDULO 2: O MÉTODO SPIN (N)",
    title: "N de Necessidade: O Final Feliz",
    bullets: ["Como seria se tudo desse certo?", "Deixe o cliente imaginar a solução", "O cliente pede a sua ajuda"],
    speakerNotes: "Agora mostramos a luz no fim do túnel. Pergunte: 'Como seria se você não tivesse mais esse estresse?'. Deixe ele sonhar com a nossa solução. Ele vai se convencer sozinho.",
    icon: <Sparkles className="text-emerald-500" />,
    color: "bg-emerald-50"
  },
  {
    module: "MÓDULO 3: O FILTRO BANT (B)",
    title: "Budget: Quantas Moedas?",
    bullets: ["Nunca pergunte: 'Quanto você tem?'", "Dê um exemplo de preço (Intervalo)", "Fale de 'Investimento', não de 'Custo'"],
    speakerNotes: "Falar de dinheiro é difícil. Use a técnica do intervalo: 'Nossos clientes investem entre 10 e 20 mil... onde você se encaixa?'. Fica muito mais fácil para ele responder sem medo.",
    icon: <PiggyBank className="text-emerald-600" />,
    color: "bg-emerald-50"
  },
  {
    module: "MÓDULO 3: O FILTRO BANT (A)",
    title: "Authority: Quem manda no Pedaço?",
    bullets: ["Quem dá a palavra final?", "Mapeie o 'Dono do Sim'", "Traga todos para a reunião"],
    speakerNotes: "Não queremos fazer uma apresentação linda para quem não pode decidir. Pergunte gentilmente: 'Além de você, quem mais ajuda a decidir essas coisas legais?'",
    icon: <Crown className="text-gold-600" />,
    color: "bg-gold-50"
  },
  {
    module: "MÓDULO 3: O FILTRO BANT (N/T)",
    title: "Need & Timeline: É pra Ontem?",
    bullets: ["O problema é urgente?", "Para quando é o evento?", "Crie um cronograma de sucesso"],
    speakerNotes: "Precisamos saber se é para agora. Se o evento é daqui a dois anos, a conversa é diferente de um evento para o mês que vem. Ache a urgência!",
    icon: <Calendar className="text-floresta-600" />,
    color: "bg-floresta-50"
  },
  {
    module: "MÓDULO 4: A ENTREGA",
    title: "O Handoff: Passando a Tocha",
    bullets: ["Anote tudo no CRM", "Use as palavras exatas do cliente", "Prepare o Closer para a vitória"],
    speakerNotes: "Imagine uma corrida de revezamento. Você correu bem, agora passe a tocha para o vendedor com todas as informações. Conte para ele exatamente onde dói no cliente.",
    icon: <Handshake className="text-gold-600" />,
    color: "bg-stone-50"
  },
  {
    module: "PRÁTICA",
    title: "Desafio: O Café do Sr. João",
    bullets: ["Cenário: Cafeteria com pouco cliente", "Problema: Ele não entende de internet", "Sua Missão: Agendar a conversa"],
    speakerNotes: "Vamos praticar! O Sr. João está triste porque ninguém entra no café dele. Use o SPIN para entender a dor dele e o BANT para ver se ele pode investir na nossa solução.",
    icon: <Presentation className="text-floresta-700" />,
    color: "bg-stone-100"
  }
];

const TrainingModule: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => setCurrentSlide((s) => Math.min(s + 1, slides.length - 1));
  const prev = () => setCurrentSlide((s) => Math.max(s - 1, 0));

  const slide = slides[currentSlide];

  return (
    <div className="flex flex-col h-full bg-stone-50">
      <div className="flex-1 p-4 md:p-8 flex flex-col items-center justify-center overflow-y-auto">
        <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100 transition-all duration-300 flex flex-col">
          
          {/* Header - Mais compacto para dar espaço ao conteúdo */}
          <div className="bg-floresta-900 p-4 md:p-6 text-white flex justify-between items-center shrink-0">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold-400 leading-none mb-1">{slide.module}</span>
              <h3 className="text-xs md:text-sm font-serif italic text-floresta-200">Roteiro Didático SDR</h3>
            </div>
            <div className="flex items-center gap-2">
               <span className="text-[10px] md:text-xs bg-floresta-800 px-3 py-1 rounded-full font-bold">
                 Slide {currentSlide + 1} / {slides.length}
               </span>
            </div>
          </div>

          {/* Content - Ajustado para não cortar */}
          <div className={`p-8 md:p-12 ${slide.color} transition-colors duration-500 flex-1 flex flex-col justify-center min-h-[350px]`}>
            <div className="flex items-center gap-6 mb-8">
              <div className="bg-white p-4 rounded-2xl shadow-lg shrink-0 border border-gray-100">
                {React.cloneElement(slide.icon as React.ReactElement, { size: 36 })}
              </div>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-floresta-900 leading-tight">
                {slide.title}
              </h2>
            </div>

            <ul className="space-y-4 md:space-y-6 ml-2">
              {slide.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4 text-lg md:text-xl text-floresta-800 group">
                  <div className="w-2.5 h-2.5 bg-gold-500 rounded-full mt-2.5 group-hover:scale-125 transition-transform shrink-0" />
                  <span className="font-sans font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Speaker Notes Area - Com scroll interno se for muito grande */}
          <div className="bg-stone-100 p-6 md:p-8 border-t border-gray-200 shrink-0">
            <div className="flex items-center gap-2 mb-3 text-floresta-600">
              <PlayCircle size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Dica do Mestre (Fale isso para a equipe)</span>
            </div>
            <div className="bg-white/90 p-5 rounded-2xl border border-white shadow-sm relative overflow-y-auto max-h-32">
              <Quote className="absolute top-2 left-2 text-floresta-100" size={24} />
              <p className="text-gray-700 leading-relaxed font-sans italic text-base md:text-lg pl-6">
                {slide.speakerNotes}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RODAPÉ DE CONTROLES - Mais robusto */}
      <div className="p-4 md:p-6 bg-white border-t border-gray-200 flex justify-between items-center px-6 md:px-12 z-10 relative shrink-0 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
        <button 
          onClick={prev}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-2xl border border-gray-200 text-gray-500 font-bold hover:bg-gray-50 hover:text-floresta-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm md:text-base"
        >
          <ChevronLeft size={18} /> Anterior
        </button>

        <div className="hidden md:flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-floresta-600' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
              title={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={next}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2 px-8 py-3 md:px-10 md:py-4 rounded-2xl bg-floresta-700 text-white font-bold hover:bg-floresta-800 shadow-lg transform active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm md:text-base"
        >
          Próximo <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default TrainingModule;
