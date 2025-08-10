// TryMooshButton.tsx
import React from 'react';
import Button from './Button';

interface TryMooshButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export default function TryMooshButton({ 
  onClick, 
  className = '', 
  children = 'Try Moosh',
  size = 'sm',
}: TryMooshButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      size={size}
      withSlideBg
      slideBgClassName="bg-moosh-green-bright"
      className={`transform-gpu will-change-transform shadow-none hover:shadow-none border-white/70 uppercase text-xs md:text-sm tracking-wide rounded-md md:rounded-lg [text-rendering:optimizeLegibility] antialiased ${className}`}
    >
      {children}
    </Button>
  );
}