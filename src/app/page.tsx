'use client';

import React from 'react';
import HeroCarousel from '@/components/home/HeroCarousel';
import MobileLineupCarousel from '@/components/home/MobileLineupCarousel';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* SECCIÓN 2: CARROUSELS (Hero Desktop / Lineup Mobile) */}
      <section className="w-full">
        <HeroCarousel />
        <MobileLineupCarousel />
      </section>

      {/* SECCIÓN 3: LINEUP TEXTO + CTA (FEAT-006 - Placeholder para Fase 2) */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold uppercase flex items-center gap-3">
              Lineup <span className="text-primary tracking-tighter">◆</span>
            </h2>
            <p className="text-xl font-light text-foreground/60 max-w-xl">
              Pronto revelaremos el cartel completo de artistas para los dos escenarios.
            </p>
          </div>
          <Link
            href="/entradas"
            className="bg-primary text-white px-10 py-4 text-xl font-bold rounded-md hover:bg-primary/95 transition-all text-center md:self-center shadow-lg"
          >
            TICKETS
          </Link>
        </div>
      </section>

      {/* PLACEHOLDERS PARA SIGUIENTES FASES */}
      <section id="tickets" className="py-20 bg-[#f1f2f4]/50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold uppercase mb-4">ENTRADAS Y MAPA</h3>
          <p className="text-foreground/40 italic">Próximamente disponible</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold uppercase mb-4">NEWSLETTER</h3>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-grow border border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-white px-6 py-2 font-bold rounded-md uppercase text-sm">Suscribirme</button>
          </div>
        </div>
      </section>
    </div>
  );
}
