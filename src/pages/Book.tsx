import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PACKAGES, Package } from '../constants/photos';
import PackageCard from '../components/PackageCard';
import PackageTierView from '../components/PackageTierView';
import ThreeScene from '../components/ThreeScene';
import { Phone, Leaf, CheckCircle, ArrowLeft } from 'lucide-react';

const Book: React.FC = () => {
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);

  return (
    <div className="relative min-h-screen text-brand-forest selection:bg-brand-gold/30 bg-brand-cream/50">
      <ThreeScene />

      <main className="relative z-10 pt-16 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPkg ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Minimalist Header */}
              <header className="text-center mb-16">
                 <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-brand-forest rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
                 >
                    <Leaf className="text-brand-gold" size={32} />
                 </motion.div>
                 <h1 className="text-5xl font-serif tracking-tight mb-2">Book de <span className="italic text-brand-gold">Experiências</span></h1>
                 <p className="text-[11px] uppercase tracking-[0.4em] opacity-40">Selecione um pacote para visualizar a prova social</p>
              </header>

              {/* Package Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {PACKAGES.map((pkg) => (
                  <PackageCard 
                    key={pkg.id} 
                    pkg={pkg} 
                    isSelected={false} 
                    onSelect={() => setSelectedPkg(pkg)} 
                  />
                ))}
              </div>

              {/* Trust Indicator */}
              <div className="flex justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                     <CheckCircle size={14} /> 100% Personalizado
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                     <CheckCircle size={14} /> Design de Luxo
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                     <CheckCircle size={14} /> Prova Social Real
                  </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              className="space-y-8"
            >
              <button 
                onClick={() => setSelectedPkg(null)}
                className="flex items-center gap-2 text-brand-forest/60 hover:text-brand-forest transition-colors mb-8 group"
              >
                <div className="p-2 rounded-full bg-white/50 group-hover:bg-brand-gold group-hover:text-brand-forest transition-all">
                  <ArrowLeft size={20} />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Voltar aos Pacotes</span>
              </button>

              <PackageTierView pkg={selectedPkg} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-brand-forest/5">
        <div className="text-center">
          <p className="text-[9px] uppercase tracking-[0.5em] opacity-30">
            Espaço Floresta • Curadoria de Experiências • 2026
          </p>
        </div>
      </footer>


    </div>
  );
};

export default Book;
