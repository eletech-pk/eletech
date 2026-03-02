"use client";

import { useEffect, useRef } from "react";

export function HeroCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || typeof window === "undefined") return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && window.innerWidth >= 768) {
                        import("@/components/ui/canvas").then(({ renderCanvas }) => {
                            renderCanvas();
                        });
                        observer.disconnect();
                    }
                });
            },
            { rootMargin: "0px", threshold: 0.1 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <canvas
                className="hidden md:block absolute inset-0 mx-auto w-full h-full opacity-40 mix-blend-screen"
                id="canvas"
            ></canvas>
        </div>
    );
}
