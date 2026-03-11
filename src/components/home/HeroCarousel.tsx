'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSlide {
    id: number;
    type: 'image' | 'video';
    src: string;
    alt: string;
}

const heroSlides: HeroSlide[] = [
    { id: 1, type: 'image', src: '/images/artists/Hero/MariaBecerraHero_169.webp', alt: 'María Becerra' },
];

const HeroCarousel: React.FC = () => {
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
        setSelectedIndex(emblaApi.selectedScrollSnap());
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
        <div className="hidden md:block relative w-full">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {heroSlides.map((slide) => (
                        <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative aspect-[16/9] max-h-[70vh]">
                            <Link href="/entradas" className="block w-full h-full">
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    fill
                                    className="object-cover object-center"
                                    priority={slide.id === 1}
                                    unoptimized
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots - Hidden when only one slide */}
            {heroSlides.length > 1 && (
                <div className="flex justify-end gap-3 mt-4 pr-6">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${selectedIndex === index ? 'bg-primary w-8' : 'bg-foreground/30'}`}
                            aria-label={`Ir al slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeroCarousel;
