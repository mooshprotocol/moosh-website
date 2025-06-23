'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/routing';
import { routing } from '@/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center space-x-2">
      {routing.locales.map((lang) => (
        <button
          key={lang}
          onClick={() => switchLanguage(lang)}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            locale === lang
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}