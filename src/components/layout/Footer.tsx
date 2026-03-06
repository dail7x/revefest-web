import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'Instagram', icon: '/images/RRSS Icons/logo_instagram__REVEFEST.webp', url: 'https://instagram.com/revefest' },
        { name: 'TikTok', icon: '/images/RRSS Icons/logo_tik_tok_REVEFEST.webp', url: 'https://tiktok.com/@revefest' },
        { name: 'Facebook', icon: '/images/RRSS Icons/logo_facebook_REVEFEST.webp', url: 'https://facebook.com/revefest' },
        { name: 'YouTube', icon: '/images/RRSS Icons/logo_youtube_REVEFEST.webp', url: 'https://youtube.com/revefest' },
        { name: 'Spotify', icon: '/images/RRSS Icons/logo_spotify__REVEFEST.webp', url: 'https://spotify.com/revefest' },
    ];

    return (
        <footer className="bg-[#f1f2f4] text-[#1d1d1b] py-16 px-6">
            <div className="container mx-auto max-w-6xl flex flex-col items-center gap-12 text-center md:flex-row md:justify-between md:text-left">

                {/* Left: Branding & Social */}
                <div className="flex flex-col gap-6">
                    <Link href="/" className="relative w-32 h-16 mx-auto md:mx-0">
                        <Image
                            src="/images/Logos/LOGO_REVE_Web.webp"
                            alt="REVE Logo"
                            fill
                            className="object-contain"
                        />
                    </Link>

                    <div className="flex flex-col gap-4">
                        <span className="text-xl font-bold uppercase tracking-widest">¡Sigue nuestras redes!</span>
                        <div className="flex items-center justify-center md:justify-start gap-5">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform hover:scale-110 active:scale-95"
                                >
                                    <div className="relative w-8 h-8 group">
                                        <Image
                                            src={social.icon}
                                            alt={social.name}
                                            fill
                                            className="object-contain transition-all group-hover:drop-shadow-[0_0_8px_rgba(252,86,174,0.6)]"
                                        />
                                        {/* Fucsia hover effect simulation */}
                                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 rounded-full transition-opacity" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Legal Links */}
                <div className="flex flex-col gap-4 text-sm font-light uppercase tracking-tighter">
                    <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
                        <Link href="/politica-privacidad" className="hover:text-primary transition-colors">Politica de Privacidad</Link>
                        <Link href="/condiciones-generales" className="hover:text-primary transition-colors">Condiciones Generales</Link>
                        <Link href="/aviso-legal" className="hover:text-primary transition-colors">Aviso Legal</Link>
                    </div>
                    <p className="md:text-right text-foreground/60">
                        © {new Date().getFullYear()} REVEFEST. TODOS LOS DERECHOS RESERVADOS.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
