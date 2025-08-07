'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  return (
    <motion.div 
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ 
        y, 
        opacity,
        willChange: 'transform, opacity'
      }}
    >
      {/* Floating geometric elements */}
      <div className="absolute top-1/4 left-1/6 w-8 h-8 border border-moosh-green/20 rotate-45"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-moosh-green/10 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 border border-moosh-green/30 rotate-45"></div>
      <div className="absolute bottom-1/3 right-1/6 w-10 h-10 bg-moosh-green/5 rounded-full"></div>
      
      {/* Subtle grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#32C466" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </motion.div>
  );
} 