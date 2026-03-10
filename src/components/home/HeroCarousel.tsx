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
    { id: 1, type: 'image', src: '/images/artists/Hero/bannerweb_Maria.webp', alt: 'María Becerra' },
    { id: 2, type: 'video', src: '/images/artists/Hero/videobanner_final.mp4', alt: 'Video REVE' },
    { id: 3, type: 'image', src: '/images/artists/Hero/bannerweb_general.webp', alt: 'REVE FEST' },
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
        const index = emblaApi.selectedScrollSnap();
        setSelectedIndex(index);
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
            <div className="overflow-hidden max-w-5xl mx-auto" ref={emblaRef}>
                <div className="flex">
                    {heroSlides.map((slide) => (
                        <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-[540px]">
                            <Link href="/entradas" className="block w-full h-full">
                                {slide.type === 'video' ? (
                                    <video
                                        src={slide.src}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <Image
                                        src={slide.src}
                                        alt={slide.alt}
                                        fill
                                        className="object-contain"
                                        priority={slide.id === 1}
                                        unoptimized
                                    />
                                )}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots - Below and to the right */}
            <div className="flex justify-end gap-3 mt-4 pr-6 max-w-5xl mx-auto">
                {heroSlides.map((_, index) => (
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
