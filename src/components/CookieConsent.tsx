'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const COOKIE_KEY = 'revefest-cookie-consent';

export default function CookieConsentComponent() {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Google Consent Mode v2 - default denied
    window.gtag?.('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500,
    });

    // Check if user has already consented
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setShowBanner(true);
    } else {
      try {
        // Apply saved consent
        const { analytics, marketing } = JSON.parse(consent);
        updateConsent(analytics, marketing);
      } catch {
        // Invalid JSON, clear and show banner
        localStorage.removeItem(COOKIE_KEY);
        setShowBanner(true);
      }
    }
  }, []);

  const updateConsent = (analytics: boolean, marketing: boolean) => {
    window.gtag?.('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: marketing ? 'granted' : 'denied',
      ad_user_data: marketing ? 'granted' : 'denied',
      ad_personalization: marketing ? 'granted' : 'denied',
    });
  };

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ analytics: true, marketing: true }));
    updateConsent(true, true);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ analytics: false, marketing: false }));
    updateConsent(false, false);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = (analytics: boolean, marketing: boolean) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ analytics, marketing }));
    updateConsent(analytics, marketing);
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner && !showPreferences) return null;

  return (
    <>
      {/* Main Banner */}
      {showBanner && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[700px]">
          <div className="bg-[#1a1a1a] rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-center gap-4">
            {/* Text */}
            <div className="flex-1 text-white text-sm leading-relaxed">
              {t('cookie.text')}{' '}
              <a href="/politica-cookies" className="text-[#FC56AE] underline hover:text-[#ff7bc4]">
                {t('cookie.more')}
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-2 shrink-0">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 text-sm font-semibold text-white border-[1.5px] border-[#FC56AE] rounded-md hover:bg-[#FC56AE]/10 transition-colors"
              >
                {t('cookie.customize')}
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-semibold text-white border-[1.5px] border-[#FC56AE] rounded-md hover:bg-[#FC56AE]/10 transition-colors"
              >
                {t('cookie.reject')}
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm font-semibold text-white bg-[#FC56AE] border-[1.5px] border-[#FC56AE] rounded-md hover:bg-[#e04a9d] hover:border-[#e04a9d] transition-colors"
              >
                {t('cookie.accept')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <PreferencesModal
          t={t}
          onClose={() => setShowPreferences(false)}
          onSave={handleSavePreferences}
          onAcceptAll={handleAcceptAll}
          onRejectAll={handleRejectAll}
        />
      )}
    </>
  );
}

interface PreferencesModalProps {
  t: (key: string) => string;
  onClose: () => void;
  onSave: (analytics: boolean, marketing: boolean) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
}

function PreferencesModal({ t, onClose, onSave, onAcceptAll, onRejectAll }: PreferencesModalProps) {
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
      <div className="bg-[#1a1a1a] rounded-2xl w-full max-w-[500px] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#333]">
          <h2 className="text-xl font-bold text-white">{t('cookie.preferencesTitle')}</h2>
          <button onClick={onClose} className="text-white hover:text-[#FC56AE] text-2xl">
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Necessary */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-white">{t('cookie.necessary')}</h3>
              <p className="text-sm text-gray-400 mt-1">{t('cookie.necessaryDesc')}</p>
            </div>
            <div className="w-12 h-6 bg-[#FC56AE] rounded-full relative shrink-0">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
            </div>
          </div>

          {/* Analytics */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-white">{t('cookie.analytics')}</h3>
              <p className="text-sm text-gray-400 mt-1">{t('cookie.analyticsDesc')}</p>
            </div>
            <button
              onClick={() => setAnalytics(!analytics)}
              className={`w-12 h-6 rounded-full relative shrink-0 transition-colors ${
                analytics ? 'bg-[#FC56AE]' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                  analytics ? 'right-1' : 'left-1'
                }`}
              />
            </button>
          </div>

          {/* Marketing */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-white">{t('cookie.marketing')}</h3>
              <p className="text-sm text-gray-400 mt-1">{t('cookie.marketingDesc')}</p>
            </div>
            <button
              onClick={() => setMarketing(!marketing)}
              className={`w-12 h-6 rounded-full relative shrink-0 transition-colors ${
                marketing ? 'bg-[#FC56AE]' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                  marketing ? 'right-1' : 'left-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap gap-2 p-6 border-t border-[#333]">
          <button
            onClick={onRejectAll}
            className="flex-1 px-4 py-2 text-sm font-semibold text-white border-[1.5px] border-[#FC56AE] rounded-md hover:bg-[#FC56AE]/10 transition-colors"
          >
            {t('cookie.rejectAll')}
          </button>
          <button
            onClick={() => onSave(analytics, marketing)}
            className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-[#FC56AE] border-[1.5px] border-[#FC56AE] rounded-md hover:bg-[#e04a9d] hover:border-[#e04a9d] transition-colors"
          >
            {t('cookie.save')}
          </button>
        </div>
      </div>
    </div>
  );
}
