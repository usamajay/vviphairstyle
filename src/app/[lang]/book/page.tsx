import { useTranslations } from 'next-intl';

export default function BookPage({ searchParams }: { searchParams: { service?: string } }) {
    const t = useTranslations('BookPage');

    return (
        <main className="min-h-screen pt-32 pb-24 bg-primary-900">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl flex flex-col items-center">
                <div className="text-center mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">{t('title')}</h1>
                    <p className="text-neutral-600 text-lg">{t('instruction')}</p>
                </div>

                <div className="w-full h-[800px] bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/5 border border-neutral-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400 bg-neutral-50 -z-10">
                        {t('loading')}
                    </div>

                    <iframe
                        src="https://gentlemenbarbershop.setmore.com"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        title="Setmore Booking"
                        className="relative z-10"
                    />
                </div>
            </div>
        </main>
    );
}
