'use client';

import { motion } from 'framer-motion';

export default function ProtocolSection() {
  const modules = [
    {
      title: "Liquidation Engine",
      description: "Real-time, MEVM-native execution with intelligent risk logic.",
      subModules: ["Risk Assessment", "Execution Engine", "MEVM Integration"],
      color: "blue",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16l-1-1m0 0l-1-1 1-1 1 1m4 4l1 1m0 0l1-1-1-1-1 1" opacity={0.6} />
        </svg>
      )
    },
    {
      title: "Risk Kernel",
      description: "AI-assisted logic that adapts dynamically to market conditions.",
      subModules: ["AI Models", "Market Analysis", "Adaptive Logic"],
      color: "green",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
        </svg>
      )
    },
    {
      title: "Liquidity Mesh",
      description: "Composable liquidity with seamless cross-module execution.",
      subModules: ["Composability", "Cross-Module", "Seamless Execution"],
      color: "cyan",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 4v16M12 4v16M18 4v16" opacity={0.7} />
        </svg>
      )
    },
    {
      title: "MegaETH Compatibility",
      description: "Natively integrated with modular infrastructure on MegaETH.",
      subModules: ["Native Integration", "Modular Infrastructure", "MegaETH"],
      color: "purple",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        icon: "text-moosh-accent-blue",
        glow: "hover:shadow-glow-blue",
        border: "hover:border-moosh-accent-blue/30",
        gradient: "text-gradient-blue"
      },
      green: {
        icon: "text-moosh-green",
        glow: "hover:shadow-glow-green",
        border: "hover:border-moosh-green/30",
        gradient: "text-gradient"
      },
      cyan: {
        icon: "text-moosh-accent-cyan",
        glow: "hover:shadow-glow-cyan",
        border: "hover:border-moosh-accent-cyan/30",
        gradient: "text-gradient-cyan"
      },
      purple: {
        icon: "text-moosh-accent-purple",
        glow: "hover:shadow-glow-purple",
        border: "hover:border-moosh-accent-purple/30",
        gradient: "text-gradient-purple"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <section className="bg-moosh-black-light section-padding relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Green accent dots */}
      <div className="green-dot-pattern">
        <div className="dot" style={{ top: '15%', left: '5%', width: '2px', height: '2px', animationDelay: '0s' }}></div>
        <div className="dot" style={{ bottom: '20%', right: '10%', width: '3px', height: '3px', animationDelay: '1s' }}></div>
        <div className="dot" style={{ top: '60%', left: '8%', width: '2px', height: '2px', animationDelay: '2s' }}></div>
        <div className="dot" style={{ top: '40%', right: '5%', width: '2px', height: '2px', animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Enhanced Section Header with Title Layer */}
        <motion.div 
          className="text-center mb-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-widest text-moosh-green mb-4 font-semibold">
            Modular Infrastructure
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-moosh-text-primary mb-8 tracking-tight">
            Moosh Protocol
          </h2>
          <p className="text-lg text-moosh-text-secondary leading-relaxed mb-8 font-light">
            Built for ultra-low latency modular infrastructure and composable liquidity.
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-moosh-green to-transparent mx-auto mb-6"></div>
          <p className="text-xs font-semibold text-moosh-text-muted tracking-widest uppercase">
            Explore the four modular engines that power Moosh
          </p>
        </motion.div>
        
        {/* Protocol Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => {
            const colorClasses = getColorClasses(module.color);
            
            return (
              <motion.div 
                key={module.title}
                className={`group p-8 bg-moosh-black-card rounded-2xl border border-moosh-black-lighter hover:scale-[1.02] transition-all duration-300 ${colorClasses.glow} ${colorClasses.border}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-6">
                  {/* Enhanced Icon */}
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-moosh-black-lighter rounded-xl group-hover:bg-opacity-80 transition-colors duration-300">
                    <div className={`${colorClasses.icon} group-hover:scale-110 transition-transform duration-300`}>
                      {module.icon}
                    </div>
                  </div>
                  
                  {/* Enhanced Content */}
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-3 tracking-tight ${colorClasses.gradient}`}>
                      {module.title}
                    </h3>
                    <p className="text-sm text-moosh-text-secondary leading-relaxed mb-4">
                      {module.description}
                    </p>
                    
                    {/* Sub-modules */}
                    <div className="space-y-2">
                      {module.subModules.map((subModule, subIndex) => (
                        <div key={subIndex} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-moosh-text-muted rounded-full"></div>
                          <span className="text-xs text-moosh-text-muted tracking-wide">
                            {subModule}
                          </span>
                        </div>
                      ))}
                    </div>
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