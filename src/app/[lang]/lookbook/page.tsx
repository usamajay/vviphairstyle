'use client';

import { useTranslations } from 'next-intl';
import Marquee from '@/components/Marquee';
import Image from 'next/image';

// Define asset lists based on known file names
const photos = Array.from({ length: 8 }, (_, i) => `/lookbook/photos/${i + 1}.jpeg`);
const videos = Array.from({ length: 15 }, (_, i) => `/lookbook/videos/${i + 1}.mp4`);

export default function GalleryPage() {
    const t = useTranslations('GalleryPage');

    return (
        <main className="min-h-screen pt-32 pb-24 bg-primary-950 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 text-center mb-16 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">{t('title')}</h1>
                <p className="text-neutral-600 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
            </div>

            <div className="flex flex-col gap-12">
                {/* Row 1: Photos (Right to Left - Slow) */}
                <Marquee direction="left" speed={60}>
                    {photos.map((src, i) => (
                        <div key={`photo-${i}`} className="relative h-[200px] w-[160px] md:h-[280px] md:w-[220px] shrink-0 rounded-xl overflow-hidden group">
                            <Image
                                src={src}
                                alt={`Gallery Photo ${i + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        </div>
                    ))}
                </Marquee>

                {/* Row 2: Videos (Left to Right) */}
                <Marquee direction="right" speed={80}>
                    {videos.map((src, i) => (
                        <VideoCard key={`vid-${i}`} src={src} />
                    ))}
                </Marquee>
            </div>
        </main>
    );
}

function VideoCard({ src }: { src: string }) {
    return (
        <div className="relative h-[200px] w-[160px] md:h-[280px] md:w-[220px] shrink-0 rounded-xl overflow-hidden bg-black">
            <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
        </div>
    );
}
