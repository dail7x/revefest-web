"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const COOKIE_CONSENT_KEY = "revefest-cookie-consent";

interface CookieConsentProps {
  variant?: "inline" | "floating";
}

export default function CookieConsent({ variant = "floating" }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  if (!isMounted) return null;

  // Inline variant for home page (between Lineup and Tickets)
  if (variant === "inline") {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full bg-black/90 backdrop-blur-md border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-white/90 text-sm leading-relaxed">
                  {t('cookie.text')}{" "}
                  <Link
                    href="/politica-cookies"
                    className="text-[#fc56ae] hover:text-[#fd7ac0] underline underline-offset-2 transition-colors"
                  >
                    {t('cookie.more')}
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t('cookie.reject')}
                </button>
                <button
                  onClick={handleAccept}
                  className="px-5 py-2.5 bg-[#fc56ae] hover:bg-[#fd7ac0] text-white text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  {t('cookie.accept')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Floating variant for other pages (slide up from bottom)
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/85 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/50 p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-white/90 text-sm leading-relaxed">
                    {t('cookie.text')}{" "}
                    <Link
                      href="/politica-cookies"
                      className="text-[#fc56ae] hover:text-[#fd7ac0] underline underline-offset-2 transition-colors"
                    >
                      {t('cookie.more')}
                    </Link>
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={handleDecline}
                    className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {t('cookie.reject')}
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-5 py-2.5 bg-[#fc56ae] hover:bg-[#fd7ac0] text-white text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    {t('cookie.accept')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
