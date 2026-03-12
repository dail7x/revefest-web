'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import artistasData from '@/data/artistas.json';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[999]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[60%] sm:w-[50%] bg-white z-[1000] shadow-2xl p-6 flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              {/* Tickets Button - Sticky Header Style */}
              <Link
                href="/entradas"
                onClick={onClose}
                className="bg-primary text-white px-6 py-2.5 text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-foreground transition-colors"
              >
                Tickets
              </Link>
              
              <button 
                onClick={onClose}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Cerrar menú"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="text-xl font-bold text-foreground/40">{t('nav.artists')}</span>
                <div className="flex flex-col gap-3 pl-4">
                  {artistasData
                    .sort((a, b) => a.order - b.order)
                    .map((artista) => (
                      <Link
                        key={artista.id}
                        href={`/artistas/${artista.slug}`}
                        onClick={onClose}
                        className="text-lg font-light hover:text-primary transition-colors"
                      >
                        {artista.name}
                      </Link>
                    ))}
                </div>
              </div>

              <Link 
                href="/guia-de-compra" 
                onClick={onClose}
                className="text-xl font-bold hover:text-primary transition-colors"
              >
                {t('nav.info')}
              </Link>

              <LanguageSelector mobile />
            </nav>

            <div className="mt-auto pt-8 border-t border-gray-100 italic text-sm text-foreground/60">
              16.07.26 • Valencia
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
