import * as React from 'react';
import { mergeClassNames } from '@/lib/classnames';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', invalid, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="relative">
        {leftIcon ? (
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-moosh-text-muted">
            {leftIcon}
          </span>
        ) : null}
        <input
          type={type}
          className={mergeClassNames(
            'w-full rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40',
            'px-3 py-2 md:px-4 md:py-2.5',
            'focus:outline-none focus:ring-2 focus:ring-moosh-green/40 focus:border-moosh-green/40',
            'transition-colors duration-200',
            !!leftIcon && 'pl-10',
            !!rightIcon && 'pr-10',
            invalid && 'border-red-500/60 focus:ring-red-500/40 focus:border-red-500/60 placeholder:text-red-300/60',
            className,
          )}
          ref={ref}
          {...props}
        />
        {rightIcon ? (
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-moosh-text-muted">
            {rightIcon}
          </span>
        ) : null}
      </div>
    );
  },
);

Input.displayName = 'Input';


