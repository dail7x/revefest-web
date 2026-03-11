import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
    const sponsors = [
        { name: 'Músicos por la Salud', icon: '/images/Logos/Logo_Musicos_Por_La_Salud_Nuevo.webp' },
        { name: 'Roig Arena', icon: '/images/Logos/Logo_Roig_arena.webp' },
        { name: 'Bono Cultural', icon: '/images/Logos/Logo_Bono.webp' },
        { name: 'Oddeon Rabat', icon: '/images/Logos/Logo_OddeonRabat.webp' },
        { name: 'SEKEFUJ', icon: '/images/Logos/Logo_SEKEFUJ.webp' },
        { name: 'Fourvenues', icon: '/images/Logos/Logo_Fourvenues.webp' },
    ];

    const socialLinks = [
        { name: 'Instagram', icon: '/images/RRSS Icons/logo_instagram__REVEFEST.webp', url: 'https://www.instagram.com/reve__fest/' },
        { name: 'TikTok', icon: '/images/RRSS Icons/logo_tik_tok_REVEFEST.webp', url: 'https://www.tiktok.com/@reve__fest' },
        { name: 'Facebook', icon: '/images/RRSS Icons/logo_facebook_REVEFEST.webp', url: 'https://www.facebook.com/revefest' },
        { name: 'YouTube', icon: '/images/RRSS Icons/logo_youtube_REVEFEST.webp', url: 'https://www.youtube.com/@REVE__FEST' },
        { name: 'Spotify', icon: '/images/RRSS Icons/logo_spotify__REVEFEST.webp', url: 'https://open.spotify.com/concert/6JolOXKDy4NaczFzuKsyEz' },
    ];

    return (
        <footer className="bg-[#f1f2f4] text-[#1d1d1b] pt-16 pb-8">
            <div className="container mx-auto px-6">
                
                {/* 1. REVE Logo - Centered */}
                <div className="flex justify-center mb-8">
                    <div className="relative w-48 h-20 md:w-56 md:h-24">
                        <Image
                            src="/images/Logos/LOGO_REVE_Web.webp"
                            alt="REVE Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* 2. Social Media Section - Below logo */}
                <div className="flex flex-col items-center gap-4 mb-12">
                    <span className="text-xl font-normal tracking-tight">¡Sigue nuestras redes!</span>
                    <div className="flex items-center gap-6">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-8 h-8 group transition-transform hover:scale-110"
                            >
                                <Image
                                    src={social.icon}
                                    alt={social.name}
                                    fill
                                    className="object-contain"
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* 3. Sponsor Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center justify-items-center gap-8 md:gap-12 mb-16 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.name} className="relative h-12 md:h-14 xl:h-16 w-full flex items-center justify-center">
                            <Image
                                src={sponsor.icon}
                                alt={sponsor.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* 4. Bottom Legal Bar */}
                <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10pt] uppercase tracking-tight font-medium">
                    <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2">
                        <Link href="/aviso-legal" className="hover:text-primary transition-colors">Aviso Legal</Link>
                        <Link href="/politica-cookies" className="hover:text-primary transition-colors">Política de Cookies (UE)</Link>
                        <Link href="/terminos-condiciones" className="hover:text-primary transition-colors">Términos y Condiciones</Link>
                    </div>
                    <div className="text-foreground/60">
                        REVE FEST 2026
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
