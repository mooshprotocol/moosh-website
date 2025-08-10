import * as React from 'react';
import { mergeClassNames } from '@/lib/classnames';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  rounded?: 'sm' | 'md' | 'lg' | 'full';
}

export function Skeleton({ className, rounded = 'md', ...props }: SkeletonProps) {
  const roundedMap = {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  } as const;

  return (
    <div
      className={mergeClassNames(
        'animate-pulse bg-white/10',
        roundedMap[rounded],
        className,
      )}
      {...props}
    />
  );
}


