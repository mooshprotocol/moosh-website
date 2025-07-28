'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CareersSection() {
  return (
    <section className="py-24" style={{backgroundColor: '#ECEDEE'}}>
      <div className="container mx-auto px-4">
        {/* Header - Following same structure as white sections */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Join the Modular Liquidity Movement
          </motion.h2>
          <motion.p 
            className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We&apos;re building the future of lending with builders, designers, and community minds who create with purpose and integrity.
          </motion.p>
        </div>
        
        {/* Role Cards Grid - Matching white section grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
          
          {/* Full-Stack Engineer Card */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-neutral-200 hover:border-neutral-300 hover:bg-white/80 transition-all duration-300 group-hover:-translate-y-1 shadow-lg hover:shadow-xl">
              {/* Full-Stack Engineer Avatar */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=fullstack&backgroundColor=3b82f6"
                    alt="Full-Stack Engineer"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-black mb-4 group-hover:text-neutral-800 transition-colors duration-300">
                Full-Stack Engineer
              </h3>
              
              <p className="text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                Build modular systems from smart contracts to interfaces. Create composable architectures that scale.
              </p>
            </div>
          </motion.div>
          
          {/* Product Designer Card */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-neutral-200 hover:border-neutral-300 hover:bg-white/80 transition-all duration-300 group-hover:-translate-y-1 shadow-lg hover:shadow-xl">
              {/* Product Designer Avatar */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg flex items-center justify-center">
                  <Image
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=creative-mind&backgroundColor=8b5cf6"
                    alt="Product Designer"
                    width={64}
                    height={64}
                    className="object-cover object-center"
                  />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-black mb-4 group-hover:text-neutral-800 transition-colors duration-300">
                Product Designer
              </h3>
              
              <p className="text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                Craft intuitive experiences across onchain and offchain flows. Design systems that users love.
              </p>
            </div>
          </motion.div>
          
          {/* Community Architect Card */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-neutral-200 hover:border-neutral-300 hover:bg-white/80 transition-all duration-300 group-hover:-translate-y-1 shadow-lg hover:shadow-xl">
              {/* Community Architect Avatar */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=community&backgroundColor=10b981"
                    alt="Community Architect"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-black mb-4 group-hover:text-neutral-800 transition-colors duration-300">
                Community Architect
              </h3>
              
              <p className="text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                Engage builders, spark conversations, grow the movement. Cultivate authentic communities.
              </p>
            </div>
          </motion.div>
          
        </div>
        
        {/* Call to Action - Minimal and understated */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="group inline-flex items-center space-x-2 px-8 py-3 bg-transparent border border-neutral-300 text-black hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-300 rounded-lg">
            <span className="text-sm font-medium">Build with us</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
} 