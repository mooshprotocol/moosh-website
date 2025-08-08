import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowClass?: string; // extra hover shadow class
  interactiveHover?: boolean; // enable scale on hover
  withOverlay?: boolean; // show subtle gradient overlay on hover
}

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ');
}

export default function Card({
  glowClass,
  interactiveHover = false,
  withOverlay = true,
  className = '',
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        'group relative p-8 bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 backdrop-blur-sm rounded-xl',
        'border border-neutral-700/50 hover:border-neutral-600/50',
        'transition-all duration-500 h-full overflow-hidden',
        glowClass,
        interactiveHover && 'hover:scale-[1.03]',
        className,
      )}
      {...rest}
    >
      {withOverlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-neutral-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}


