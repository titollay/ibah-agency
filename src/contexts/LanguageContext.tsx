import React, { createContext, useState, useEffect, useContext } from 'react';
import { translations, Language } from '../i18n';

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: <T = string>(key: string) => T;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('lang') as Language) || 'FR';
  });

  const toggleLang = () => {
    const languages: Language[] = ['FR', 'EN', 'AR'];
    const nextIndex = (languages.indexOf(lang) + 1) % languages.length;
    const nextLang = languages[nextIndex];

    // Save the next language immediately before reload
    localStorage.setItem('lang', nextLang);

    // If we're switching between RTL and LTR (in either direction),
    // reload the page so all CSS transforms, parallax, and flex layouts reset cleanly.
    const isDirectionChange = (lang === 'AR') !== (nextLang === 'AR');
    if (isDirectionChange) {
      window.location.reload();
      return;
    }

    setLang(nextLang);
  };

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang.toLowerCase();
    document.documentElement.dir = lang === 'AR' ? 'rtl' : 'ltr';
    if (lang === 'AR') {
      document.documentElement.classList.add('is-arabic');
    } else {
      document.documentElement.classList.remove('is-arabic');
    }
  }, [lang]);

  const t = function<T = string>(key: string): T {
    const keys = key.split('.');
    let value: any = (translations as any)[lang];
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return key as unknown as T;
      }
    }
    return value as T;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
