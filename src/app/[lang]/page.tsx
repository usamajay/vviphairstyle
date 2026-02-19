import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Star, MapPin, Clock, Scissors, ChevronRight, Calendar } from 'lucide-react';

export default function Home() {
    const t = useTranslations('HomePage');

    return (
        <main className="min-h-screen bg-primary-950">

            {/* Light Luxury Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary-950">
                {/* Background Image with Dark Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
                        alt="Luxury Barber Shop Interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                </div>

                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
                    <div className="uppercase tracking-[0.3em] text-white text-sm md:text-base mb-6 animate-fade-in font-bold bg-white/10 px-6 py-2 rounded-full border border-white/20 shadow-lg backdrop-blur-md">
                        Est. 2025 • Muscat, Oman
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold !text-white mb-6 md:mb-8 tracking-tighter leading-tight drop-shadow-xl">
                        {t('title')}
                    </h1>

                    <p className="text-lg md:text-2xl !text-white mb-8 md:mb-12 font-medium max-w-xl md:max-w-2xl leading-relaxed drop-shadow-md opacity-90">
                        {t('heroSub')}
                    </p>

                    <div className="flex flex-col md:flex-row gap-6">
                        <Link
                            href="/book"
                            className="group relative px-10 py-5 bg-gold-500 text-white font-bold text-lg rounded-sm overflow-hidden transition-all hover:scale-105 shadow-xl hover:shadow-gold-500/40"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {t('heroCta')} <Calendar className="w-5 h-5" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>

                        <Link
                            href="/services"
                            className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-neutral-900 text-white font-medium text-lg rounded-sm transition-all flex items-center gap-2 group shadow-lg"
                        >
                            View Services <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Grid (Light) */}
            <section className="py-32 bg-primary-900 relative">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                        <div>
                            <h2 className="text-gold-600 font-bold tracking-widest uppercase mb-2 text-sm">{t('servicesTitle')}</h2>
                            <p className="text-4xl md:text-5xl font-serif text-neutral-900">Sharpen Your Look</p>
                        </div>
                        <Link href="/services" className="text-neutral-900 hover:text-gold-600 transition-colors flex items-center gap-2 pb-2 border-b border-neutral-300 hover:border-gold-600">
                            Full Menu <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Service Card 1 */}
                        <div className="group relative bg-white border border-neutral-200 p-8 rounded-xl hover:border-gold-400/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                            <div className="w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-500">
                                <Scissors className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Haircut/Hairfade</h3>
                            <p className="text-neutral-600 mb-8 leading-relaxed">
                                Expert precision for a sharp, modern look.
                            </p>
                            <span className="text-gold-600 font-bold block">2.5 OMR</span>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </div>

                        {/* Service Card 2 */}
                        <div className="group relative bg-white border border-neutral-200 p-8 rounded-xl hover:border-gold-400/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                            <div className="w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-500">
                                <Star className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Beard Cut/Shave</h3>
                            <p className="text-neutral-600 mb-8 leading-relaxed">
                                Professional trimming and shaping for a perfect beard.
                            </p>
                            <span className="text-gold-600 font-bold block">2.0 OMR</span>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </div>

                        {/* Service Card 3 */}
                        <div className="group relative bg-white border border-neutral-200 p-8 rounded-xl hover:border-gold-400/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                            <div className="w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-500">
                                <Scissors className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Haircut & Beard</h3>
                            <p className="text-neutral-600 mb-8 leading-relaxed">
                                Complete grooming package for hair and beard.
                            </p>
                            <span className="text-gold-600 font-bold block">4.0 OMR</span>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </div>

                        {/* Service Card 4 */}
                        <div className="group relative bg-white border border-neutral-200 p-8 rounded-xl hover:border-gold-400/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                            <div className="w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-500">
                                <Star className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Kids Cut</h3>
                            <p className="text-neutral-600 mb-8 leading-relaxed">
                                Gentle and stylish cuts for the little ones.
                            </p>
                            <span className="text-gold-600 font-bold block">4.0 OMR</span>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Info & Location (Light Map section) */}
            <section className="py-32 bg-white text-neutral-900">
                <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 space-y-8">
                        <div className="flex items-start gap-6">
                            <Clock className="w-8 h-8 text-gold-600 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">{t('hoursTitle')}</h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    Saturday - Thursday: 10:00 AM - 10:00 PM<br />
                                    Friday: 2:00 PM - 10:00 PM
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <MapPin className="w-8 h-8 text-gold-600 shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">{t('locationTitle')}</h3>
                                <p className="text-neutral-400">
                                    Backside of Aljood Turkish restaurant, Azaiba,<br />
                                    Muscat, Oman
                                </p>
                                <Link href="/contact" className="text-gold-600 underline decoration-gold-200 underline-offset-4 hover:decoration-gold-600 transition-all">Get Directions</Link>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 h-[400px] w-full rounded-2xl overflow-hidden hover:grayscale-0 transition-all duration-700 border border-neutral-200 shadow-xl relative group">
                        {/* Map Placeholder or Embed */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.347953257859!2d58.3897!3d23.5919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzMwLjgiTiA1OMKwMjMnMjIuOSJF!5e0!3m2!1sen!2som!4v1625641234567!5m2!1sen!2som"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="group-hover:opacity-100 transition-opacity duration-700"
                        ></iframe>
                    </div>
                </div>
            </section>


        </main>
    );
}
