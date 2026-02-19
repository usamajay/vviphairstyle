'use client';

import { useState, useEffect } from 'react';
import { X, Scissors, Calendar, MapPin } from 'lucide-react';
import { Link } from '@/i18n/navigation';

export default function GrandOpeningModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Automatic Expiration: Modal will NOT show after Feb 23, 2026
        const expirationDate = new Date('2026-02-24T00:00:00');
        if (new Date() > expirationDate) return;

        // Show modal on every visit with a small delay
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
            <div className="relative bg-primary-950 border-2 border-gold-500 rounded-2xl p-6 md:p-8 max-w-lg w-full text-center shadow-[0_0_50px_rgba(234,179,8,0.2)] animate-fade-in z-10">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Icon - Smaller */}
                <div className="flex justify-center mb-4">
                    <div className="bg-gold-500 p-3 rounded-full shadow-lg shadow-gold-500/20 animate-pulse">
                        <Scissors className="w-6 h-6 text-white" />
                    </div>
                </div>

                {/* Bilingual Header - Compact */}
                <div className="mb-4 space-y-1">
                    <h2 className="text-gold-500 font-bold tracking-widest uppercase text-xs">
                        YOU ARE INVITED / أنتم مدعوون
                    </h2>
                    <h1 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight drop-shadow-xl">
                        GRAND OPENING
                    </h1>
                    <h1 className="text-2xl md:text-3xl font-arabic font-bold text-white leading-tight drop-shadow-xl">
                        الافتتاح الكبير
                    </h1>
                </div>

                {/* Bilingual Content Box - Compact */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4 backdrop-blur-md">

                    {/* Date */}
                    <div className="flex flex-col items-center justify-center gap-1 text-gold-400 mb-3 font-bold text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Saturday, Feb 21, 2026 @ 10 AM</span>
                        </div>
                        <span className="font-arabic" dir="rtl">السبت، ٢١ فبراير ٢٠٢٦ - ١٠:٠٠ صباحًا</span>
                    </div>

                    {/* Offer */}
                    <div className="mb-3">
                        <div className="text-white text-lg md:text-xl font-bold leading-snug">
                            First 2 Days 100% FREE Haircuts
                        </div>
                        <div className="text-white text-lg md:text-xl font-bold font-arabic leading-snug mt-1" dir="rtl">
                            أول يومين حلاقة مجانية ١٠٠٪
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="text-neutral-400 text-[10px] italic space-y-0.5">
                        <p>*Free hair cut for first two days.</p>
                        <p className="font-arabic" dir="rtl">*قص شعر مجاني لأول يومين.</p>
                    </div>
                </div>

                {/* Bilingual CTA - Compact */}
                <div className="flex flex-col gap-2">
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2 w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-gold-500/20 text-sm md:text-base"
                    >
                        <MapPin className="w-4 h-4" />
                        <span>Get Directions / احصل على الاتجاهات</span>
                    </Link>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-neutral-500 hover:text-white text-xs py-1 transition-colors underline decoration-transparent hover:decoration-white underline-offset-4"
                    >
                        Close / إغلاق
                    </button>
                </div>
            </div>
        </div>
    );
}
