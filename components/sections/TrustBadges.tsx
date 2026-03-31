"use client"

import { cn } from "@/lib/utils"
import { m } from "framer-motion"

const brands = [
    "TECHFLOW",
    "SYNTHWAVE",
    "DATACORP",
    "NOVA SYSTEMS",
    "VERTEX",
]

export function TrustBadges() {
    // Create duplicated arrays to ensure ultra-wide monitors never see an empty gap
    const repeatedBrands = [...brands, ...brands, ...brands, ...brands]

    return (
        <section className="py-16 border-y border-white/5 bg-black/30 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <p className="text-center text-sm text-gray-400 mb-8 tracking-normal">
                    Trusted by innovative companies worldwide
                </p>
            </div>
            {/* Full width marquee container */}
            <div className="flex overflow-hidden relative w-full opacity-60">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                <m.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                    className="flex whitespace-nowrap w-fit items-center"
                >
                    {/* First Half */}
                    <div className="flex gap-8 md:gap-16 items-center flex-shrink-0 pr-8 md:pr-16">
                        {repeatedBrands.map((brand, idx) => (
                            <span key={`b1-${idx}`} className="text-xl font-display font-medium text-gray-400">
                                {brand}
                            </span>
                        ))}
                    </div>
                    {/* Second Half (Exact Duplicate) */}
                    <div className="flex gap-8 md:gap-16 items-center flex-shrink-0 pr-8 md:pr-16">
                        {repeatedBrands.map((brand, idx) => (
                            <span key={`b2-${idx}`} className="text-xl font-display font-medium text-gray-400">
                                {brand}
                            </span>
                        ))}
                    </div>
                </m.div>
            </div>
        </section>
    )
}
