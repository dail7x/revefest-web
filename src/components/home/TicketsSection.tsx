'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';

const TicketsSection: React.FC = () => {
    const tiers = [
        { name: 'Entrada General', price: '18€*', description: 'Acceso a todo el festival y 2 escenarios.', color: 'bg-foreground' },
        { name: 'Front Stage', price: '25€*', description: 'Zona exclusiva frente al escenario principal.', color: 'bg-primary' },
    ];

    const [emblaRef] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' });

    return (
        <section id="tickets" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold uppercase mb-12 flex items-center gap-3 italic">
                    Tickets <span className="text-primary tracking-tighter">◆</span>
                </h2>

                {/* Layout Container */}
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left: Tiers */}
                    <div className="w-full lg:w-1/2">

                        {/* Mobile Carousel */}
                        <div className="lg:hidden">
                            <div className="overflow-hidden" ref={emblaRef}>
                                <div className="flex gap-4">
                                    {tiers.map((tier) => (
                                        <div key={tier.name} className="flex-[0_0_85%] min-w-0 bg-[#f1f2f4] p-8 rounded-2xl flex flex-col gap-6 border border-gray-100 shadow-sm">
                                            <h3 className="text-2xl font-bold uppercase">{tier.name}</h3>
                                            <div className="text-5xl font-bold text-primary">{tier.price}</div>
                                            <p className="text-foreground/60 font-light">{tier.description}</p>
                                            <Link
                                                href="/entradas"
                                                className="mt-4 bg-primary text-white py-4 rounded-xl text-center font-bold tracking-widest hover:scale-[1.02] transition-transform"
                                            >
                                                COMPRAR
                                            </Link>
                                        </div>
                                    ))}
                                    <div className="flex-[0_0_1px]" />
                                </div>
                            </div>
                        </div>

                        {/* Desktop List */}
                        <div className="hidden lg:flex flex-col gap-6">
                            {tiers.map((tier) => (
                                <div
                                    key={tier.name}
                                    className="bg-[#f1f2f4] p-10 rounded-sm flex items-center justify-between group hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-primary"
                                >
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-2xl font-bold uppercase tracking-tight">{tier.name}</h3>
                                        <p className="text-foreground/60 font-light text-lg">{tier.description}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-4">
                                        <span className="text-4xl font-bold">{tier.price}</span>
                                        <Link
                                            href="/entradas"
                                            className="bg-primary text-white px-10 py-3 font-bold tracking-widest hover:bg-foreground transition-colors"
                                        >
                                            COMPRAR
                                        </Link>
                                    </div>
                                </div>
                            ))}
                            <p className="text-sm text-foreground/40 italic mt-4">* Gastos de gestión no incluidos.</p>
                        </div>
                    </div>

                    {/* Right: Map */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <div className="relative aspect-[16/10] w-full bg-gray-100 rounded-sm overflow-hidden shadow-2xl border border-gray-100">
                            <Image
                                src="/images/GuiaAsientos.webp"
                                alt="Mapa de asientos Roig Arena"
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                        <div className="flex items-center gap-4 text-sm font-light text-foreground/60 uppercase tracking-widest">
                            <span className="w-4 h-4 bg-primary rounded-full"></span>
                            Roig Arena • Valencia • Capacidad Limitada
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TicketsSection;
