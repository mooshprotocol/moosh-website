// ApplyNowButton.tsx
import React from 'react';
import Button from './Button';
import { Spinner } from './Spinner';

interface ApplyNowButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

export default function ApplyNowButton({ 
  onClick, 
  className = '', 
  children,
  loading = false,
  disabled = false,
}: ApplyNowButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="accent"
      size="md"
      className={className}
      disabled={disabled || loading}
      iconRight={(
        loading ? (
          <Spinner size={16} />
        ) : (
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )
      )}
    >
      {loading ? 'Processing…' : (children || 'Apply Now')}
    </Button>
  );
}