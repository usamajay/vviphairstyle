'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { Menu, X, Scissors, Phone, Clock, Calendar } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar({ locale }: { locale: string }) {
    const t = useTranslations('Navigation');
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for glassmorphism
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { href: '/', label: t('home') },
        { href: '/services', label: t('services') },
        { href: '/about', label: t('about') },
        { href: '/contact', label: t('contact') },
    ];

    const otherLocale = locale === 'en' ? 'ar' : 'en';
    const otherLocaleLabel = locale === 'en' ? 'العربية' : 'English';

    const tTop = useTranslations('TopBar');
    const isHome = pathname === '/';
    const shouldUseDarkText = scrolled || !isHome;
    const mobileControlColor = (shouldUseDarkText || isOpen) ? "text-neutral-900" : "text-white";

    return (
        <header className="fixed top-0 z-50 w-full transition-all duration-300">
            {/* Top Bar */}
            <div className="bg-gold-500 text-neutral-900 py-2 text-xs md:text-sm font-medium tracking-wide">
                <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {tTop('timings')}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {tTop('days')}
                        </span>
                    </div>
                    <a href="tel:+96812345678" className="flex items-center gap-2 hover:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                        {tTop('callUs')}
                    </a>
                </div>
            </div>

            <nav
                className={clsx(
                    "w-full transition-all duration-300 relative z-50",
                    scrolled ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm py-2" : "bg-transparent py-4 border-none"
                )}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between">

                        <Link href="/" className="flex items-center gap-3 group relative z-50">
                            <div className="bg-gold-gradient p-2 rounded-full shadow-gold-glow group-hover:scale-110 transition-transform">
                                <Scissors className="h-5 w-5 text-white" />
                            </div>
                            <span className={clsx(
                                "font-serif text-2xl font-bold tracking-wider transition-colors",
                                mobileControlColor
                            )}>
                                GENTS
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={clsx(
                                        "text-sm font-medium tracking-wide transition-all duration-300 relative group",
                                        pathname === link.href ? "text-gold-500" : (shouldUseDarkText ? "text-neutral-600 hover:text-neutral-900" : "text-white/90 hover:text-white")
                                    )}
                                >
                                    {link.label}
                                    <span className={clsx(
                                        "absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full",
                                        pathname === link.href ? "w-full" : ""
                                    )} />
                                </Link>
                            ))}

                            {/* CTA Button */}
                            <Link
                                href="/book"
                                className={clsx(
                                    "px-6 py-2.5 font-bold text-sm rounded-md shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all",
                                    shouldUseDarkText ? "bg-black text-white" : "bg-white text-black hover:bg-gold-500 hover:text-white"
                                )}
                            >
                                {t('book')}
                            </Link>

                            {/* Language Switcher */}
                            <Link href={pathname} locale={otherLocale} className={clsx(
                                "text-sm font-medium border px-3 py-1 rounded-full transition-colors",
                                shouldUseDarkText ? "text-neutral-600 border-neutral-300 hover:text-gold-600 hover:border-gold-500" : "text-white border-white/30 hover:text-gold-400 hover:border-gold-400"
                            )}>
                                {otherLocaleLabel}
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button onClick={toggleMenu} className={clsx(
                            "md:hidden p-2 transition-colors relative z-50",
                            (shouldUseDarkText || isOpen) ? "text-neutral-800 hover:text-gold-500" : "text-white hover:text-gold-400"
                        )}>
                            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={clsx(
                    "fixed inset-0 bg-white/98 z-40 md:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-300",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-serif text-neutral-900 hover:text-gold-500 transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    href="/book"
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-4 bg-black text-white font-bold text-lg rounded-md shadow-xl"
                >
                    {t('book')}
                </Link>
                <Link
                    href={pathname}
                    locale={otherLocale}
                    onClick={() => setIsOpen(false)}
                    className="text-neutral-500 hover:text-gold-500 mt-4"
                >
                    {otherLocaleLabel}
                </Link>
            </div>
        </header>
    );
}
