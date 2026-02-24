"use client"

import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"

export function AboutPreview() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.85", "center 0.5"],
    })

    const text =
        "On a mission to simplify complex business processes through innovative technology. We empower organizations to achieve more by automating the mundane and illuminating the strategic."

    const words = text.split(" ")

    return (
        <section ref={containerRef} className="py-20 min-h-[50vh] flex items-center">
            <div className="max-w-4xl mx-auto px-4 text-left">
                <h2 className="text-sm font-bold uppercase text-center tracking-widest text-primary mb-8">
                    About Eletech Solutions
                </h2>
                <p className="text-xl md:text-3xl font-display font-medium leading-relaxed">
                    {words.map((word, i) => {
                        const wordProgress = useTransform(
                            scrollYProgress,
                            [i / words.length - 0.05, i / words.length + 0.05],
                            [0, 1]
                        )

                        return (
                            <motion.span
                                key={i}
                                style={{ 
                                    opacity: wordProgress,
                                    filter: useTransform(
                                        wordProgress,
                                        [0, 1],
                                        ["blur(2px)", "blur(0px)"]
                                    )
                                }}
                                className="text-black dark:text-white inline transition-all duration-300 ease-out"
                            >
                                {word}{i < words.length - 1 && ' '}
                            </motion.span>
                        )
                    })}
                </p>
            </div>
        </section>
    )
}
