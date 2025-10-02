'use client';

import { m, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useI18n } from '@/components/I18nProvider';
import ClientText from '@/components/ui/ClientText';
import CommunityBackgroundFX from './CommunityBackgroundFX';

export default function CommunitySection() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const title = t('community.title', 'Community First.');
  const titleGlyphs = useMemo(
    () => Array.from(title).map((char, index) => ({ char, index })),
    [title]
  );

  const subtitleRaw = t('community.subtitle', 'Humans lead. Agents build. Communities align.');
  const subtitleParts = useMemo(() => {
    const delimiter = subtitleRaw.includes('。') ? '。' : '.';
    return subtitleRaw
      .split(delimiter)
      .map(part => part.trim())
      .filter(Boolean)
      .map((part, index) => ({
        text: part,
        index,
        delimiter,
      }));
  }, [subtitleRaw]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <section
      id="community"
      ref={sectionRef}
      className="relative overflow-hidden bg-moosh-black text-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <CommunityBackgroundFX />
      <CommunityGridBackdrop mouseX={mousePos.x} mouseY={mousePos.y} />
      <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-screen-2xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-col items-center justify-center gap-10 py-20">
          <m.div
            className="relative inline-flex flex-wrap justify-center gap-y-3 text-center"
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.94, y: 28 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <m.h2
              className="relative flex w-full flex-wrap justify-center gap-y-4 whitespace-pre-wrap text-center text-[2.75rem] font-black leading-[1.05] tracking-tight text-white/95 md:text-6xl lg:text-[4rem]"
            >
              {titleGlyphs.map(({ char, index }) => (
                <m.span
                  key={`${char}-${index}`}
                  className="relative px-0.5 text-transparent bg-[linear-gradient(120deg,#ffffff_0%,#31f18e_50%,#9effd8_100%)] bg-clip-text drop-shadow-[0_0_18px_rgba(49,241,142,0.35)]"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24, scale: 0.96 }}
                  whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: prefersReducedMotion ? 0 : 0.08 + index * 0.04,
                    ease: [0.22, 0.95, 0.32, 1],
                  }}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </m.span>
              ))}
              <span className="pointer-events-none absolute inset-x-0 -bottom-3 h-1 rounded-full bg-gradient-to-r from-transparent via-moosh-green/40 to-transparent blur-sm" />
            </m.h2>
          </m.div>

          <m.div
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-5 text-center text-sm font-medium tracking-[0.35em] text-moosh-text-secondary md:text-lg"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: prefersReducedMotion ? 0 : 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {subtitleParts.map(({ text: partText, index, delimiter }, partIdx) => (
              <m.span key={partIdx} className="relative inline-flex items-center gap-4">
                <m.span
                  className="cursor-default bg-[linear-gradient(90deg,#9effd8_0%,#31f18e_40%,#ffffff_100%)] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(49,241,142,0.2)]"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
                  whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: [0.21, 0.95, 0.25, 1], delay: prefersReducedMotion ? 0 : 0.55 + index * 0.18 }}
                  viewport={{ once: true, amount: 0.6 }}
                >
                  {`${partText}${delimiter}`}
                </m.span>
                {partIdx < subtitleParts.length - 1 && (
                  <m.span
                    className="relative h-2 w-2 rounded-full bg-moosh-green/40"
                    initial={prefersReducedMotion ? undefined : { scale: 0, opacity: 0 }}
                    whileInView={prefersReducedMotion ? { opacity: 0.55 } : { scale: [0, 1.3, 1], opacity: [0, 0.6, 0.3] }}
                    transition={{
                      duration: prefersReducedMotion ? 0.6 : 1.4,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      repeatType: 'mirror',
                      delay: prefersReducedMotion ? 0 : 0.6 + index * 0.22,
                      ease: 'easeInOut',
                    }}
                    viewport={{ once: true, amount: 0.6 }}
                  >
                    <span className="absolute inset-0 h-full w-full rounded-full bg-moosh-green/20 blur-sm" />
                  </m.span>
                )}
              </m.span>
            ))}
          </m.div>
        </div>

        <CommunityFooterContent />
      </div>
    </section>
  );
}

