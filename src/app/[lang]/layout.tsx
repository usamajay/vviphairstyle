import type { Metadata } from "next";
import { Inter, Cairo, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const cairo = Cairo({ subsets: ["arabic"], variable: '--font-cairo' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
    title: "Gents Barber Shop | Muscat",
    description: "Premium Grooming for the Modern Man in Oman.",
};

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;

    // Ensure that the incoming `locale` is valid
    if (!['en', 'ar'].includes(lang)) {
        notFound();
    }

    const messages = await getMessages();
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    return (
        <html lang={lang} dir={dir}>
            <body className={`${inter.variable} ${cairo.variable} ${playfair.variable} antialiased bg-primary-950 text-neutral-900 font-sans selection:bg-gold-500 selection:text-white`}>
                <NextIntlClientProvider messages={messages}>
                    <Navbar locale={lang} />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
