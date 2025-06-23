import { useTranslations } from 'next-intl';
import Layout from '@/components/layout/Layout';

export default function HomePage() {
  const t = useTranslations();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-slate-900 min-h-[400px] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Hero Section 🌌</h2>
            <p className="text-slate-300 text-lg">Hero content placeholder</p>
          </div>
        </div>
      </section>

      {/* Scroll Gallery Section */}
      <section className="bg-slate-100 min-h-[300px] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Scroll Gallery 🧩</h2>
            <p className="text-slate-600">Scroll gallery content placeholder</p>
          </div>
        </div>
      </section>

      {/* Moosh Credit Engine Section */}
      <section className="bg-slate-900 min-h-[400px] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Moosh Credit Engine 🔷</h2>
            <p className="text-slate-300 text-lg">Credit engine content placeholder</p>
          </div>
        </div>
      </section>

      {/* The Moosh's Philosophy Section */}
      <section className="bg-slate-800 min-h-[400px] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">The Moosh's Philosophy ✨🐻</h2>
            <p className="text-slate-300 text-lg">Philosophy content placeholder</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-100 min-h-[300px] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">FAQ 💬</h2>
            <p className="text-slate-600">FAQ content placeholder</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}