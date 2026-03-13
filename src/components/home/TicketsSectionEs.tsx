'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { Ticket } from 'lucide-react';
import { useCallback, useState, useEffect } from 'react';

const TicketsSectionEs: React.FC = () => {
    const tiers = [
        {
            name: 'Entrada General',
            title: 'Entrada General',
            badge: '¡Últimas entradas!\nVente al precio más bajo.',
            description: 'Acceso completo al REVE FEST en el Roig Arena (jueves 16 de julio de 13h a 24h).',
            price: '45€',
            categories: ['Pista General', 'Grada General'],
            buttonColor: 'bg-[#fc56ae]',
            textColor: 'text-white'
        },
        {
            name: 'Front Stage',
            title: '✦ Front Stage ✦',
            badge: '¡Aforo limitado!\nÚltimas entradas.',
            description: 'Primera linea al escenario principal del REVE FEST en el Roig Arena (jueves 16 de julio de 13h a 24h).',
            price: '75€',
            category: 'Front Stage',
            buttonColor: 'bg-[#ffff00]',
            textColor: 'text-black'
        },
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => { emblaApi.off('select', onSelect); };
    }, [emblaApi, onSelect]);

    return (
        <section id="tickets" className="py-6 md:py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 flex items-center gap-3">
                    Tickets 
                    <Image 
                        src="/images/destello.svg" 
                        alt="" 
                        width={32} 
                        height={32} 
                        className="w-6 h-6 md:w-8 md:h-8" 
                        style={{ filter: 'invert(55%) sepia(83%) saturate(2049%) hue-rotate(298deg) brightness(101%) contrast(101%)' }}
                    />
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                        <Image src="/images/Ticket.svg" alt="Ticket Icon" fill className="object-contain" />
                    </div>
                </h2>

                {/* Desktop Layout */}
                <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
                    {/* Tickets Column */}
                    <div className="col-span-8 flex gap-6">
                        {tiers.map((tier) => (
                            <div key={tier.name} className="flex-1 border border-gray-200 p-8 flex flex-col min-h-[600px] shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-[80px] flex items-center justify-center mb-4">
                                    <h3 className="text-2xl md:text-[26pt] font-extrabold uppercase text-center tracking-tighter leading-none">
                                        {tier.title}
                                    </h3>
                                </div>

                                <div className="bg-[#1d1d1b] text-white py-6 px-4 text-center mb-6 h-[120px] flex flex-col justify-center items-center">
                                    {tier.badge.split('\n').map((line, i) => (
                                        <p key={i} className={`text-lg font-medium ${i === 0 ? 'text-white' : 'text-white/80'}`}>
                                            {line}
                                        </p>
                                    ))}
                                </div>

                                <p className="text-gray-500 font-light text-md leading-relaxed mb-8 text-center px-4 min-h-[80px]">
                                    {tier.description}
                                </p>

                                <div className="mt-auto">
                                    {/* Categorías de tickets */}
                                    <div className="py-6 border-b border-gray-100 mb-6 space-y-4">
                                        {tier.categories ? (
                                            // Entrada General con múltiples categorías
                                            tier.categories.map((cat) => (
                                                <div key={cat} className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="relative w-6 h-6">
                                                            <Image src="/images/Ticket.svg" alt="Ticket" fill className="object-contain" />
                                                        </div>
                                                        <span className="text-xl font-bold">{tier.price}</span>
                                                    </div>
                                                    <span className="text-lg font-normal text-gray-800 uppercase tracking-tight">
                                                        {cat}
                                                    </span>
                                                </div>
                                            ))
                                        ) : (
                                            // Front Stage u otros con una sola categoría
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative w-6 h-6">
                                                        <Image src="/images/Ticket.svg" alt="Ticket" fill className="object-contain" />
                                                    </div>
                                                    <span className="text-xl font-bold">{tier.price}</span>
                                                </div>
                                                <span className="text-lg font-normal text-gray-800 uppercase tracking-tight">
                                                    {tier.category}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-[10pt] text-gray-400 italic mb-6">
                                        * Gastos de gestión no incluidos.
                                    </p>

                                    <Link
                                        href="/entradas"
                                        className={`block w-full ${tier.buttonColor} ${tier.textColor} py-4 text-center font-bold text-lg tracking-wider uppercase transition-transform active:scale-95`}
                                    >
                                        Comprar Ticket
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Map Column */}
                    <div className="col-span-4 border border-transparent">
                        <h3 className="text-[26pt] font-extrabold uppercase mb-6 tracking-tighter leading-none">Guía de asientos</h3>

                        <div className="flex flex-col gap-2 mb-8 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-black" />
                                <span>Escenario.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-[#ffff00]" />
                                <span>Front Stage.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-[#fc56ae]" />
                                <span>Pista General y Anillo 1 y 2.</span>
                            </div>
                        </div>

                        <Link href="/entradas" className="relative w-full aspect-square block hover:opacity-90 transition-opacity">
                            <Image
                                src="/images/GuiaAsientos.webp"
                                alt="Fano Seating Map"
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </Link>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden flex flex-col gap-6">
                    {/* Mobile Slider */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-4 p-2">
                            {tiers.map((tier) => (
                                <div key={tier.name} className="flex-[0_0_88%] min-w-0 border border-gray-200 p-6 flex flex-col shadow-sm">
                                    <div className="h-[70px] flex items-center justify-center mb-4">
                                        <h3 className="text-2xl font-extrabold uppercase text-center tracking-tighter leading-none">
                                            {tier.title}
                                        </h3>
                                    </div>

                                    <div className="bg-[#1d1d1b] text-white py-5 px-4 text-center my-4 h-[100px] flex flex-col justify-center items-center">
                                        {tier.badge.split('\n').map((line, i) => (
                                            <p key={i} className={`text-md font-medium ${i === 0 ? 'text-white' : 'text-white/80'}`}>
                                                {line}
                                            </p>
                                        ))}
                                    </div>

                                    <p className="text-gray-500 font-light text-sm leading-relaxed mt-4 mb-6 text-center">
                                        {tier.description}
                                    </p>

                                    <div className="py-4 border-b border-gray-100 mb-4 space-y-3">
                                        {tier.categories ? (
                                            tier.categories.map((cat) => (
                                                <div key={cat} className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div className="relative w-5 h-5">
                                                            <Image src="/images/Ticket.svg" alt="Ticket" fill className="object-contain" />
                                                        </div>
                                                        <span className="text-lg font-bold">{tier.price}</span>
                                                    </div>
                                                    <span className="text-sm font-normal text-gray-800 uppercase tracking-tight">
                                                        {cat}
                                                    </span>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="relative w-5 h-5">
                                                        <Image src="/images/Ticket.svg" alt="Ticket" fill className="object-contain" />
                                                    </div>
                                                    <span className="text-lg font-bold">{tier.price}</span>
                                                </div>
                                                <span className="text-sm font-normal text-gray-800 uppercase tracking-tight">
                                                    {tier.category}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-[9pt] text-gray-400 italic mb-4">
                                        * Gastos de gestión no incluidos.
                                    </p>

                                    <Link
                                        href="/entradas"
                                        className={`block w-full ${tier.buttonColor} ${tier.textColor} py-4 text-center font-bold text-md tracking-wider uppercase active:scale-95`}
                                    >
                                        Comprar Ticket
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-2">
                        {tiers.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className={`w-2 h-2 rounded-full transition-all ${selectedIndex === index ? 'bg-primary w-6' : 'bg-foreground/30'}`}
                                aria-label={`Ir al tier ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Mobile Map Section */}
                    <div className="border border-gray-200 p-6 shadow-sm">
                        <h3 className="text-[24pt] font-extrabold uppercase mb-6 tracking-tighter text-center leading-none">Guía de asientos</h3>

                        <div className="flex flex-col gap-2 mb-8 text-[11pt] font-medium justify-center pl-4">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-black" />
                                <span>Escenario.</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-[#ffff00]" />
                                <span>Front Stage.</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-[#fc56ae]" />
                                <span>Entrada General.</span>
                            </div>
                        </div>

                        <Link href="/entradas" className="relative w-full aspect-square max-w-[400px] mx-auto block">
                            <Image
                                src="/images/GuiaAsientos.webp"
                                alt="Fano Seating Map"
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TicketsSectionEs;
