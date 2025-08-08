import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Layout from '@/components/layout/Layout';

const HeroSection = dynamic(() => import('@/components/HeroSection'));
const ManifestoSection = dynamic(() => import('@/components/ManifestoSection'));
const PrinciplesSection = dynamic(() => import('@/components/PrinciplesSection'));
const ProtocolSection = dynamic(() => import('@/components/ProtocolSection'));
const BuildersSection = dynamic(() => import('@/components/BuildersSection'));
const CareersSection = dynamic(() => import('@/components/CareersSection'));
const CommunitySection = dynamic(() => import('@/components/CommunitySection'));


export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section - 黑底背景 */}
      <Suspense fallback={<div style={{height: 400}} />}> 
        <HeroSection />
      </Suspense>

      {/* Manifesto Section - 深灰背景 */}
      <Suspense fallback={null}>
        <ManifestoSection />
      </Suspense>

      {/* Principles Section - 中灰背景 */}
      <Suspense fallback={null}>
        <PrinciplesSection />
      </Suspense>

      {/* Protocol Section - 浅灰背景 */}
      <Suspense fallback={null}>
        <ProtocolSection />
      </Suspense>

      {/* Builders Section - 深灰背景，招聘功能 */}
      <Suspense fallback={null}>
        <BuildersSection />
      </Suspense>

      {/* Careers Section - 中灰背景，职位详情 */}
      <Suspense fallback={null}>
        <CareersSection />
      </Suspense>

      {/* Community Section - 黑底背景，社群参与 */}
      <Suspense fallback={null}>
        <CommunitySection />
      </Suspense>
    </Layout>
  );
}