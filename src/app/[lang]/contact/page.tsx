import { useTranslations } from 'next-intl';
import { Phone, MapPin, Clock, MessageCircle, Mail } from 'lucide-react';

export default function ContactPage() {
    const t = useTranslations('ContactPage');

    return (
        <main className="min-h-screen pt-32 pb-24 bg-primary-900">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-900 mb-6">{t('title')}</h1>
                    <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white border border-neutral-200 p-8 rounded-2xl hover:border-gold-400/50 transition-colors shadow-sm">
                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-neutral-100 rounded-lg shrink-0">
                                    <MapPin className="text-gold-600 w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2 font-serif">{t('addressTitle')}</h3>
                                    <p className="text-neutral-600 leading-relaxed text-lg">{t('address')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-neutral-200 p-8 rounded-2xl hover:border-gold-400/50 transition-colors shadow-sm">
                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-neutral-100 rounded-lg shrink-0">
                                    <Phone className="text-gold-600 w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2 font-serif">{t('phoneTitle')}</h3>
                                    <a href="tel:+96890648949" className="text-xl text-neutral-600 hover:text-gold-600 transition-colors block mb-2">{t('phone')}</a>
                                    <a href="mailto:vviphairstyle@gmail.com" className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                                        <Mail className="w-4 h-4" /> vviphairstyle@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-neutral-200 p-8 rounded-2xl hover:border-gold-400/50 transition-colors shadow-sm">
                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-neutral-100 rounded-lg shrink-0">
                                    <Clock className="text-gold-600 w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2 font-serif">{t('hoursTitle')}</h3>
                                    <p className="text-neutral-600 whitespace-pre-line leading-relaxed">{t('hours')}</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/96890648949"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1dbf57] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 w-full"
                        >
                            <MessageCircle className="w-6 h-6" />
                            {t('whatsapp')}
                        </a>
                    </div>

                    {/* Map Embed */}
                    <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 h-[600px] shadow-xl relative hover:shadow-2xl transition-all duration-500">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.347953257859!2d58.3897!3d23.5919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzMwLjgiTiA1OMKwMjMnMjIuOSJF!5e0!3m2!1sen!2som!4v1625641234567!5m2!1sen!2som"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
}
