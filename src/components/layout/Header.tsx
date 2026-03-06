'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';

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
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-white/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4 sm:py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">

                {/* Left Side: Logo & Info (Desktop) */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="relative w-28 h-14 sm:w-32 sm:h-16">
                        <Image
                            src="/images/Logos/LOGO_REVE_Web.webp"
                            alt="REVE Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Info Block - Hidden on scroll in mobile per spec, but always visible in desktop */}
                    <div className={`hidden md:flex flex-col text-[10pt] uppercase tracking-wider leading-tight border-l border-foreground/20 pl-6 transition-opacity duration-300`}>
                        <span className="font-bold">16.07.26 • VALENCIA • ROIG ARENA</span>
                        <span className="font-light">+10H MÚSICA • 2 ESCENARIOS • 1PM-12PM</span>
                    </div>

                    {/* Info Block (Mobile) - Stacks info */}
                    <div className={`flex md:hidden flex-col text-[8pt] uppercase transition-opacity duration-300 ${isSticky ? 'opacity-0 pointer-events-none w-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                        <span className="font-bold">16.07.26 • VALENCIA</span>
                        <span className="font-light">+10H MÚSICA</span>
                    </div>
                </div>

                {/* Center/Right: Navigation Links (Desktop) */}
                <nav className="hidden md:flex items-center gap-10">
                    <Link href="/entradas" className="text-[12pt] font-bold hover:text-primary transition-colors">
                        TICKETS
                    </Link>
                    <div className="group relative">
                        <Link href="/#lineup" className="text-[12pt] font-bold hover:text-primary transition-colors">
                            ARTISTAS
                        </Link>
                        {/* Dropdown would go here if needed in implementation Phase 1 */}
                    </div>
                    <Link href="/guia-de-compra" className="text-[12pt] font-bold hover:text-primary transition-colors">
                        INFO
                    </Link>
                </nav>

                {/* Action Button: Tickets Sticky CTA */}
                <div className="flex items-center gap-4">
                    <AnimatePresence>
                        {isSticky && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="hidden md:block"
                            >
                                <Link
                                    href="/entradas"
                                    className="bg-primary text-white px-8 py-2.5 text-[12pt] font-bold rounded-md hover:bg-primary/90 transition-all shadow-lg"
                                >
                                    TICKETS
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Mobile Buttons */}
                    <div className="flex md:hidden items-center gap-3">
                        {isSticky && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-primary text-white px-4 py-2 text-[10pt] font-bold rounded-md"
                            >
                                <Link href="/entradas">TICKETS</Link>
                            </motion.div>
                        )}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="p-2 text-foreground"
                            aria-label="Abrir menú"
                        >
                            <Menu size={32} />
                        </button>
                    </div>
                </div>
            </div>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </header>
    );
};

export default Header;
