import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Scissors, Star, Zap, User, Sparkles } from 'lucide-react';

export default function ServicesPage() {
    const t = useTranslations('ServicesPage');

    const services = [
        { key: 'haircut', icon: Scissors },
        { key: 'beard', icon: Zap },
        { key: 'package', icon: Star },
        { key: 'kids', icon: User },
        { key: 'facial', icon: Sparkles }
    ];

    return (
        <main className="min-h-screen pt-32 pb-24 bg-primary-900">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-900 mb-6">{t('title')}</h1>
                    <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map(({ key, icon: Icon }) => (
                        <div key={key} className="group bg-white border border-neutral-200 rounded-xl p-8 hover:border-gold-400/50 hover:shadow-2xl hover:shadow-gold-900/5 transition-all duration-300">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-neutral-100 rounded-lg group-hover:bg-gold-500 transition-colors duration-300">
                                    <Icon className="w-6 h-6 text-gold-600 group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-xl font-bold text-gold-600 font-serif">{t(`list.${key}.price`)} {t('currency')}</span>
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4 group-hover:text-gold-600 transition-colors">{t(`list.${key}.name`)}</h3>
                            <p className="text-neutral-600 mb-8 border-b border-neutral-100 pb-8 group-hover:border-gold-100 transition-colors">
                                Duration: {t(`list.${key}.duration`)}
                            </p>

                            <Link
                                href={`/book?service=${key}`}
                                className="flex items-center justify-center w-full py-3 border border-neutral-200 rounded text-neutral-900 font-bold hover:bg-black hover:text-white hover:border-black transition-all uppercase tracking-wider text-sm"
                            >
                                {t('bookService')}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
