'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const EntradasPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 1. Aseguramos el Hash para cargar el mapa directamente
        if (!window.location.hash) {
            window.location.hash = 'events/DYLL';
        }

        // 2. Inyectamos el script oficial en el contenedor con el ID esperado
        if (containerRef.current) {
            containerRef.current.innerHTML = '';
            const script = document.createElement('script');
            script.src = "https://www.fourvenues.com/assets/iframe/revefest/DYLL";
            script.async = true;
            containerRef.current.appendChild(script);
        }
    }, []);

    return (
        <main className="min-h-screen bg-white">
            {/* 
                pt-12 md:pt-4: Reducimos drásticamente el espacio superior. 
                En desktop casi no hay espacio para que el widget quede centrado.
            */}
            <div className="container mx-auto px-4 md:px-6 pt-12 md:pt-4 pb-10">

                {/* Title Section: Oculta en Desktop, visible en Mobile */}
                <div className="md:hidden flex flex-col gap-1 mb-6">
                    <div className="flex items-center gap-3">
                        <h1 className="text-[28pt] font-black uppercase tracking-tighter text-black leading-none">
                            Compra
                        </h1>
                        <div className="flex items-center gap-2">
                            <span className="text-xl text-primary leading-none">◆</span>
                            <div className="relative w-10 h-6">
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
                    <p className="text-[9pt] font-light uppercase tracking-[0.2em] opacity-80 text-black">
                        16.07.26 • ROIG ARENA
                    </p>
                </div>

                {/* 
                    Contenedor del Widget: 
                    Limitamos el max-width en desktop para "reducir el tamaño" visualmente.
                */}
                <div className="max-w-4xl mx-auto">
                    <div
                        id="fourvenues-iframe"
                        ref={containerRef}
                        className="w-full min-h-[850px] bg-white"
                    >
                        {/* El script inyectará el widget aquí */}
                    </div>
                </div>

                {/* Footer Disclaimer */}
                <div className="max-w-2xl mx-auto mt-10 text-center text-[9px] md:text-[10px] opacity-30 font-light uppercase tracking-[0.2em] leading-relaxed text-black">
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
