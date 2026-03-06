'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { Ticket } from 'lucide-react';

const TicketsSection: React.FC = () => {
    const tiers = [
        {
            name: 'Entrada General',
            title: 'Entrada General',
            badge: '¡Últimas entradas a 18€!\nVente al precio más bajo.',
            description: 'Acceso completo al REVE FEST en el Roig Arena (jueves 16 de julio de 13h a 24h).',
            price: '18€',
            category: 'Pista General',
            buttonColor: 'bg-[#fc56ae]',
            textColor: 'text-white'
        },
        {
            name: 'Front Stage',
            title: '✦ Front Stage ✦',
            badge: '¡Aforo limitado!\nÚltimas entradas.',
            description: 'Primera linea al escenario principal del REVE FEST en el Roig Arena (jueves 16 de julio de 13h a 24h).',
            price: '72€',
            category: 'Front Stage',
            buttonColor: 'bg-[#ffff00]',
            textColor: 'text-black'
        },
    ];

    const [emblaRef] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' });

    return (
        <section id="tickets" className="py-6 md:py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 flex items-center gap-3 italic">
                    Tickets <span className="text-[#fc56ae] tracking-tighter">◆</span> <Ticket className="w-8 h-8 md:w-10 md:h-10 text-black fill-transparent stroke-[2.5px]" />
                </h2>

                {/* Desktop Layout */}
                <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
                    {/* Tickets Column */}
                    <div className="col-span-8 flex gap-6">
                        {tiers.map((tier) => (
                            <div key={tier.name} className="flex-1 border border-gray-200 p-8 flex flex-col min-h-[600px] shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-4xl font-extrabold uppercase text-center mb-6 tracking-tight">
                                    {tier.title}
                                </h3>

                                <div className="bg-[#1d1d1b] text-white py-6 px-4 text-center my-4 h-[120px] flex flex-col justify-center items-center">
                                    {tier.badge.split('\n').map((line, i) => (
                                        <p key={i} className={`text-lg font-medium ${i === 0 ? 'text-white' : 'text-white/80'}`}>
                                            {line}
                                        </p>
                                    ))}
                                </div>

                                <p className="text-gray-500 font-light text-md leading-relaxed mt-6 mb-8 text-center px-4">
                                    {tier.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex items-center justify-between py-6 border-b border-gray-100 mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full border border-gray-400 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                                            </div>
                                            <Ticket className="w-6 h-6 text-black" />
                                            <span className="text-xl font-bold">{tier.price}</span>
                                        </div>
                                        <span className="text-lg font-normal text-gray-800 uppercase tracking-tight">
                                            {tier.category}
                                        </span>
                                    </div>

                                    <p className="text-[10pt] text-gray-400 italic mb-6">
                                        * Gastos de gestión incluidos.
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
                        <h3 className="text-4xl font-extrabold uppercase mb-6 tracking-tight">Guía de asientos</h3>

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

                        <div className="relative w-full aspect-square">
                            <Image
                                src="/images/GuiaAsientos.webp"
                                alt="Fano Seating Map"
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden flex flex-col gap-10">
                    {/* Mobile Slider */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-4 p-2">
                            {tiers.map((tier) => (
                                <div key={tier.name} className="flex-[0_0_88%] min-w-0 border border-gray-200 p-6 flex flex-col shadow-sm">
                                    <h3 className="text-3xl font-extrabold uppercase text-center mb-6 tracking-tight leading-none h-[64px] flex items-center justify-center">
                                        {tier.title}
                                    </h3>

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

                                    <div className="flex items-center justify-between py-4 border-b border-gray-100 mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full border border-gray-400 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                                            </div>
                                            <Ticket className="w-5 h-5 text-black" />
                                            <span className="text-lg font-bold">{tier.price}</span>
                                        </div>
                                        <span className="text-sm font-normal text-gray-800 uppercase tracking-tight">
                                            {tier.category}
                                        </span>
                                    </div>

                                    <p className="text-[9pt] text-gray-400 italic mb-4">
                                        * Gastos de gestión incluidos.
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

                    {/* Mobile Map Section */}
                    <div className="border border-gray-200 p-6 shadow-sm">
                        <h3 className="text-3xl font-extrabold uppercase mb-6 tracking-tight text-center">Guía de asientos</h3>

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

                        <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                            <Image
                                src="/images/GuiaAsientos.webp"
                                alt="Fano Seating Map"
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TicketsSection;
