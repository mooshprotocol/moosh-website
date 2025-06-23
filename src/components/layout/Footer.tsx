import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-slate-900">
      <div className="container mx-auto px-4 min-h-[200px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Footer 🌙</h2>
          <p className="text-slate-300">Footer content placeholder</p>
        </div>
      </div>
    </footer>
  );
}