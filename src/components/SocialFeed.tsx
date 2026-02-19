'use client';

import { useEffect } from 'react';

// Add TypeScript support for the custom element is now in src/types.d.ts

export default function SocialFeed() {
    useEffect(() => {
        // Load Behold.so script
        const script = document.createElement('script');
        script.src = "https://w.behold.so/widget.js";
        script.type = "module";
        document.head.appendChild(script);

        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="py-20 bg-primary-900 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
                <h2 className="text-gold-600 font-bold tracking-widest uppercase mb-3 text-sm">Follow Us</h2>
                <a
                    href="https://www.instagram.com/vviphairstylesalon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl md:text-5xl font-serif text-neutral-900 hover:text-gold-600 transition-colors"
                >
                    @vviphairstylesalon
                </a>
            </div>

            <div className="container mx-auto px-4">
                {/* @ts-ignore */}
                <behold-widget feed-id="MWjy1R8DhkAcvCqLY8MY"></behold-widget>
            </div>
        </section>
    );
}
