'use client';

import { m, useInView } from 'framer-motion';
import { Typography } from './ui/Typography';
import { useI18n } from '@/components/I18nProvider';
import { useRef } from 'react';

export default function HeroSection() {
  const { t } = useI18n();
  const viewRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(viewRef, { amount: 0.2, margin: '0px 0px -10% 0px' });
  const metrics = [
    {
      value: '7',
      label: t('hero.metrics.modularEngines', 'Modular Components'),
    },
    {
      value: '∞',
      label: t('hero.metrics.composability', 'Composability'),
    },
    {
      value: '0',
      label: t('hero.metrics.friction', 'Friction'),
    },
  ];
  return (
    <section
      className="hero-section" 
      ref={viewRef}
    >
      <div className="hero-surface" aria-hidden="true"></div>
      <div className="hero-noise" aria-hidden="true"></div>
      <div className="relative z-10 container-custom text-center px-4">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <m.h1 
            className="hero-title text-5xl md:text-7xl lg:text-8xl font-orbitron font-black tracking-tight leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          >
            <span className="font-black">MOOSH</span>
          </m.h1>

          <m.div
            className="relative inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          >
            <h2 className="hero-subheading text-6xl md:text-8xl lg:text-9xl font-orbitron font-black tracking-tight leading-none mt-2">
              <span>PROTOCOL</span>
            </h2>
          </m.div>

          <m.div
            className="mt-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            <Typography.Text align="center" tone="secondary" size="lg" className="hero-subtitle">
              {t('hero.subtitle', 'The money market born for the agentic era.')}
            </Typography.Text>
          </m.div>

          <m.div 
            className="hero-kpi-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          >
            {metrics.map((metric) => (
              <div
                key={metric.value}
                className="hero-ring"
                role="group"
                tabIndex={0}
                aria-label={`${metric.value} ${metric.label}`}
              >
                <div className="hero-ring__circle">
                  <span className="hero-ring__orbit" aria-hidden="true">
                    <span className="hero-ring__dot"></span>
                  </span>
                  <span className="hero-ring__value">{metric.value}</span>
                </div>
                <span className="hero-ring__label">{metric.label}</span>
              </div>
            ))}
          </m.div>
        </m.div>
      </div>

    </section>
  );
} 
