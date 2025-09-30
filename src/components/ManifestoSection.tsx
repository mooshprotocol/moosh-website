'use client';

import { m, useReducedMotion } from 'framer-motion';
import { useI18n } from '@/components/I18nProvider';

const PRINCIPLES = [
  {
    key: 'manifesto.principles.safety',
    titleFallback: 'Safety',
    subtitleFallback: 'Systems must stay stable and predictable.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
        <path
          d="M12 3l8 4v5c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V7l8-4z"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'manifesto.principles.flexibility',
    titleFallback: 'Flexibility',
    subtitleFallback: 'Composable modules shift with every environment.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
        <path d="M5 7l7-4 7 4v4l-7 4-7-4V7z" fill="none" stroke="currentColor" strokeWidth={1.4} />
        <path d="M5 11l7 4 7-4" fill="none" stroke="currentColor" strokeWidth={1.4} />
        <path d="M5 15l7 4 7-4" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'manifesto.principles.intelligence',
    titleFallback: 'Intelligence',
    subtitleFallback: 'Data and agents steer the market together.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
        <path
          d="M12 3a6 6 0 00-6 6v3.5a4.5 4.5 0 003 4.243V21l3-1 3 1v-4.257a4.5 4.5 0 003-4.243V9a6 6 0 00-6-6z"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 9h6" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
        <path d="M10 13h4" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ManifestoSection() {
  const { t } = useI18n();

  const manifestoLines = [
    t('manifesto.story.capital', 'Capital finds its own path.'),
    t('manifesto.story.risk', 'Risk bends, not breaks.'),
    t('manifesto.story.lending', 'Lending evolves with the market.'),
  ];

  const principleCards = PRINCIPLES.map(({ key, titleFallback, subtitleFallback, icon }) => ({
    title: t(`${key}.title`, titleFallback),
    subtitle: t(`${key}.subtitle`, subtitleFallback),
    icon,
  }));

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <StageBackdrop />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center gap-24 px-6 py-36 md:px-12 lg:px-20 xl:py-44">
        <m.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <m.h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            style={{ letterSpacing: '0.01em' }}
          >
            {t('manifesto.headline', 'We believe finance must evolve.')}
          </m.h1>
        </m.div>

        <m.div
          className="max-w-4xl space-y-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.28 } },
          }}
        >
          {manifestoLines.map((line) => (
            <m.p
              key={line}
              className="text-2xl md:text-[2.1rem] font-normal leading-relaxed text-white/85"
              style={{ letterSpacing: '0.005em' }}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {line}
            </m.p>
          ))}
        </m.div>

        <PrinciplesStage cards={principleCards} />

        <m.div
          className="max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <p className="text-[0.8rem] uppercase tracking-[0.45em] text-moosh-green/70">
            {t('manifesto.principles.label', 'Moosh principles')}
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/65">
            {t(
              'manifesto.principles.description',
              'Safety, Flexibility, and Intelligence interlock so liquidity adapts without surrendering resilience.'
            )}
          </p>
          <div className="mt-7 flex items-center justify-center gap-5 text-moosh-green/65" aria-hidden>
            <span className="h-px w-10 bg-current/40" />
            <span className="text-xs uppercase tracking-[0.42em]">
              {t('manifesto.principles.caption', 'Triad in constant calibration')}
            </span>
            <span className="h-px w-10 bg-current/40" />
          </div>
        </m.div>

        <m.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          <m.div
            className="mx-auto mb-6 h-px w-20 bg-gradient-to-r from-transparent via-moosh-green/50 to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7 }}
          />
          <p className="text-lg uppercase tracking-[0.35em] text-white/70">
            {t('manifesto.signature', 'This is Moosh.')}
          </p>
        </m.div>
      </div>
    </section>
  );
}

