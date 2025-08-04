'use client';

import { motion } from 'framer-motion';

export default function MooshProtocolText() {
  return (
    <div className="relative min-h-screen bg-moosh-black flex items-center justify-center overflow-hidden">
      {/* Main MOOSH PROTOCOL Text */}
      <div className="relative z-10">
        <motion.h1 
          className="moosh-protocol-text"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          MOOSH PROTOCOL
        </motion.h1>
        
        {/* Shimmer Effect Overlay */}
        <div className="shimmer-overlay"></div>
      </div>
    </div>
  );
}