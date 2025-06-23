import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Mega Moosh',
  description: 'Official website of Mega Moosh',
  url: 'https://moosh.finance',
  navigation: [
    { label: 'navigation.home', href: '/' },
    { label: 'navigation.about', href: '/about' },
    { label: 'navigation.services', href: '/services' },
    { label: 'navigation.contact', href: '/contact' },
  ],
};