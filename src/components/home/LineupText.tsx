'use client';

import React from 'react';
import Link from 'next/link';
import artistasData from '@/data/artistas.json';

const LineupText: React.FC = () => {
    const artists = artistasData.sort((a, b) => a.order - b.order);

    return (
        <section id="lineup" className="container mx-auto px-6 py-12 md:py-24">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 border-b border-foreground/5 pb-16">
                <div className="flex flex-col gap-8 flex-grow">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase flex items-center gap-4 italic shrink-0">
                        Lineup <span className="text-primary tracking-tighter">◆</span>
                    </h2>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                        {artists.map((artista, index) => (
                            <React.Fragment key={artista.id}>
                                <Link
                                    href={`/artistas/${artista.slug}`}
                                    className="text-[14pt] md:text-[18pt] font-light hover:text-primary transition-colors cursor-pointer uppercase tracking-tight"
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
                        className="hidden md:inline-flex bg-black text-white px-8 py-3 text-sm font-bold rounded-sm hover:bg-foreground/80 transition-all w-fit tracking-wider"
                    >
                        + INFORMACIÓN
                    </Link>
                </div>

                <div className="flex flex-row flex-wrap md:flex-col gap-4 w-full md:w-auto">
                    <Link
                        href="/entradas"
                        className="flex-1 md:flex-none bg-primary text-white px-12 py-4 text-xl font-bold rounded-sm hover:bg-foreground transition-all text-center shadow-xl tracking-widest uppercase"
                    >
                        TICKETS
                    </Link>

                    {/* Mobile Button */}
                    <Link
                        href="/guia-de-compra"
                        className="flex-1 md:hidden bg-black text-white px-4 py-4 text-sm font-bold rounded-sm hover:bg-foreground/80 transition-all text-center tracking-wider"
                    >
                        + INFO
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LineupText;
