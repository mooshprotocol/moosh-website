'use client';

import { motion } from 'framer-motion';

export default function CommunitySection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Community First. Agent First.
          </motion.h2>
          
          {/* Subheading */}
          <motion.p 
            className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everyone builds. Everyone belongs. Equal opportunity is not a feature — it&apos;s a foundation.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="group inline-flex items-center space-x-2 px-8 py-3 bg-transparent border border-neutral-600 text-white hover:border-neutral-400 hover:bg-neutral-900 transition-all duration-300 rounded-lg">
              <span className="text-sm font-medium">Join the Community</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}