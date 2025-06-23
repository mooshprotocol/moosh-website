import { useTranslations } from 'next-intl';
import { Link } from '@/routing';
import { siteConfig } from '@/lib/site-config';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Header() {
  const t = useTranslations();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            {t('site.name')}
          </Link>
          
          <div className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}