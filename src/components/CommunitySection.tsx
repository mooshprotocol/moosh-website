'use client';

import { motion } from 'framer-motion';

export default function CommunitySection() {
  return (
    <section className="bg-moosh-black section-padding relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Enhanced Green accent dots */}
      <div className="green-dot-pattern">
        <div className="dot" style={{ top: '20%', left: '20%', width: '3px', height: '3px', animationDelay: '0s' }}></div>
        <div className="dot" style={{ bottom: '20%', right: '20%', width: '4px', height: '4px', animationDelay: '1s' }}></div>
        <div className="dot" style={{ top: '60%', left: '15%', width: '2px', height: '2px', animationDelay: '2s' }}></div>
        <div className="dot" style={{ top: '40%', right: '25%', width: '3px', height: '3px', animationDelay: '0.5s' }}></div>
        <div className="dot" style={{ bottom: '40%', left: '30%', width: '2px', height: '2px', animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Enhanced Main Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-widest text-moosh-green mb-4 font-semibold">
              Join the Movement
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-moosh-text-primary mb-8 tracking-tight">
              Community First.
              <br />
              <span className="text-gradient">Agent First.</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-moosh-green to-transparent mx-auto mb-8"></div>
          </motion.div>
          
          {/* Enhanced Description */}
          <motion.p 
            className="text-lg text-moosh-text-secondary mb-12 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join the community of builders, thinkers, and agents shaping the future of modular DeFi. Participate in discussions, contribute ideas, and help build the next generation of financial infrastructure.
          </motion.p>
          
          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="btn-primary group text-lg px-8 py-4">
              <span className="flex items-center gap-3">
                Join Community
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button className="btn-outline text-lg px-8 py-4">
              View Documentation
            </button>
          </motion.div>
          
          {/* Additional Community Links */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="#" className="text-moosh-text-secondary hover:text-moosh-green transition-colors duration-300">
              Discord
            </a>
            <a href="#" className="text-moosh-text-secondary hover:text-moosh-green transition-colors duration-300">
              Twitter
            </a>
            <a href="#" className="text-moosh-text-secondary hover:text-moosh-green transition-colors duration-300">
              GitHub
            </a>
            <a href="#" className="text-moosh-text-secondary hover:text-moosh-green transition-colors duration-300">
              Blog
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}