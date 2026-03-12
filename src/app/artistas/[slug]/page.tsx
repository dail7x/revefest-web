'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import artistasData from '@/data/artistas.json';
import { useLanguage } from '@/context/LanguageContext';

const ArtistaPage = () => {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;
    const [isSticky, setIsSticky] = useState(false);
    const { lang } = useLanguage();

    const artista = artistasData.find((a) => a.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [slug]);

    if (!artista) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl uppercase font-bold text-black">{lang === 'va' ? 'Artista no trobat' : 'Artista no encontrado'}</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white pb-20">
            <div className="container mx-auto px-4 md:px-6">

                {/* 
                    Header Info Section
                    Reduced padding to match Home Hero start position 
                */}
                <div className="flex flex-col gap-4 mb-6">

                    {/* Primary Row: Back Arrow + Lineup + Artist Name + CTA Button (Desktop) */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 md:gap-4">
                            <button
                                onClick={() => router.back()}
                                className="flex items-center justify-center text-black hover:text-primary transition-colors"
                                aria-label="Volver"
                            >
                                <ArrowLeft size={32} strokeWidth={2.5} />
                            </button>
                            <h2 className="text-[20pt] md:text-[28pt] font-black uppercase tracking-tighter text-black">Lineup</h2>
                            <Image 
                                src="/images/destello.svg" 
                                alt="" 
                                width={28} 
                                height={28} 
                                className="w-5 h-5 md:w-7 md:h-7" 
                                style={{ filter: 'invert(55%) sepia(83%) saturate(2049%) hue-rotate(298deg) brightness(101%) contrast(101%)' }}
                            />
                            <span className="text-[20pt] md:text-[28pt] font-light uppercase tracking-tight text-gray-400">{artista.name}</span>
                        </div>

                        {/* CTA Button - Desktop only (aligned right, same line as title) */}
                        <div className={`hidden lg:block transition-opacity duration-300 ${isSticky ? 'lg:opacity-0 lg:pointer-events-none' : 'opacity-100'}`}>
                            <Link
                                href="/entradas"
                                className="bg-primary text-white py-3 px-6 text-center text-sm font-bold uppercase tracking-widest rounded-sm hover:brightness-110 transition-all shadow-sm whitespace-nowrap"
                            >
                                ¡Compra ya desde 49,50€!
                            </Link>
                        </div>
                    </div>

                    {/* Main CTA: Buy Button - Mobile only */}
                    <div className={`md:hidden flex justify-center transition-opacity duration-300 ${isSticky ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <Link
                            href="/entradas"
                            className="w-full bg-primary text-white py-3 px-10 text-center text-sm font-bold uppercase tracking-widest rounded-sm hover:brightness-110 transition-all shadow-sm whitespace-nowrap"
                        >
                            ¡Compra ya desde 49,50€!
                        </Link>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="flex flex-col gap-2">

                    {/* Artist Hero Image */}
                    <div className="w-full md:max-w-5xl md:mx-auto h-auto md:h-[420px] rounded-sm overflow-hidden">
                        {/* Mobile: Imagen completa sin transformaciones */}
                        <Image
                            src={artista.images.pagina}
                            alt={artista.name}
                            width={1200}
                            height={800}
                            className="w-full h-auto md:hidden"
                            priority
                            unoptimized
                        />
                        {/* Desktop: Object cover con margen */}
                        <div className="relative w-full h-[420px] hidden md:block">
                            <Image
                                src={artista.images.pagina}
                                alt={artista.name}
                                fill
                                className="object-cover object-top"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Bio and Media Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">

                        {/* Column 1: Biography */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-4 text-[14px] md:text-[16px] leading-relaxed text-black font-normal text-justify">
                                {(lang === 'va' && artista.bioVa ? artista.bioVa : artista.bio).split('\n\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>

                            {/* CTA Repetition - Aligned with Bio */}
                            <Link
                                href="/entradas"
                                className="w-full md:w-fit bg-primary text-white py-4 md:px-12 md:py-3 text-sm font-bold uppercase tracking-widest rounded-sm hover:brightness-110 transition-all text-center md:text-left block whitespace-nowrap"
                            >
                                ¡Compra ya desde 49,50€!
                            </Link>
                        </div>

                        {/* Column 2: Embeds */}
                        <div className="flex flex-col gap-8">
                            {/* Spotify Embed */}
                            {artista.spotifyEmbed && (
                                <div className="w-full rounded-xl overflow-hidden shadow-sm">
                                    <iframe
                                        src={artista.spotifyEmbed}
                                        width="100%"
                                        height="152"
                                        frameBorder="0"
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        className="rounded-xl"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            )}

                            {/* YouTube Embed */}
                            {artista.youtubeEmbed && (
                                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm bg-black">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={artista.youtubeEmbed}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default ArtistaPage;
