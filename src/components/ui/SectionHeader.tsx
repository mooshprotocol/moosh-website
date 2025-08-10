import React from 'react';
import { Typography } from './Typography';

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  children?: React.ReactNode; // optional extra elements below subtitle
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  children,
}: SectionHeaderProps) {
  const isCenter = align === 'center';
  return (
    <div className={`${isCenter ? 'text-center' : ''} ${className}`}>
      {eyebrow ? (
        <Typography.Eyebrow className="mb-4">{eyebrow}</Typography.Eyebrow>
      ) : null}

      <Typography.H2 align={align} className={subtitle ? 'mb-8' : ''}>
        {title}
      </Typography.H2>

      {subtitle ? (
        <Typography.Text align={align} className={isCenter ? 'max-w-2xl mx-auto' : ''}>
          {subtitle}
        </Typography.Text>
      ) : null}

      {children}
    </div>
  );
}

SectionHeader.displayName = 'SectionHeader';

export default React.memo(SectionHeader);


