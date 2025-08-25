'use client';

import { m } from 'framer-motion';
import { useI18n } from '@/components/I18nProvider';
import { Typography } from './ui/Typography';
import CommunityBackgroundFX from './CommunityBackgroundFX';

export default function CommunitySection() {
  const { t } = useI18n();
  return (
    <section className="bg-moosh-black py-24 md:py-32 relative overflow-hidden">
      {/* Subtle dynamic background: floating green dust */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-moosh-green/20 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-moosh-green/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-moosh-green/25 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-moosh-green/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-moosh-green/20 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-moosh-green/15 rounded-full animate-pulse" style={{animationDelay: '5s'}}></div>
      </div>
      
      <CommunityBackgroundFX density={0.9} speed={0.8} brightness={0.18} />
      

      
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Tagline with enhanced styling */}
          <m.div
            className="inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Typography.H2 align="center" className="text-4xl md:text-5xl text-white font-black">
              {t('community.title', 'Community First.')}
            </Typography.H2>
          </m.div>
          
          {/* Enhanced subtitle with individual phrase styling */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg md:text-xl tracking-wider font-light">
              <m.span 
                className="text-moosh-text-secondary hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Humans lead.
              </m.span>
              <m.span 
                className="text-moosh-text-secondary hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                Agents build.
              </m.span>
              <m.span 
                className="text-moosh-text-secondary hover:text-white hover:scale-105 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                Community aligns.
              </m.span>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}