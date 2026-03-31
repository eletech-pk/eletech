"use client"

import { useRef } from "react"
import { m, Variants } from "framer-motion"

export function AboutPreview() {
    const containerRef = useRef<HTMLDivElement>(null)

    const text =
        "On a mission to simplify complex business processes through innovative technology. We empower organizations to achieve more by automating the mundane and illuminating the strategic."
        
    const words = text.split(" ")

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    }

    const child: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    }

    return (
        <section ref={containerRef} className="py-12 flex items-center w-full overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                    Our Mission
                </h2>
                <m.p
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed flex flex-wrap justify-center"
                >
                    {words.map((word, index) => (
                        <m.span 
                            variants={child} 
                            key={index}
                            className="mr-2 mb-1"
                        >
                            {word}
                        </m.span>
                    ))}
                </m.p>
            </div>
        </section>
    )
}
