// TryMooshButton.tsx
import React from 'react';
import Button from './Button';

interface TryMooshButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function TryMooshButton({ 
  onClick, 
  className = '', 
  children = 'Try Moosh' 
}: TryMooshButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      size="md"
      withSlideBg
      className={className}
    >
      {children}
    </Button>
  );
}