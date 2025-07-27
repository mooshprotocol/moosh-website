'use client';

import { motion } from 'framer-motion';

const Star = ({ delay, x, y, size, brightness }: { 
  delay: number; 
  x: string; 
  y: string;
  size: number;
  brightness: number;
}) => {
  return (
    <motion.div
      className="absolute bg-white rounded-full"
      style={{
        left: x,
        top: y,
        width: `${size}px`,
        height: `${size}px`,
      }}
      initial={{ opacity: brightness * 0.3 }}
      animate={{
        opacity: [brightness * 0.3, brightness, brightness * 0.3],
      }}
      transition={{
        duration: 3 + Math.random() * 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const ShootingStar = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      className="absolute"
      initial={{ 
        x: -100,
        y: Math.random() * 200 + 100,
        opacity: 0 
      }}
      animate={{
        x: typeof window !== 'undefined' ? window.innerWidth + 100 : 1200,
        y: Math.random() * 200 + 300,
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 15 + Math.random() * 10,
        ease: "easeOut",
      }}
    >
      <div className="w-1 h-1 bg-white rounded-full shadow-white shadow-sm">
        <div className="absolute -left-8 top-0 w-8 h-0.5 bg-gradient-to-r from-transparent to-white opacity-80"></div>
      </div>
    </motion.div>
  );
};

const generateStars = () => {
  const stars = [];
  
  // 大星星 - 少而亮
  for (let i = 0; i < 12; i++) {
    stars.push({
      id: `big-${i}`,
      delay: Math.random() * 8,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 2.5,
      brightness: 0.9 + Math.random() * 0.1,
    });
  }
  
  // 中等星星
  for (let i = 0; i < 25; i++) {
    stars.push({
      id: `medium-${i}`,
      delay: Math.random() * 6,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * 1 + 1.5,
      brightness: 0.6 + Math.random() * 0.3,
    });
  }
  
  // 小星星 - 多而暗
  for (let i = 0; i < 60; i++) {
    stars.push({
      id: `small-${i}`,
      delay: Math.random() * 10,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * 0.5 + 0.8,
      brightness: 0.3 + Math.random() * 0.4,
    });
  }
  
  return stars;
};

export default function HeroSection() {
  const stars = generateStars();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Elegant starry background */}
      <div className="absolute inset-0 z-0">
        {/* Static stars */}
        {stars.map((star) => (
          <Star
            key={star.id}
            delay={star.delay}
            x={star.x}
            y={star.y}
            size={star.size}
            brightness={star.brightness}
          />
        ))}
        
        {/* Shooting stars */}
        <ShootingStar delay={5} />
        <ShootingStar delay={12} />
        <ShootingStar delay={20} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8" style={{lineHeight: '1.3', letterSpacing: '-0.02em'}}>
          Intelligent Liquidity for<br/>
          an Open Economy
        </h1>
        
        <div className="text-xl md:text-2xl mb-12 max-w-[900px] mx-auto text-gray-300" style={{fontWeight: '400', lineHeight: '1.6', letterSpacing: '0.01em'}}>
          <div>Moosh empowers lending systems that adapt, compose, and evolve</div>
          <div>to power liquidity across an open, modular future.</div>
        </div>
      </div>
    </section>
  );
} 