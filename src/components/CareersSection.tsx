'use client';

import { motion } from 'framer-motion';
import ApplyNowButton from './ui/ApplyNowButton';
import JobCardsGrid from './ui/JobCardsGrid';

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
    <section className="bg-moosh-black-light py-16 relative overflow-hidden">
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
      
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-moosh-text-primary mb-4 leading-tight">
            Join the Modular Liquidity Movement
          </h2>
          
          <p className="text-sm md:text-base text-neutral-400 leading-normal max-w-xl mx-auto mb-6">
            We&apos;re building the future of lending with builders, designers, and community minds who create with purpose and integrity.
          </p>
          
          {/* CTA Button */}
          <motion.div 
            className="mt-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ApplyNowButton 
              onClick={() => console.log('Apply Now clicked')}
              className="text-base px-5 py-2 font-normal"
            />
          </motion.div>
        </motion.div>
        
        {/* Job Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <JobCardsGrid />
        </motion.div>
        

      </div>
    </section>
  );
} 