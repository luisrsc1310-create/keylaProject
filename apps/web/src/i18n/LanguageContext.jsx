import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

const htmlLang = { pt: 'pt-BR', en: 'en', ja: 'ja' };

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt');

  useEffect(() => {
    document.documentElement.lang = htmlLang[lang] || 'pt-BR';
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
