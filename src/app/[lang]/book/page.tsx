import { useLocale } from 'next-intl';

export default function BookPage({ searchParams }: { searchParams: { service?: string } }) {
    const locale = useLocale();
    const isRtl = locale === 'ar';

    return (
        <main className="min-h-screen pt-32 pb-24 bg-primary-900" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="booking-section">
                <div className="text-center mb-12 animate-fade-in">
                    {isRtl ? (
                        <>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">احجز موعدك الآن</h1>
                            <p className="text-neutral-600 text-lg">اختر الخدمة والحلاق والوقت المناسب لك</p>
                        </>
                    ) : (
                        <>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">Book Your Appointment</h1>
                            <p className="text-neutral-600 text-lg">Select service, barber, and multiple services if needed</p>
                        </>
                    )}
                </div>

                <div className="w-full h-[900px] bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/5 border border-neutral-200 relative">
                    <iframe
                        src="https://gentsbarbershop.setmore.com"
                        loading="lazy"
                        style={{ width: '100%', height: '900px', border: 'none' }}
                        title="Setmore Booking"
                    ></iframe>
                </div>
            </div>
        </main>
    );
}
