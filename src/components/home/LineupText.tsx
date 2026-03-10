'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import artistasData from '@/data/artistas.json';

const LineupText: React.FC = () => {
    const artists = artistasData.sort((a, b) => a.order - b.order);

    return (
        <section id="lineup" className="container mx-auto px-6 py-4 md:py-8 scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 border-b border-foreground/5 pb-4">
                <div className="flex flex-col gap-8 flex-grow">
                    <h2 
                        className="text-4xl md:text-5xl font-bold uppercase flex items-center gap-4 shrink-0 cursor-pointer hover:text-primary transition-colors"
                        onClick={() => {
                            document.getElementById('lineup')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Lineup 
                        <Image 
                            src="/images/destello.svg" 
                            alt="" 
                            width={32} 
                            height={32} 
                            className="w-6 h-6 md:w-8 md:h-8 text-primary" 
                            style={{ filter: 'invert(55%) sepia(83%) saturate(2049%) hue-rotate(298deg) brightness(101%) contrast(101%)' }}
                        />
                    </h2>

                    {/* Mobile: 2 filas fijas de 3 artistas */}
                    <div className="grid grid-cols-3 md:hidden w-full">
                        {artists.map((artista, index) => (
                            <div 
                                key={artista.id} 
                                className="flex items-center justify-between py-2 px-1"
                            >
                                <Link
                                    href={`/artistas/${artista.slug}`}
                                    className="text-[11pt] font-light hover:text-primary transition-colors cursor-pointer uppercase tracking-tight flex-1 text-center"
                                >
                                    {artista.name}
                                </Link>
                                {/* Barra al final fijo, excepto posición 2 y 5 */}
                                {index !== 2 && index !== 5 && (
                                    <span className="text-foreground/20 text-xl font-light pl-2">|</span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop: wrap fluido */}
                    <div className="hidden md:flex flex-wrap items-center gap-x-6 gap-y-4">
                        {artists.map((artista, index) => (
                            <React.Fragment key={artista.id}>
                                <Link
                                    href={`/artistas/${artista.slug}`}
                                    className="text-[18pt] font-light hover:text-primary transition-colors cursor-pointer uppercase tracking-tight"
                                >
                                    {artista.name}
                                </Link>
                                {index < artists.length - 1 && (
                                    <span className="text-foreground/20 text-2xl font-light">|</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Desktop Button */}
                    <Link
                        href="/guia-de-compra"
                        className="hidden md:inline-flex bg-black text-white px-8 py-3 text-sm font-bold rounded-sm hover:bg-foreground/80 transition-all w-fit tracking-wider uppercase"
                    >
                        + INFORMACIÓN
                    </Link>
                </div>

                <div className="flex flex-row gap-4 w-full md:w-auto mt-6 md:mt-0">
                    <Link
                        href="/entradas"
                        className="flex-1 md:flex-none bg-primary text-white px-8 py-4 text-xl font-bold rounded-sm hover:bg-foreground transition-all text-center shadow-xl tracking-widest uppercase flex items-center justify-center min-h-[64px]"
                    >
                        TICKETS
                    </Link>

                    {/* Mobile Button */}
                    <Link
                        href="/guia-de-compra"
                        className="flex-1 md:hidden bg-black text-white px-8 py-4 text-xl font-bold rounded-sm hover:bg-foreground/80 transition-all text-center tracking-widest uppercase flex items-center justify-center min-h-[64px]"
                    >
                        + INFO
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LineupText;
