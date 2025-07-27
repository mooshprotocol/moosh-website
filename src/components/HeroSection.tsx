'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Star = ({ delay, x, y, size, brightness, mouseX, mouseY }: { 
  delay: number; 
  x: number; 
  y: number;
  size: number;
  brightness: number;
  mouseX: number;
  mouseY: number;
}) => {
  // Calculate mouse influence
  const distance = Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));
  const influence = Math.max(0, 150 - distance) / 150;
  const offsetX = (mouseX - x) * influence * 0.1;
  const offsetY = (mouseY - y) * influence * 0.1;

  return (
    <motion.div
      className="absolute bg-white rounded-full"
      style={{
        left: `${x + offsetX}px`,
        top: `${y + offsetY}px`,
        width: `${size}px`,
        height: `${size}px`,
        boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, ${brightness * 0.3})`,
      }}
      initial={{ opacity: brightness * 0.3 }}
      animate={{
        opacity: [brightness * 0.3, brightness, brightness * 0.3],
        scale: [1, 1 + influence * 0.3, 1],
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

const generateStars = (width: number, height: number) => {
  const stars = [];
  
  // 大星星 - 少而亮
  for (let i = 0; i < 12; i++) {
    stars.push({
      id: `big-${i}`,
      delay: Math.random() * 8,
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 2.5,
      brightness: 0.9 + Math.random() * 0.1,
    });
  }
  
  // 中等星星
  for (let i = 0; i < 25; i++) {
    stars.push({
      id: `medium-${i}`,
      delay: Math.random() * 6,
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1 + 1.5,
      brightness: 0.6 + Math.random() * 0.3,
    });
  }
  
  // 小星星 - 多而暗
  for (let i = 0; i < 60; i++) {
    stars.push({
      id: `small-${i}`,
      delay: Math.random() * 10,
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 0.5 + 0.8,
      brightness: 0.3 + Math.random() * 0.4,
    });
  }
  
  return stars;
};

// Particle Connection Component
const ParticleConnections = ({ stars, mouseX, mouseY }: { 
  stars: any[]; 
  mouseX: number; 
  mouseY: number; 
}) => {
  const connections = [];
  const maxDistance = 150;

  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      const star1 = stars[i];
      const star2 = stars[j];
      const distance = Math.sqrt(
        Math.pow(star1.x - star2.x, 2) + Math.pow(star1.y - star2.y, 2)
      );

      if (distance < maxDistance) {
        const opacity = (maxDistance - distance) / maxDistance * 0.3;
        connections.push(
          <line
            key={`connection-${i}-${j}`}
            x1={star1.x}
            y1={star1.y}
            x2={star2.x}
            y2={star2.y}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="0.5"
            opacity={opacity}
          />
        );
      }
    }
  }

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {connections}
    </svg>
  );
};

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    updateDimensions();
    setStars(generateStars(dimensions.width, dimensions.height));

    window.addEventListener('resize', updateDimensions);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [dimensions.width, dimensions.height]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Enhanced background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-blue-900 opacity-60"></div>
      
      {/* Nebula effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute top-3/4 right-1/3 w-40 h-40 bg-purple-400 rounded-full opacity-15 blur-2xl"></div>
        <div className="absolute bottom-1/3 left-3/4 w-36 h-36 bg-cyan-300 rounded-full opacity-25 blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-indigo-400 rounded-full opacity-10 blur-2xl"></div>
      </div>

      {/* Enhanced starry background */}
      <div className="absolute inset-0 z-0">
        {/* Particle connections */}
        <ParticleConnections 
          stars={stars} 
          mouseX={mousePosition.x} 
          mouseY={mousePosition.y} 
        />
        
        {/* Enhanced stars */}
        {stars.map((star) => (
          <Star
            key={star.id}
            delay={star.delay}
            x={star.x}
            y={star.y}
            size={star.size}
            brightness={star.brightness}
            mouseX={mousePosition.x}
            mouseY={mousePosition.y}
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