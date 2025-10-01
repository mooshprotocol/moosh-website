'use client';

import { m } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { useI18n } from '@/components/I18nProvider';
import CoreModulesFocus from './CoreModulesFocus';

export default function ProtocolSection() {
  const { t } = useI18n();

  // Module data for CoreModulesFocus
  const focusModules = [
    {
      id: 'controller' as const,
      title: t('protocol.modules.liquidation.title', 'Controller Engine'),
      points: t('protocol.modules.liquidation.sub', ['Route Management', 'Execution Engine', 'Orchestration Integration']),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'vault' as const,
      title: t('protocol.modules.risk.title', 'Vault Kernel'),
      points: t('protocol.modules.risk.sub', ['Asset Models', 'Liquidity Analysis', 'Adaptive Logic']),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8" strokeWidth={1.5} />
          <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
        </svg>
      )
    },
    {
      id: 'risk' as const,
      title: t('protocol.modules.liquidity.title', 'Risk Mesh'),
      points: t('protocol.modules.liquidity.sub', ['Multi-Factor', 'Cross-Validation', 'Seamless Execution']),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 4v16M12 4v16M18 4v16" opacity={0.7} />
        </svg>
      )
    },
    {
      id: 'liquidation' as const,
      title: t('protocol.modules.megaeth.title', 'Liquidation Core'),
      points: t('protocol.modules.megaeth.sub', ['Risk Models', 'Liquidation Optimization', 'Native Integration']),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Section Header */}
      <div className="bg-[#090A0A] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              eyebrow={t('protocol.header.eyebrow', 'Core Modules')}
              title={t('protocol.header.title', 'The building blocks of modular liquidity.')}
              subtitle={t('protocol.header.subtitle', 'Discover the four engines that drive Moosh.')}
            />
          </m.div>
        </div>
      </div>

      {/* Core Modules Focus Section */}
      <CoreModulesFocus modules={focusModules} defaultActive="controller" />
    </>
  );
} 