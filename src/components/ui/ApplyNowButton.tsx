// ApplyNowButton.tsx
import React from 'react';
import Button from './Button';

interface ApplyNowButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function ApplyNowButton({ 
  onClick, 
  className = '', 
  children 
}: ApplyNowButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="accent"
      size="md"
      className={className}
      iconRight={(
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    >
      {children || 'Apply Now'}
    </Button>
  );
}