'use client';

import { m } from 'framer-motion';
import { useI18n } from '@/components/I18nProvider';

export default function CareersSection() {
  const { t } = useI18n();

  return (
    <section className="bg-[#14161A] text-white py-24 md:py-32 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <m.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            We seek co-builders,
            <br />
            not employees.
          </h2>
        </m.div>

        {/* Role Cards */}
        <m.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <RoleCard
            icon={
              <svg className="w-8 h-8 text-moosh-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            title="The Engineer"
            description="Build resilient systems from complexity."
          />
          <RoleCard
            icon={
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            }
            title="The Designer"
            description="Translate finance into intuition and beauty."
          />
          <RoleCard
            icon={
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
            title="The Growth Agent"
            description="Ignite adoption and networks."
          />
        </m.div>

        {/* CTA Button */}
        <m.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="group relative px-8 py-3 border border-white/20 rounded-lg bg-transparent hover:border-moosh-green hover:text-moosh-green transition-all duration-300 hover:shadow-[0_0_20px_rgba(32,241,142,0.3)]">
            <span className="relative z-10 font-medium">Join Us</span>
          </button>
        </m.div>
      </div>
    </section>
  );
}

function RoleCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <m.div
      className="group relative p-8 rounded-xl bg-moosh-black-lighter border border-white/10 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-2"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Icon */}
      <div className="mb-6 flex justify-center">
        <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-center mb-4 text-white group-hover:text-white transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-moosh-text-secondary text-center leading-relaxed group-hover:text-moosh-text-primary transition-colors duration-300">
        {description}
      </p>
    </m.div>
  );
} 