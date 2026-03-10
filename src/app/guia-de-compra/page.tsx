'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Plus } from 'lucide-react';
import TicketsSection from '@/components/home/TicketsSection';

const FAQItem = ({
    question,
    answer,
    isOpen,
    onClick
}: {
    question: string,
    answer: string,
    isOpen: boolean,
    onClick: () => void
}) => {
    return (
        <div className="border-b border-gray-100 last:border-0 overflow-hidden">
            <button
                onClick={onClick}
                className={`w-full flex items-center justify-between py-5 text-left transition-all duration-300 group ${isOpen ? 'text-primary' : 'text-black hover:text-primary'
                    }`}
            >
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight flex-1 pr-4 leading-none">
                    {question}
                </h3>
                <ChevronDown className={`transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-primary' : 'text-primary'}`} size={20} />
            </button>

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] mb-4' : 'max-h-0'
                    }`}
            >
                <div className="bg-[#f1f2f4] p-6 rounded-sm text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQSection = ({
    title,
    faqs,
    openIndex,
    onToggle,
    sectionOffset
}: {
    title: string,
    faqs: { question: string, answer: string }[],
    openIndex: number | null,
    onToggle: (index: number) => void,
    sectionOffset: number
}) => {
    return (
        <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6 text-black">
                {title}
            </h2>
            <div className="border-t border-gray-200">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index + sectionOffset}
                        onClick={() => onToggle(index + sectionOffset)}
                    />
                ))}
            </div>
        </div>
    );
};

const GuiaDeCompraPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // FAQs sobre compra de tickets
    const guiaCompraFaqs = [
        {
            question: "¿Cómo recibo mis entradas?",
            answer: "Una vez completada la compra a través de Fourvenues, recibirás un correo electrónico de confirmación con tus entradas en formato PDF / QR. También podrás acceder a ellas a través de la app de Fourvenues."
        },
        {
            question: "¿Puedo cambiar el nombre de mi entrada?",
            answer: "Los cambios de nombre se gestionan directamente a través de la plataforma Fourvenues. Revisa las condiciones generales de tu entrada para ver si el cambio tiene algún coste asociado."
        },
        {
            question: "¿Cuál es la política de devoluciones?",
            answer: "Las entradas no son reembolsables. En caso de cancelación del evento por parte de la organización, se gestionará el reembolso según las condiciones establecidas en las condiciones generales de compra."
        }
    ];

    // FAQs sobre el evento (horarios, localización, etc.)
    const sobreEventoFaqs = [
        {
            question: "¿Cuándo y dónde es el REVEFEST?",
            answer: "REVEFEST 2026 se llevará a cabo el 16 de julio de 2026 en el Roig Arena de Valencia. Las puertas abrirán a las 13:00 y la música sonará hasta medianoche."
        },
        {
            question: "¿Pueden entrar menores de edad?",
            answer: "Sí, REVEFEST es un evento para todas las edades. Los menores de 16 años deberán ir acompañados de su padre, madre o tutor legal y presentar la autorización de menores debidamente cumplimentada. Los menores de entre 16 y 17 años pueden acceder solos con autorización firmada."
        },
        {
            question: "¿Se permite la entrada de comida y bebida?",
            answer: "No se permite la entrada de comida ni bebida del exterior, a excepción de una botella de agua pequeña (50cl) sin tapón. Dentro del recinto dispondrás de una amplia zona gastronómica y barras."
        },
        {
            question: "¿Existe zona para personas con movilidad reducida (PMR)?",
            answer: "Sí, el Roig Arena es un recinto totalmente accesible. Disponemos de zonas reservadas para PMR con visibilidad óptima. Por favor, selecciona la entrada correspondiente durante el proceso de compra."
        },
        {
            question: "¿Cuál es el horario de apertura y cierre?",
            answer: "Las puertas del Roig Arena abrirán a las 13:00h. El evento comenzará a las 14:00h y la música continuará hasta las 00:00h (medianoche)."
        },
        {
            question: "¿Cómo llegar al Roig Arena?",
            answer: "El Roig Arena está ubicado en Valencia. Puedes llegar en transporte público (Metro línea 3 o 5, estación Mislata), en autobús o en coche. Hay parking disponible en las inmediaciones."
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Section */}
                <div className="flex flex-col gap-4 mb-8 pt-4">

                    {/* Title Row: Info + FAQ + CTA Button (aligned) */}
                    <div className="flex items-center justify-between">
                        {/* Left Side: + Info ◆ Preguntas Frecuentes */}
                        <div className="flex items-center gap-2 md:gap-4">
                            <Plus size={24} className="text-black stroke-[3px]" />
                            <h1 className="text-[20pt] md:text-[28pt] font-black uppercase tracking-tighter text-black">Info</h1>
                            <span className="text-primary text-xl md:text-3xl">◆</span>
                            <span className="text-[20pt] md:text-[28pt] font-light uppercase tracking-tight text-gray-400">Preguntas Frecuentes</span>
                        </div>

                        {/* CTA Button - Large Desktop only (aligned right, same line as title) */}
                        <div className={`hidden lg:block transition-opacity duration-300 ${isSticky ? 'lg:opacity-0 lg:pointer-events-none' : 'opacity-100'}`}>
                            <Link
                                href="/entradas"
                                className="bg-primary text-white py-3 px-8 text-center text-sm font-bold uppercase tracking-widest rounded-sm hover:brightness-110 transition-all shadow-sm whitespace-nowrap"
                            >
                                ¡Compra ya desde 18€!
                            </Link>
                        </div>
                    </div>

                    {/* CTA Button - Tablet and Mobile */}
                    <div className={`lg:hidden flex justify-center transition-opacity duration-300 ${isSticky ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <Link
                            href="/entradas"
                            className="w-full md:w-auto bg-primary text-white py-3 px-10 text-center text-sm font-bold uppercase tracking-widest rounded-sm hover:brightness-110 transition-all shadow-sm"
                        >
                            ¡Compra ya desde 18€!
                        </Link>
                    </div>
                </div>

                {/* FAQ Sections */}
                <div className="max-w-4xl mx-auto mb-20">
                    
                    {/* Sección 1: Guía de Compra */}
                    <FAQSection
                        title="Guía de Compra"
                        faqs={guiaCompraFaqs}
                        openIndex={openIndex}
                        onToggle={handleToggle}
                        sectionOffset={0}
                    />

                    {/* Sección 2: Sobre el REVE FEST 2026 */}
                    <FAQSection
                        title="Sobre el REVE FEST 2026"
                        faqs={sobreEventoFaqs}
                        openIndex={openIndex}
                        onToggle={handleToggle}
                        sectionOffset={guiaCompraFaqs.length}
                    />

                </div>

                {/* Reusable Component: TICKETS */}
                <TicketsSection />

            </div>
        </main>
    );
};

export default GuiaDeCompraPage;
