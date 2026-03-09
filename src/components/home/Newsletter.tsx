'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !acceptedPrivacy) return;

        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            setAcceptedPrivacy(false);
        }, 1500);
    };

    const isSubmitDisabled = status === 'loading' || status === 'success' || !acceptedPrivacy;
    const buttonTooltip = !acceptedPrivacy && status !== 'loading' && status !== 'success' 
        ? 'Debes aceptar la política de privacidad para unirte' 
        : undefined;

    return (
        <section className="py-24 bg-white text-foreground overflow-hidden relative">

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight tracking-tighter">
                            Entérate de todo <br />
                            <span className="text-primary">antes que nadie</span>
                        </h2>
                        <p className="text-foreground/60 font-light text-lg max-w-md">
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
                                className="bg-foreground/5 border border-foreground/20 px-6 py-4 rounded-sm focus:outline-none focus:border-primary transition-colors flex-grow text-foreground uppercase tracking-widest text-sm"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitDisabled}
                                title={buttonTooltip}
                                className="bg-primary hover:bg-foreground hover:text-white text-white font-bold px-10 py-4 transition-all uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'ENVIANDO...' : status === 'success' ? '¡LISTO!' : 'UNIRME'}
                            </button>
                        </div>
                        
                        {/* Checkbox Política de Privacidad */}
                        <div className="flex items-start gap-3 mt-1">
                            <input
                                type="checkbox"
                                id="privacy-checkbox"
                                checked={acceptedPrivacy}
                                onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                                disabled={status === 'loading' || status === 'success'}
                                className="mt-1 w-4 h-4 cursor-pointer accent-primary"
                            />
                            <label 
                                htmlFor="privacy-checkbox" 
                                className="text-[10pt] text-foreground/70 uppercase tracking-wider cursor-pointer select-none"
                            >
                                Acepto la{' '}
                                <Link href="/politica-privacidad" className="text-primary hover:underline">
                                    política de privacidad
                                </Link>
                            </label>
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
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Newsletter;
