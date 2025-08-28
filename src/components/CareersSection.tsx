'use client';

import { m } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { useI18n } from '@/components/I18nProvider';
import ApplyNowButton from './ui/ApplyNowButton';
import JobCardsGrid from './ui/JobCardsGrid';

export default function CareersSection() {
  const { t } = useI18n();

  return (
    <section className="bg-moosh-black-light py-16 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>
      
      {/* Green accent dots */}
      <div className="green-dot-pattern" aria-hidden="true">
        <div className="dot" style={{ top: '10%', left: '10%', width: '2px', height: '0.4px', animationDelay: '0s' }}></div>
        <div className="dot" style={{ bottom: '15%', right: '12%', width: '3px', height: '0.6px', animationDelay: '1s' }}></div>
        <div className="dot" style={{ top: '70%', left: '8%', width: '2px', height: '0.4px', animationDelay: '2s' }}></div>
        <div className="dot" style={{ top: '50%', right: '8%', width: '3px', height: '0.6px', animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <m.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            eyebrow={t('careers.eyebrow', 'Join the Modular Liquidity Movement')}
            title={t('careers.title', "We're reimagining lending with those who build with intent — systems thinkers, designers, and community catalysts.")}
            subtitle={t('careers.subtitle', 'Join the Modular Liquidity Movement')}
          />
        </m.div>
        
        {/* Job Cards Grid */}
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <JobCardsGrid />
        </m.div>
        
        {/* CTA Button */}
        <m.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ApplyNowButton 
            className="text-base px-6 py-3 font-medium"
          >
            {t('careers.applyNow', 'Apply Now')}
          </ApplyNowButton>
        </m.div>
        

      </div>
    </section>
  );
} 