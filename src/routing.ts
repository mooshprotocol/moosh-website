import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'zh'];
export const defaultLocale = 'en';

export const pathnames = {
  '/': '/',
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  pathnames,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

export type AppPathnames = keyof typeof pathnames;