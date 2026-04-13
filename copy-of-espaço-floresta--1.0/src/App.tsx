
import React, { useState } from 'react';
import MethodologySidebar from './components/MethodologySidebar';
import ChatInterface from './components/ChatInterface';
import TrainingModule from './components/TrainingModule';
import { BookOpen, MessageSquare } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<'chat' | 'training'>('chat');

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-stone-100">
      {/* View Switcher Overlay - Subido para bottom-32 para dar distância segura dos rodapés de controle */}
      <div className="fixed bottom-32 right-6 z-50 flex flex-col gap-4">
        <button 
          onClick={() => setView('chat')}
          className={`p-4 rounded-full shadow-2xl transition-all flex items-center gap-2 border-2 ${
            view === 'chat' 
            ? 'bg-floresta-700 text-white scale-110 border-floresta-400 ring-4 ring-floresta-500/20' 
            : 'bg-white text-floresta-700 border-transparent hover:bg-floresta-50'
          }`}
          title="Modo Simulador"
        >
          <MessageSquare size={24} />
          {view === 'chat' && <span className="text-xs font-bold uppercase pr-2">Simulador</span>}
        </button>
        <button 
          onClick={() => setView('training')}
          className={`p-4 rounded-full shadow-2xl transition-all flex items-center gap-2 border-2 ${
            view === 'training' 
            ? 'bg-gold-500 text-white scale-110 border-gold-300 ring-4 ring-gold-500/20' 
            : 'bg-white text-gold-600 border-transparent hover:bg-gold-50'
          }`}
          title="Modo Treinamento"
        >
          <BookOpen size={24} />
          {view === 'training' && <span className="text-xs font-bold uppercase pr-2">Treinamento</span>}
        </button>
      </div>

      {view === 'chat' ? (
        <>
          <div className="hidden md:block w-80 h-full flex-shrink-0">
            <MethodologySidebar />
          </div>
          <div className="flex-1 h-full flex flex-col relative">
            <ChatInterface />
          </div>
        </>
      ) : (
        <div className="flex-1 h-full overflow-hidden">
          <TrainingModule />
        </div>
      )}

      {/* Indicador de carregamento/fase no mobile */}
      <div className="md:hidden absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-floresta-500 to-gold-500 z-50"></div>
    </div>
  );
};

export default App;
