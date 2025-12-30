import { useTranslations } from 'next-intl';
import { Scissors } from 'lucide-react';

export default function AboutPage() {
    const t = useTranslations('AboutPage');

    return (
        <main className="min-h-screen pt-32 pb-24 bg-primary-900">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="text-center mb-20 animate-fade-in">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-900 mb-6">{t('title')}</h1>
                    <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full" />
                </div>

                {/* Story Section */}
                <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gold-100/50 rounded-2xl transform rotate-3" />
                        <div className="relative bg-white border border-neutral-200 rounded-2xl p-10 shadow-xl">
                            <Scissors className="w-10 h-10 text-gold-600 mb-6" />
                            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6 leading-tight">{t('storyTitle')}</h2>
                            <p className="text-neutral-600 leading-loose text-lg font-light">
                                {t('storyText')}
                            </p>
                        </div>
                    </div>

                    <div className="h-[500px] bg-neutral-100 rounded-2xl border border-neutral-200 relative overflow-hidden group shadow-inner">
                        {/* Abstract placeholder for Brand Image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-gold-100/50 to-white" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 text-8xl font-serif text-neutral-900">GENTS</div>
                    </div>
                </section>

                {/* Team Section */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">{t('teamTitle')}</h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto">{t('teamText')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[1, 2].map((i) => (
                            <div key={i} className="group relative aspect-[3/4] bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-gold-400 transition-colors shadow-lg">
                                <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                                    <span className="text-neutral-400 font-bold uppercase tracking-widest">Master Barber {i}</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <h3 className="text-xl font-bold text-white mb-1">Ahmed Al-Said</h3>
                                    <p className="text-gold-400 text-sm uppercase tracking-wide">Senior Stylist</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
