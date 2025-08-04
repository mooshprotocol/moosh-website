'use client';

import { motion } from 'framer-motion';

export default function CareersSection() {
  const positions = [
    {
      title: "Full-Stack Engineer",
      summary: "Build modular systems from smart contracts to interfaces.",
      skills: ["Solidity", "React/TypeScript", "System Design"],
      color: "blue",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Product Designer",
      summary: "Craft intuitive experiences across onchain and offchain flows.",
      skills: ["UX/UI Design", "Prototyping", "User Research"],
      color: "purple",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      title: "Community Architect",
      summary: "Engage builders, spark conversations, grow the movement.",
      skills: ["Community Building", "Content Strategy", "Ecosystem Growth"],
      color: "green",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        icon: "text-moosh-accent-blue",
        glow: "hover:shadow-glow-blue",
        border: "hover:border-moosh-accent-blue/30"
      },
      purple: {
        icon: "text-moosh-accent-purple",
        glow: "hover:shadow-glow-purple",
        border: "hover:border-moosh-accent-purple/30"
      },
      green: {
        icon: "text-moosh-green",
        glow: "hover:shadow-glow-green",
        border: "hover:border-moosh-green/30"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <section className="bg-moosh-black-light section-padding relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Enhanced Green accent lines for separation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 bg-gradient-to-r from-transparent via-moosh-green/30 to-transparent" style={{height: '0.2px'}}></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 bg-gradient-to-l from-transparent via-moosh-green/30 to-transparent" style={{height: '0.2px'}}></div>
        <div className="absolute top-1/3 left-0 w-1/3 bg-gradient-to-r from-transparent via-moosh-green/20 to-transparent" style={{height: '0.2px'}}></div>
        <div className="absolute top-1/3 right-0 w-1/3 bg-gradient-to-l from-transparent via-moosh-green/20 to-transparent" style={{height: '0.2px'}}></div>
      </div>
      
      {/* Green accent dots */}
      <div className="green-dot-pattern">
        <div className="dot" style={{ top: '10%', left: '10%', width: '2px', height: '0.4px', animationDelay: '0s' }}></div>
        <div className="dot" style={{ bottom: '15%', right: '12%', width: '3px', height: '0.6px', animationDelay: '1s' }}></div>
        <div className="dot" style={{ top: '70%', left: '8%', width: '2px', height: '0.4px', animationDelay: '2s' }}></div>
        <div className="dot" style={{ top: '50%', right: '8%', width: '3px', height: '0.6px', animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-moosh-text-primary mb-8 tracking-tight">
            Join the Modular Liquidity Movement
          </h2>
          
          {/* Main headline */}
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-moosh-text-primary mb-4 tracking-tight">
            Build the future of modular liquidity — with us.
          </h3>
          
          {/* Small subtitle */}
          <p className="text-lg text-moosh-text-muted leading-relaxed max-w-2xl mx-auto mb-12">
            We&apos;re building the future of lending with builders, designers, and community minds who create with purpose and integrity.
          </p>
          
          {/* CTA with more spacing */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="btn-outline group text-base px-5 py-2 font-normal">
              <span className="flex items-center gap-2">
                Apply Now →
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-32">
          {positions.map((position, index) => {
            const colorClasses = getColorClasses(position.color);
            
            return (
              <motion.div 
                key={position.title}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`text-center p-10 bg-moosh-black-card rounded-2xl border border-moosh-black-lighter hover:scale-[1.02] transition-all duration-300 ${colorClasses.glow} ${colorClasses.border}`}>
                  {/* Large Icon Badge */}
                  <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center bg-moosh-black-lighter rounded-full group-hover:bg-moosh-green/10 transition-colors duration-300">
                    <div className={`${colorClasses.icon} group-hover:scale-110 transition-transform duration-300`}>
                      {position.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-moosh-text-primary mb-4 group-hover:text-moosh-green transition-colors duration-300">
                    {position.title}
                  </h3>
                  
                  {/* Summary */}
                  <p className="text-base text-moosh-text-secondary leading-relaxed mb-6 group-hover:text-moosh-text-primary transition-colors duration-300">
                    {position.summary}
                  </p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {position.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 text-xs text-moosh-text-muted bg-moosh-black-lighter rounded-full tracking-wide">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        

      </div>
    </section>
  );
} 