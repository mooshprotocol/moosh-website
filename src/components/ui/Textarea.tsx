import * as React from 'react';
import { mergeClassNames } from '@/lib/classnames';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={mergeClassNames(
          'w-full rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40',
          'px-3 py-2 md:px-4 md:py-2.5',
          'focus:outline-none focus:ring-2 focus:ring-moosh-green/40 focus:border-moosh-green/40',
          'transition-colors duration-200 resize-y',
          invalid && 'border-red-500/60 focus:ring-red-500/40 focus:border-red-500/60 placeholder:text-red-300/60',
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';


