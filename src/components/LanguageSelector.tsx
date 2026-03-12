'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSelector({ mobile = false }: { mobile?: boolean }) {
  const { lang, setLang } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as 'es' | 'va';
    setLang(newLang);
    
    // Update URL param without reloading
    const url = new URL(window.location.href);
    if (newLang === 'va') {
      url.searchParams.set('lang', 'va');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState({}, '', url);
  };

  if (mobile) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-foreground/60">Idioma:</span>
        <select
          value={lang}
          onChange={handleChange}
          className="bg-transparent text-lg font-bold hover:text-primary transition-colors cursor-pointer border-none outline-none"
        >
          <option value="es">Español</option>
          <option value="va">Valencià</option>
        </select>
      </div>
    );
  }

  return (
    <select
      value={lang}
      onChange={handleChange}
      className="bg-transparent text-[11pt] font-normal uppercase tracking-wide hover:text-primary transition-colors cursor-pointer border-none outline-none"
    >
      <option value="es">Español</option>
      <option value="va">Valencià</option>
    </select>
  );
}
