'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
  mobile?: boolean;
}

export default function LanguageSelector({ mobile = false }: LanguageSelectorProps) {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLangChange = (newLang: 'es' | 'va') => {
    setLang(newLang);
    
    // Update URL param without reloading
    const url = new URL(window.location.href);
    if (newLang === 'va') {
      url.searchParams.set('lang', 'va');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState({}, '', url);
    
    setIsOpen(false);
  };

  // Mobile: show both options inline
  if (mobile) {
    return (
      <div className="flex flex-col gap-3">
        <span className="text-xl font-bold uppercase">{t('nav.language')}</span>
        <div className="flex gap-4 pl-4">
          <button
            onClick={() => handleLangChange('es')}
            className={`text-lg font-light hover:text-primary transition-colors uppercase ${
              lang === 'es' ? 'text-primary font-bold' : ''
            }`}
          >
            Español
          </button>
          <span className="text-foreground/20">|</span>
          <button
            onClick={() => handleLangChange('va')}
            className={`text-lg font-light hover:text-primary transition-colors uppercase ${
              lang === 'va' ? 'text-primary font-bold' : ''
            }`}
          >
            Valencià
          </button>
        </div>
      </div>
    );
  }

  // Desktop: hover dropdown
  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-[11pt] font-normal uppercase tracking-wide hover:text-primary transition-colors">
        {lang === 'es' ? 'ESPAÑOL' : 'VALENCIÀ'}
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 pt-2">
          <div className="bg-white shadow-lg border border-gray-100 rounded-sm py-1 min-w-[100px]">
            <button
              onClick={() => handleLangChange('es')}
              className={`w-full text-left px-4 py-2 text-[11pt] hover:bg-gray-50 transition-colors ${
                lang === 'es' ? 'text-primary font-bold' : ''
              }`}
            >
              ESPAÑOL
            </button>
            <button
              onClick={() => handleLangChange('va')}
              className={`w-full text-left px-4 py-2 text-[11pt] hover:bg-gray-50 transition-colors ${
                lang === 'va' ? 'text-primary font-bold' : ''
              }`}
            >
              VALENCIÀ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
