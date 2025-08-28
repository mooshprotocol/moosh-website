'use client';

import { m, useInView } from 'framer-motion';
import ParallaxBackground from './ParallaxBackground';
import { Typography } from './ui/Typography';
import { useI18n } from '@/components/I18nProvider';
import { useRef } from 'react';

export default function HeroSection() {
  const { t } = useI18n();
  const viewRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(viewRef, { amount: 0.2, margin: '0px 0px -10% 0px' });
  return (
    <section className="relative min-h-screen bg-moosh-black flex items-center justify-center overflow-hidden" ref={viewRef}>
      {/* Enhanced Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" aria-hidden="true"></div>
      
      {/* Green Dots Pattern */}
      <div className="green-dot-pattern" aria-hidden="true">
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
      <div className="network-mesh" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" aria-hidden="true">
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
      <div className="floating-element" aria-hidden="true" style={{ top: '20%', right: '15%', width: '20px', height: '20px', border: '1px solid rgba(50, 196, 102, 0.3)', transform: 'rotate(45deg)' }}></div>
      <div className="floating-element" aria-hidden="true" style={{ bottom: '30%', left: '10%', width: '15px', height: '15px', background: 'rgba(50, 196, 102, 0.2)', borderRadius: '50%', animationDelay: '2s' }}></div>
      <div className="floating-element" aria-hidden="true" style={{ top: '70%', right: '25%', width: '12px', height: '12px', border: '1px solid rgba(50, 196, 102, 0.4)', transform: 'rotate(45deg)', animationDelay: '4s' }}></div>
      <div className="floating-element" aria-hidden="true" style={{ top: '50%', left: '20%', width: '18px', height: '18px', background: 'rgba(50, 196, 102, 0.15)', borderRadius: '50%', animationDelay: '1s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* MOOSH - Static, clean, solid white */}
          <m.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black tracking-tight leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          >
            <span className="text-white font-black">MOOSH</span>
          </m.h1>

          {/* PROTOCOL - Larger, neon green with shimmer */}
          <m.div
            className="relative inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black tracking-tight leading-none mt-2">
              <span className="protocol-text-futuristic">PROTOCOL</span>
              <div className="protocol-shimmer-futuristic"></div>
            </h2>
          </m.div>

          {/* Typewriter Subtitle */}
          <m.div
            className="mt-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            <Typography.Text align="center" tone="secondary" size="lg">
              <span className="typewriter-container">
                <span className="typewriter-text">{t('hero.subtitle', 'The money market born for the agentic era.')}</span>
                <span className="typewriter-cursor">|</span>
              </span>
            </Typography.Text>
          </m.div>

          {/* Key Metrics */}
          <m.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          >
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-moosh-green mb-3 group-hover:scale-105 transition-transform duration-300 subtle-shimmer">7</div>
              <div className="text-xs text-moosh-text-muted tracking-widest uppercase font-medium">{t('hero.metrics.modularEngines', 'Modular Components')}</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-moosh-green mb-3 group-hover:scale-105 transition-transform duration-300 subtle-shimmer">∞</div>
              <div className="text-xs text-moosh-text-muted tracking-widest uppercase font-medium">{t('hero.metrics.composability', 'Composability')}</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-moosh-green mb-3 group-hover:scale-105 transition-transform duration-300 subtle-shimmer">0</div>
              <div className="text-xs text-moosh-text-muted tracking-widest uppercase font-medium">{t('hero.metrics.friction', 'Friction')}</div>
            </div>
          </m.div>
        </m.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <m.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
      >
                <div className="flex flex-col items-center gap-3">
          <div className="relative">
              <div className="w-px h-12 bg-gradient-to-b from-moosh-green to-transparent"></div>
              <m.div 
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
      </m.div>
    </section>
  );
} 