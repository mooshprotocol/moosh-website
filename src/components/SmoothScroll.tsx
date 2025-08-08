'use client'
import { useEffect } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from 'framer-motion';

export default function SmoothScroll() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t: number) => 1 - Math.pow(1 - t, 2),
      smoothWheel: true,
      gestureOrientation: 'vertical',
    });

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return null;
}


