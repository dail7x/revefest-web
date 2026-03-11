'use client';

import React from 'react';
import HeroCarousel from '@/components/home/HeroCarousel';
import MobileLineupCarousel from '@/components/home/MobileLineupCarousel';
import LineupGrid from '@/components/home/LineupGrid';
import LineupText from '@/components/home/LineupText';
import TicketsSection from '@/components/home/TicketsSection';
import Newsletter from '@/components/home/Newsletter';
import CookieConsent from '@/components/CookieConsent';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* SECCIÓN 2: CARROUSELS (Hero Desktop / Lineup Mobile) - FEAT-004 & 005 */}
      <section className="w-full">
        <HeroCarousel />
        <div id="lineup-grid" className="scroll-mt-24">
          <MobileLineupCarousel />
        </div>
      </section>

      {/* SECCIÓN 3: LINEUP TEXTO + CTA (Unified) */}
      <LineupText />

      {/* SECCIÓN 4: LINEUP GRID (Desktop Only) - FEAT-007 */}
      <div id="lineup-grid-desktop" className="container mx-auto px-6 pb-4 md:pb-6 scroll-mt-24">
        <LineupGrid />
      </div>

      {/* COOKIE CONSENT - Inline entre Lineup y Tickets */}
      <CookieConsent variant="inline" />

      {/* SECCIÓN 5: TICKETS (Tiers + Mapa) - FEAT-008 */}
      <TicketsSection />

      {/* SECCIÓN 6: NEWSLETTER - FEAT-009 - OCULTO TEMPORALMENTE */}
      {/* <Newsletter /> */}

    </div>
  );
}
