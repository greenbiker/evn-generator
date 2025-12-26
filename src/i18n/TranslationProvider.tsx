import React, { useState, ReactNode } from 'react';
import { TranslationContext } from './useTranslation';
import { Language, translations } from './translations';

interface TranslationProviderProps {
  children: ReactNode;
}

const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Sprawdź zapisany język w localStorage
    const savedLanguage = localStorage.getItem('evn-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }

    // Sprawdź język przeglądarki
    const browserLanguage = navigator.language.slice(0, 2) as Language;
    if (translations[browserLanguage]) {
      return browserLanguage;
    }

    // Domyślny język
    return 'pl';
  });

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('evn-language', newLanguage);
    document.documentElement.lang = newLanguage;
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;
