'use client';

import type { ReactNode } from 'react';
import { m } from 'framer-motion';
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

export default function CareersSection() {
  const { t } = useI18n();

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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,241,142,0.12),transparent_72%)] opacity-80"
        aria-hidden
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <m.div
          className="max-w-xl space-y-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-black leading-tight text-white md:text-[3rem]">
            {t('careers.headline.top', 'We seek co-builders,')}
            <br className="hidden md:block" />
            {t('careers.headline.bottom', 'not employees.')}
          </h2>
          <p className="text-lg leading-relaxed text-white/75 md:text-xl">
            {t(
              'careers.description',
              'Bring curiosity, discipline, and strange ideas. Together we instrument credit systems that learn as fast as the markets they serve.'
            )}
          </p>
          <JoinButton label={t('careers.cta', 'Build. Compose. Ship resilience.')} />
        </m.div>

        <m.ul
          className="flex-1 space-y-6 lg:space-y-8"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          {roles.map((role, index) => (
            <RoleListItem key={role.title} role={role} index={index} />
          ))}
        </m.ul>
      </div>
    </section>
  );
}

function RoleListItem({
  role,
  index,
}: {
  role: { title: string; description: string; icon: ReactNode };
  index: number;
}) {
  return (
    <li className="relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(8,10,12,0.78)] p-6 shadow-[0_12px_36px_rgba(0,0,0,0.45)] backdrop-blur">
      <div className="flex gap-5">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/6 text-moosh-green">
          {role.icon}
        </span>
        <div className="flex-1 space-y-2 text-left">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-white">{role.title}</h3>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/40">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/70">{role.description}</p>
        </div>
      </div>
    </li>
  );
}

function JoinButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="group inline-flex items-center gap-3 rounded-full border border-moosh-green/50 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-moosh-green transition-colors duration-300 hover:border-moosh-green hover:text-moosh-green/90"
    >
      {label}
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
        <path d="M5 12h14m-6-6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
