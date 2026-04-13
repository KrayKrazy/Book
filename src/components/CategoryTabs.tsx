import React from 'react';
import { motion } from 'framer-motion';

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`relative px-6 py-2 text-sm tracking-widest uppercase font-medium transition-colors duration-300 ${
            activeCategory === category ? 'text-brand-gold' : 'text-brand-forest/60 hover:text-brand-forest'
          }`}
        >
          {category}
          {activeCategory === category && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      ))}
      {/* Reset/All Option */}
      <button
          onClick={() => onSelect('Todos')}
          className={`relative px-6 py-2 text-sm tracking-widest uppercase font-medium transition-colors duration-300 ${
            activeCategory === 'Todos' ? 'text-brand-gold' : 'text-brand-forest/60 hover:text-brand-forest'
          }`}
        >
          Ver Todos
          {activeCategory === 'Todos' && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
    </div>
  );
};

export default CategoryTabs;
