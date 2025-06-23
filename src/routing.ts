import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/services': '/services',
  '/contact': '/contact',
};

export const routing = defineRouting({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  pathnames,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

export type AppPathnames = keyof typeof pathnames;