'use client';

import { motion } from 'framer-motion';

export default function CommunitySection() {
  return (
    <section className="bg-moosh-black py-24 md:py-32 relative overflow-hidden">
      {/* Subtle dynamic background: floating green dust */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-moosh-green/20 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-moosh-green/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-moosh-green/25 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-moosh-green/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-moosh-green/20 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-moosh-green/15 rounded-full animate-pulse" style={{animationDelay: '5s'}}></div>
      </div>
      
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-moosh-text-primary tracking-tight leading-tight">
              Community First. <span className="agent-first-glow">Agent First.</span>
            </h2>
          </motion.div>
          
          {/* Optional microcopy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-moosh-text-muted tracking-widest mt-8 font-light">
              Humans lead, agents build, communities align.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}