import type { Metadata } from "next";
import { Inter, Cairo, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const cairo = Cairo({ subsets: ["arabic"], variable: '--font-cairo' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
    title: {
        default: 'VVIP Hairstyle | Best Barber Shop in Muscat Oman',
        template: '%s | VVIP Hairstyle Muscat',
    },
    description: 'VVIP Hairstyle - Premium barber shop in Azaiba, Muscat, Oman. Expert haircuts, beard grooming and styling services. Book your appointment via WhatsApp today.',
    keywords: [
        'barber shop Muscat',
        'haircut Muscat Oman',
        'best barber Muscat',
        'VVIP Hairstyle',
        'mens grooming Muscat',
        'beard trim Muscat',
        'hair salon Azaiba',
        'barber Azaiba Muscat',
        'حلاق مسقط',
        'صالون مسقط'
    ],
    metadataBase: new URL('https://www.vviphairstyle.com'),
    alternates: {
        canonical: '/',
        languages: {
            'en': '/en',
            'ar': '/ar',
        },
    },
    openGraph: {
        title: 'VVIP Hairstyle | Best Barber Shop in Muscat Oman',
        description: 'Premium barber shop in Azaiba, Muscat, Oman. Expert haircuts and grooming.',
        url: 'https://www.vviphairstyle.com',
        siteName: 'VVIP Hairstyle',
        locale: 'en_OM',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;

    if (!['en', 'ar'].includes(lang)) {
        notFound();
    }

    const messages = await getMessages();
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "HairSalon",
        "name": "VVIP Hairstyle",
        "url": "https://www.vviphairstyle.com",
        "telephone": "+96890648949",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Backside of Aljood Turkish Restaurant",
            "addressLocality": "Azaiba",
            "addressRegion": "Muscat",
            "addressCountry": "OM"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 23.5880,
            "longitude": 58.3829
        },
        "openingHours": "Sa-Th 10:00-22:00",
        "priceRange": "$$"
    };

    return (
        <html lang={lang} dir={dir}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </head>
            <body className={`${inter.variable} ${cairo.variable} ${playfair.variable} antialiased bg-primary-950 text-neutral-900 font-sans selection:bg-gold-500 selection:text-white`}>
                <NextIntlClientProvider messages={messages}>
                    <Navbar locale={lang} />
                    {children}
                    <FloatingWhatsApp />
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}