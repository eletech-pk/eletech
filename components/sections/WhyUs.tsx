"use client"

import { m, AnimatePresence } from "framer-motion"
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

function AnimatedNumber({ min, max, suffix = "", speed = 2000 }: { min: number, max: number, suffix?: string, speed?: number }) {
    const [value, setValue] = useState(max)

    useEffect(() => {
        const interval = setInterval(() => {
            // Fluctuate randomly between min and max
            setValue(Math.floor(Math.random() * (max - min + 1) + min))
        }, speed)
        return () => clearInterval(interval)
    }, [min, max, speed])

    return <>{value}{suffix}</>
}

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
                    {/* Left Column - Neural Engine Dashboard Graphic */}
                    <div className="lg:col-span-2 relative h-[400px] md:h-[500px] flex items-center justify-center -ml-4 lg:-ml-12 perspective-1000">
                        {/* Background subtle glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 rounded-full blur-[100px] animate-pulse" />

                        {/* Connection Lines (SVG) */}
                        <svg className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none" viewBox="0 0 400 500" preserveAspectRatio="none">
                            <m.path
                                d="M 200,250 L 100,150 M 200,250 L 320,180 M 200,250 L 120,380 M 200,250 L 280,360"
                                stroke="currentColor"
                                className="text-primary"
                                strokeWidth="2"
                                strokeDasharray="5 5"
                                initial={{ strokeDashoffset: 100 }}
                                animate={{ strokeDashoffset: 0 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            {/* Animated data packets traveling along lines */}
                            <m.circle r="3" fill="#fff" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                                <animateMotion dur="3s" repeatCount="indefinite" path="M 200,250 L 100,150" />
                            </m.circle>
                            <m.circle r="3" fill="#fff" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                                <animateMotion dur="2.5s" repeatCount="indefinite" path="M 200,250 L 320,180" />
                            </m.circle>
                            <m.circle r="3" fill="#fff" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                                <animateMotion dur="4s" repeatCount="indefinite" path="M 120,380 L 200,250" />
                            </m.circle>
                        </svg>

                        {/* Central Core */}
                        <m.div
                            animate={{
                                y: [-10, 10, -10],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 w-24 h-24 md:w-32 md:h-32 glass-card rounded-3xl border border-primary/30 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(var(--primary-rgb),0.5)]"
                        >
                            <div className="absolute inset-0 bg-primary/20 rounded-3xl animate-ping opacity-20" />
                            <Cpu className="w-10 h-10 md:w-14 md:h-14 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                        </m.div>

                        {/* Floating Data Card 1 : Processing */}
                        <m.div
                            animate={{ y: [-5, 5, -5], x: [-5, 5, -5] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-[20%] left-[5%] md:left-[10%] z-20 w-40 glass-card p-3 rounded-xl border border-white/10 shadow-2xl backdrop-blur-md"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs text-gray-400 font-mono tracking-wider uppercase">System Ops</span>
                            </div>
                            <div className="font-mono text-xl font-bold text-white mb-1">
                                <AnimatedNumber min={92} max={99} suffix="%" />
                            </div>
                            <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                                <m.div
                                    className="bg-primary h-full rounded-full"
                                    animate={{ width: ["90%", "98%", "95%", "99%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </m.div>

                        {/* Floating Data Card 2 : AI Model */}
                        <m.div
                            animate={{ y: [5, -5, 5] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-[25%] right-[0%] md:right-[5%] z-20 w-44 glass-card p-4 rounded-xl border border-primary/20 shadow-xl shadow-primary/5 backdrop-blur-md"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Code2 className="w-4 h-4 text-primary" />
                                <span className="text-xs text-primary/80 font-mono tracking-wider uppercase">Model Gen</span>
                            </div>
                            <div className="font-mono text-lg font-bold text-white">
                                <AnimatedNumber min={1024} max={4096} suffix=" tokens" speed={100} />
                            </div>
                            <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">/ sec</p>
                        </m.div>

                        {/* Floating Data Card 3 : Latency */}
                        <m.div
                            animate={{ y: [-8, 8, -8], x: [5, -5, 5] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-[20%] left-[15%] md:left-[20%] z-20 glass-card px-4 py-3 rounded-xl border border-white/10 shadow-xl backdrop-blur-md flex items-center gap-4"
                        >
                            <Server className="w-5 h-5 text-gray-400" />
                            <div>
                                <div className="text-[10px] text-gray-500 font-mono tracking-wider uppercase mb-0.5">Latency</div>
                                <div className="font-mono text-sm font-bold text-green-400 flex items-baseline gap-1">
                                    <AnimatedNumber min={8} max={24} speed={500} />
                                    <span className="text-xs text-gray-400 font-normal">ms</span>
                                </div>
                            </div>
                        </m.div>

                        {/* Floating Code Snippet */}
                        <m.div
                            animate={{ y: [8, -8, 8] }}
                            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute bottom-[25%] right-[5%] z-10 glass-card p-3 rounded-lg border border-white/5 opacity-60 backdrop-blur-sm"
                        >
                            <pre className="text-[10px] font-mono text-gray-400 leading-tight">
                                <span className="text-pink-500">const</span> optimize = <span className="text-yellow-300">await</span> ai.run({`{`}<br />
                                &nbsp;&nbsp;model: <span className="text-green-300">'eletech-v2'</span>,<br />
                                &nbsp;&nbsp;data: stream<br />
                                {`}`})<br />
                                <span className="text-blue-400">return</span> optimized;
                            </pre>
                        </m.div>

                    </div>

                    {/* Right Column - Slider Area */}
                    <div
                        className="lg:col-span-3 relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="relative overflow-hidden w-full">
                            <AnimatePresence initial={false} mode="wait">
                                <m.div
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
                                                "text-center p-4 sm:p-8 flex flex-col items-center justify-start rounded-2xl bg-transparent",
                                                // On small screens, hide index 2 & 3 (the bottom row)
                                                idx > 1 ? "hidden md:flex" : "flex"
                                            )}
                                        >
                                            <div className="flex justify-center mb-4 sm:mb-6">
                                                <feature.icon className="text-primary w-10 h-10 sm:w-12 sm:h-12" />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold mb-3 dark:text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </m.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
