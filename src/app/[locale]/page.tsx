import { useTranslations } from 'next-intl';
import Layout from '@/components/layout/Layout';

export default function HomePage() {
  const t = useTranslations();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">
            {t('homepage.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('homepage.subtitle')}
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              {t('homepage.getStarted')}
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              {t('homepage.learnMore')}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}