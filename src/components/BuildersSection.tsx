'use client';

import { motion } from 'framer-motion';

export default function BuildersSection() {
  const categories = [
    {
      title: "Systems",
      description: "Architected foundations that enable composability, precision, and trust.",
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
      title: "Research",
      description: "Models, data, and principles that shape how systems adapt and stay secure.",
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
      title: "Expression",
      description: "Where logic becomes language — modular, legible, and imbued with intent.",
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
      title: "Autonomy",
      description: "Agents that act — adaptive, decentralized, and aligned with protocol goals.",
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
        glow: "hover:shadow-glow-blue",
        border: "hover:border-moosh-accent-blue/30"
      },
      purple: {
        glow: "hover:shadow-glow-purple",
        border: "hover:border-moosh-accent-purple/30"
      },
      green: {
        glow: "hover:shadow-glow-green",
        border: "hover:border-moosh-green/30"
      },
      orange: {
        glow: "hover:shadow-glow-orange",
        border: "hover:border-moosh-accent-orange/30"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <section className="bg-moosh-black-dark section-padding relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Enhanced Green pattern background for separation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1/3 bg-gradient-to-r from-transparent via-moosh-green/30 to-transparent" style={{height: '0.2px'}}></div>
        <div className="absolute top-1/2 right-0 w-1/3 bg-gradient-to-l from-transparent via-moosh-green/30 to-transparent" style={{height: '0.2px'}}></div>
      </div>
      
      {/* Green accent dots */}
      <div className="green-dot-pattern">
        <div className="dot" style={{ top: '10%', left: '8%', width: '0.6px', height: '0.12px', animationDelay: '0s' }}></div>
        <div className="dot" style={{ bottom: '15%', right: '12%', width: '0.4px', height: '0.08px', animationDelay: '1s' }}></div>
        <div className="dot" style={{ top: '60%', left: '5%', width: '0.6px', height: '0.12px', animationDelay: '2s' }}></div>
        <div className="dot" style={{ top: '30%', right: '8%', width: '0.4px', height: '0.08px', animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-moosh-text-primary mb-6 leading-tight">
            <span className="whitespace-nowrap">BUIDL by Artists, Philosophers, Poets, and Composers</span>
            <br />
            — and <span className="text-gradient">Agents</span>
          </h2>
          <p className="text-lg text-moosh-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            Reimagining DeFi with logic, language, and autonomy.
          </p>
          <div className="w-32 bg-gradient-to-r from-transparent via-moosh-green to-transparent mx-auto mb-8" style={{height: '1px'}}></div>
        </motion.div>
        
                {/* Poetic Vision Text Above Cards */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-8 -mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl text-moosh-text-secondary leading-relaxed font-light tracking-wide">
            Moosh is not built by builders alone. It&apos;s a protocol composed by those who think modularly, speak in primitives, and dream in composable systems.
          </p>
          
 
        </motion.div>
        
        {/* Creative Archetypes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <motion.div 
                key={category.title}
                className={`group text-center p-6 bg-moosh-black-card border border-moosh-black-lighter rounded-2xl hover:scale-[1.02] transition-all duration-300 ${colorClasses.glow} ${colorClasses.border}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Enhanced Circular Avatar */}
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-moosh-black-lighter rounded-full group-hover:bg-moosh-green/10 transition-colors duration-300">
                  <div className="w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-moosh-text-primary mb-3">
                  {category.title}
                </h4>
                <p className="text-sm text-moosh-text-secondary leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 