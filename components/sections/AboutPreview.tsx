"use client"

import { useRef } from "react"
import { m } from "framer-motion"

export function AboutPreview() {
    const containerRef = useRef<HTMLDivElement>(null)

    const text =
        "On a mission to simplify complex business processes through innovative technology. We empower organizations to achieve more by automating the mundane and illuminating the strategic."

    return (
        <section ref={containerRef} className="py-20 min-h-[50vh] flex items-center w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center md:text-left">
                <h2 className="text-sm font-bold uppercase text-center tracking-widest text-primary mb-8">
                    About Eletech Solutions
                </h2>
                <m.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-xl md:text-3xl font-display font-medium leading-relaxed dark:text-white"
                >
                    {text}
                </m.p>
            </div>
        </section>
    )
}