function PrinciplesStage({ cards }: { cards: PrincipleCardData[] }) {
  return (
    <div className="relative w-full max-w-5xl pb-28">
      <StageBase />
      <StageNetwork />
      <div className="relative z-10 grid grid-cols-1 place-items-center gap-12 md:grid-cols-3 md:gap-14">
        {cards.map((card, index) => (
          <PrincipleCard key={card.title} principle={card} index={index} />
        ))}
      </div>
    </div>
  );
}

interface PrincipleCardData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

interface PillarCardProps {
  principle: PrincipleCardData;
  index: number;
}

function PrincipleCard({ principle, index }: PillarCardProps) {
  const reduceMotion = useReducedMotion();
  const emphasize = index === 1;
  const heightClass = emphasize ? 'h-[360px]' : 'h-[320px]';
  const beamWidth = emphasize ? 'w-[85%]' : 'w-[70%]';
  const beamOpacity = emphasize ? 0.2 : 0.15;
  const beamBlur = emphasize ? 'blur-[38px]' : 'blur-[32px]';
  const emphasisTransform = reduceMotion
    ? ''
    : emphasize
      ? 'md:-translate-y-4 md:scale-[1.03]'
      : 'md:translate-y-2 md:scale-[0.97]';

  return (
    <m.div
      className={`group relative flex flex-col items-center text-center transition-transform duration-500 ${emphasisTransform}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.9, ease: 'easeOut', delay: index * 0.18 }}
    >
      <m.div
        className="absolute inset-x-[10%] bottom-[-30px] h-8 rounded-full bg-[radial-gradient(circle_at_center,rgba(32,241,142,0.2),rgba(32,241,142,0)_70%)] blur-[14px]"
        initial={{ opacity: 0.32 }}
        animate={
          reduceMotion
            ? { opacity: 0.36 }
            : { opacity: [0.26, 0.44, 0.26] }
        }
        transition={{ duration: 12, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
        aria-hidden
      />

      <m.div
        className={`absolute top-[-10%] left-1/2 h-[120%] -translate-x-1/2 ${beamWidth} rounded-full ${beamBlur}`}
        style={{
          opacity: beamOpacity,
          backgroundImage: 'radial-gradient(circle at 50% 60%, rgba(32,241,142,0.18), rgba(0,0,0,0) 75%)',
        }}
        initial={{ opacity: beamOpacity, scaleY: 0.92 }}
        animate={
          reduceMotion
            ? { opacity: beamOpacity, scaleY: 0.92 }
            : {
                opacity: [beamOpacity * 0.75, beamOpacity * 1.05, beamOpacity * 0.75],
                scaleY: [0.9, 1.01, 0.9],
              }
        }
        transition={{ duration: 18, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut', delay: emphasize ? 0.2 : 0 }}
        aria-hidden
      />

      <m.div
        className={`relative z-10 flex ${heightClass} w-full max-w-[260px] flex-col items-center justify-start overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(12,16,14,0.82)] px-8 pt-10 pb-12 shadow-[0_18px_36px_rgba(0,0,0,0.5)] backdrop-blur-lg transition-all duration-500`}
        animate={
          reduceMotion
            ? { opacity: 1 }
            : {
                boxShadow: [
                  '0 18px 36px rgba(0,0,0,0.5)',
                  '0 22px 44px rgba(32,241,142,0.16)',
                  '0 18px 36px rgba(0,0,0,0.5)',
                ],
              }
        }
        transition={{ duration: 14, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
      >
        <CardTexture />

        <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/4 via-transparent to-[#0c1511] opacity-[0.15]" />

        <div className="relative mb-8 flex h-14 w-14 items-center justify-center text-moosh-green">
          <m.div
            className="absolute inset-0 rounded-full bg-moosh-green/16 blur-xl"
            initial={{ opacity: 0.26 }}
            animate={
              reduceMotion
                ? { opacity: 0.26 }
                : { opacity: [0.2, 0.34, 0.2] }
            }
            transition={{ duration: 15, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
            aria-hidden
          />
          <div className="relative z-10 text-transparent bg-gradient-to-br from-[#3CF2A2] to-[#158457] bg-clip-text drop-shadow-[0_0_8px_rgba(32,241,142,0.35)]">
            {principle.icon}
          </div>
        </div>

        <h3 className="mb-4 text-xl font-semibold tracking-wide text-white">
          {principle.title}
        </h3>

        <p className="text-sm leading-relaxed text-white/70">
          {principle.subtitle}
        </p>

        <div className="mt-auto flex w-full flex-col items-center gap-3" aria-hidden>
          <m.div
            className="h-px w-20 bg-gradient-to-r from-transparent via-moosh-green/45 to-transparent"
            initial={{ opacity: 0.55 }}
            animate={
              reduceMotion
                ? { opacity: 0.55 }
                : { opacity: [0.4, 0.7, 0.4] }
            }
            transition={{ duration: 12, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
          />
          <m.div
            className="h-3 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(32,241,142,0.32)_0%,rgba(32,241,142,0)_100%)]"
            initial={{ opacity: 0.32, scale: 0.92 }}
            animate={
              reduceMotion
                ? { opacity: 0.32, scale: 0.92 }
                : { opacity: [0.22, 0.42, 0.22], scale: [0.9, 1.02, 0.9] }
            }
            transition={{ duration: 14, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
          />
        </div>
      </m.div>

      <div className="mt-7 flex h-8 w-8 items-center justify-center rounded-full border border-moosh-green/25 bg-moosh-green/10 text-xs font-mono font-medium text-moosh-green/70">
        {String(index + 1)}
      </div>
    </m.div>
  );
}

function StageBase() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[-24px]" aria-hidden>
      <div className="mx-auto h-px w-full max-w-[620px] bg-gradient-to-r from-transparent via-moosh-green/35 to-transparent" />
      <m.div
        className="mx-auto mt-3 h-10 w-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(32,241,142,0.2),rgba(32,241,142,0)_75%)] blur-[24px]"
        initial={{ opacity: 0.38, scale: 0.96 }}
        animate={
          reduceMotion
            ? { opacity: 0.38, scale: 0.96 }
            : { opacity: [0.3, 0.48, 0.3], scale: [0.94, 1.02, 0.94] }
        }
        transition={{ duration: 14, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

function StageNetwork() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
      <div className="absolute inset-x-[8%] top-[52%] h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-moosh-green/30 to-transparent" />
      <div className="absolute left-1/2 top-[48%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-moosh-green/10" />
      <div className="absolute left-[20%] top-[42%] h-[220px] w-[220px] -translate-y-1/2 rounded-full border border-moosh-green/5" />
      <div className="absolute right-[20%] top-[42%] h-[220px] w-[220px] -translate-y-1/2 rounded-full border border-moosh-green/5" />
      <div className="absolute left-[20%] top-[52%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-moosh-green/70 blur-[1.5px]" />
      <div className="absolute right-[20%] top-[52%] h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-moosh-green/70 blur-[1.5px]" />
    </div>
  );
}

function CardTexture() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(transparent 94%, rgba(255,255,255,0.03) 100%), linear-gradient(90deg, transparent 94%, rgba(255,255,255,0.03) 100%)',
          backgroundSize: '120px 120px',
        }}
      />
    </div>
  );
}

function StageBackdrop() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <m.div
        className="absolute inset-x-[-10%] top-[10%] h-[62%] rounded-[60px] bg-[radial-gradient(ellipse_at_center,rgba(32,241,142,0.1)_0%,rgba(0,0,0,0)_80%)]"
        initial={{ opacity: 0.35 }}
        animate={
          reduceMotion
            ? { opacity: 0.35 }
            : { opacity: [0.3, 0.45, 0.3] }
        }
        transition={{ duration: 18, repeat: reduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(32,241,142,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(32,241,142,0.08) 1px, transparent 1px)',
          backgroundSize: '140px 140px',
          maskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.9), rgba(0,0,0,0) 78%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.9), rgba(0,0,0,0) 78%)',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(32,241,142,0.06),rgba(0,0,0,0))]" />
    </div>
  );
}
