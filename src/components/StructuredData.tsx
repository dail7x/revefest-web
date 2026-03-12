"use client";

import Script from "next/script";

// HARDCODEADO: Datos del evento REVE FEST 2026
// Si cambian fechas, lugar o artistas principales, actualizar aquí.
// Alternativa dinámica: fetch desde CMS pero overkill para evento anual.
const EVENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  "name": "REVE FEST 2026",
  "description": "El único festival de música urbana solidario. Todo el beneficio va a microconciertos® para salud mental.",
  "startDate": "2026-07-16T13:00:00+02:00",
  "endDate": "2026-07-17T00:00:00+02:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Roig Arena",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenida de las Cortes Valencianas, 90",
      "addressLocality": "Valencia",
      "addressRegion": "Comunidad Valenciana",
      "addressCountry": "ES"
    }
  },
  "image": [
    "https://revefest.com/images/artists/Hero/bannerweb_general.webp"
  ],
  "performer": [
    { "@type": "MusicGroup", "name": "María Becerra" },
    { "@type": "MusicGroup", "name": "RVFV" },
    { "@type": "MusicGroup", "name": "La Zowi" },
    { "@type": "MusicGroup", "name": "Kid Voodoo" },
    { "@type": "MusicGroup", "name": "Lorna" },
    { "@type": "MusicGroup", "name": "C Marí" }
  ],
  "offers": {
    "@type": "Offer",
    "url": "https://revefest.com/entradas",
    "price": "49.50",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "validFrom": "2025-01-01T00:00:00+02:00"
  },
  "organizer": {
    "@type": "Organization",
    "name": "REVE FEST",
    "url": "https://revefest.com"
  }
};

// HARDCODEADO: Datos de la organización
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "REVE FEST",
  "alternateName": "REVE FEST 2026",
  "url": "https://revefest.com",
  "logo": "https://revefest.com/logo.png",
  "sameAs": [
    "https://instagram.com/revefest",
    "https://tiktok.com/@revefest",
    "https://facebook.com/revefest",
    "https://youtube.com/@revefest"
  ],
  "description": "El único festival de música urbana solidario en Valencia. Todo el beneficio va a microconciertos® para salud mental."
};

// HARDCODEADO: Datos del sitio web
const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "REVE FEST",
  "url": "https://revefest.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://revefest.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function StructuredData() {
  return (
    <>
      <Script
        id="schema-event"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENT_SCHEMA) }}
      />
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      />
    </>
  );
}
