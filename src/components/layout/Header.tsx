"use client";

import Link from 'next/link';
import { useI18n } from '@/components/I18nProvider';

export default function Header() {
  const { t } = useI18n();
  return (
    <header className="border-b border-gray-800 bg-black">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl moosh-logo text-white">
            MOOSH
          </Link>
          
          {/* 使用品牌色版本的按钮 */}
          <button type="button" className="btn-header-brand">
            <span className="btn-text">{t('homepage.getStarted', 'Try Moosh')}</span>
            <span className="btn-bg"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}