'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import artistasData from '@/data/artistas.json';

const MobileLineupCarousel: React.FC = () => {
    const [emblaRef] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps'
    });

    const artists = artistasData.sort((a, b) => a.order - b.order);

    return (
        <div className="md:hidden pt-4">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex px-4 gap-4">
                    {artists.map((artista) => (
                        <div
                            key={artista.id}
                            className="flex-[0_0_85vw] min-w-0"
                        >
                            <Link href={`/artistas/${artista.slug}`} className="block">
                                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                    <Image
                                        src={artista.images.cartel}
                                        alt={artista.name}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Fallback label if image is too busy */}
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                                        <span className="text-white font-bold text-xl uppercase italic tracking-tighter">
                                            {artista.name}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                    {/* Extra spacer for the right edge to match padding-left */}
                    <div className="flex-[0_0_4vw]" />
                </div>
            </div>

            {/* Grid textual below (fallback/quick list) per FEAT-005 spec */}
            <div className="px-6 py-8">
                <h2 className="text-3xl font-bold uppercase mb-4 flex items-center gap-2 italic">
                    Lineup <span className="text-primary tracking-tighter">◆</span>
                </h2>
                <div className="flex flex-wrap gap-2 text-[14pt] font-light leading-none uppercase">
                    {artists.map((a, i) => (
                        <React.Fragment key={a.id}>
                            <Link href={`/artistas/${a.slug}`} className="hover:text-primary transition-colors">
                                {a.name}
                            </Link>
                            {i < artists.length - 1 && <span className="text-foreground/20">|</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileLineupCarousel;
