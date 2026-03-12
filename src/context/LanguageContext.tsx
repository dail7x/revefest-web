"use client";

import { createContext, useContext, useState, useEffect, ReactNode, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { translations, Lang } from '@/i18n/translations';

const STORAGE_KEY = 'revefest-language';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  setLang: () => {},
  t: () => '',
});

function LanguageProviderInner({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const [lang, setLangState] = useState<Lang>('es');
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize language from URL param, localStorage, or default
  useEffect(() => {
    const urlLang = searchParams.get('lang') as Lang;
    const storedLang = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) as Lang : null;
    
    // Priority: URL param > localStorage > default (es)
    const initialLang = (urlLang === 'va' || urlLang === 'es') ? urlLang 
                      : (storedLang === 'va' || storedLang === 'es') ? storedLang 
                      : 'es';
    
    setLangState(initialLang);
    setIsLoaded(true);
  }, [searchParams]);

  // Save to localStorage when language changes
  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newLang);
    }
  };

  // Translation function
  const t = (key: string): string => {
    return translations[lang][key as keyof typeof translations.es] || key;
  };

  // Prevent hydration mismatch
  if (!isLoaded) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <LanguageProviderInner>{children}</LanguageProviderInner>
    </Suspense>
  );
}

export const useLanguage = () => useContext(LanguageContext);
