'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { animate, m, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useI18n } from '@/components/I18nProvider';

const ROLES = [
  {
    key: 'careers.roles.engineer',
    titleFallback: 'The Engineer',
    descriptionFallback: 'Build resilient systems from complexity.',
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    key: 'careers.roles.designer',
    titleFallback: 'The Designer',
    descriptionFallback: 'Translate finance into intuition and beauty.',
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    ),
  },
  {
    key: 'careers.roles.growth',
    titleFallback: 'The Growth Agent',
    descriptionFallback: 'Ignite adoption and networks.',
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const HEADLINE_VARIANTS = {
  rest: {
    textShadow: '0 0 0 rgba(0,0,0,0)',
    y: 0,
  },
  pulse: {
    textShadow: '0 0 28px rgba(49,241,142,0.45)',
    y: [0, -2, 2, 0],
    transition: {
      duration: 2.2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
} as const;

export default function CareersSection() {
  const { t } = useI18n();

  const [activeRole, setActiveRole] = useState<number | null>(null);

  const roles = ROLES.map(({ key, titleFallback, descriptionFallback, icon }) => ({
    title: t(`${key}.title`, titleFallback),
    description: t(`${key}.description`, descriptionFallback),
    icon,
  }));

  return (
    <section
      id="careers"
      className="relative overflow-hidden bg-[#14161A] py-32 text-white md:py-40 lg:py-48 lg:min-h-screen lg:flex lg:items-center"
    >
      <div
        className="pointer-events-none absolute inset-0" aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,241,142,0.18),transparent_75%)] opacity-80" />
        <m.div
          className="absolute inset-x-0 top-1/3 h-40 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#31f18e1a] to-transparent blur-3xl"
          initial={{ opacity: 0, scaleX: 0.6 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        <m.div
          className="absolute bottom-16 left-1/2 h-48 w-[140%] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(49,241,142,0.25),transparent_70%)] blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1.05 }}
          transition={{ duration: 3.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <ParticlesLayer />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <m.div
          className="max-w-xl space-y-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.65 }}
          animate={
            activeRole !== null
              ? { scale: 1.02, opacity: 1, filter: 'brightness(1.08)' }
              : { scale: 1, opacity: 1, filter: 'brightness(1)' }
          }
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        >
          <m.h2
            className="text-4xl font-black leading-tight text-white md:text-[3rem]"
            variants={HEADLINE_VARIANTS}
            animate={activeRole !== null ? 'pulse' : 'rest'}
          >
            {t('careers.headline.top', 'We seek co-builders,')}
            <br className="hidden md:block" />
            {t('careers.headline.bottom', 'not employees.')}
          </m.h2>
          <m.p
            className="text-lg leading-relaxed text-white/75 md:text-xl"
            animate={activeRole !== null ? { opacity: 0.92 } : { opacity: 0.75 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {t(
              'careers.description',
              'Bring curiosity, discipline, and strange ideas. Together we instrument credit systems that learn as fast as the markets they serve.'
            )}
          </m.p>
          <JoinButton
            label={t('careers.cta', 'Build. Compose. Ship resilience.')}
            isActive={activeRole !== null}
          />
        </m.div>

        <m.ul className="flex-1 space-y-6 lg:space-y-8">
          {roles.map((role, index) => (
            <RoleListItem
              key={role.title}
              role={role}
              index={index}
              isActive={activeRole === index}
              onEnter={() => setActiveRole(index)}
              onLeave={() => setActiveRole((prev) => (prev === index ? null : prev))}
            />
          ))}
        </m.ul>
      </div>
    </section>
  );
}

function RoleListItem({
  role,
  index,
  isActive,
  onEnter,
  onLeave,
}: {
  role: { title: string; description: string; icon: ReactNode };
  index: number;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const itemRef = useRef<HTMLLIElement>(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.45 });
  const count = useMotionValue(0);
  const displayCount = useTransform(count, (latest) => String(Math.round(latest)).padStart(2, '0'));
  const hasNumberAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasNumberAnimated.current) {
      return;
    }
    hasNumberAnimated.current = true;
    const controls = animate(count, index + 1, {
      duration: 0.9,
      delay: 0.25 + index * 0.08,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [count, index, isInView]);

  return (
    <m.li
      ref={itemRef}
      className={`group relative overflow-hidden rounded-2xl border ${
        isActive
          ? 'border-moosh-green/60 shadow-[0_0_38px_rgba(49,241,142,0.22)]'
          : 'border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.45)]'
      } bg-[rgba(8,10,12,0.78)] p-6 backdrop-blur transition-[border,box-shadow,transform] duration-500`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ delay: 0.18 + index * 0.08, duration: 0.6, ease: [0.21, 0.95, 0.25, 1] }}
      whileHover={{ y: -4 }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <div className="pointer-events-none absolute inset-px rounded-[1.15rem] bg-gradient-to-b from-moosh-green/6 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex gap-5">
        <m.span
          className={`relative flex h-12 w-12 items-center justify-center rounded-full transition duration-500 ${
            isActive
              ? 'bg-moosh-green/20 text-white'
              : 'bg-white/6 text-moosh-green group-hover:bg-moosh-green/12 group-hover:text-white'
          }`}
          animate={isActive ? { filter: 'brightness(1.25)' } : { filter: 'brightness(1)' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <span className="absolute inset-0 rounded-full opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-60" style={{ boxShadow: '0 0 20px rgba(49,241,142,0.22)' }} />
          <span className="relative text-current">{role.icon}</span>
        </m.span>
        <div className="flex-1 space-y-2 text-left">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-white">{role.title}</h3>
            <m.span className="text-xs font-mono uppercase tracking-[0.3em] text-white/50">
              {displayCount}
            </m.span>
          </div>
          <p className="text-sm leading-relaxed text-white/70">{role.description}</p>
        </div>
      </div>
    </m.li>
  );
}

function JoinButton({ label, isActive }: { label: string; isActive: boolean }) {
  return (
    <button
      type="button"
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full border px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition duration-500 ${
        isActive ? 'border-moosh-green/80 text-moosh-green' : 'border-moosh-green/55 text-moosh-green'
      }`}
    >
      <span className="absolute inset-0 rounded-full border border-white/5" aria-hidden />
      <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(49,241,142,0.35),transparent)] opacity-0 transition duration-[650ms] group-hover:translate-x-full group-hover:opacity-100" aria-hidden />
      <span className={`absolute inset-0 rounded-full opacity-0 transition duration-500 ${isActive ? 'opacity-60' : ''}`} aria-hidden style={{ boxShadow: '0 0 30px rgba(49,241,142,0.22) inset' }} />
      <span className="relative z-10 bg-gradient-to-r from-moosh-green/90 via-moosh-green to-moosh-green/80 bg-clip-text text-transparent transition duration-500 group-hover:from-moosh-green/60 group-hover:via-white group-hover:to-moosh-green/60">
        {label}
      </span>
      <svg viewBox="0 0 24 24" className="relative z-10 h-3.5 w-3.5 transition duration-500 group-hover:translate-x-1">
        <path d="M5 12h14m-6-6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function ParticlesLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {PARTICLES.map(({ id, size, top, left, duration, delay, opacity }) => (
        <m.span
          key={id}
          className="absolute rounded-full bg-moosh-green/40 blur-sm"
          style={{ width: size, height: size, top, left, opacity }}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: [0.7, 1.1, 0.85], opacity: [0, opacity ?? 0.14, 0] }}
          transition={{ duration, delay, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

const PARTICLES = [
  { id: 1, size: 120, top: '12%', left: '18%', duration: 14, delay: 0.4, opacity: 0.14 },
  { id: 2, size: 90, top: '68%', left: '72%', duration: 11, delay: 1.2, opacity: 0.1 },
  { id: 3, size: 150, top: '42%', left: '55%', duration: 16, delay: 0.8, opacity: 0.17 },
  { id: 4, size: 80, top: '28%', left: '82%', duration: 12, delay: 1.8, opacity: 0.12 },
  { id: 5, size: 110, top: '78%', left: '32%', duration: 15, delay: 0.6, opacity: 0.13 },
  { id: 6, size: 140, top: '6%', left: '62%', duration: 18, delay: 1.1, opacity: 0.08 },
];
