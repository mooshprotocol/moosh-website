'use client';

import { m, useInView, useReducedMotion } from 'framer-motion';
import { Typography } from './ui/Typography';
import { useI18n } from '@/components/I18nProvider';
import { useRef } from 'react';

const titleContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const protocolContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.06,
    },
  },
};

const letterReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const scanLineVariants = {
  hidden: { x: '-120%', opacity: 0 },
  visible: {
    x: '120%',
    opacity: [0, 0.9, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      delay: 0.5,
    },
  },
};

const metricContainer = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delayChildren: 1.2,
      staggerChildren: 0.18,
    },
  },
};

const metricReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};

export default function HeroSection() {
  const { t } = useI18n();
  const viewRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(viewRef, { amount: 0.2, margin: '0px 0px -10% 0px' });
  const prefersReducedMotion = useReducedMotion();
  const titleLetters = 'MOOSH'.split('');
  const protocolLetters = 'PROTOCOL'.split('');
  const initialState = prefersReducedMotion ? false : 'hidden';
  const visibleState = prefersReducedMotion ? 'visible' : inView ? 'visible' : 'hidden';
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
      <div className="hero-energy" aria-hidden="true">
        <span className="hero-energy__grid" aria-hidden="true" />
        <span className="hero-energy__glimmer" aria-hidden="true" />
        <span className="hero-energy__particles" aria-hidden="true" />
        <span className="hero-energy__mask" aria-hidden="true" />
      </div>
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
            variants={titleContainer}
            initial={initialState}
            animate={visibleState}
          >
            {titleLetters.map((letter, index) => (
              <m.span
                key={`${letter}-${index}`}
                className="hero-title__letter"
                variants={letterReveal}
                aria-hidden="true"
              >
                {letter}
              </m.span>
            ))}
            <span className="sr-only">MOOSH</span>
          </m.h1>

          <m.div
            className="relative inline-block"
            variants={protocolContainer}
            initial={initialState}
            animate={visibleState}
          >
            <m.h2 className="hero-subheading text-6xl md:text-8xl lg:text-9xl font-orbitron font-black tracking-tight leading-none mt-2">
              {protocolLetters.map((letter, index) => (
                <m.span
                  key={`${letter}-${index}`}
                  className="hero-subheading__letter"
                  variants={letterReveal}
                  aria-hidden="true"
                >
                  {letter}
                </m.span>
              ))}
              <span className="sr-only">PROTOCOL</span>
              <m.span
                className="hero-protocol-scan"
                variants={scanLineVariants}
                initial={initialState}
                animate={prefersReducedMotion ? 'hidden' : visibleState}
                aria-hidden="true"
              />
            </m.h2>
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
            variants={metricContainer}
            initial={initialState}
            animate={visibleState}
          >
            {metrics.map((metric) => (
              <m.div
                key={metric.value}
                className="hero-ring"
                role="group"
                tabIndex={0}
                aria-label={`${metric.value} ${metric.label}`}
                variants={metricReveal}
              >
                <div className="hero-ring__circle">
                  <span className="hero-ring__orbit" aria-hidden="true">
                    <span className="hero-ring__dot"></span>
                  </span>
                  <span className="hero-ring__value">{metric.value}</span>
                </div>
                <span className="hero-ring__label">{metric.label}</span>
              </m.div>
            ))}
          </m.div>
        </m.div>
      </div>

    </section>
  );
} 
