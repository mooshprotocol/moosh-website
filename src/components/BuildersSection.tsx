'use client';

import { m, useReducedMotion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Card from './ui/Card';
import { Typography } from './ui/Typography';
import SectionHeader from './ui/SectionHeader';
import { useI18n } from '@/components/I18nProvider';

export default function BuildersSection() {
  const { t } = useI18n();
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sectionInView = useInView(sectionRef, { amount: 0.2 });
  
  // Performance optimized animation configs
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };
  
  const iconAnimations = {
    systems: { rotate: 45 },
    research: { y: [-4, 4, -4] },
    expression: { x: [-2, 2, -2] },
    autonomy: { scale: [1, 1.05, 1] }
  };
  const categories = [
    {
      title: t('builders.categories.systems.title', 'Systems'),
      description: t('builders.categories.systems.description', 'The foundation for precision, trust, and composability.'),
      color: "blue",
      icon: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <rect x="10" y="10" width="15" height="15" fill="#3B82F6" fillOpacity="0.8" rx="2"/>
          <rect x="30" y="10" width="15" height="15" fill="#3B82F6" fillOpacity="0.6" rx="2"/>
          <rect x="50" y="10" width="15" height="15" fill="#3B82F6" fillOpacity="0.4" rx="2"/>
          <rect x="10" y="30" width="15" height="15" fill="#3B82F6" fillOpacity="0.6" rx="2"/>
          <rect x="30" y="30" width="15" height="15" fill="#3B82F6" fillOpacity="0.8" rx="2"/>
          <rect x="50" y="30" width="15" height="15" fill="#3B82F6" fillOpacity="0.6" rx="2"/>
          <rect x="10" y="50" width="15" height="15" fill="#3B82F6" fillOpacity="0.4" rx="2"/>
          <rect x="30" y="50" width="15" height="15" fill="#3B82F6" fillOpacity="0.6" rx="2"/>
          <rect x="50" y="50" width="15" height="15" fill="#3B82F6" fillOpacity="0.8" rx="2"/>
        </svg>
      )
    },
    {
      title: t('builders.categories.research.title', 'Research'),
      description: t('builders.categories.research.description', 'Models and logic that keep systems adaptive and resilient.'),
      color: "purple",
      icon: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <circle cx="20" cy="20" r="4" fill="#8B5CF6" fillOpacity="0.8"/>
          <circle cx="60" cy="25" r="4" fill="#8B5CF6" fillOpacity="0.8"/>
          <circle cx="40" cy="40" r="6" fill="#8B5CF6" fillOpacity="0.9"/>
          <circle cx="15" cy="55" r="3" fill="#8B5CF6" fillOpacity="0.6"/>
          <circle cx="65" cy="60" r="4" fill="#8B5CF6" fillOpacity="0.8"/>
          <line x1="20" y1="20" x2="40" y2="40" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.6"/>
          <line x1="60" y1="25" x2="40" y2="40" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.6"/>
          <line x1="40" y1="40" x2="15" y2="55" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.6"/>
          <line x1="40" y1="40" x2="65" y2="60" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.6"/>
        </svg>
      )
    },
    {
      title: t('builders.categories.expression.title', 'Expression'),
      description: t('builders.categories.expression.description', 'Where logic turns into language — clear, modular, and intent-driven.'),
      color: "green",
      icon: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <path d="M10 40 Q20 20 30 40 T50 40 T70 40" stroke="#10B981" strokeWidth="2.5" fill="none" strokeOpacity="0.8"/>
          <path d="M10 50 Q25 30 40 50 T70 50" stroke="#10B981" strokeWidth="2" fill="none" strokeOpacity="0.6"/>
          <path d="M10 30 Q15 15 25 30 T45 30 T65 30" stroke="#10B981" strokeWidth="1.5" fill="none" strokeOpacity="0.4"/>
          <circle cx="30" cy="40" r="2" fill="#10B981" fillOpacity="0.8"/>
          <circle cx="50" cy="40" r="2" fill="#10B981" fillOpacity="0.8"/>
        </svg>
      )
    },
    {
      title: t('builders.categories.autonomy.title', 'Autonomy'),
      description: t('builders.categories.autonomy.description', 'Agents that act — autonomous, aligned, and evolving with intent.'),
      color: "orange",
      icon: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <circle cx="40" cy="40" r="8" fill="#F59E0B" fillOpacity="0.9"/>
          <circle cx="25" cy="25" r="5" fill="#F59E0B" fillOpacity="0.7"/>
          <circle cx="55" cy="25" r="5" fill="#F59E0B" fillOpacity="0.7"/>
          <circle cx="25" cy="55" r="5" fill="#F59E0B" fillOpacity="0.7"/>
          <circle cx="55" cy="55" r="5" fill="#F59E0B" fillOpacity="0.7"/>
          <path d="M32 32 A12 12 0 0 1 48 32" stroke="#F59E0B" strokeWidth="1.5" fill="none" strokeOpacity="0.6"/>
          <path d="M32 48 A12 12 0 0 1 48 48" stroke="#F59E0B" strokeWidth="1.5" fill="none" strokeOpacity="0.6"/>
        </svg>
      )
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        icon: "text-moosh-accent-blue",
        iconBg: "bg-moosh-accent-blue/10",
        glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
        border: "hover:border-moosh-accent-blue/20",
        tagBg: "bg-moosh-accent-blue/10",
        tagBorder: "border-moosh-accent-blue/20"
      },
      purple: {
        icon: "text-moosh-accent-purple",
        iconBg: "bg-moosh-accent-purple/10",
        glow: "hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]",
        border: "hover:border-moosh-accent-purple/20",
        tagBg: "bg-moosh-accent-purple/10",
        tagBorder: "border-moosh-accent-purple/20"
      },
      green: {
        icon: "text-moosh-green",
        iconBg: "bg-moosh-green/10",
        glow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
        border: "hover:border-moosh-green/20",
        tagBg: "bg-moosh-green/10",
        tagBorder: "border-moosh-green/20"
      },
      orange: {
        icon: "text-moosh-accent-orange",
        iconBg: "bg-moosh-accent-orange/10",
        glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
        border: "hover:border-moosh-accent-orange/20",
        tagBg: "bg-moosh-accent-orange/10",
        tagBorder: "border-moosh-accent-orange/20"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <section className="bg-moosh-black-medium py-20 md:py-28 relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>
      
      {/* Enhanced Green pattern background for separation */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-1/3 bg-gradient-to-r from-transparent via-moosh-green/30 to-transparent" style={{height: '0.2px'}}></div>
        <div className="absolute top-1/2 right-0 w-1/3 bg-gradient-to-l from-transparent via-moosh-green/30 to-transparent" style={{height: '0.2px'}}></div>
      </div>
      
      {/* Green accent dots */}
      <div className="green-dot-pattern" aria-hidden="true">
        <div className="dot" style={{ top: '10%', left: '8%', width: '0.6px', height: '0.12px', animationDelay: '0s' }}></div>
        <div className="dot" style={{ bottom: '15%', right: '12%', width: '0.4px', height: '0.08px', animationDelay: '1s' }}></div>
        <div className="dot" style={{ top: '60%', left: '5%', width: '0.6px', height: '0.12px', animationDelay: '2s' }}></div>
        <div className="dot" style={{ top: '30%', right: '8%', width: '0.4px', height: '0.08px', animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <m.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            eyebrow={t('builders.eyebrow', 'Not just builders.')}
            title={t('builders.title', 'BUIDL by artists, philosophers, poets — and agents.')}
            subtitle={t('builders.subtitle', 'Moosh is shaped by modular minds: those who think in primitives, speak in logic, and build systems that compose.')}
          />
        </m.div>
        
        {/* Creative Archetypes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <m.div 
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={!shouldReduceMotion ? {
                  y: category.title === "Research" ? -4 : 0,
                  scale: 1.03,
                  transition: { duration: 0.4 }
                } : {}}
              >
                <Card
          className={`text-center ${
                    category.title === "Systems" ? "hover:shadow-glow-blue" :
                    category.title === "Research" ? "hover:shadow-glow-purple" :
                    category.title === "Expression" ? "hover:shadow-glow-green" :
                    category.title === "Autonomy" ? "hover:shadow-glow-orange" : ""
                  }`}
                  glowClass={colorClasses.glow}
                  withOverlay
                  style={{
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)',
                    borderColor: category.title === "Systems" ? 'rgba(59,130,246,0.3)' : 
                                category.title === "Research" ? 'rgba(139,92,246,0.3)' : 
                                category.title === "Expression" ? 'rgba(16,185,129,0.3)' : 
                                category.title === "Autonomy" ? 'rgba(245,158,11,0.3)' : 'rgba(115,115,115,0.5)'
                  }}
                >
                {/* Dynamic background overlay */}
                <m.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: category.title === "Systems" ? 
                      'linear-gradient(45deg, transparent 30%, rgba(59,130,246,0.08) 50%, transparent 70%)' :
                      category.title === "Research" ? 
                      'linear-gradient(0deg, transparent 20%, rgba(139,92,246,0.06) 50%, transparent 80%)' :
                      category.title === "Expression" ? 
                      'linear-gradient(90deg, transparent 30%, rgba(16,185,129,0.07) 50%, transparent 70%)' :
                      category.title === "Autonomy" ? 
                      'linear-gradient(135deg, transparent 30%, rgba(245,158,11,0.15) 50%, transparent 70%)' :
                      'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.02) 50%, transparent 70%)'
                  }}
                  animate={!shouldReduceMotion && sectionInView && category.title === "Autonomy" ? {
                    scale: [1, 1.3, 1],
                    opacity: [0, 0.4, 0]
                  } : {}}
                  transition={{
                    duration: category.title === "Autonomy" ? 2.5 : 0.5,
                    repeat: category.title === "Autonomy" ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Icon with enhanced styling */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center ${colorClasses.iconBg} rounded-xl transition-all duration-500 group-hover:scale-105`}
                       style={{
                         boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.2)',
                       }}>
                    <m.div 
                      className={`w-8 h-8 transition-all duration-500`}
                      whileHover={!shouldReduceMotion ? { 
                        rotate: category.title === "Systems" ? 45 : 
                               category.title === "Research" ? 0 : 
                               category.title === "Expression" ? 0 : 
                               category.title === "Autonomy" ? 0 : 0,
                        y: category.title === "Research" ? [-4, 4, -4] : -2,
                        scale: category.title === "Autonomy" ? [1, 1.1, 1] : 1
                      } : {}}
                       animate={!shouldReduceMotion && sectionInView ? 
                        category.title === "Autonomy" ? {
                          scale: [1, 1.05, 1],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        } :
                        category.title === "Research" ? {
                          y: [-2, 2, -2],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        } : {}
                       : {}}
                      style={{
                        willChange: 'transform'
                      }}
                      transition={{ 
                        duration: category.title === "Research" ? 2 : 0.5,
                        repeat: category.title === "Research" ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    >
                      {category.icon}
                    </m.div>
                  </div>
                </div>
                
                <h4 className="relative z-10 text-white font-semibold text-lg md:text-xl mb-6 group-hover:text-white/90 transition-colors duration-300">
                  {category.title}
                </h4>
                <m.p 
                  className="relative z-10 text-moosh-text-secondary text-base leading-relaxed group-hover:text-moosh-text-primary transition-colors duration-300 flex-1"
                                  whileHover={!shouldReduceMotion && category.title === "Expression" ? {
                  x: [-2, 2, -2],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                } : {}}
                >
                  {category.description}
                </m.p>
                

                </Card>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 