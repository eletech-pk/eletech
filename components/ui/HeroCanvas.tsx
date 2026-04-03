"use client";

import { useEffect, useRef } from "react";

export function HeroCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasControllerRef = useRef<any>(null);

    useEffect(() => {
        if (!containerRef.current || typeof window === "undefined") return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && window.innerWidth >= 768) {
                        if (!canvasControllerRef.current) {
                            import("@/components/ui/canvas").then(({ renderCanvas }) => {
                                // Initialize and save controller
                                if (!canvasControllerRef.current) {
                                    canvasControllerRef.current = renderCanvas();
                                }
                            });
                        } else {
                            canvasControllerRef.current.start();
                        }
                    } else {
                        if (canvasControllerRef.current) {
                            canvasControllerRef.current.stop();
                        }
                    }
                });
            },
            { rootMargin: "200px 0px", threshold: 0 }
        );

        observer.observe(containerRef.current);
        return () => {
            observer.disconnect();
            if (canvasControllerRef.current) {
                canvasControllerRef.current.stop();
            }
        };
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
