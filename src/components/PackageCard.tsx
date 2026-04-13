import React from 'react';
import { motion } from 'framer-motion';
import { Package } from '../constants/photos';
import { ChevronRight } from 'lucide-react';

interface PackageCardProps {
  pkg: Package;
  isSelected: boolean;
  onSelect: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, isSelected, onSelect }) => {
  return (
    <motion.div
      onClick={onSelect}
      whileHover={{ y: -10 }}
      className={`relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 border-2 ${
        isSelected ? 'border-brand-gold shadow-2xl ring-4 ring-brand-gold/10' : 'border-transparent bg-white shadow-lg'
      }`}
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={pkg.heroImage} 
          alt={pkg.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/90 via-brand-forest/40 to-transparent" />
        
        <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-2xl font-serif">{pkg.name}</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-80">{pkg.items.length} Demonstrações Visuais</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-sm text-brand-forest/70 mb-4 h-12 overflow-hidden leading-relaxed">
          {pkg.description}
        </p>
        
        <div className="space-y-2 mb-6">
            {pkg.features.slice(0, 3).map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] font-medium text-brand-forest uppercase tracking-wider">
                    <div className="w-1 h-1 bg-brand-gold rounded-full" />
                    {f}
                </div>
            ))}
        </div>

        <button className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
            isSelected ? 'bg-brand-gold text-brand-forest' : 'bg-brand-forest text-white hover:bg-brand-forest/90'
        }`}>
          {isSelected ? 'Explorando Pacote' : 'Ver Detalhes'}
        </button>
      </div>
    </motion.div>
  );
};

export default PackageCard;
