"use client"

import { cn } from "@/lib/utils"

const brands = [
    "TECHFLOW",
    "SYNTHWAVE",
    "DATACORP",
    "NOVA SYSTEMS",
    "VERTEX",
]

export function TrustBadges() {
    return (
        <section className="py-16 border-y border-white/5 bg-black/30">
            <div className="max-w-7xl mx-auto px-4 overflow-hidden">
                <p className="text-center text-sm text-gray-400 mb-8 tracking-normal">
                    Trusted by innovative companies worldwide
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
                    {brands.map((brand) => (
                        <span
                            key={brand}
                            className="text-xl font-display font-medium text-gray-500"
                        >
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
