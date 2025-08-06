// JobCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface JobCardProps {
  title: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
  color: 'blue' | 'purple' | 'green';
  onClick?: () => void;
  index?: number;
}

export default function JobCard({ 
  title, 
  description, 
  skills, 
  icon, 
  color, 
  onClick,
  index = 0
}: JobCardProps) {
  // Performance optimized animation configs
  const cardAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" as const }
  };
  
  const tagAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  };
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
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  const colorClasses = getColorClasses(color);

  return (
    <motion.div 
      className="group"
      {...cardAnimation}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div 
        className={`relative text-center p-8 bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-500 ${colorClasses.glow} ${colorClasses.border} h-full flex flex-col justify-between overflow-hidden`}
        onClick={onClick}
        style={{
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)',
        }}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-neutral-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Icon with enhanced styling */}
        <div className="relative z-10">
          <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center ${colorClasses.iconBg} rounded-xl transition-all duration-500 group-hover:scale-105`}
               style={{
                 boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.2)',
               }}>
            <div className={`${colorClasses.icon} w-8 h-8 transition-all duration-500 group-hover:translate-y-[-2px] group-hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]`}>
              {icon}
            </div>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="relative z-10 text-white font-semibold text-lg md:text-xl mb-4 group-hover:text-white/90 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="relative z-10 text-neutral-400 text-base leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors duration-300">
          {description}
        </p>
        
        {/* Skills with enhanced styling */}
        <div className="relative z-10 flex flex-wrap gap-2 justify-center">
          {skills.map((skill, skillIndex) => (
            <motion.span 
              key={skillIndex} 
              className="bg-white/5 backdrop-blur-sm text-white/60 text-sm font-light rounded-full px-3 py-1.5 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white/80 group-hover:shadow-[0_0_8px_rgba(255,255,255,0.1)]"
              {...tagAnimation}
              transition={{ 
                ...tagAnimation.transition,
                delay: skillIndex * 0.1
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                willChange: 'opacity, transform, background-color, color, box-shadow'
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 