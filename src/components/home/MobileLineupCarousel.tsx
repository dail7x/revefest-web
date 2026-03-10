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
                                <div className="relative aspect-[3/4] overflow-hidden shadow-lg border border-gray-100">
                                    <Image
                                        src={artista.images.cartel}
                                        alt={artista.name}
                                        fill
                                        className="object-cover object-top"
                                        priority={artista.order <= 2}
                                        unoptimized
                                    />

                                </div>
                            </Link>
                        </div>
                    ))}
                    {/* Extra spacer for the right edge to match padding-left */}
                    <div className="flex-[0_0_4vw]" />
                </div>
            </div>

            {/* Grid textual below (fallback/quick list) per FEAT-005 spec */}
        </div>
    );
};

export default MobileLineupCarousel;
