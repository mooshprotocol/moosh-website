import Layout from '@/components/layout/Layout';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About',
  };
}

export default function AboutPage() {
  const t = useTranslations();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">{t('about.title')}</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            {t('about.content1')}
          </p>
          <p className="text-gray-600">
            {t('about.content2')}
          </p>
        </div>
      </div>
    </Layout>
  );
}