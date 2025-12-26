import { createContext, useContext } from 'react';
import { translations, Language, Translations } from './translations';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export const TranslationContext = createContext<
  TranslationContextType | undefined
>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const getTranslations = (language: Language): Translations => {
  return translations[language];
};
