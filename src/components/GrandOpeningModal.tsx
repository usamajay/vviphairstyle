'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { X, Scissors, Calendar, MapPin } from 'lucide-react';

export default function GrandOpeningModal() {
    const t = useTranslations('GrandOpening');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Automatic Expiration: Modal will NOT show after Feb 23, 2026
        const expirationDate = new Date('2026-02-24T00:00:00'); // Expires at midnight after Feb 23rd
        if (new Date() > expirationDate) return;

        // Show modal on every visit with a small delay for better UX
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
                onClick={() => setIsOpen(false)}
            />

            {/* Modal Content */}
            <div className="relative bg-primary-950 border-2 border-gold-500 rounded-2xl p-8 md:p-12 max-w-lg w-full text-center shadow-[0_0_50px_rgba(234,179,8,0.2)] animate-fade-in z-10">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
                    aria-label={t('close')}
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex justify-center mb-6">
                    <div className="bg-gold-500 p-4 rounded-full shadow-lg shadow-gold-500/20 animate-pulse">
                        <Scissors className="w-8 h-8 text-white" />
                    </div>
                </div>

                <h2 className="text-gold-500 font-bold tracking-widest uppercase mb-2 text-sm md:text-base">
                    {t('subtitle')}
                </h2>

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
                    {t('title')}
                </h1>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 backdrop-blur-md">
                    <div className="flex items-center justify-center gap-2 text-gold-400 mb-3 font-bold text-lg">
                        <Calendar className="w-5 h-5" />
                        <span>{t('date')}</span>
                    </div>
                    <div className="text-white text-xl md:text-2xl font-bold mb-2 leading-snug">
                        {t('offer')}
                    </div>
                    <p className="text-neutral-400 text-xs italic">
                        {t('disclaimer')}
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2 w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-gold-500/20"
                    >
                        <MapPin className="w-5 h-5" />
                        {t('cta')}
                    </Link>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-neutral-500 hover:text-white text-sm py-2 transition-colors underline decoration-transparent hover:decoration-white underline-offset-4"
                    >
                        {t('close')}
                    </button>
                </div>
            </div>
        </div>
    );
}
