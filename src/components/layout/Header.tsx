"use client";

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import TryMooshButton from '@/components/ui/TryMooshButton';
import ClientText from '@/components/ui/ClientText';
import LanguageSelector from '@/components/ui/LanguageSelector';
import { mergeClassNames } from '@/lib/classnames';
import { useI18n } from '@/components/I18nProvider';

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export default function Header() {
  const { t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(false);

  const docsHref = process.env.NEXT_PUBLIC_DOCS_URL || 'https://docs.moosh.xyz';
  const navItems = useMemo<NavItem[]>(
    () => [
      { href: '#core-modules', label: t('nav.coreModules', 'Core Modules') },
      { href: docsHref, label: t('nav.docs', 'Docs'), external: true },
      { href: '#community', label: t('nav.community', 'Community') },
      { href: '#careers', label: t('nav.careers', 'Careers') },
    ],
    [docsHref, t],
  );

  useEffect(() => {
    const calculateThreshold = () => {
      const heroSection = document.querySelector<HTMLElement>('.hero-section');
      if (!heroSection) return window.innerHeight * 0.65;
      const offset = Math.min(heroSection.offsetHeight * 0.7, window.innerHeight * 0.75);
      return Math.max(offset, 280);
    };

    let scrollThreshold = calculateThreshold();

    const handleScroll = () => {
      scrollThreshold = calculateThreshold();
      const position = window.scrollY;
      const scrolled = position > 16;
      const revealNav = position > scrollThreshold;
      setIsScrolled(scrolled);
      setShowNavLinks(revealNav);
    };

    const handleResize = () => {
      scrollThreshold = calculateThreshold();
      handleScroll();
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className={mergeClassNames(
        'site-header pointer-events-none',
        isScrolled ? 'site-header--surface' : 'site-header--hero',
      )}
    >
      <span className="site-header__energy" aria-hidden />
      <span className="site-header__border" aria-hidden />
      <div className="site-header__container">
        <nav className="site-header__nav" aria-label="Primary navigation">
          <Link href="/" className="site-header__brand" aria-label="Moosh home">
            <span className="moosh-logo__text">MOOSH</span>
          </Link>

          <div
            className={mergeClassNames(
              'site-header__links',
              showNavLinks ? 'site-header__links--visible' : 'site-header__links--hidden',
            )}
            aria-hidden={!showNavLinks}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-header__link"
                prefetch={false}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer noopener' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="site-header__actions">
            <LanguageSelector />
            <TryMooshButton size="sm" className="header-cta">
              <span suppressHydrationWarning>
                <ClientText k="homepage.getStarted" defaultValue="Get Started" />
              </span>
            </TryMooshButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
