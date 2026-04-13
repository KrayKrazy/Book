import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

interface TimelapseCardProps {
  images: string[];
  title: string;
}

const TimelapseCard: React.FC<TimelapseCardProps> = ({ images, title }) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 1000);
    } else {
      setIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, images]);

  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1000}
        scale={1.02}
        className="w-full h-full"
      >
        <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-[4/5] bg-brand-forest/20 border border-brand-gold/10">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index]}
              src={images[index]}
              alt={title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="object-cover w-full h-full"
            />
          </AnimatePresence>
          
          {/* Overlay info */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-forest via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <h3 className="text-brand-cream font-serif text-xl mb-1">{title}</h3>
            <div className="flex items-center gap-2">
                <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">Time-lapse</span>
                <div className="flex gap-1">
                    {images.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-4 bg-brand-gold' : 'w-1 bg-brand-gold/30'}`} 
                        />
                    ))}
                </div>
            </div>
          </div>

          {/* Prompt to hover */}
          {!isHovered && images.length > 1 && (
            <div className="absolute top-4 right-4 bg-brand-gold/80 text-brand-forest text-[8px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
              Hover para ver mais
            </div>
          )}
        </div>
      </Tilt>
    </div>
  );
};

export default TimelapseCard;
