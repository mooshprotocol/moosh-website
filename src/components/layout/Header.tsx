import { useTranslations } from 'next-intl';
import { Link } from '@/routing';
import { siteConfig } from '@/lib/site-config';

export default function Header() {
  const t = useTranslations();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            {t('site.name')}
          </Link>
        </nav>
      </div>
    </header>
  );
}