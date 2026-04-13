import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package } from '../constants/photos';
import PhotoCard from './PhotoCard';
import TimelapseCard from './TimelapseCard';
import { CheckCircle2, Info } from 'lucide-react';

interface PackageTierViewProps {
  pkg: Package;
}

const PackageTierView: React.FC<PackageTierViewProps> = ({ pkg }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Header Info */}
      <div className="bg-brand-forest p-12 rounded-3xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Pacote Gourmet</span>
                <h2 className="text-5xl font-serif mb-6">{pkg.name}</h2>
                <p className="text-brand-cream/70 text-lg leading-relaxed mb-8">
                    {pkg.description}
                </p>
                <div className="flex flex-wrap gap-4">
                    {pkg.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                            <CheckCircle2 size={16} className="text-brand-gold" />
                            <span className="text-[11px] font-medium tracking-wide">{f}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-2">
                <img src={pkg.heroImage} alt={pkg.name} className="w-full h-full object-cover" />
            </div>
        </div>
      </div>

      {/* Visual Proof Grid */}
      <div>
        <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-brand-forest/10" />
            <h3 className="text-2xl font-serif text-brand-forest">Prova Social e Demonstrações</h3>
            <div className="h-px flex-1 bg-brand-forest/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pkg.items.map((item, idx) => (
                <div key={item.id} className="space-y-4">
                    {Array.isArray(item.src) ? (
                        <TimelapseCard images={item.src} title={item.title} />
                    ) : (
                        <PhotoCard src={item.src} index={idx} />
                    )}
                    <div className="px-2">
                        <h4 className="text-lg font-serif text-brand-forest">{item.title}</h4>
                        <p className="text-xs text-brand-forest/60 leading-relaxed uppercase tracking-wider mt-1">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>


    </motion.div>
  );
};

export default PackageTierView;
