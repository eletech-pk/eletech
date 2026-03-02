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
    // Duplicate the brands array to create a seamless loop
    const doubledBrands = [...brands, ...brands, ...brands]

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
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

                <m.div
                    initial={{ x: 0 }}
                    whileInView={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                    viewport={{ once: false }}
                    className="flex whitespace-nowrap min-w-max gap-8 md:gap-16 items-center"
                // Width needs to be large enough to hold all items. We animate by 100% of this div's width.
                // Actually, moving by -50% of a doubled array works better for a true seamless loop if the width is exactly 2x.
                // For better dynamic width handling, we can animate an array that's 2 or 3 times the size.
                >
                    {/* First set */}
                    <div className="flex gap-8 md:gap-16 items-center flex-shrink-0 pr-8 md:pr-16">
                        {brands.map((brand, idx) => (
                            <span key={`b1-${idx}`} className="text-xl font-display font-medium text-gray-400">
                                {brand}
                            </span>
                        ))}
                    </div>
                    {/* Second set */}
                    <div className="flex gap-8 md:gap-16 items-center flex-shrink-0 pr-8 md:pr-16">
                        {brands.map((brand, idx) => (
                            <span key={`b2-${idx}`} className="text-xl font-display font-medium text-gray-400">
                                {brand}
                            </span>
                        ))}
                    </div>
                    {/* Third set to ensure no gap on very wide screens */}
                    <div className="flex gap-8 md:gap-16 items-center flex-shrink-0 pr-8 md:pr-16">
                        {brands.map((brand, idx) => (
                            <span key={`b3-${idx}`} className="text-xl font-display font-medium text-gray-400">
                                {brand}
                            </span>
                        ))}
                    </div>
                </m.div>
                {/* Duplicate the motion div to ensure continuous loop without jump. 
                     If the first div finishes its -100% translation, it immediately snaps back to 0.
                     By having two identical divs moving side by side, it creates a perfect infinite loop. */}
            </div>
        </section>
    )
}
