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

    const faqs = [
        {
            question: "¿Cuándo y dónde es el REVEFEST?",
            answer: "REVEFEST 2026 se llevará a cabo el 16 de julio de 2026 en el Roig Arena de Valencia. Las puertas abrirán a las 13:00 y la música sonará hasta medianoche."
        },
        {
            question: "¿Pueden entrar menores de edad?",
            answer: "Sí, REVEFEST es un evento para todas las edades. Los menores de 16 años deberán ir acompañados de su padre, madre o tutor legal y presentar la autorización de menores debidamente cumplimentada. Los menores de entre 16 y 17 años pueden acceder solos con autorización firmada."
        },
        {
            question: "¿Cómo recibo mis entradas?",
            answer: "Una vez completada la compra a través de Fourvenues, recibirás un correo electrónico de confirmación con tus entradas en formato PDF / QR. También podrás acceder a ellas a través de la app de Fourvenues."
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
            question: "¿Puedo cambiar el nombre de mi entrada?",
            answer: "Los cambios de nombre se gestionan directamente a través de la plataforma Fourvenues. Revisa las condiciones generales de tu entrada para ver si el cambio tiene algún coste asociado."
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* New Header Section based on Reference Image */}
                <div className="flex flex-col gap-4 mb-4 pt-4">

                    {/* Title Row: Info + FAQ vs Tickets */}
                    <div className="flex items-center justify-between">
                        {/* Left Side: + Info ◆ Preguntas Frecuentes */}
                        <div className="flex items-center gap-2 md:gap-4">
                            <Plus size={24} className="text-black stroke-[3px]" />
                            <h1 className="text-[20pt] md:text-[28pt] font-black uppercase tracking-tighter text-black">Info</h1>
                            <span className="text-primary text-xl md:text-3xl">◆</span>
                            <span className="text-[20pt] md:text-[28pt] font-light uppercase tracking-tight text-gray-400">Preguntas Frecuentes</span>
                        </div>

                        {/* Right Side: Tickets Header (Desktop) */}
                        <div className="hidden md:flex items-center gap-3">
                            <span className="text-[22pt] font-black uppercase tracking-tighter">Tickets</span>
                            <span className="text-black text-2xl">◆</span>
                            <div className="relative w-12 h-6">
                                <Image src="/images/Ticket.webp" alt="Ticket" fill className="object-contain grayscale brightness-0" />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Tickets Label Only */}
                    <div className="flex md:hidden items-center justify-end">
                        <div className="flex items-center gap-3">
                            <span className="text-[18pt] font-black uppercase tracking-tighter">Tickets</span>
                            <span className="text-black text-xl">◆</span>
                            <div className="relative w-10 h-6">
                                <Image src="/images/Ticket.webp" alt="Ticket" fill className="object-contain grayscale brightness-0" />
                            </div>
                        </div>
                    </div>

                    <p className="text-[9pt] md:text-[11pt] font-light uppercase tracking-[0.2em] opacity-80 text-black">
                        Todo lo que necesitas saber antes de venir
                    </p>

                    {/* Main CTA: Buy Button (Aligned right in Desktop, hidden when sticky) */}
                    <div className={`flex justify-center md:justify-end transition-opacity duration-300 ${isSticky ? 'md:opacity-0 md:pointer-events-none' : 'opacity-100'}`}>
                        <Link
                            href="/entradas"
                            className="w-full md:w-auto md:min-w-[320px] bg-primary text-white py-3 md:py-3.5 px-10 text-center text-xs md:text-sm font-bold uppercase tracking-widest rounded-sm hover:brightness-110 transition-all shadow-sm"
                        >
                            ¡Compra ya desde 18€!
                        </Link>
                    </div>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto mb-20 pt-8">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>

                {/* Reusable Component: TICKETS */}
                <TicketsSection />

                {/* Contact CTA */}
                <div className="mt-20 text-center pb-24">
                    <p className="text-sm uppercase tracking-widest opacity-50 mb-4">¿Aún tienes dudas?</p>
                    <a
                        href="mailto:info@revefest.com"
                        className="inline-block border-2 border-black px-10 py-4 font-black uppercase italic tracking-tighter hover:bg-black hover:text-white transition-all transform hover:scale-105"
                    >
                        Contáctanos
                    </a>
                </div>

            </div>
        </main>
    );
};

export default GuiaDeCompraPage;
