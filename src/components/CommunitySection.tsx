'use client';

import { m, useReducedMotion } from 'framer-motion';
import { useI18n } from '@/components/I18nProvider';
import ClientText from '@/components/ui/ClientText';
import { Typography } from './ui/Typography';
import CommunityBackgroundFX from './CommunityBackgroundFX';
import GridPattern from '@/components/ui/GridPattern';
import { useRef, useState } from 'react';

export default function CommunitySection() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-moosh-black text-white"
      onMouseMove={handleMouseMove}
    >
      <CommunityBackgroundFX />
      <CommunityGridBackdrop mouseX={mousePos.x} mouseY={mousePos.y} />
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[75vh] flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center gap-6 py-16">
          <m.div
            className="inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <Typography.H2 align="center" className="text-4xl md:text-6xl text-white font-black">
              {t('community.title', 'Community First.')}
            </Typography.H2>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg md:text-xl tracking-wider font-light">
              {(() => {
                const subtitle = t('community.subtitle', 'Humans lead. Agents build. Communities align.');
                let parts;
                if (subtitle.includes('。')) {
                  parts = subtitle.split('。').filter(p => p.trim());
                } else {
                  parts = subtitle.split('.').filter(p => p.trim());
                }
                const isChineseOrKorean = subtitle.includes('。');

                return parts.map((part, index) => (
                  <m.span
                    key={index}
                    className="text-moosh-text-secondary hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
                    initial={{
                      opacity: 0,
                      x: index === 0 ? -20 : index === 2 ? 20 : 0,
                      y: index === 1 ? 20 : 0,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {part.trim()}
                    {isChineseOrKorean ? '。' : '.'}
                  </m.span>
                ));
              })()}
            </div>
          </m.div>
        </div>

        <CommunityFooterContent />
      </div>
    </section>
  );
}

function CommunityFooterContent() {
  return (
    <div className="mt-auto border-t border-moosh-black-lighter pt-8 pb-8 flex flex-col items-center gap-4 text-moosh-text-secondary">
      <nav className="flex gap-6">
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

      <p className="text-xs font-orbitron font-medium tracking-wider uppercase text-moosh-text-muted">
        <span suppressHydrationWarning>
          <ClientText k="footer.copyright" />
        </span>
      </p>
    </div>
  );
}

function CommunityGridBackdrop({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-5">
      {/* 静态绿色网格 */}
      <div
        className="w-full h-full opacity-45"
        style={{
          backgroundImage: `
            linear-gradient(rgba(32, 241, 142, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(32, 241, 142, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* 跟随鼠标的光晕 */}
      <div
        className="absolute w-80 h-80 rounded-full pointer-events-none opacity-70"
        style={{
          background: 'radial-gradient(circle, rgba(32, 241, 142, 0.20) 0%, rgba(32, 241, 142, 0.08) 60%, transparent 80%)',
          left: mouseX,
          top: mouseY,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'discord':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case 'github':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-moosh-text-secondary hover:text-white transition-all duration-300 ease-out"
      aria-label={`Visit our ${icon} page`}
    >
      {getIcon(icon)}
    </a>
  );
}
