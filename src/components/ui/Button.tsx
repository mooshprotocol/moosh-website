import React from 'react';

type ButtonVariant = 'ghost' | 'accent' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconRight?: React.ReactNode;
  withSlideBg?: boolean; // enable sliding bg overlay (used by ghost variant)
}

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ');
}

const sizeMap: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

const baseClasses = 'group relative inline-flex items-center gap-2 rounded-lg font-medium tracking-wide transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent';

const variantMap: Record<ButtonVariant, string> = {
  // Ghost outline white like TryMooshButton
  ghost:
    'border border-white text-white bg-transparent hover:shadow-[0_0_20px_rgba(0,255,153,0.3)] focus:ring-moosh-green/50',
  // Green accent outline that fills on hover like ApplyNowButton
  accent:
    'border border-[#00ff9a] text-[#00ff9a] bg-transparent hover:bg-[#00ff9a] hover:text-black hover:scale-105 shadow-[0_0_20px_rgba(0,255,154,0.2)] focus:ring-[#00ff9a]/50',
  // Subtle secondary
  secondary:
    'border border-neutral-700/50 text-white/80 bg-transparent hover:bg-white/5 focus:ring-neutral-500/40',
};

export default function Button({
  variant = 'ghost',
  size = 'md',
  iconRight,
  withSlideBg = false,
  type = 'button',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseClasses, sizeMap[size], variantMap[variant], className)}
      {...rest}
    >
      {withSlideBg && (
        <div className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
      )}
      <span className={cn('relative z-10 transition-colors duration-300 ease-out', withSlideBg && 'group-hover:text-black')}>
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


