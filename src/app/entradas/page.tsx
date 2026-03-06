'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const EntradasPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        // 1. Hash handling
        if (!window.location.hash) {
            window.location.hash = 'events/DYLL';
        }

        // 2. Script Injection
        if (containerRef.current) {
            containerRef.current.innerHTML = '';
            const script = document.createElement('script');
            script.src = "https://www.fourvenues.com/assets/iframe/revefest/DYLL";
            script.async = true;
            containerRef.current.appendChild(script);
        }

        // 3. Scroll tracking
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="min-h-screen bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* 
                    "Compra" Title Section 
                    Visible ONLY if NOT Sticky and aligned left with Logo
                */}
                <div className={`flex flex-col gap-1 mb-4 transition-opacity duration-300 ${isSticky ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="flex items-center gap-3">
                        <h1 className="text-[28pt] md:text-[36pt] font-black uppercase tracking-tighter text-black leading-none">
                            Compra
                        </h1>
                        <div className="flex items-center gap-2">
                            <span className="text-xl md:text-3xl text-primary leading-none">◆</span>
                            <div className="relative w-10 h-6 md:w-14 md:h-8">
                                <Image
                                    src="/images/Ticket.webp"
                                    alt="Ticket Icon"
                                    fill
                                    className="object-contain grayscale brightness-0"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 
                    Main Widget Container
                    Limiting max-width for better desktop look
                */}
                <div className="max-w-4xl mx-auto">
                    <div
                        id="fourvenues-iframe"
                        ref={containerRef}
                        className="w-full min-h-[900px] bg-white"
                    >
                    </div>
                </div>

                {/* Footer Info */}
                <div className="max-w-2xl mx-auto mt-16 text-center text-[10px] opacity-30 font-light uppercase tracking-[0.2em] leading-relaxed text-black pb-20">
                    <p>
                        AL COMPRAR TU ENTRADA ACEPTAS LAS CONDICIONES GENERALES. <br />
                        CONSULTA LA GUÍA DE COMPRA PARA MÁS INFO.
                    </p>
                </div>

            </div>
        </main>
    );
};

export default EntradasPage;
