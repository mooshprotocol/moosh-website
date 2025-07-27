import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/HeroSection';

export default function HomePage() {

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Core Vision/Mission Section */}
      <section className="bg-white min-h-[700px] flex items-center justify-center py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            
            {/* 哲学宣言区域 */}
            <div className="mb-16 pt-16 pb-16">
              <div className="space-y-6 leading-loose">
                <p className="text-3xl md:text-4xl font-light text-black tracking-wide">The future is modular.</p>
                <p className="text-3xl md:text-4xl font-light text-black tracking-wide">Capital must move.</p>
                <p className="text-3xl md:text-4xl font-light text-black tracking-wide">Risk must adapt.</p>
                <p className="text-3xl md:text-4xl font-light text-black tracking-wide">Lending must evolve.</p>
              </div>
              
              {/* 结语 - 独立装饰 */}
              <div className="mt-12">
                <hr className="w-8 mx-auto border-gray-300 mb-6" />
                <p className="text-sm text-gray-500 italic tracking-wide">This is why Moosh exists.</p>
              </div>
            </div>
            
            {/* 承接句 */}
            <div className="mb-12 mt-12">
              <p className="text-sm text-gray-400 tracking-wide uppercase">Moosh is built on three foundational principles.</p>
            </div>
            
            {/* 三大核心模块 */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              
              {/* Safety Card */}
              <div className="principle-card bg-gray-50 p-8 rounded-lg min-h-[320px] hover:bg-gray-100 transition-all duration-300 group">
                <div className="transform group-hover:-translate-y-0.5 transition-transform duration-300 mb-4">
                  <svg className="w-8 h-8 text-black mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Safety.</h3>
                <p className="font-medium text-gray-600 mb-4">Resilient by design.</p>
                <p className="text-gray-500 leading-relaxed">Moosh protects capital through dynamic boundaries and adaptive execution.</p>
              </div>
              
              {/* Flexibility Card */}
              <div className="principle-card bg-gray-50 p-8 rounded-lg min-h-[320px] hover:bg-gray-100 transition-all duration-300 group">
                <div className="transform group-hover:-translate-y-0.5 transition-transform duration-300 mb-4">
                  <svg className="w-8 h-8 text-black mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Flexibility.</h3>
                <p className="font-medium text-gray-600 mb-4">Liquidity should move freely.</p>
                <p className="text-gray-500 leading-relaxed">Moosh flows across protocols, modules, and market states without friction.</p>
              </div>
              
              {/* Intelligence Card */}
              <div className="principle-card bg-gray-50 p-8 rounded-lg min-h-[320px] hover:bg-gray-100 transition-all duration-300 group">
                <div className="transform group-hover:-translate-y-0.5 transition-transform duration-300 mb-4">
                  <svg className="w-8 h-8 text-black mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Intelligence.</h3>
                <p className="font-medium text-gray-600 mb-4">Modular environments demand modular thinking.</p>
                <p className="text-gray-500 leading-relaxed">Moosh adapts through logic, data, and intent-aware execution in real time.</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Product Introduction Section */}
      <section className="bg-gray-25 py-20" style={{backgroundColor: '#F7F7F7'}}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          
          {/* 标题区 */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-6">Moosh Protocol</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Built for ultra-low latency modular infrastructure and composable liquidity.
            </p>
            
            {/* 承接语 */}
            <p className="text-sm font-medium text-gray-500 tracking-wide uppercase">
              Explore the four modular engines that power Moosh.
            </p>
          </div>
          
          {/* 功能模块区 - 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-7xl mx-auto">
            
            {/* 卡片 1: Liquidation Engine */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                {/* 图标 */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                {/* 文本内容 */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black mb-2 tracking-tight">Liquidation Engine</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">Real-time, MEVM-native execution with intelligent risk logic.</p>
                </div>
              </div>
            </div>
            
            {/* 卡片 2: Risk Kernel */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                {/* 图标 */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                
                {/* 文本内容 */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black mb-2 tracking-tight">Risk Kernel</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">AI-assisted logic that adapts dynamically to market conditions.</p>
                </div>
              </div>
            </div>
            
            {/* 卡片 3: Liquidity Mesh */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                {/* 图标 */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14-7l2 2-2 2m0 8l2-2-2-2M9 7l-2 2 2 2m0 8l-2-2 2-2" />
                  </svg>
                </div>
                
                {/* 文本内容 */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black mb-2 tracking-tight">Liquidity Mesh</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">Composable liquidity with seamless cross-module execution.</p>
                </div>
              </div>
            </div>
            
            {/* 卡片 4: MegaETH Compatibility */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                {/* 图标 */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                
                {/* 文本内容 */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black mb-2 tracking-tight">MegaETH Compatibility</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">Natively integrated with modular infrastructure on MegaETH.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Team & Background Section */}
      <section className="bg-white min-h-[400px] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[24px] md:text-[28px] font-semibold mb-6" style={{color: '#111111'}}>
              BUIDL by Artists, Philosophers, Poets, and Composers<br/>— and Agents
            </h2>
            <p className="text-lg leading-relaxed max-w-[620px] mx-auto" style={{color: '#6B7280'}}>
              Reimagining DeFi with logic, language, and autonomy.
            </p>
          </div>
          
          {/* Team avatars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-500/30" style={{backgroundColor: '#E5E7EB'}}></div>
              <h4 className="text-base font-semibold mb-2" style={{color: '#111111'}}>Systems</h4>
              <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>Architected foundations that enable composability, precision, and trust.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-500/30" style={{backgroundColor: '#E5E7EB'}}></div>
              <h4 className="text-base font-semibold mb-2" style={{color: '#111111'}}>Research</h4>
              <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>Models, data, and principles that shape how systems adapt and stay secure.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-500/30" style={{backgroundColor: '#E5E7EB'}}></div>
              <h4 className="text-base font-semibold mb-2" style={{color: '#111111'}}>Expression</h4>
              <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>Where logic becomes language — modular, legible, and imbued with intent.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-500/30" style={{backgroundColor: '#E5E7EB'}}></div>
              <h4 className="text-base font-semibold mb-2" style={{color: '#111111'}}>Autonomy</h4>
              <p className="text-sm leading-relaxed" style={{color: '#6B7280'}}>Agents that act — adaptive, decentralized, and aligned with protocol goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section style={{backgroundColor: '#1A1A1A'}} className="min-h-[600px] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">
              We're Looking for People Who Build Like We Do
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-[640px] mx-auto">
              People who care about systems and spirit — who build with clarity, collaborate with Agents, think long-term, and hold themselves to high standards of integrity and craft.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:ring-1 hover:ring-blue-500/30 transition-all duration-300 group">
              <div className="text-center mb-4">
                <span className="text-3xl">🛠</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 text-center">Full-Stack Engineer</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Build modular systems from smart contracts to interfaces.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:ring-1 hover:ring-blue-500/30 transition-all duration-300 group">
              <div className="text-center mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 text-center">Product Designer</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Craft intuitive experiences across onchain and offchain flows.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:ring-1 hover:ring-blue-500/30 transition-all duration-300 group">
              <div className="text-center mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 text-center">Community & Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Engage builders, spark conversations, grow the movement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}