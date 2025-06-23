import { AppPathnames } from '@/routing';

export interface NavigationItem {
  label: string;
  href: AppPathnames;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  navigation: NavigationItem[];
}

export interface PageMeta {
  title: string;
  description?: string;
  keywords?: string[];
}