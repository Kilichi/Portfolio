import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { translations, type Locale } from '../i18n/translations';

const STORAGE_KEY = 'portfolio-lang';

const LanguageContext = createContext<{
  lang: Locale;
  setLang: (l: Locale) => void;
  t: (key: string) => string;
} | null>(null);

function getNested(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const k of keys) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[k];
  }
  return typeof current === 'string' ? current : undefined;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'es';
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === 'es' || stored === 'en') return stored;
    return 'es';
  });

  const setLang = useCallback((l: Locale) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const t = useCallback(
    (key: string) => {
      const value = getNested(translations[lang] as unknown as Record<string, unknown>, key);
      return value ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
