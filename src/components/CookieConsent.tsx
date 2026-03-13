'use client';

import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function CookieConsentComponent() {
  useEffect(() => {
    // Configuración de Google Consent Mode v2 - default denied
    window.gtag?.('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500,
    });

    CookieConsent.run({
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
          readOnly: false,
          autoClear: {
            cookies: [
              { name: /^_ga/ },
              { name: '_gid' },
            ],
          },
          services: {
            ga: {
              label: 'Google Analytics',
              onAccept: () => {
                window.gtag?.('consent', 'update', {
                  analytics_storage: 'granted',
                });
              },
              onReject: () => {
                window.gtag?.('consent', 'update', {
                  analytics_storage: 'denied',
                });
              },
            },
          },
        },
        marketing: {
          enabled: false,
          readOnly: false,
          services: {
            googleAds: {
              label: 'Google Ads',
              onAccept: () => {
                window.gtag?.('consent', 'update', {
                  ad_storage: 'granted',
                  ad_user_data: 'granted',
                  ad_personalization: 'granted',
                });
              },
              onReject: () => {
                window.gtag?.('consent', 'update', {
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                });
              },
            },
          },
        },
      },

      language: {
        default: 'es',
        translations: {
          es: {
            consentModal: {
              title: 'Utilizamos cookies',
              description: 'Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y, con tu consentimiento, cookies de análisis para mejorar tu experiencia. Consulta nuestra <a href="/politica-cookies">Política de Cookies</a>.',
              acceptAllBtn: 'Aceptar todas',
              acceptNecessaryBtn: 'Rechazar todas',
              showPreferencesBtn: 'Personalizar',
            },
            preferencesModal: {
              title: 'Configuración de cookies',
              acceptAllBtn: 'Aceptar todas',
              acceptNecessaryBtn: 'Rechazar no esenciales',
              savePreferencesBtn: 'Guardar preferencias',
              closeIconLabel: 'Cerrar',
              sections: [
                {
                  title: 'Uso de cookies',
                  description: 'Utilizamos cookies para mejorar tu experiencia de navegación. Puedes gestionar tus preferencias a continuación.',
                },
                {
                  title: 'Cookies necesarias',
                  description: 'Estas cookies son esenciales para el funcionamiento del sitio web y no pueden desactivarse.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Cookies de análisis',
                  description: 'Estas cookies nos ayudan a entender cómo interactúan los visitantes con el sitio web.',
                  linkedCategory: 'analytics',
                },
                {
                  title: 'Cookies de marketing',
                  description: 'Estas cookies se utilizan para mostrar anuncios personalizados.',
                  linkedCategory: 'marketing',
                },
              ],
            },
          },
        },
      },

      guiOptions: {
        consentModal: {
          layout: 'cloud',
          position: 'bottom center',
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: 'box',
        },
      },

      onFirstConsent: ({ cookie }) => {
        console.log('First consent given:', cookie);
      },

      onConsent: ({ cookie }) => {
        console.log('Consent updated:', cookie);
      },
    });
  }, []);

  return null;
}
