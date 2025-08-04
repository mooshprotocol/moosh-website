'use client';

import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/HeroSection';
import ManifestoSection from '@/components/ManifestoSection';
import PrinciplesSection from '@/components/PrinciplesSection';
import ProtocolSection from '@/components/ProtocolSection';
import BuildersSection from '@/components/BuildersSection';
import CareersSection from '@/components/CareersSection';
import CommunitySection from '@/components/CommunitySection';
import SectionDivider from '@/components/SectionDivider';

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section - 黑底背景 */}
      <HeroSection />

      {/* Manifesto Section - 深灰背景 */}
      <ManifestoSection />

      <SectionDivider />

      {/* Principles Section - 中灰背景 */}
      <PrinciplesSection />

      <SectionDivider />

      {/* Protocol Section - 浅灰背景 */}
      <ProtocolSection />

      <SectionDivider />

      {/* Builders Section - 深灰背景，招聘功能 */}
      <BuildersSection />

      <SectionDivider />

      {/* Careers Section - 中灰背景，职位详情 */}
      <CareersSection />

      <SectionDivider />

      {/* Community Section - 黑底背景，社群参与 */}
      <CommunitySection />
    </Layout>
  );
}