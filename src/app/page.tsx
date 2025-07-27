'use client';

import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/HeroSection';
import { motion } from 'framer-motion';

export default function HomePage() {

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Core Vision/Mission Section */}
      <section className="bg-white min-h-[500px] flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto">
            
            {/* 哲学宣言区域 */}
            <div className="py-16">
              <div className="space-y-3">
                <motion.p 
                  className="text-xl font-normal text-black mb-3"
                  style={{lineHeight: '1.75'}}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0 }}
                >
                  The future is modular.
                </motion.p>
                <motion.p 
                  className="text-xl font-normal text-black mb-3"
                  style={{lineHeight: '1.75'}}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Capital must move.
                </motion.p>
                <motion.p 
                  className="text-xl font-normal text-black mb-3"
                  style={{lineHeight: '1.75'}}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Risk must adapt.
                </motion.p>
                <motion.p 
                  className="text-xl font-normal text-black mb-3"
                  style={{lineHeight: '1.75'}}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Lending must evolve.
                </motion.p>
              </div>
              
              {/* 结语 - 独立装饰 */}
              <motion.div 
                className="mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <hr className="w-12 mx-auto mb-6" style={{borderColor: '#666', borderWidth: '0.5px'}} />
                <p className="text-sm italic" style={{color: '#666'}}>
                  Moosh makes it possible.
                </p>
              </motion.div>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Brand Pillars Section */}
      <section className="bg-white -mt-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="mb-8">
              <p className="text-sm uppercase tracking-widest text-neutral-400 mb-6">
                Moosh is built on three foundational principles
              </p>
            </div>
            
            {/* Three Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto pb-16">
              
              {/* Safety Pillar */}
              <motion.div 
                className="flex flex-col items-center text-center group p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                viewport={{ once: true }}
                style={{ backgroundColor: '#F8F9FB' }}
              >
                {/* Image */}
                <div className="h-40 w-full mb-8">
                  <img 
                    src="/images/safety.png" 
                    alt="Safety" 
                    className="w-full h-full object-cover rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-black mb-3">Safety</h3>
                
                {/* Subtitle */}
                <p className="text-sm text-neutral-600 mb-4">Resilient by design</p>
                
                {/* Content */}
                <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
                  Moosh protects capital through dynamic boundaries and adaptive execution.
                </p>
              </motion.div>
              
              {/* Flexibility Pillar */}
              <motion.div 
                className="flex flex-col items-center text-center group p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ backgroundColor: '#F8F9FB' }}
              >
                {/* Image */}
                <div className="h-40 w-full mb-8">
                  <img 
                    src="/images/flexibility.png" 
                    alt="Flexibility" 
                    className="w-full h-full object-cover rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-black mb-3">Flexibility</h3>
                
                {/* Subtitle */}
                <p className="text-sm text-neutral-600 mb-4">Liquidity should move freely</p>
                
                {/* Content */}
                <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
                  Moosh flows across protocols, modules, and market states without friction.
                </p>
              </motion.div>
              
              {/* Intelligence Pillar */}
              <motion.div 
                className="flex flex-col items-center text-center group p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                style={{ backgroundColor: '#F8F9FB' }}
              >
                {/* Image */}
                <div className="h-40 w-full mb-8">
                  <img 
                    src="/images/Intelligence.png" 
                    alt="Intelligence" 
                    className="w-full h-full object-cover rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-black mb-3">Intelligence</h3>
                
                {/* Subtitle */}
                <p className="text-sm text-neutral-600 mb-4">Modular environments demand modular thinking</p>
                
                {/* Content */}
                <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
                  Moosh adapts through logic, data, and intent-aware execution in real time.
                </p>
              </motion.div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Product Introduction Section */}
      <section className="bg-gray-25 py-20" style={{backgroundColor: '#F7F7F7'}}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          
          {/* 标题区 */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-black mb-8 tracking-tight">Moosh Protocol</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8 font-light">
              Built for ultra-low latency modular infrastructure and composable liquidity.
            </p>
            
            {/* 承接语 */}
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase">
              Explore the four modular engines that power Moosh
            </p>
          </div>
          
          {/* 功能模块区 - 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-7xl mx-auto">
            
            {/* 卡片 1: Liquidation Engine */}
            <div className="bg-gradient-to-br from-white to-blue-50/30 border border-gray-200/50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] hover:border-blue-300/50 transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                {/* 图标 */}
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-blue-100/60 rounded-xl group-hover:bg-blue-200/60 transition-colors duration-300">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 16l-1-1m0 0l-1-1 1-1 1 1m4 4l1 1m0 0l1-1-1-1-1 1" opacity={0.6} />
                  </svg>
                </div>
                
                {/* 文本内容 */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-3 tracking-tight">Liquidation Engine</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Real-time, MEVM-native execution with intelligent risk logic.</p>
                </div>
              </div>
            </div>
            
            {/* 卡片 2: Risk Kernel */}
            <div className="bg-gradient-to-br from-white to-purple-50/30 border border-gray-200/50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] hover:border-purple-300/50 transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                {/* 图标 */}
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-purple-100/60 rounded-xl group-hover:bg-purple-200/60 transition-colors duration-300">
                  <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    <circle cx="12" cy="12" r="2" strokeWidth={1.8} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v1m0 6v1" opacity={0.6} />
                  </svg>
                </div>
                
                {/* 文本内容 */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-3 tracking-tight">Risk Kernel</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">AI-assisted logic that adapts dynamically to market conditions.</p>
                </div>
              </div>
            </div>
            
            {/* 卡片 3: Liquidity Mesh */}
            <div className="bg-gradient-to-br from-white to-emerald-50/30 border border-gray-200/50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] hover:border-emerald-300/50 transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                {/* 图标 */}
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-emerald-100/60 rounded-xl group-hover:bg-emerald-200/60 transition-colors duration-300">
                  <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 4v16M12 4v16M18 4v16" opacity={0.7} />
                    <circle cx="6" cy="6" r="1" fill="currentColor" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                    <circle cx="18" cy="18" r="1" fill="currentColor" />
                  </svg>
                </div>
                
                {/* 文本内容 */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-3 tracking-tight">Liquidity Mesh</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Composable liquidity with seamless cross-module execution.</p>
                </div>
              </div>
            </div>
            
            {/* 卡片 4: MegaETH Compatibility */}
            <div className="bg-gradient-to-br from-white to-amber-50/30 border border-gray-200/50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] hover:border-amber-300/50 transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                {/* 图标 */}
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-amber-100/60 rounded-xl group-hover:bg-amber-200/60 transition-colors duration-300">
                  <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h8m-4-4v8" />
                    <circle cx="9" cy="9" r="1" fill="currentColor" opacity={0.6} />
                    <circle cx="15" cy="15" r="1" fill="currentColor" opacity={0.6} />
                  </svg>
                </div>
                
                {/* 文本内容 */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-3 tracking-tight">MegaETH Compatibility</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Natively integrated with modular infrastructure on MegaETH.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Team & Background Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
              BUIDL by Artists, Philosophers, Poets, and Composers<br/>— and Agents
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto" style={{color: '#6B7280'}}>
              Reimagining DeFi with logic, language, and autonomy.
            </p>
          </div>
          
          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            
            {/* Systems Card */}
            <div className="group text-center p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:border-gray-300 transition-all duration-300">
              {/* Abstract Systems Illustration */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <rect x="10" y="10" width="15" height="15" fill="#3B82F6" fillOpacity="0.8" rx="2"/>
                  <rect x="30" y="10" width="15" height="15" fill="#3B82F6" fillOpacity="0.6" rx="2"/>
                  <rect x="50" y="10" width="15" height="15" fill="#3B82F6" fillOpacity="0.4" rx="2"/>
                  <rect x="10" y="30" width="15" height="15" fill="#3B82F6" fillOpacity="0.6" rx="2"/>
                  <rect x="30" y="30" width="15" height="15" fill="#3B82F6" fillOpacity="0.8" rx="2"/>
                  <rect x="50" y="30" width="15" height="15" fill="#3B82F6" fillOpacity="0.6" rx="2"/>
                  <rect x="10" y="50" width="15" height="15" fill="#3B82F6" fillOpacity="0.4" rx="2"/>
                  <rect x="30" y="50" width="15" height="15" fill="#3B82F6" fillOpacity="0.6" rx="2"/>
                  <rect x="50" y="50" width="15" height="15" fill="#3B82F6" fillOpacity="0.8" rx="2"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-black mb-3">Systems</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Architected foundations that enable composability, precision, and trust.
              </p>
            </div>

            {/* Research Card */}
            <div className="group text-center p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:border-gray-300 transition-all duration-300">
              {/* Abstract Research Network Illustration */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <circle cx="20" cy="20" r="4" fill="#8B5CF6" fillOpacity="0.8"/>
                  <circle cx="60" cy="25" r="4" fill="#8B5CF6" fillOpacity="0.8"/>
                  <circle cx="40" cy="40" r="6" fill="#8B5CF6" fillOpacity="0.9"/>
                  <circle cx="15" cy="55" r="3" fill="#8B5CF6" fillOpacity="0.6"/>
                  <circle cx="65" cy="60" r="4" fill="#8B5CF6" fillOpacity="0.8"/>
                  <line x1="20" y1="20" x2="40" y2="40" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.6"/>
                  <line x1="60" y1="25" x2="40" y2="40" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.6"/>
                  <line x1="40" y1="40" x2="15" y2="55" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.6"/>
                  <line x1="40" y1="40" x2="65" y2="60" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.6"/>
                  <path d="M25 30 Q35 25 45 35" stroke="#8B5CF6" strokeWidth="1" fill="none" strokeOpacity="0.4"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-black mb-3">Research</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Models, data, and principles that shape how systems adapt and stay secure.
              </p>
            </div>

            {/* Expression Card */}
            <div className="group text-center p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:border-gray-300 transition-all duration-300">
              {/* Abstract Expression Waveform Illustration */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <path d="M10 40 Q20 20 30 40 T50 40 T70 40" stroke="#10B981" strokeWidth="2.5" fill="none" strokeOpacity="0.8"/>
                  <path d="M10 50 Q25 30 40 50 T70 50" stroke="#10B981" strokeWidth="2" fill="none" strokeOpacity="0.6"/>
                  <path d="M10 30 Q15 15 25 30 T45 30 T65 30" stroke="#10B981" strokeWidth="1.5" fill="none" strokeOpacity="0.4"/>
                  <circle cx="30" cy="40" r="2" fill="#10B981" fillOpacity="0.8"/>
                  <circle cx="50" cy="40" r="2" fill="#10B981" fillOpacity="0.8"/>
                  <rect x="12" y="55" width="3" height="8" fill="#10B981" fillOpacity="0.6" rx="1"/>
                  <rect x="18" y="52" width="3" height="11" fill="#10B981" fillOpacity="0.7" rx="1"/>
                  <rect x="24" y="58" width="3" height="5" fill="#10B981" fillOpacity="0.5" rx="1"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-black mb-3">Expression</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Where logic becomes language — modular, legible, and imbued with intent.
              </p>
            </div>

            {/* Autonomy Card */}
            <div className="group text-center p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:border-gray-300 transition-all duration-300">
              {/* Abstract Autonomy Circular Nodes Illustration */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <circle cx="40" cy="40" r="8" fill="#F59E0B" fillOpacity="0.9"/>
                  <circle cx="25" cy="25" r="5" fill="#F59E0B" fillOpacity="0.7"/>
                  <circle cx="55" cy="25" r="5" fill="#F59E0B" fillOpacity="0.7"/>
                  <circle cx="25" cy="55" r="5" fill="#F59E0B" fillOpacity="0.7"/>
                  <circle cx="55" cy="55" r="5" fill="#F59E0B" fillOpacity="0.7"/>
                  <path d="M32 32 A12 12 0 0 1 48 32" stroke="#F59E0B" strokeWidth="1.5" fill="none" strokeOpacity="0.6"/>
                  <path d="M32 48 A12 12 0 0 1 48 48" stroke="#F59E0B" strokeWidth="1.5" fill="none" strokeOpacity="0.6"/>
                  <circle cx="40" cy="20" r="2" fill="#F59E0B" fillOpacity="0.5"/>
                  <circle cx="40" cy="60" r="2" fill="#F59E0B" fillOpacity="0.5"/>
                  <circle cx="20" cy="40" r="2" fill="#F59E0B" fillOpacity="0.5"/>
                  <circle cx="60" cy="40" r="2" fill="#F59E0B" fillOpacity="0.5"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-black mb-3">Autonomy</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Agents that act — adaptive, decentralized, and aligned with protocol goals.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section style={{backgroundColor: '#0A0A0B'}} className="py-20">
        <div className="container mx-auto px-4">
          {/* Refined Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Let's Build Modular Liquidity Together
            </motion.h2>
            <motion.p 
              className="text-base text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We're looking for builders, designers, and community minds who create with purpose and integrity.
            </motion.p>
            <motion.div 
              className="w-12 h-0.5 bg-gradient-to-r from-blue-500/40 to-purple-500/40 mx-auto"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </div>
          
          {/* Role Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            
            {/* Full-Stack Engineer Card */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/8 transition-all duration-300 group-hover:-translate-y-1">
                {/* Simplified Icon */}
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                  <svg viewBox="0 0 48 48" className="w-full h-full">
                    {/* Modular blocks - simplified */}
                    <rect x="6" y="12" width="8" height="8" fill="#3B82F6" fillOpacity="0.8" rx="1.5" className="group-hover:fill-blue-400 transition-colors duration-300"/>
                    <rect x="16" y="12" width="8" height="8" fill="#6366F1" fillOpacity="0.7" rx="1.5" className="group-hover:fill-indigo-400 transition-colors duration-300"/>
                    <rect x="26" y="12" width="8" height="8" fill="#8B5CF6" fillOpacity="0.6" rx="1.5" className="group-hover:fill-purple-400 transition-colors duration-300"/>
                    
                    {/* Code flow lines */}
                    <rect x="6" y="26" width="28" height="1" fill="#64748B" fillOpacity="0.5" rx="0.5"/>
                    <rect x="8" y="30" width="12" height="1" fill="#64748B" fillOpacity="0.4" rx="0.5"/>
                    <rect x="22" y="30" width="10" height="1" fill="#64748B" fillOpacity="0.4" rx="0.5"/>
                    
                    {/* Connection nodes */}
                    <circle cx="10" cy="22" r="1.5" fill="#3B82F6" fillOpacity="0.7" className="group-hover:fill-blue-400 transition-colors duration-300"/>
                    <circle cx="20" cy="22" r="1.5" fill="#6366F1" fillOpacity="0.7" className="group-hover:fill-indigo-400 transition-colors duration-300"/>
                    <circle cx="30" cy="22" r="1.5" fill="#8B5CF6" fillOpacity="0.7" className="group-hover:fill-purple-400 transition-colors duration-300"/>
                  </svg>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                  Full-Stack Engineer
                </h3>
                
                <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto group-hover:text-slate-300 transition-colors duration-300">
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
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/8 transition-all duration-300 group-hover:-translate-y-1">
                {/* Simplified Icon */}
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                  <svg viewBox="0 0 48 48" className="w-full h-full">
                    {/* UI frame */}
                    <rect x="8" y="10" width="32" height="20" fill="none" stroke="#8B5CF6" strokeWidth="1.2" strokeOpacity="0.7" rx="2" className="group-hover:stroke-purple-400 transition-colors duration-300"/>
                    
                    {/* Interface elements */}
                    <rect x="12" y="14" width="24" height="3" fill="#8B5CF6" fillOpacity="0.4" rx="1" className="group-hover:fill-purple-400 transition-colors duration-300"/>
                    <rect x="12" y="20" width="10" height="6" fill="#A855F7" fillOpacity="0.6" rx="1" className="group-hover:fill-purple-500 transition-colors duration-300"/>
                    <rect x="26" y="20" width="10" height="2" fill="#C084FC" fillOpacity="0.5" rx="1" className="group-hover:fill-purple-300 transition-colors duration-300"/>
                    <rect x="26" y="24" width="8" height="2" fill="#C084FC" fillOpacity="0.4" rx="1" className="group-hover:fill-purple-300 transition-colors duration-300"/>
                    
                    {/* Design elements */}
                    <circle cx="16" cy="36" r="2" fill="#6366F1" fillOpacity="0.7" className="group-hover:fill-indigo-400 transition-colors duration-300"/>
                    <circle cx="24" cy="36" r="2" fill="#8B5CF6" fillOpacity="0.7" className="group-hover:fill-purple-400 transition-colors duration-300"/>
                    <circle cx="32" cy="36" r="2" fill="#A855F7" fillOpacity="0.7" className="group-hover:fill-purple-500 transition-colors duration-300"/>
                  </svg>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300">
                  Product Designer
                </h3>
                
                <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto group-hover:text-slate-300 transition-colors duration-300">
                  Craft intuitive experiences across onchain and offchain flows. Design systems that users love.
                </p>
              </div>
            </motion.div>
            
            {/* Community & Growth Card */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/8 transition-all duration-300 group-hover:-translate-y-1">
                {/* Simplified Icon */}
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center">
                  <svg viewBox="0 0 48 48" className="w-full h-full">
                    {/* Growth stem */}
                    <path d="M24 38 Q22 28 24 20 Q26 28 24 38" stroke="#10B981" strokeWidth="2" fill="none" strokeOpacity="0.8" className="group-hover:stroke-emerald-400 transition-colors duration-300"/>
                    
                    {/* Leaves */}
                    <ellipse cx="18" cy="18" rx="6" ry="4" fill="#059669" fillOpacity="0.6" className="group-hover:fill-emerald-500 transition-colors duration-300" transform="rotate(-20 18 18)"/>
                    <ellipse cx="30" cy="18" rx="6" ry="4" fill="#059669" fillOpacity="0.6" className="group-hover:fill-emerald-500 transition-colors duration-300" transform="rotate(20 30 18)"/>
                    <ellipse cx="20" cy="26" rx="4" ry="3" fill="#10B981" fillOpacity="0.5" className="group-hover:fill-emerald-400 transition-colors duration-300" transform="rotate(-10 20 26)"/>
                    <ellipse cx="28" cy="26" rx="4" ry="3" fill="#10B981" fillOpacity="0.5" className="group-hover:fill-emerald-400 transition-colors duration-300" transform="rotate(10 28 26)"/>
                    
                    {/* Network nodes */}
                    <circle cx="12" cy="32" r="2" fill="#34D399" fillOpacity="0.7" className="group-hover:fill-emerald-300 transition-colors duration-300"/>
                    <circle cx="36" cy="32" r="2" fill="#34D399" fillOpacity="0.7" className="group-hover:fill-emerald-300 transition-colors duration-300"/>
                    <circle cx="18" cy="38" r="1.5" fill="#6EE7B7" fillOpacity="0.6" className="group-hover:fill-emerald-200 transition-colors duration-300"/>
                    <circle cx="30" cy="38" r="1.5" fill="#6EE7B7" fillOpacity="0.6" className="group-hover:fill-emerald-200 transition-colors duration-300"/>
                    
                    {/* Connections */}
                    <path d="M12 32 Q18 28 24 32" stroke="#10B981" strokeWidth="1" fill="none" strokeOpacity="0.4" className="group-hover:stroke-emerald-400 transition-colors duration-300"/>
                    <path d="M24 32 Q30 28 36 32" stroke="#10B981" strokeWidth="1" fill="none" strokeOpacity="0.4" className="group-hover:stroke-emerald-400 transition-colors duration-300"/>
                  </svg>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-emerald-100 transition-colors duration-300">
                  Community & Growth
                </h3>
                
                <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto group-hover:text-slate-300 transition-colors duration-300">
                  Engage builders, spark conversations, grow the movement. Cultivate authentic communities.
                </p>
              </div>
            </motion.div>
            
          </div>
          
          {/* Call to Action */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer group">
              <span className="text-sm font-medium">Build the next era with us</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}