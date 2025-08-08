'use client';

import { m, useScroll, useTransform, useReducedMotion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ParallaxBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mql = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener?.('change', update);
    return () => mql.removeEventListener?.('change', update);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const baseY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const baseOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);
  const inView = useInView(ref, { amount: 0.1 });
  const y = prefersReducedMotion || isMobile || !inView ? undefined : baseY;
  const opacity = prefersReducedMotion || isMobile || !inView ? undefined : baseOpacity;

  return (
    <m.div 
      ref={ref}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ 
        y,
        opacity,
        willChange: prefersReducedMotion || isMobile ? undefined : 'transform, opacity'
      }}
    >
      {/* Floating geometric elements */}
      <div className="absolute top-1/4 left-1/6 w-8 h-8 border border-moosh-green/20 rotate-45" aria-hidden="true"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-moosh-green/10 rounded-full" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 border border-moosh-green/30 rotate-45" aria-hidden="true"></div>
      <div className="absolute bottom-1/3 right-1/6 w-10 h-10 bg-moosh-green/5 rounded-full" aria-hidden="true"></div>
      
      {/* Subtle grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 1000" aria-hidden="true">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#32C466" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </m.div>
  );
} 