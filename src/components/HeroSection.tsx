'use client';

import { motion } from 'framer-motion';
import ParallaxBackground from './ParallaxBackground';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-moosh-black flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Green Dots Pattern */}
      <div className="green-dot-pattern">
        <div className="dot" style={{ top: '15%', left: '10%', width: '4px', height: '4px', animationDelay: '0s' }}></div>
        <div className="dot" style={{ top: '25%', right: '15%', width: '3px', height: '3px', animationDelay: '1s' }}></div>
        <div className="dot" style={{ bottom: '30%', left: '20%', width: '2px', height: '2px', animationDelay: '2s' }}></div>
        <div className="dot" style={{ bottom: '20%', right: '25%', width: '3px', height: '3px', animationDelay: '0.5s' }}></div>
        <div className="dot" style={{ top: '40%', left: '35%', width: '2px', height: '2px', animationDelay: '1.5s' }}></div>
        <div className="dot" style={{ top: '60%', right: '40%', width: '4px', height: '4px', animationDelay: '0.8s' }}></div>
        <div className="dot" style={{ top: '80%', left: '45%', width: '2px', height: '2px', animationDelay: '2.5s' }}></div>
        <div className="dot" style={{ top: '70%', right: '10%', width: '3px', height: '3px', animationDelay: '1.2s' }}></div>
      </div>
      
      {/* Parallax Background */}
      <ParallaxBackground />
      
      {/* Enhanced Network Mesh */}
      <div className="network-mesh">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#32C466" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#32C466" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#32C466" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#32C466" stopOpacity="0" />
              <stop offset="50%" stopColor="#32C466" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#32C466" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Static network lines */}
          <line x1="100" y1="200" x2="300" y2="400" stroke="url(#lineGradient)" strokeWidth="1" className="network-line" />
          <line x1="700" y1="300" x2="900" y2="500" stroke="url(#lineGradient)" strokeWidth="1" className="network-line" />
          <line x1="200" y1="600" x2="400" y2="800" stroke="url(#lineGradient)" strokeWidth="1" className="network-line" />
          <line x1="600" y1="700" x2="800" y2="900" stroke="url(#lineGradient)" strokeWidth="1" className="network-line" />
          <line x1="150" y1="300" x2="350" y2="500" stroke="url(#lineGradient)" strokeWidth="0.5" className="network-line" />
          <line x1="650" y1="400" x2="850" y2="600" stroke="url(#lineGradient)" strokeWidth="0.5" className="network-line" />
          
          {/* Animated flow lines */}
          <line x1="0" y1="250" x2="1000" y2="250" stroke="url(#flowGradient)" strokeWidth="2" className="network-line">
            <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="0" y1="450" x2="1000" y2="450" stroke="url(#flowGradient)" strokeWidth="2" className="network-line" style={{animationDelay: '2s'}}>
            <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="0" y1="650" x2="1000" y2="650" stroke="url(#flowGradient)" strokeWidth="2" className="network-line" style={{animationDelay: '4s'}}>
            <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="floating-element" style={{ top: '20%', right: '15%', width: '20px', height: '20px', border: '1px solid rgba(50, 196, 102, 0.3)', transform: 'rotate(45deg)' }}></div>
      <div className="floating-element" style={{ bottom: '30%', left: '10%', width: '15px', height: '15px', background: 'rgba(50, 196, 102, 0.2)', borderRadius: '50%', animationDelay: '2s' }}></div>
      <div className="floating-element" style={{ top: '70%', right: '25%', width: '12px', height: '12px', border: '1px solid rgba(50, 196, 102, 0.4)', transform: 'rotate(45deg)', animationDelay: '4s' }}></div>
      <div className="floating-element" style={{ top: '50%', left: '20%', width: '18px', height: '18px', background: 'rgba(50, 196, 102, 0.15)', borderRadius: '50%', animationDelay: '1s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* MOOSH - Static, clean, solid white */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black tracking-tight leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          >
            <span className="text-white font-black">MOOSH</span>
          </motion.h1>

          {/* PROTOCOL - Larger, neon green with shimmer */}
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black tracking-tight leading-none mt-2">
              <span className="protocol-text-futuristic">PROTOCOL</span>
              <div className="protocol-shimmer-futuristic"></div>
            </h2>
          </motion.div>

          {/* Typewriter Subtitle */}
          <motion.div
            className="mt-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            <div className="typewriter-container">
              <span className="typewriter-text">Modular liquidity infrastructure for the future of DeFi</span>
              <span className="typewriter-cursor">|</span>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          >
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-moosh-green mb-3 group-hover:scale-105 transition-transform duration-300 subtle-shimmer">4</div>
              <div className="text-xs text-gray-500 tracking-widest uppercase font-medium">Modular Engines</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-moosh-green mb-3 group-hover:scale-105 transition-transform duration-300 subtle-shimmer">∞</div>
              <div className="text-xs text-gray-500 tracking-widest uppercase font-medium">Composability</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-moosh-green mb-3 group-hover:scale-105 transition-transform duration-300 subtle-shimmer">0</div>
              <div className="text-xs text-gray-500 tracking-widest uppercase font-medium">Friction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
      >
                <div className="flex flex-col items-center gap-3">
          <div className="relative">
              <div className="w-px h-12 bg-gradient-to-b from-moosh-green to-transparent"></div>
              <motion.div 
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-moosh-green rounded-full"
                animate={{ y: [0, 36, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          <div className="w-6 h-6 border border-moosh-green/30 rounded-full flex items-center justify-center group hover:border-moosh-green/60 transition-colors">
            <svg className="w-3 h-3 text-moosh-green group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 