function CommunityFooterContent() {
  return (
    <div className="mt-auto flex flex-col items-center gap-6 border-t border-moosh-black-lighter/80 pt-12 pb-14 text-moosh-text-secondary">
      <nav className="flex gap-8">
        <SocialIcon
          href={process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/CYQd4WXE'}
          icon="discord"
        />
        <SocialIcon
          href={process.env.NEXT_PUBLIC_TWITTER_URL || 'https://x.com/mooshprotocol'}
          icon="twitter"
        />
        <SocialIcon
          href={process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/mooshprotocol'}
          icon="github"
        />
      </nav>

      <p className="text-xs font-orbitron font-medium tracking-[0.4em] uppercase text-moosh-text-muted">
        <span suppressHydrationWarning>
          <ClientText k="footer.copyright" />
        </span>
      </p>
    </div>
  );
}

function CommunityGridBackdrop({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const prefersReducedMotion = useReducedMotion();
  const [isClient, setIsClient] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    setIsClient(true);
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const gridSize = 80;
  const rows = Math.ceil(dimensions.height / gridSize) + 2;
  const cols = Math.ceil(dimensions.width / gridSize) + 2;

  const lines = [];

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;
  const maxRadius = Math.hypot(centerX, centerY);

  const pulseNodes = useMemo(() => {
    const nodes = [] as Array<{ x: number; y: number; delay: number; radius: number; duration: number }>;
    for (let x = gridSize; x < dimensions.width; x += gridSize * 2) {
      for (let y = gridSize; y < dimensions.height; y += gridSize * 2) {
        if (Math.random() > 0.35) continue;
        const distance = Math.hypot(x - centerX, y - centerY);
        const visibility = 1 - distance / maxRadius;
        if (visibility <= 0) continue;
        nodes.push({
          x,
          y,
          delay: Math.random() * 6,
          radius: 3 + Math.random() * 2,
          duration: 4.5 + Math.random() * 2.5,
        });
      }
    }
    return nodes;
  }, [centerX, centerY, dimensions.height, dimensions.width, gridSize, maxRadius]);

  if (!isClient) {
    return (
      <div className="absolute inset-0 pointer-events-none z-5">
        <div
          className="h-full w-full opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(32, 241, 142, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(32, 241, 142, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>
    );
  }

  // 生成受磁场影响的网格线
  for (let i = 0; i <= rows; i++) {
    const y = i * gridSize;
    const pathData = [];

    for (let x = 0; x <= dimensions.width; x += 10) {
      const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
      const maxDistance = 150;
      const influence = Math.max(0, 1 - distance / maxDistance);
      const bend = influence * 15 * Math.sin((x - mouseX) / 30);

      if (x === 0) {
        pathData.push(`M ${x} ${y + bend}`);
      } else {
        pathData.push(`L ${x} ${y + bend}`);
      }
    }

    const distanceFromCenter = Math.abs(y - centerY);
    const fadeFactor = Math.max(0, 1 - distanceFromCenter / (centerY || 1));
    const alpha = 0.08 + fadeFactor * 0.55;
    const strokeWidth = 0.6 + fadeFactor * 0.4;

    lines.push(
      <path
        key={`h-${i}`}
        d={pathData.join(' ')}
        stroke={`rgba(49, 241, 142, ${alpha})`}
        strokeWidth={strokeWidth}
        fill="none"
        opacity={0.85}
      />
    );
  }

  // 生成垂直线
  for (let i = 0; i <= cols; i++) {
    const x = i * gridSize;
    const pathData = [];

    for (let y = 0; y <= dimensions.height; y += 10) {
      const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
      const maxDistance = 150;
      const influence = Math.max(0, 1 - distance / maxDistance);
      const bend = influence * 15 * Math.sin((y - mouseY) / 30);

      if (y === 0) {
        pathData.push(`M ${x + bend} ${y}`);
      } else {
        pathData.push(`L ${x + bend} ${y}`);
      }
    }

    const distanceFromCenter = Math.abs(x - centerX);
    const fadeFactor = Math.max(0, 1 - distanceFromCenter / (centerX || 1));
    const alpha = 0.08 + fadeFactor * 0.55;
    const strokeWidth = 0.6 + fadeFactor * 0.4;

    lines.push(
      <path
        key={`v-${i}`}
        d={pathData.join(' ')}
        stroke={`rgba(49, 241, 142, ${alpha})`}
        strokeWidth={strokeWidth}
        fill="none"
        opacity={0.85}
      />
    );
  }

  return (
    <div className="absolute inset-0 z-5 pointer-events-none">
      <m.svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ maskImage: 'radial-gradient(circle at center, rgba(0,0,0,0.95) 35%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 100%)' }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: ['-1.5%', '1.5%', '-1.5%'],
                y: ['-1%', '1%', '-1%'],
              }
        }
        transition={{ duration: 32, ease: 'easeInOut', repeat: Infinity }}
      >
        {lines}
        {pulseNodes.map(({ x, y, delay, radius, duration }, idx) => (
          <m.circle
            key={`node-${idx}`}
            cx={x}
            cy={y}
            r={radius}
            fill="rgba(49,241,142,0.22)"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={
              prefersReducedMotion
                ? { opacity: 0.18, scale: 1 }
                : { opacity: [0, 0.35, 0], scale: [0.7, 1.15, 0.8] }
            }
            transition={{ duration, repeat: Infinity, repeatType: 'loop', delay }}
          />
        ))}
      </m.svg>

      {!prefersReducedMotion && (
        <m.div
          className="absolute inset-x-[-20%] top-1/2 h-32 -translate-y-1/2 bg-[radial-gradient(circle,rgba(49,241,142,0.22),transparent_70%)] blur-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.45, 0], x: ['-20%', '20%', '-20%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(12,16,20,0),rgba(12,16,20,0.55)_70%,rgba(12,16,20,0.85)_100%)]" />

      <div
        className="pointer-events-none absolute h-56 w-56 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(49, 241, 142, 0.35) 0%, rgba(49, 241, 142, 0.12) 55%, transparent 75%)',
          left: mouseX,
          top: mouseY,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  const prefersReducedMotion = useReducedMotion();
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'discord':
        return (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case 'github':
        return (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <m.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-moosh-green/20 bg-white/5 text-moosh-text-secondary transition-all duration-500 ease-out hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-moosh-green/60"
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              scale: 1.08,
              boxShadow: '0 0 32px rgba(49,241,142,0.28)',
            }
      }
      whileFocus={
        prefersReducedMotion
          ? undefined
          : {
              scale: 1.05,
              boxShadow: '0 0 24px rgba(49,241,142,0.24)',
            }
      }
      aria-label={`Visit our ${icon} page`}
    >
      <span className="absolute inset-0 rounded-full bg-moosh-green/10 opacity-0 transition duration-500 group-hover:opacity-50" aria-hidden />
      <span className="absolute inset-0 rounded-full border border-moosh-green/20 opacity-0 transition duration-500 group-hover:opacity-70 group-hover:scale-110" aria-hidden />
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(49,241,142,0.18),transparent_60%)] opacity-0 transition duration-700 ease-out transform group-hover:scale-125 group-hover:opacity-70 group-focus-visible:scale-110 group-focus-visible:opacity-60" aria-hidden />
      <span className="relative z-10">{getIcon(icon)}</span>
    </m.a>
  );
}
