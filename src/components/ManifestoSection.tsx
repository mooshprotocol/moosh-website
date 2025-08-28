'use client';

import { m } from 'framer-motion';
import { useI18n } from '@/components/I18nProvider';

export default function ManifestoSection() {
  const { t } = useI18n();
  const manifestoLines = [
    t('manifesto.line1', 'The future builds in modules.'),
    t('manifesto.line2', 'Capital flows without walls.'),
    t('manifesto.line3', 'Risk bends to survive.'),
    t('manifesto.line4', 'Lending reshapes itself.'),
  ];

  return (
    <section className="bg-moosh-black-medium section-padding relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" aria-hidden="true"></div>
      
      {/* Enhanced Green accent dots */}
      <div className="green-dot-pattern" aria-hidden="true">
        <div className="dot" style={{ top: '10%', left: '10%', width: '3px', height: '0.6px', animationDelay: '0s' }}></div>
        <div className="dot" style={{ bottom: '10%', right: '10%', width: '4px', height: '0.8px', animationDelay: '1s' }}></div>
        <div className="dot" style={{ top: '50%', left: '20%', width: '2px', height: '0.4px', animationDelay: '2s' }}></div>
        <div className="dot" style={{ top: '30%', right: '20%', width: '3px', height: '0.6px', animationDelay: '0.5s' }}></div>
        <div className="dot" style={{ bottom: '30%', left: '15%', width: '2px', height: '0.4px', animationDelay: '1.5s' }}></div>
        <div className="dot" style={{ top: '70%', right: '15%', width: '3px', height: '0.6px', animationDelay: '0.8s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Enhanced Manifesto Lines */}
          <div className="space-y-8 mb-16">
            {manifestoLines.map((line, index) => (
              <m.p 
                key={index}
                className="text-2xl md:text-4xl font-light text-moosh-text-primary tracking-tight leading-relaxed"
                style={{lineHeight: '1.8'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {line}
              </m.p>
            ))}
          </div>
          
          {/* Refined Divider - neutral line with subtle moving green highlight */}
          <m.div 
            className="relative my-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-moosh-text-muted/30 to-transparent"></div>
            {/* moving highlight */}
            <div className="absolute inset-0 overflow-hidden">
              <m.div
                className="absolute top-0 h-px bg-gradient-to-r from-transparent via-moosh-green/60 to-transparent"
                style={{ width: '20%' }}
                initial={{ left: '-20%' }}
                animate={{ left: ['-20%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            {/* tiny center marker for visual anchor */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-1 h-1 rounded-full bg-moosh-green/60"></div>
          </m.div>
          
          {/* Enhanced Conclusion */}
          <m.p 
            className="text-lg italic text-moosh-text-secondary tracking-wide font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            {t('manifesto.conclusion', 'Moosh makes it possible.')}
          </m.p>
          
          {/* Removed the previous strong green full-width divider for a more subtle aesthetic */}
        </div>
      </div>
    </section>
  );
} 