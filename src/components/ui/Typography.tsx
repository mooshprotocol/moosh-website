import React from 'react';
import { mergeClassNames } from '@/lib/classnames';

type Align = 'left' | 'center' | 'right';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  align?: Align;
  gradient?: boolean;
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  tone?: 'primary' | 'secondary' | 'muted';
  align?: Align;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export function H1({ className, align = 'left', gradient, ...rest }: HeadingProps) {
  return (
    <h1
      className={mergeClassNames(
        'text-4xl md:text-5xl font-bold tracking-tight',
        gradient ? 'text-gradient' : 'text-moosh-text-primary',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className,
      )}
      {...rest}
    />
  );
}

export function H2({ className, align = 'left', gradient, ...rest }: HeadingProps) {
  return (
    <h2
      className={mergeClassNames(
        'text-3xl md:text-4xl font-bold tracking-tight',
        gradient ? 'text-gradient' : 'text-moosh-text-primary',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className,
      )}
      {...rest}
    />
  );
}

export function H3({ className, align = 'left', ...rest }: HeadingProps) {
  return (
    <h3
      className={mergeClassNames(
        'text-2xl md:text-3xl font-semibold tracking-tight text-moosh-text-primary',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className,
      )}
      {...rest}
    />
  );
}

export function Text({ className, tone = 'secondary', align = 'left', size = 'md', ...rest }: TextProps) {
  const toneClass =
    tone === 'primary'
      ? 'text-moosh-text-primary'
      : tone === 'muted'
      ? 'text-moosh-text-muted'
      : 'text-moosh-text-secondary';
  const sizeClass =
    size === 'xs'
      ? 'text-xs'
      : size === 'sm'
      ? 'text-sm'
      : size === 'lg'
      ? 'text-lg'
      : 'text-base';
  return (
    <p
      className={mergeClassNames(
        'leading-relaxed',
        sizeClass,
        toneClass,
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className,
      )}
      {...rest}
    />
  );
}

export function Eyebrow({ className, ...rest }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={mergeClassNames(
        'text-xs uppercase tracking-widest text-moosh-green font-semibold',
        className,
      )}
      {...rest}
    />
  );
}

export const Typography = { H1, H2, H3, Text, Eyebrow };


