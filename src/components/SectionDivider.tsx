'use client';

import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <div className="relative py-20">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-moosh-green/5 to-transparent"></div>
      
      {/* Main Divider Line */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-moosh-green/40 to-transparent"></div>
      </div>
      
      {/* Enhanced Center Dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="relative"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-4 h-4 bg-moosh-green rounded-full shadow-glow-green"></div>
          <div className="absolute inset-0 w-4 h-4 bg-moosh-green rounded-full animate-ping opacity-30"></div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-moosh-green/60 rounded-full"
          animate={{ 
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-moosh-green/40 rounded-full"
          animate={{ 
            y: [10, -10, 10],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
    </div>
  );
} 