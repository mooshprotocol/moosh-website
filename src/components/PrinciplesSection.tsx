'use client';

import { motion } from 'framer-motion';

export default function PrinciplesSection() {
  const principles = [
    {
      title: "Safety",
      subtitle: "Resilient by design",
      description: "Moosh protects capital through dynamic boundaries and adaptive execution.",
      color: "green",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Flexibility",
      subtitle: "Liquidity should move freely",
      description: "Moosh flows across protocols, modules, and market states without friction.",
      color: "blue",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16l-1-1m0 0l-1-1 1-1 1 1m4 4l1 1m0 0l1-1-1-1-1 1" opacity={0.6} />
        </svg>
      )
    },
    {
      title: "Intelligence",
      subtitle: "Modular environments demand modular thinking",
      description: "Moosh adapts through logic, data, and intent-aware execution in real time.",
      color: "purple",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: {
        icon: "text-moosh-green",
        glow: "hover:shadow-glow-green",
        border: "hover:border-moosh-green/30"
      },
      blue: {
        icon: "text-moosh-accent-blue",
        glow: "hover:shadow-glow-blue",
        border: "hover:border-moosh-accent-blue/30"
      },
      purple: {
        icon: "text-moosh-accent-purple",
        glow: "hover:shadow-glow-purple",
        border: "hover:border-moosh-accent-purple/30"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <section className="bg-moosh-black-medium section-padding relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-8"></div>
      
      {/* Green accent dots */}
      <div className="green-dot-pattern">
        <div className="dot" style={{ top: '15%', left: '12%', width: '3px', height: '0.6px', animationDelay: '0s' }}></div>
        <div className="dot" style={{ bottom: '20%', right: '15%', width: '2px', height: '0.4px', animationDelay: '1s' }}></div>
        <div className="dot" style={{ top: '60%', left: '8%', width: '3px', height: '0.6px', animationDelay: '2s' }}></div>
        <div className="dot" style={{ top: '40%', right: '10%', width: '2px', height: '0.4px', animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Enhanced Section Header with Title Layer */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-widest text-moosh-green mb-4 font-semibold">
            Foundation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-moosh-text-primary mb-8 tracking-tight">
            Moosh is built on three foundational principles
          </h2>
          <p className="text-lg text-moosh-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            Each principle guides our approach to modular liquidity infrastructure.
          </p>
        </motion.div>
        
        {/* Enhanced Three Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {principles.map((principle, index) => {
            const colorClasses = getColorClasses(principle.color);
            
            return (
              <motion.div 
                key={principle.title}
                className={`group p-8 bg-moosh-black-card rounded-2xl border border-moosh-black-lighter hover:scale-[1.02] transition-all duration-300 ${colorClasses.glow} ${colorClasses.border}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Enhanced Icon */}
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-moosh-black-lighter rounded-xl group-hover:bg-moosh-green/10 transition-colors duration-300">
                  <div className={`${colorClasses.icon} group-hover:scale-110 transition-transform duration-300`}>
                    {principle.icon}
                  </div>
                </div>
                
                {/* Enhanced Title */}
                <h3 className="text-xl font-semibold text-moosh-text-primary mb-3 tracking-tight">
                  {principle.title}
                </h3>
                
                {/* Enhanced Subtitle */}
                <p className={`text-sm mb-4 font-medium ${colorClasses.icon}`}>
                  {principle.subtitle}
                </p>
                
                {/* Enhanced Description */}
                <p className="text-sm text-moosh-text-secondary leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 