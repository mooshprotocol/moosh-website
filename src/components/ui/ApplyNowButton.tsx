// ApplyNowButton.tsx
import React from 'react';

interface ApplyNowButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function ApplyNowButton({ 
  onClick, 
  className = "", 
  children 
}: ApplyNowButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg
        border border-moosh-green text-moosh-green bg-transparent
        font-medium text-sm tracking-wide
        transition-all duration-300 ease-out
        hover:bg-moosh-green hover:text-black
        focus:outline-none focus:ring-2 focus:ring-moosh-green/50 focus:ring-offset-2 focus:ring-offset-transparent
        ${className}
      `}
    >
      {/* Button text */}
      <span className="transition-colors duration-300 ease-out">
        {children || "Apply Now"}
      </span>
      
      {/* Single arrow icon with hover animation */}
      <svg 
        className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
} 