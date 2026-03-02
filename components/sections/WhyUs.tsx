"use client"

import { motion, AnimatePresence } from "framer-motion"
import {
    Cpu,
    Code2,
    Database,
    BarChart3,
    Layers,
    Server,
    ChevronLeft,
    ChevronRight,
} from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

const features = [
    {
        icon: Cpu,
        title: "AI-Powered Automation",
        description:
            "Transform your business processes with intelligent automation solutions that learn and adapt to your needs.",
    },
    {
        icon: Code2,
        title: "Custom AI Development",
        description:
            "Tailored AI solutions designed to solve your specific business challenges and drive innovation.",
    },
    {
        icon: Database,
        title: "Data Analytics",
        description:
            "Unlock valuable insights from your data with our advanced analytics and visualization tools.",
    },
    {
        icon: BarChart3,
        title: "Business Intelligence",
        description:
            "Make data-driven decisions with our comprehensive business intelligence solutions.",
    },
    {
        icon: Layers,
        title: "Process Optimization",
        description:
            "Streamline your operations and increase efficiency with our process optimization services.",
    },
    {
        icon: Server,
        title: "Cloud Solutions",
        description:
            "Leverage the power of cloud computing with our scalable and secure cloud solutions.",
    },
]

export function WhyUs() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    // Each "slide" shows 2 columns. There are 3 columns in total (6 cards / 2 per col)
    // To make it infinite, we can treat the 3 columns as items.
    // Index 0: Col 1 & 2
    // Index 1: Col 2 & 3
    // Index 2: Col 3 & 1
    const totalSlides = 3

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, [totalSlides])

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    }, [totalSlides])

    useEffect(() => {
        if (isPaused) return
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [nextSlide, isPaused, currentIndex])

    // Create 3 "slides", each slide represents 2 columns (4 cards)
    // Slide 0: [1,2] [3,4]
    // Slide 1: [3,4] [5,6]
    // Slide 2: [5,6] [1,2]
    const slides = [
        [[features[0], features[1]], [features[2], features[3]]],
        [[features[2], features[3]], [features[4], features[5]]],
        [[features[4], features[5]], [features[0], features[1]]],
    ]

    return (
        <section className="py-24 md:py-32 w-full">
            <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white leading-tight">
                            All features
                            <span className="text-primary italic"> in one place</span>
                        </h2>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors dark:text-white group"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors dark:text-white group"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    {/* Left Column - 40% (adjusted for better balance) */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Abstract Graphic with subtle animations */}
                        <div className="relative h-32 md:h-48 lg:h-80 flex items-center justify-center">
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-yellow-500/10 rounded-3xl blur-3xl lg:blur-[60px]"
                            />
                            <motion.div
                                animate={{
                                    x: [-10, 10, -10],
                                    y: [-10, 10, -10],
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/4 left-1/4 w-16 h-16 lg:w-32 lg:h-32 bg-gradient-to-tr from-purple-400 to-yellow-400 rounded-full blur-xl opacity-60"
                            />
                            <motion.div
                                animate={{
                                    x: [10, -10, 10],
                                    y: [10, -10, 10],
                                }}
                                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-1/4 right-1/4 w-12 h-12 lg:w-24 lg:h-24 bg-gradient-to-bl from-yellow-300 to-purple-300 rounded-full blur-lg opacity-40"
                            />
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 rounded-full backdrop-blur-sm"></div>
                                </div>
                            </motion.div>
                        </div>


                    </div>

                    {/* Right Column - Slider Area */}
                    <div
                        className="lg:col-span-3 relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="relative overflow-hidden w-full">
                            <AnimatePresence initial={false} mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="grid grid-cols-2 gap-4 sm:gap-8 w-full"
                                >
                                    {/* Map all 4 features in the current slide. Hide the 3rd and 4th on mobile. */}
                                    {slides[currentIndex].flat().map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className={cn(
                                                "text-center p-4 sm:p-8 flex flex-col items-center justify-start border border-white/5 bg-white/5 rounded-2xl",
                                                // On small screens, hide index 2 & 3 (the bottom row)
                                                idx > 1 ? "hidden md:flex" : "flex"
                                            )}
                                        >
                                            <div className="flex justify-center mb-4 sm:mb-6">
                                                <feature.icon className="text-primary w-10 h-10 sm:w-12 sm:h-12" />
                                            </div>
                                            <h4 className="text-lg sm:text-xl font-bold mb-3 dark:text-white">
                                                {feature.title}
                                            </h4>
                                            <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
