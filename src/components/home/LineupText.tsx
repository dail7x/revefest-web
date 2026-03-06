'use client';

import React from 'react';
import Link from 'next/link';
import artistasData from '@/data/artistas.json';

const LineupText: React.FC = () => {
    const artists = artistasData.sort((a, b) => a.order - b.order);

    return (
        <section id="lineup" className="container mx-auto px-6 py-12 md:py-24">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 border-b border-foreground/5 pb-16">
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
                </div>

                <Link
                    href="/entradas"
                    className="bg-primary text-white px-12 py-4 text-xl font-bold rounded-sm hover:bg-foreground transition-all text-center self-start md:self-center shadow-xl tracking-widest uppercase"
                >
                    TICKETS
                </Link>
            </div>
        </section>
    );
};

export default LineupText;
