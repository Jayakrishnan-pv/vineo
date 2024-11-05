// LanguageSwitcher.js
import { useTranslation } from 'next-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Spanish</button>
    </div>
  );
};

export default LanguageSwitcher;
