"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { renderCanvas } from "@/components/ui/canvas"
import { Shapes, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero2() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Only initialize canvas if it exists and we haven't already
        const canvasEl = document.getElementById("canvas");
        if (canvasEl) {
            renderCanvas();
        }
    }, []);

    return (
        <section id="hero2" className="relative w-full overflow-hidden py-24 bg-background" ref={containerRef}>
            <canvas
                className="pointer-events-none absolute inset-0 mx-auto w-full h-full z-0 opacity-40 mix-blend-screen"
                id="canvas"
            ></canvas>

            <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 mt-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-6 mt-10 sm:justify-center md:mb-4 md:mt-10 max-w-[90vw] md:max-w-none">
                    <div className="relative flex items-center whitespace-nowrap rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-3 py-1 text-xs leading-6 text-primary/80 shadow-xl">
                        <Shapes className="h-5 p-1" /> Next-Gen Automation
                        <Link
                            href="#"
                            rel="noreferrer"
                            className="hover:text-primary transition-colors ml-1 flex items-center font-semibold"
                        >
                            <div className="absolute inset-0 flex" aria-hidden="true" />
                            Explore{" "}
                            <span aria-hidden="true">
                                <ArrowRight className="h-4 w-4 ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="mb-10 mt-4 md:mt-6">
                    <div className="px-2">
                        <div className="border-white/10 relative mx-auto h-full max-w-7xl border p-6 md:px-12 md:py-20 glass-card rounded-3xl bg-black/20 backdrop-blur-sm">
                            <h1 className="select-none px-3 py-2 text-center text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl text-white">
                                <Plus
                                    strokeWidth={4}
                                    className="text-primary absolute -left-5 -top-5 h-10 w-10 opacity-70"
                                />
                                <Plus
                                    strokeWidth={4}
                                    className="text-primary absolute -bottom-5 -left-5 h-10 w-10 opacity-70"
                                />
                                <Plus
                                    strokeWidth={4}
                                    className="text-primary absolute -right-5 -top-5 h-10 w-10 opacity-70"
                                />
                                <Plus
                                    strokeWidth={4}
                                    className="text-primary absolute -bottom-5 -right-5 h-10 w-10 opacity-70"
                                />
                                <span className="block">Transform Your Business with</span>
                                <span className="block text-gradient-purple italic mt-2">AI Solutions</span>
                            </h1>
                            {/* <div className="flex items-center justify-center gap-2 mt-8">
                                <span className="relative flex h-3 w-3 items-center justify-center">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                                </span>
                                <p className="text-sm font-medium text-green-500 tracking-wide uppercase">Available Now</p>
                            </div> */}
                        </div>
                    </div>

                    <h2 className="mt-12 text-2xl md:text-3xl text-gray-200">
                        Discover the future of{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">Operational Excellence</span>
                    </h2>

                    <p className="mx-auto mb-16 mt-4 max-w-sm px-4 sm:max-w-2xl sm:px-6 md:max-w-3xl md:px-20 text-base text-gray-400 lg:text-lg text-balance">
                        We help businesses leverage artificial intelligence to drive growth, efficiency, and innovation. Discover the future of operational excellence.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href="#contact">
                            <Button variant="default" size="lg" className="rounded-full shadow-lg shadow-primary/20">
                                Start Transformation
                            </Button>
                        </Link>
                        <Link href="#services">
                            <Button variant="outline" size="lg" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10">
                                Our Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
