'use client';

import { m } from 'framer-motion';
import { useI18n } from '@/components/I18nProvider';

export default function ManifestoSection() {
  const { t } = useI18n();
  const manifestoLines = [
    t('manifesto.line1', 'The future is modular.'),
    t('manifesto.line2', 'Capital must move.'),
    t('manifesto.line3', 'Risk must adapt.'),
    t('manifesto.line4', 'Lending must evolve.'),
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
          
          {/* Enhanced Decorative Line */}
          <m.div 
            className="flex items-center justify-center gap-8 mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-moosh-text-muted"></div>
            <div className="relative">
              <div className="w-4 h-4 bg-moosh-green rounded-full animate-pulse-slow shadow-glow-green"></div>
              <div className="absolute inset-0 w-4 h-4 bg-moosh-green rounded-full animate-ping opacity-30"></div>
            </div>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-moosh-text-muted"></div>
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
          
          {/* Full-width divider line - outside the max-width container */}
          <m.div 
            className="w-full h-px bg-gradient-to-r from-transparent via-moosh-green to-transparent mt-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          ></m.div>
        </div>
      </div>
    </section>
  );
} 