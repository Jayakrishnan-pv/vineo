// src/app/[locale]/layout.tsx (or your server component)
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { useTranslation } from 'react-i18next'; // If you use next-i18next for client-side

import { AppConfig } from '@/utils/AppConfig';

// Ensure locale is valid
export default getRequestConfig(async ({ locale }) => {
  if (!AppConfig.locales.includes(locale)) {
    notFound();
  }

  const messages = (await import(`../locales/${locale}.json`)).default;

  return {
    messages,
  };
});
