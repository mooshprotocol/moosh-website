import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return {
    title: {
      default: locale === 'zh' ? '超级慕什' : 'Mega Moosh',
      template: locale === 'zh' ? '%s | 超级慕什' : '%s | Mega Moosh',
    },
    description: locale === 'zh' 
      ? '超级慕什官方网站' 
      : 'Official website of Mega Moosh',
  };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}