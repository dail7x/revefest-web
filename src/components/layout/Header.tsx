'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';

const Marker = ({ className }: { className: string }) => (
    <span className={`absolute text-[6px] text-foreground leading-none ${className}`}>◆</span>
);

const BoxedInfo = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`relative px-4 py-1.5 min-w-fit flex flex-col items-center justify-center ${className}`}>
        <Marker className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
        <Marker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
        <Marker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
        <Marker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
        <div className="flex flex-col text-[8.5pt] font-bold leading-tight uppercase text-center">
            {children}
        </div>
    </div>
);

const Header: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4 sm:py-6'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center">

                    {/* Logo Section */}
                    <Link href="/" className="relative w-24 h-10 sm:w-40 sm:h-12 shrink-0">
                        <Image
                            src="/images/Logos/LOGO_REVE_Web.webp"
                            alt="REVE Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Content Container */}
                    <div className="flex items-center justify-between w-full ml-4 md:ml-10">

                        {/* Information Boxes Group */}
                        <div className="flex items-center gap-6 lg:gap-10">
                            {/* Box 1: Always visible (Mobile & Desktop) */}
                            <BoxedInfo className="flex">
                                <span className={`${isSticky ? 'text-[7pt] sm:text-[8.5pt]' : ''}`}>16.07.26</span>
                                <span className={`font-normal opacity-80 ${isSticky ? 'text-[7pt] sm:text-[8.5pt]' : ''}`}>VALENCIA</span>
                                <span className={`hidden sm:block ${isSticky ? 'text-[7pt] sm:text-[8.5pt]' : ''}`}>ROIG ARENA</span>
                            </BoxedInfo>

                            {/* Box 2: Only Large Screens, disappears when sticky on medium */}
                            <BoxedInfo className={`hidden lg:flex ${isSticky ? 'hidden xl:flex' : ''}`}>
                                <span>+10 HORAS DE MÚSICA NONSTOP</span>
                                <span className="font-normal opacity-80">2 ESCENARIOS</span>
                                <span>1 PM - 12 PM</span>
                            </BoxedInfo>
                        </div>

                        {/* Navigation - Hidden on mobile/tablet */}
                        <nav className="hidden xl:flex items-center gap-8 text-[11pt] font-normal uppercase tracking-wide">
                            <Link href="/entradas" className="hover:text-primary transition-colors">Tickets</Link>
                            <Link href="/#lineup" className="hover:text-primary transition-colors">Artistas</Link>
                            <Link href="/guia-de-compra" className="hover:text-primary transition-colors">Info</Link>
                        </nav>

                        {/* Right Group: CTA Button & Menu */}
                        <div className="flex items-center gap-4">
                            <AnimatePresence>
                                {isSticky ? (
                                    <motion.div
                                        key="sticky-cta"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="block"
                                    >
                                        <Link
                                            href="/entradas"
                                            className="bg-primary text-white px-6 sm:px-8 py-2 md:py-2.5 text-[10pt] sm:text-[12pt] font-bold rounded-sm hover:bg-foreground transition-all uppercase shadow-sm"
                                        >
                                            Tickets
                                        </Link>
                                    </motion.div>
                                ) : (
                                    /* Point 2: CTA visible by default on mobile too when not sticky */
                                    <motion.div
                                        key="default-cta"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="sm:block lg:hidden" /* hidden on LG because user wants it only on sticky for Desktop */
                                    >
                                        <Link
                                            href="/entradas"
                                            className="bg-primary text-white px-6 sm:px-8 py-2 text-[10pt] sm:text-[12pt] font-bold rounded-sm uppercase"
                                        >
                                            Tickets
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="p-1 xl:hidden text-foreground hover:text-primary transition-colors"
                                aria-label="Abrir menú"
                            >
                                <Menu size={32} />
                            </button>
                        </div>

                    </div>
                </div>
            </header>

            {/* Point 1: Move MobileMenu OUTSIDE the header tag to prevent clipping */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
};

export default Header;
