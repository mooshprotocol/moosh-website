// ApplyNowButton.tsx
import React, { useState } from 'react';
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
  const [showEmail, setShowEmail] = useState(false);

  const handleEmailClick = () => {
    setShowEmail(true);
    setTimeout(() => setShowEmail(false), 3000);
    navigator.clipboard.writeText('b33dlebox@gmail.com');
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="relative">
      <Button
        onClick={handleEmailClick}
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
      
      {showEmail && (
        <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="relative bg-gradient-to-br from-moosh-black-dark to-moosh-black border border-moosh-green/30 rounded-lg px-3 py-2 shadow-2xl backdrop-blur-sm">
            {/* 发光效果 */}
            <div className="absolute inset-0 bg-gradient-to-br from-moosh-green/5 to-transparent rounded-lg"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-moosh-green/20 via-moosh-green/10 to-moosh-green/20 rounded-lg blur opacity-75"></div>
            
            {/* 内容 */}
            <div className="relative flex items-center space-x-2">
              <svg className="w-3.5 h-3.5 text-moosh-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-semibold text-moosh-green tracking-wide">COPIED</span>
              <div className="text-sm font-mono text-white">
                b33dlebox@gmail.com
              </div>
            </div>
            
            {/* 箭头 */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-moosh-green/30"></div>
              <div className="absolute top-px left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-5 border-r-5 border-b-5 border-l-transparent border-r-transparent border-b-moosh-black-dark"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}