import React from 'react';

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
        <p className="text-xs uppercase tracking-widest text-moosh-green mb-4 font-semibold">
          {eyebrow}
        </p>
      ) : null}

      <h2 className={`text-3xl md:text-4xl font-bold text-moosh-text-primary tracking-tight ${subtitle ? 'mb-8' : ''}`}>
        {title}
      </h2>

      {subtitle ? (
        <p className={`text-lg text-moosh-text-secondary leading-relaxed ${isCenter ? 'max-w-2xl mx-auto' : ''}`}>
          {subtitle}
        </p>
      ) : null}

      {children}
    </div>
  );
}

SectionHeader.displayName = 'SectionHeader';

export default React.memo(SectionHeader);


