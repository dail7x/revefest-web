'use client';

import React from 'react';
import HeroCarousel from '@/components/home/HeroCarousel';
import MobileLineupCarousel from '@/components/home/MobileLineupCarousel';
import LineupGrid from '@/components/home/LineupGrid';
import TicketsSection from '@/components/home/TicketsSection';
import Newsletter from '@/components/home/Newsletter';
import Link from 'next/link';
import artistasData from '@/data/artistas.json';

export default function Home() {
  const headlinersNames = artistasData
    .sort((a, b) => a.order - b.order)
    .map(a => a.name);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* SECCIÓN 2: CARROUSELS (Hero Desktop / Lineup Mobile) - FEAT-004 & 005 */}
      <section className="w-full">
        <HeroCarousel />
        <MobileLineupCarousel />
      </section>

      {/* SECCIÓN 3: LINEUP TEXTO + CTA - FEAT-006 */}
      <section id="lineup" className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 border-b border-foreground/5 pb-16">
          <div className="flex flex-col gap-8 flex-grow">
            <h2 className="text-4xl md:text-5xl font-bold uppercase flex items-center gap-4 italic shrink-0">
              Lineup <span className="text-primary tracking-tighter">◆</span>
            </h2>

            {/* Horizontal scrolling or wrapped names list */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              {headlinersNames.map((name, index) => (
                <React.Fragment key={name}>
                  <Link
                    href={`/artistas/${artistasData[index].slug}`}
                    className="text-[14pt] md:text-[18pt] font-light hover:text-primary transition-colors cursor-pointer uppercase tracking-tight"
                  >
                    {name}
                  </Link>
                  {index < headlinersNames.length - 1 && (
                    <span className="text-foreground/20 text-2xl font-light">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <Link
            href="/entradas"
            className="bg-primary text-white px-12 py-4 text-xl font-bold rounded-sm hover:bg-foreground transition-all text-center self-start md:self-center shadow-xl tracking-widest uppercase"
          >
            TICKETS
          </Link>
        </div>

        {/* SECCIÓN 4: LINEUP GRID (Desktop Only) - FEAT-007 */}
        <LineupGrid />
      </section>

      {/* SECCIÓN 5: TICKETS (Tiers + Mapa) - FEAT-008 */}
      <TicketsSection />

      {/* SECCIÓN 6: NEWSLETTER - FEAT-009 */}
      <Newsletter />

    </div>
  );
}
