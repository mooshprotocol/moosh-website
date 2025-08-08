'use client';

import { m } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { useI18n } from '@/components/I18nProvider';

export default function ProtocolSection() {
  const { t } = useI18n();
  const modules = [
    {
      title: t('protocol.modules.liquidation.title', 'Liquidation Engine'),
      description: t('protocol.modules.liquidation.description', 'Real-time, MEVM-native execution with intelligent risk logic.'),
      subModules: t('protocol.modules.liquidation.sub', ['Risk Assessment', 'Execution Engine', 'MEVM Integration']),
      color: "blue",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16l-1-1m0 0l-1-1 1-1 1 1m4 4l1 1m0 0l1-1-1-1-1 1" opacity={0.6} />
        </svg>
      )
    },
    {
      title: t('protocol.modules.risk.title', 'Risk Kernel'),
      description: t('protocol.modules.risk.description', 'AI-assisted logic that adapts dynamically to market conditions.'),
      subModules: t('protocol.modules.risk.sub', ['AI Models', 'Market Analysis', 'Adaptive Logic']),
      color: "green",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
        </svg>
      )
    },
    {
      title: t('protocol.modules.liquidity.title', 'Liquidity Mesh'),
      description: t('protocol.modules.liquidity.description', 'Composable liquidity with seamless cross-module execution.'),
      subModules: t('protocol.modules.liquidity.sub', ['Composability', 'Cross-Module', 'Seamless Execution']),
      color: "cyan",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 4v16M12 4v16M18 4v16" opacity={0.7} />
        </svg>
      )
    },
    {
      title: t('protocol.modules.megaeth.title', 'MegaETH Compatibility'),
      description: t('protocol.modules.megaeth.description', 'Natively integrated with modular infrastructure on MegaETH.'),
      subModules: t('protocol.modules.megaeth.sub', ['Native Integration', 'MegaETH']),
      color: "purple",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
        gradient: "text-gradient-blue",
        hoverGradient: "group-hover:text-gradient-blue"
      },
      green: {
        icon: "text-moosh-green",
        glow: "hover:shadow-glow-green",
        border: "hover:border-moosh-green/30",
        gradient: "text-gradient",
        hoverGradient: "group-hover:text-gradient"
      },
      cyan: {
        icon: "text-moosh-accent-cyan",
        glow: "hover:shadow-glow-cyan",
        border: "hover:border-moosh-accent-cyan/30",
        gradient: "text-gradient-cyan",
        hoverGradient: "group-hover:text-gradient-cyan"
      },
      purple: {
        icon: "text-moosh-accent-purple",
        glow: "hover:shadow-glow-purple",
        border: "hover:border-moosh-accent-purple/30",
        gradient: "text-gradient-purple",
        hoverGradient: "group-hover:text-gradient-purple"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <section className="bg-moosh-black-light section-padding relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>
      
      {/* Green accent dots */}
      <div className="green-dot-pattern" aria-hidden="true">
        <div className="dot" style={{ top: '15%', left: '5%', width: '2px', height: '0.4px', animationDelay: '0s' }}></div>
        <div className="dot" style={{ bottom: '20%', right: '10%', width: '3px', height: '0.6px', animationDelay: '1s' }}></div>
        <div className="dot" style={{ top: '60%', left: '8%', width: '2px', height: '0.4px', animationDelay: '2s' }}></div>
        <div className="dot" style={{ top: '40%', right: '5%', width: '2px', height: '0.4px', animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <m.div 
          className="text-center mb-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title={<span className="text-4xl md:text-5xl">{t('protocol.header.title', 'Core Modules')}</span>}
            subtitle={<span className="font-light">{t('protocol.header.subtitle', 'Built for ultra-low latency modular infrastructure and composable liquidity.')}</span>}
          >
            <div className="w-32 bg-gradient-to-r from-transparent via-moosh-green to-transparent mx-auto mb-6" style={{height: '0.2px'}}></div>
            <p className="text-xs font-semibold text-moosh-text-muted tracking-widest uppercase">
              {t('protocol.header.tagline', 'Explore the four modular engines that power Moosh')}
            </p>
          </SectionHeader>
        </m.div>
        
        {/* Animated Protocol Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => {
            const colorClasses = getColorClasses(module.color);
            
            return (
              <m.div 
                key={module.title}
                className={`group p-8 bg-moosh-black-card rounded-2xl border border-moosh-black-lighter hover:scale-105 transition-all duration-500 ease-out ${colorClasses.glow} ${colorClasses.border}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="flex items-start space-x-6">
                  {/* Animated Icon Container */}
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-moosh-black-lighter rounded-xl group-hover:bg-opacity-80 transition-all duration-500 ease-out">
                    <m.div 
                      className={`${colorClasses.icon} ${colorClasses.hoverGradient} transition-all duration-500 ease-out`}
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        scale: 1.1,
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                    >
                      {module.icon}
                    </m.div>
                  </div>
                  
                  {/* Enhanced Content */}
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-3 tracking-tight ${colorClasses.gradient} transition-all duration-500 ease-out`}>
                      {module.title}
                    </h3>
                    <p className="text-sm text-moosh-text-secondary leading-relaxed mb-4 group-hover:text-moosh-text-primary transition-colors duration-300">
                      {module.description}
                    </p>
                    
                    {/* Sub-modules */}
                    <div className="space-y-2">
                      {module.subModules.map((subModule, subIndex) => (
                        <m.div 
                          key={subIndex} 
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (subIndex * 0.1) }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1 h-1 bg-moosh-text-muted rounded-full group-hover:bg-moosh-green transition-colors duration-300"></div>
                          <span className="text-xs text-moosh-text-muted tracking-wide group-hover:text-moosh-text-secondary transition-colors duration-300">
                            {subModule}
                          </span>
                        </m.div>
                      ))}
                    </div>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 