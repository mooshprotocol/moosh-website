import React from 'react';
import { mergeClassNames } from '@/lib/classnames';

type ButtonVariant = 'ghost' | 'accent' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconRight?: React.ReactNode;
  withSlideBg?: boolean; // enable sliding bg overlay (used by ghost variant)
  slideBgClassName?: string; // custom background color for sliding overlay
}

// Use shared mergeClassNames to keep class merging consistent across the codebase

const sizeMap: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm min-w-[130px]',
  md: 'px-7 py-3 text-sm min-w-[150px]',
  lg: 'px-8 py-3.5 text-base min-w-[170px]',
};

const baseClasses = 'group relative inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-wide transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent overflow-hidden whitespace-nowrap';

const variantMap: Record<ButtonVariant, string> = {
  // Ghost outline white like TryMooshButton
  ghost:
    'border border-white text-white bg-transparent hover:shadow-glow-accent focus:ring-moosh-green/50',
  // Green accent outline that fills on hover like ApplyNowButton
  accent:
    'border border-moosh-green text-moosh-green bg-transparent hover:bg-moosh-green hover:text-black hover:scale-105 shadow-glow-green focus:ring-moosh-green/50',
  // Subtle secondary
  secondary:
    'border border-neutral-700/50 text-white/80 bg-transparent hover:bg-white/5 focus:ring-neutral-500/40',
};

export default function Button({
  variant = 'ghost',
  size = 'md',
  iconRight,
  withSlideBg = false,
  slideBgClassName,
  type = 'button',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={mergeClassNames(baseClasses, sizeMap[size], variantMap[variant], className)}
      {...rest}
    >
      {withSlideBg && (
        <div className={mergeClassNames(
          'absolute inset-0 transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 rounded-[inherit]',
          'transform-gpu will-change-transform',
          slideBgClassName ?? 'bg-white',
        )} />
      )}
      <span className={mergeClassNames('relative z-10 transition-colors duration-300 ease-out', withSlideBg && 'group-hover:text-black')}>
        {children}
      </span>
      {iconRight ? (
        <span className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1">
          {iconRight}
        </span>
      ) : null}
    </button>
  );
}


