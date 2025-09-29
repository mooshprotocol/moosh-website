'use client';

import { m } from 'framer-motion';
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
    <section className="relative min-h-screen overflow-hidden bg-[#0B0B0B] text-white">
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center gap-20 px-6 py-32 md:px-12 lg:px-20">
        
        {/* 顶层：大标题 - 宣言碑文 */}
        <m.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <m.h1
            className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] tracking-tight text-white"
            style={{ 
              letterSpacing: '-0.02em',
              textShadow: '0 0 40px rgba(43, 245, 164, 0.15)'
            }}
          >
            {t('manifesto.headline', 'We believe finance must evolve.')}
          </m.h1>
        </m.div>

        {/* 中层：三条宣言句 - 诗歌分行，节奏感展示 */}
        <m.div
          className="space-y-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 }
            }
          }}
        >
          {manifestoLines.map((line, index) => (
            <m.p
              key={line}
              className="text-[clamp(1rem,2vw,1.4rem)] font-light leading-relaxed text-white/90"
              style={{ 
                letterSpacing: '0.02em',
                lineHeight: '1.6'
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {line}
            </m.p>
          ))}
        </m.div>

        {/* 下层：三原则 - 支柱式陈列 */}
        <m.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <div className="grid gap-8 md:grid-cols-3">
            {principleCards.map((principle, index) => (
              <PillarCard key={principle.title} principle={principle} index={index} />
            ))}
          </div>
        </m.div>

        {/* 收尾：签名/盖章 */}
        <m.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ 
            duration: 1.5, 
            ease: 'easeOut', 
            delay: 0.3
          }}
          animate={{ 
            scale: [1, 1.02, 1],
            transition: { 
              duration: 3, 
              repeat: Infinity, 
              repeatType: 'reverse',
              ease: 'easeInOut'
            }
          }}
        >
          <m.p
            className="text-[clamp(1.4rem,3vw,2rem)] font-light tracking-[0.2em] text-white/85"
            style={{ 
              letterSpacing: '0.15em'
            }}
          >
            {t('manifesto.signature', 'This is Moosh.')}
          </m.p>
        </m.div>
      </div>
    </section>
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

function PillarCard({ principle, index }: PillarCardProps) {
  return (
    <m.div
      className="group relative flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ 
        duration: 0.8, 
        ease: 'easeOut', 
        delay: index * 0.2 
      }}
    >
      {/* 立宪支柱 - 极简线性设计 */}
      <div className="relative flex h-[320px] w-full max-w-[240px] flex-col items-center justify-start rounded-lg border border-white/8 bg-gradient-to-b from-white/3 via-transparent to-white/3 p-6 backdrop-blur-sm">
        
        {/* 极简线性图标 */}
        <div className="mb-8 flex h-12 w-12 items-center justify-center text-moosh-green/80">
          {principle.icon}
        </div>
        
        {/* 支柱标题 */}
        <h3 className="mb-6 text-lg font-medium tracking-wide text-white">
          {principle.title}
        </h3>
        
        {/* 简短副标题 - 1句落地解释 */}
        <p className="text-sm leading-relaxed text-white/60 text-center">
          {principle.subtitle}
        </p>
        
        {/* 支柱底部装饰 */}
        <div className="absolute bottom-4 left-1/2 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-moosh-green/30 to-transparent" />
      </div>
      
      {/* 支柱编号 - 更简洁 */}
      <div className="mt-6 flex h-6 w-6 items-center justify-center rounded-full border border-moosh-green/15 bg-moosh-green/5 text-xs font-mono text-moosh-green/50">
        {String(index + 1)}
      </div>
    </m.div>
  );
} 