// JobCard.tsx
import React from 'react';
import { m } from 'framer-motion';
import Card from './Card';

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
        glow: "hover:shadow-glow-blue",
        border: "hover:border-moosh-accent-blue/20",
        tagBg: "bg-moosh-accent-blue/10",
        tagBorder: "border-moosh-accent-blue/20"
      },
      purple: {
        icon: "text-moosh-accent-purple",
        iconBg: "bg-moosh-accent-purple/10",
        glow: "hover:shadow-glow-purple",
        border: "hover:border-moosh-accent-purple/20",
        tagBg: "bg-moosh-accent-purple/10",
        tagBorder: "border-moosh-accent-purple/20"
      },
      green: {
        icon: "text-moosh-green",
        iconBg: "bg-moosh-green/10",
        glow: "hover:shadow-glow-green",
        border: "hover:border-moosh-green/20",
        tagBg: "bg-moosh-green/10",
        tagBorder: "border-moosh-green/20"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  const colorClasses = getColorClasses(color);

  return (
    <m.div 
      className="group"
      {...cardAnimation}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card
        className={`text-center flex flex-col min-h-[320px] ${colorClasses.border}`}
        glowClass={colorClasses.glow}
        interactiveHover
        onClick={onClick}
        style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)' }}
      >
        {/* Part 1: Icon */}
        <div className="relative z-10 mb-6">
          <div className={`w-16 h-16 mx-auto flex items-center justify-center ${colorClasses.iconBg} rounded-xl transition-all duration-500 group-hover:scale-105`}
               style={{
                 boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.2)',
               }}>
            <div className={`${colorClasses.icon} w-8 h-8 transition-all duration-500 group-hover:translate-y-[-2px]`}>
              {icon}
            </div>
          </div>
        </div>
        
        {/* Part 2: Title */}
        <div className="relative z-10 mb-4">
          <h3 className="text-white font-semibold text-lg md:text-xl group-hover:text-white/90 transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        {/* Part 3: Description */}
        <div className="relative z-10 mb-6 h-16">
          <p className="text-moosh-text-secondary text-base leading-relaxed group-hover:text-moosh-text-primary transition-colors duration-300">
            {description}
          </p>
        </div>
        
        {/* Part 4: Skills */}
        <div className="relative z-10 flex flex-wrap gap-2 justify-center">
          {skills.map((skill, skillIndex) => (
            <m.span 
              key={skillIndex} 
              className="bg-white/5 backdrop-blur-sm text-white/60 text-sm font-light rounded-full px-3 py-1.5 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white/80"
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
            </m.span>
          ))}
        </div>
      </Card>
    </m.div>
  );
} 