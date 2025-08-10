import * as React from 'react';
import { mergeClassNames } from '@/lib/classnames';
import Button from './Button';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  title,
  description,
  icon,
  actionLabel,
  onAction,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={mergeClassNames(
        'text-center rounded-xl border border-white/10 bg-white/5 p-8 md:p-10',
        'backdrop-blur-sm',
        className,
      )}
      {...props}
    >
      {icon ? (
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-moosh-green">
          {icon}
        </div>
      ) : null}
      <h3 className="text-lg md:text-xl font-semibold text-moosh-text-primary">{title}</h3>
      {description ? (
        <p className="mt-2 text-sm text-moosh-text-secondary">{description}</p>
      ) : null}
      {actionLabel ? (
        <div className="mt-6">
          <Button variant="accent" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      ) : null}
    </div>
  );
}


