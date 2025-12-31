'use client';

import { ReactNode } from 'react';

interface MarqueeProps {
    children: ReactNode;
    direction?: 'left' | 'right';
    speed?: number; // Duration in seconds
    className?: string;
    pauseOnHover?: boolean;
}

export default function Marquee({
    children,
    direction = 'left',
    speed = 30,
    className = "",
    pauseOnHover = false
}: MarqueeProps) {
    return (
        <div className={`overflow-hidden flex w-full gap-4 ${className}`} dir="ltr">
            <div
                className={`flex shrink-0 gap-4 py-4 min-w-full ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
                style={{
                    animation: `scroll-${direction} ${speed}s linear infinite`,
                }}
            >
                {children}
            </div>
            <div
                className={`flex shrink-0 gap-4 py-4 min-w-full ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
                style={{
                    animation: `scroll-${direction} ${speed}s linear infinite`,
                }}
                aria-hidden="true"
            >
                {children}
            </div>
            <style jsx>{`
                @keyframes scroll-left {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }
                @keyframes scroll-right {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
            `}</style>
        </div>
    );
}
