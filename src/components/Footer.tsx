import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Scissors, Instagram, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="w-full bg-black border-t border-neutral-800 pt-16 pb-8 text-neutral-400">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-gold-500 p-2 rounded-full">
                                <Scissors className="h-5 w-5 text-white" />
                            </div>
                            <span className="font-serif text-2xl font-bold text-white tracking-wider">GENTS</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs text-neutral-500">
                            Premium grooming experiences for the modern gentleman in Muscat. Experience tradition redefined.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm">Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="/services" className="hover:text-gold-500 transition-colors">Services & Pricing</Link>
                            <Link href="/book" className="hover:text-gold-500 transition-colors">Book Appointment</Link>
                            <Link href="/contact" className="hover:text-gold-500 transition-colors">Location & Contact</Link>
                        </div>
                    </div>

                    {/* Contact Preview */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm">Contact</h4>
                        <div className="flex items-center gap-3 text-sm">
                            <MapPin className="h-4 w-4 text-gold-500" />
                            <span>Al Khoudh, Muscat, Oman</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <Phone className="h-4 w-4 text-gold-500" />
                            <span>+968 1234 5678</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wide">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <p>{t('copyright')}</p>
                        <span className="hidden md:block text-neutral-600">|</span>
                        <p>
                            {t('poweredBy')} <a href="https://www.thefostersoft.com/" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-white transition-colors font-bold">Foster Technologies</a>
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-gold-500 transition-colors">{t('privacy')}</Link>
                        <a href="#" className="hover:text-gold-500 transition-colors"><Instagram className="h-5 w-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
