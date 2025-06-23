import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} {t('site.name')}. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}