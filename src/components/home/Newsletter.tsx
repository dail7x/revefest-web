'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <section className="py-24 bg-foreground text-white overflow-hidden relative">
            {/* Decorative BG element */}
            <div className="absolute top-0 right-0 text-[15vw] font-bold opacity-5 pointer-events-none select-none uppercase tracking-tighter translate-y-[-20%]">
                Newsletter
            </div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight tracking-tighter">
                            Entérate de todo <br />
                            <span className="text-primary italic">antes que nadie</span>
                        </h2>
                        <p className="text-white/60 font-light text-lg max-w-md">
                            Suscríbete para recibir noticias exclusivas, preventas y el anuncio del lineup final.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="w-full md:w-auto flex flex-col gap-3 min-w-[320px]"
                    >
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="TU EMAIL"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === 'loading' || status === 'success'}
                                className="bg-white/10 border border-white/20 px-6 py-4 rounded-sm focus:outline-none focus:border-primary transition-colors flex-grow text-white uppercase tracking-widest text-sm"
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="bg-primary hover:bg-white hover:text-primary text-white font-bold px-10 py-4 transition-all uppercase tracking-widest disabled:opacity-50"
                            >
                                {status === 'loading' ? 'ENVIANDO...' : status === 'success' ? '¡LISTO!' : 'UNIRME'}
                            </button>
                        </div>
                        {status === 'success' && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-primary text-sm font-bold uppercase tracking-widest text-center md:text-left"
                            >
                                ¡Gracias por suscribirte!
                            </motion.p>
                        )}
                        <p className="text-[9pt] text-white/30 uppercase tracking-widest mt-2 text-center md:text-left">
                            AL SUSCRIBIRTE ACEPTAS NUESTRA POLÍTICA DE PRIVACIDAD.
                        </p>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Newsletter;
