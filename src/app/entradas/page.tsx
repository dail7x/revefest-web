'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const EntradasPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

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

            // 3. Monitor for iframe insertion to hide loader
            const observer = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                    if (mutation.type === 'childList') {
                        const iframe = containerRef.current?.querySelector('iframe');
                        if (iframe) {
                            // Give it a tiny bit of extra time to render internal content
                            setTimeout(() => setIsLoading(false), 500);
                            observer.disconnect();
                        }
                    }
                }
            });

            observer.observe(containerRef.current, { childList: true });

            // Cleanup observer if component unmounts
            return () => observer.disconnect();
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
            <style jsx global>{`
                @keyframes pulse-color {
                    0%, 100% { color: #1d1d1b; transform: scale(1); }
                    50% { color: #fc56ae; transform: scale(1.05); }
                }
                .logo-pulse {
                    animation: pulse-color 1.5s ease-in-out infinite;
                }
            `}</style>

            <div className="container mx-auto px-4 md:px-6">

                {/* 
                    "Compra" Title Section 
                    Visible ONLY if NOT Sticky and aligned left with Logo
                */}
                <div className={`flex flex-col gap-1 mb-4 pt-8 transition-opacity duration-300 ${isSticky ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="flex items-center gap-3">
                        <h1 className="text-[20pt] md:text-[28pt] font-black uppercase tracking-tighter text-black leading-none">
                            Compra
                        </h1>
                        <div className="flex items-center gap-2">
                            <Image 
                                src="/images/destello.svg" 
                                alt="" 
                                width={28} 
                                height={28} 
                                className="w-5 h-5 md:w-7 md:h-7" 
                                style={{ filter: 'invert(55%) sepia(83%) saturate(2049%) hue-rotate(298deg) brightness(101%) contrast(101%)' }}
                            />
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
                <div className="max-w-4xl mx-auto relative min-h-[600px]">

                    {/* LOADING PLACEHOLDER */}
                    {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 transition-opacity duration-500 pt-20">
                            <div className="flex flex-col items-center gap-8">
                                {/* Pulse Logo with Mask to control color transitions */}
                                <div className="logo-pulse w-48 md:w-64 h-24 relative">
                                    <div
                                        className="absolute inset-0 bg-current"
                                        style={{
                                            maskImage: 'url(/images/Logos/LOGO_REVE_SVG.svg)',
                                            WebkitMaskImage: 'url(/images/Logos/LOGO_REVE_SVG.svg)',
                                            maskRepeat: 'no-repeat',
                                            WebkitMaskRepeat: 'no-repeat',
                                            maskPosition: 'center',
                                            WebkitMaskPosition: 'center',
                                            maskSize: 'contain',
                                            WebkitMaskSize: 'contain'
                                        }}
                                    />
                                </div>

                                <div className="logo-pulse flex flex-col items-center gap-2">
                                    <div className="text-[10pt] font-black uppercase tracking-[0.3em] italic">
                                        Cargando
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-2 h-2 rounded-full bg-current animate-bounce"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

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
