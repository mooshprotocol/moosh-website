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

  const colorClasses = getColorClasses(color);

  return (
    <motion.div 
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div 
        className={`text-center p-6 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 ${colorClasses.glow} ${colorClasses.border} h-full flex flex-col justify-between`}
        onClick={onClick}
      >
      {/* Icon */}
      <div className="w-9 h-9 mx-auto mb-4 flex items-center justify-center bg-neutral-800 rounded-lg transition-colors duration-300">
        <div className={`${colorClasses.icon} transition-transform duration-300`}>
          {icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-white font-semibold text-base md:text-lg mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-neutral-400 text-sm leading-relaxed mb-4">
        {description}
      </p>
      
      {/* Skills */}
      <div className="grid grid-cols-3 gap-1.5">
        {skills.map((skill, skillIndex) => (
          <span key={skillIndex} className="bg-zinc-800 text-zinc-300 text-xs rounded-md px-1.5 py-1 text-center">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
  );
} 