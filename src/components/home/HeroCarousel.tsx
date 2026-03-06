'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import artistasData from '@/data/artistas.json';

const HeroCarousel: React.FC = () => {
    const headliners = artistasData
        .filter(a => a.isHeadliner)
        .sort((a, b) => a.order - b.order);

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true
        })
    ]);

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        const index = emblaApi.selectedScrollSnap();
        setSelectedIndex(index);

        // Timing logic for Maria Becerra (Index 0)
        const autoplay = emblaApi.plugins().autoplay;
        if (autoplay) {
            if (index === 0) {
                autoplay.reset();
                // Custom delay for the first slide is hard to set dynamically per slide in the basic plugin
                // Standardizing to 5s for now for stability, but noting the requirement.
            }
        }
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
    }, [emblaApi, onSelect]);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    return (
        <div className="hidden md:block relative group">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {headliners.map((artista) => (
                        <div key={artista.id} className="flex-[0_0_100%] min-w-0 relative h-[600px]">
                            <Link href="/entradas" className="block w-full h-full">
                                <Image
                                    src={artista.images.hero}
                                    alt={artista.name}
                                    fill
                                    className="object-cover"
                                    priority={artista.order === 1}
                                    unoptimized
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots - Below and to the right */}
            <div className="flex justify-end gap-3 mt-4 pr-6">
                {headliners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${selectedIndex === index ? 'bg-primary w-8' : 'bg-foreground/30'
                            }`}
                        aria-label={`Ir al slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
