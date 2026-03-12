"use client";

import Script from "next/script";
import eventData from "@/data/event.json";
import artistasData from "@/data/artistas.json";

// Datos dinámicos desde event.json
// Para actualizar fechas, lugar o información general, modificar src/data/event.json
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://revefest.com";

const EVENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  "name": eventData.name,
  "description": eventData.description,
  "startDate": eventData.date.start,
  "endDate": eventData.date.end,
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": eventData.location.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": eventData.location.address.street,
      "addressLocality": eventData.location.address.city,
      "addressRegion": eventData.location.address.region,
      "postalCode": eventData.location.address.postalCode,
      "addressCountry": eventData.location.address.country
    }
  },
  "image": [`${baseUrl}${eventData.images.og}`],
  "performer": artistasData
    .filter(a => a.isHeadliner)
    .sort((a, b) => a.order - b.order)
    .map(a => ({ "@type": "MusicGroup", "name": a.name })),
  "offers": {
    "@type": "Offer",
    "url": `${baseUrl}/entradas`,
    "price": eventData.tickets.startingPrice.toString(),
    "priceCurrency": eventData.tickets.currency,
    "availability": "https://schema.org/InStock",
    "validFrom": eventData.tickets.onSaleFrom
  },
  "organizer": {
    "@type": "Organization",
    "name": eventData.organizer.name,
    "url": eventData.organizer.url
  }
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": eventData.organizer.name,
  "alternateName": eventData.name,
  "url": eventData.organizer.url,
  "logo": `${baseUrl}${eventData.images.logo}`,
  "sameAs": [
    eventData.organizer.social.instagram,
    eventData.organizer.social.tiktok,
    eventData.organizer.social.facebook,
    eventData.organizer.social.youtube
  ],
  "description": eventData.description
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": eventData.organizer.name,
  "url": eventData.organizer.url,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${baseUrl}/?q={search_term_string}`,
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
