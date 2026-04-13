import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

interface PhotoCardProps {
  src: string;
  index: number;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ src, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
      className="relative group"
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        transitionSpeed={1500}
        className="w-full h-full"
      >
        <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[4/5] bg-brand-forest/10">
          <img
            src={src}
            alt={`Espaço Floresta - Foto ${index + 1}`}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-brand-forest/60 via-transparent to-transparent group-hover:opacity-100" />
          
          {/* Decorative Corner */}
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-brand-gold/50 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-6 group-hover:right-6" />
        </div>
      </Tilt>
    </motion.div>
  );
};

export default PhotoCard;
