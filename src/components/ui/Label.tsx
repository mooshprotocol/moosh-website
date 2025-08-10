import * as React from 'react';
import { mergeClassNames } from '@/lib/classnames';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  hint?: string;
}

export function Label({ className, required, hint, children, ...props }: LabelProps) {
  return (
    <label
      className={mergeClassNames('block text-sm text-moosh-text-secondary mb-1.5', className)}
      {...props}
    >
      <span className="inline-flex items-center gap-1">
        <span>{children}</span>
        {required ? <span className="text-red-400" aria-hidden>*</span> : null}
      </span>
      {hint ? <span className="block text-xs text-moosh-text-muted mt-0.5">{hint}</span> : null}
    </label>
  );
}


