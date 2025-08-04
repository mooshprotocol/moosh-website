// TryMooshButton.tsx
import React from 'react';

interface TryMooshButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function TryMooshButton({ 
  onClick, 
  className = "", 
  children = "Try Moosh" 
}: TryMooshButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group relative overflow-hidden px-6 py-3 rounded-lg
        border border-white text-white bg-transparent
        font-medium text-sm tracking-wide
        transition-all duration-300 ease-out
        hover:shadow-[0_0_20px_rgba(0,255,153,0.3)]
        focus:outline-none focus:ring-2 focus:ring-moosh-green/50 focus:ring-offset-2 focus:ring-offset-transparent
        ${className}
      `}
    >
      {/* Sliding background */}
      <div className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></div>
      
      {/* Button text */}
      <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-black">
        {children}
      </span>
    </button>
  );
} 