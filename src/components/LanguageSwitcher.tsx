'use client';
// LanguageSwitcher.js
import { useTranslation } from 'next-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className=" absolute h-10 w-screen p-2">
      <button onClick={() => changeLanguage('en')} className="mr-5">English</button>
      <button onClick={() => changeLanguage('es')}>Spanish</button>
    </div>
  );
};

export default LanguageSwitcher;
