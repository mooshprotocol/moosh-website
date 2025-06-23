import Layout from '@/components/layout/Layout';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Services',
  };
}

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">{t('services.title')}</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{t('services.consulting.title')}</h3>
            <p className="text-gray-600">
              {t('services.consulting.description')}
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{t('services.development.title')}</h3>
            <p className="text-gray-600">
              {t('services.development.description')}
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{t('services.support.title')}</h3>
            <p className="text-gray-600">
              {t('services.support.description')}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}