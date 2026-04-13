
import React from 'react';
import { 
  Calculator, EyeOff, PackageCheck, Clock, 
  MessageCircle, Zap, Users, Flower2, 
  Home, CalendarDays, CheckCircle2,
  Target
} from 'lucide-react';

const MethodologySidebar: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto bg-floresta-900 text-floresta-50 p-6 shadow-xl border-r border-floresta-800">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-serif font-bold text-gold-400 mb-1 italic">Mariana Strategist</h2>
        <div className="inline-flex items-center gap-2 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
          <CalendarDays size={10} className="text-gold-400" />
          <p className="text-[9px] text-gold-400 uppercase tracking-widest font-bold">Ciclo Atual: 2026</p>
        </div>
      </div>

      <div className="space-y-6">
        
        {/* Anti-Price Gold Rule */}
        <section className="bg-red-600/20 border border-red-500/50 p-3 rounded-lg flex items-start gap-3">
            <EyeOff size={20} className="text-red-400 shrink-0" />
            <div>
              <p className="text-[10px] font-bold text-red-200 uppercase tracking-widest leading-none mb-1">Blindagem de Preço</p>
              <p className="text-[9px] text-floresta-200 leading-tight">
                <strong>Proibido passar R$</strong>. Foque na exclusividade da experiência presencial.
              </p>
            </div>
        </section>

        {/* BANTT Qualification Checklist */}
        <section>
          <div className="flex items-center gap-2 mb-3 text-emerald-400">
            <CheckCircle2 size={18} />
            <h3 className="font-serif font-bold text-base">Qualificação BANTT</h3>
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            <div className="bg-floresta-800 p-2 rounded border-l-2 border-emerald-500 flex justify-between items-center group transition-colors">
              <span className="text-[10px] uppercase font-bold text-floresta-200">Budget</span>
              <Calculator size={10} className="text-emerald-500 opacity-40" />
            </div>
            <div className="bg-floresta-800 p-2 rounded border-l-2 border-emerald-500 flex justify-between items-center group transition-colors">
              <span className="text-[10px] uppercase font-bold text-floresta-200">Autoridade</span>
              <Users size={10} className="text-emerald-500 opacity-40" />
            </div>
            <div className="bg-floresta-800 p-2 rounded border-l-2 border-emerald-500 flex justify-between items-center group transition-colors">
              <span className="text-[10px] uppercase font-bold text-floresta-200">Necessidade</span>
              <Flower2 size={10} className="text-emerald-500 opacity-40" />
            </div>
            <div className="bg-floresta-800 p-2 rounded border-l-2 border-blue-500 flex justify-between items-center group transition-colors">
              <span className="text-[10px] uppercase font-bold text-blue-300">Tempo (Evento)</span>
              <Clock size={10} className="text-blue-500" />
            </div>
            <div className="bg-floresta-800 p-2 rounded border-l-2 border-gold-500 flex justify-between items-center group transition-colors">
              <span className="text-[10px] uppercase font-bold text-gold-400">Tempo (Fecho)</span>
              <Target size={10} className="text-gold-500" />
            </div>
          </div>
        </section>

        {/* DISC Length Rule */}
        <section className="bg-white/5 p-3 rounded-lg border border-white/5">
            <div className="flex items-center gap-2 mb-2 text-blue-400">
                <MessageCircle size={16} />
                <p className="text-[10px] font-bold uppercase tracking-widest">Rigor por Perfil</p>
            </div>
            <ul className="space-y-1.5 text-[9px] text-floresta-300">
                <li className="flex justify-between items-center">
                  <span className="flex items-center gap-1">🦈 Tubarão</span> 
                  <span className="text-white bg-white/10 px-1.5 rounded font-bold">1 Linha</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center gap-1">🐺 Lobo</span> 
                  <span className="text-white bg-white/10 px-1.5 rounded font-bold">2 Linhas</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="flex items-center gap-1">🦅 Águia / 🐱 Gato</span> 
                  <span className="text-white bg-white/10 px-1.5 rounded font-bold">3 Linhas</span>
                </li>
            </ul>
        </section>

        {/* Technical Summary */}
        <section>
          <div className="flex items-center gap-2 mb-3 text-gold-500">
            <PackageCheck size={18} />
            <h3 className="font-serif font-bold text-base">Foco Técnico</h3>
          </div>
          <div className="space-y-1">
            <div className="text-[9px] bg-white/5 p-1.5 px-2 rounded border border-white/5 flex items-center gap-2">
                <Home size={10} className="text-emerald-500" />
                <span>Espaço: VIP + Jardim 200p</span>
            </div>
            <div className="text-[9px] bg-white/5 p-1.5 px-2 rounded border border-white/5 flex items-center gap-2">
                <Zap size={10} className="text-gold-500" />
                <span className="text-gold-200">Pista Galáxia Inclusa</span>
            </div>
          </div>
        </section>

        <section className="pt-4 border-t border-floresta-700">
           <div className="bg-gold-500 text-floresta-900 p-2.5 rounded-lg text-center shadow-lg transform hover:scale-105 transition-all cursor-default">
              <p className="text-[8px] font-black uppercase tracking-tight">META: QUALIFICAR PARA VISITA E AGENDAR</p>
           </div>
        </section>
      </div>
    </div>
  );
};

export default MethodologySidebar;
