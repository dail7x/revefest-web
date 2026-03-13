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

// Global function to open preferences (called from footer/policy page)
export function openCookiePreferences() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
  }
}

export default function CookieConsentComponent() {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen for external open request
    const handleOpenPreferences = () => setShowPreferences(true);
    window.addEventListener('open-cookie-preferences', handleOpenPreferences);

    // Check if user has already consented
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setShowBanner(true);
      // Small delay for animation
      setTimeout(() => setIsVisible(true), 100);
    } else {
      try {
        const { analytics, marketing } = JSON.parse(consent);
        updateConsent(analytics, marketing);
      } catch {
        localStorage.removeItem(COOKIE_KEY);
        setShowBanner(true);
        setTimeout(() => setIsVisible(true), 100);
      }
    }

    return () => {
      window.removeEventListener('open-cookie-preferences', handleOpenPreferences);
    };
  }, []);

  const updateConsent = (analytics: boolean, marketing: boolean) => {
    window.gtag?.('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: marketing ? 'granted' : 'denied',
      ad_user_data: marketing ? 'granted' : 'denied',
      ad_personalization: marketing ? 'granted' : 'denied',
    });
  };

  const trackConsentEvent = (action: string) => {
    window.gtag?.('event', 'cookie_consent', {
      event_category: 'engagement',
      event_label: action,
    });
  };

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ analytics: true, marketing: true }));
    updateConsent(true, true);
    trackConsentEvent('accept_all');
    hideBanner();
  };

  const handleRejectAll = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ analytics: false, marketing: false }));
    updateConsent(false, false);
    trackConsentEvent('reject_all');
    hideBanner();
  };

  const handleSavePreferences = (analytics: boolean, marketing: boolean) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ analytics, marketing }));
    updateConsent(analytics, marketing);
    trackConsentEvent(analytics || marketing ? 'accept_custom' : 'reject_all');
    hideBanner();
  };

  const hideBanner = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowBanner(false);
      setShowPreferences(false);
    }, 300);
  };

  const handleOpenPreferences = () => {
    setShowPreferences(true);
  };

  if (!showBanner && !showPreferences) return null;

  return (
    <>
      {/* Main Banner */}
      {showBanner && (
        <div 
          className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[700px] transition-all duration-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
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
                onClick={handleOpenPreferences}
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
          onClose={hideBanner}
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
  // Load saved preferences
  const [analytics, setAnalytics] = useState(() => {
    if (typeof window === 'undefined') return false;
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) return false;
    try {
      const { analytics } = JSON.parse(consent);
      return analytics || false;
    } catch {
      return false;
    }
  });
  
  const [marketing, setMarketing] = useState(() => {
    if (typeof window === 'undefined') return false;
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) return false;
    try {
      const { marketing } = JSON.parse(consent);
      return marketing || false;
    } catch {
      return false;
    }
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div 
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? 'bg-black/50 opacity-100' : 'bg-black/0 opacity-0'
      }`}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div 
        className={`bg-[#1a1a1a] rounded-2xl w-full max-w-[500px] max-h-[90vh] overflow-y-auto transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#333]">
          <h2 className="text-xl font-bold text-white">{t('cookie.preferencesTitle')}</h2>
          <button onClick={handleClose} className="text-white hover:text-[#FC56AE] text-2xl">
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
