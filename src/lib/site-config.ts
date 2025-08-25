import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Moosh',
  description: 'Official website of Moosh',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000',
  navigation: [
    { label: 'navigation.home', href: '/' },
  ],
};