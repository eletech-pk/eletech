"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Bot,
    Code2,
    LineChart,
    Cpu,
    BarChart3,
    Cloud,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
    {
        title: "Task Automation",
        description:
            "We simplify your work by turning manual tasks into automated ones!",
        icon: Bot,
        color: "bg-purple-500/10 text-purple-500",
    },
    {
        title: "Smart Workflows",
        description:
            "Create smart workflows that simplify complex tasks across different tools.",
        icon: Code2,
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        title: "Data Analytics",
        description:
            "Unlock actionable insights from your data to drive informed decision-making.",
        icon: LineChart,
        color: "bg-green-500/10 text-green-500",
    },
    {
        title: "Process Optimization",
        description:
            "Re-engineer your workflows for maximum efficiency and reduced operational costs.",
        icon: Cpu,
        color: "bg-orange-500/10 text-orange-500",
    },
    {
        title: "Business Intelligence",
        description:
            "Visualize performance metrics and trends with dynamic, real-time dashboards.",
        icon: BarChart3,
        color: "bg-yellow-500/10 text-yellow-500",
    },
    {
        title: "Cloud Solutions",
        description:
            "Scalable cloud infrastructure to support your growing AI and data needs.",
        icon: Cloud,
        color: "bg-cyan-500/10 text-cyan-500",
    },
]

export function Services() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (services.length - 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? services.length - 2 : prev - 1
        )
    }

    const visibleServices = [
        services[currentIndex],
        services[(currentIndex + 1) % services.length],
    ]

    return (
        <section id="services" className="py-24 bg-black w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-5 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            Smarter Services,
                            <br />
                            <span className="italic font-serif font-light text-gray-400">
                                Built with AI
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Discover all the tools you need to streamline your operations and
                            supercharge your productivity! With our solutions, you can easily
                            automate tasks.
                        </p>

                        {/* Navigation Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Carousel */}
                    <div className="lg:col-span-7">
                        <div className="grid md:grid-cols-2 gap-6 items-start">
                            <AnimatePresence mode="popLayout">
                                {visibleServices.map((service, idx) => (
                                    <motion.div
                                        key={`${service.title}-${currentIndex}-${idx}`}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                                        className="flex flex-col p-6 sm:p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors group"
                                    >
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 mb-6 flex-grow">
                                            {service.description}
                                        </p>
                                        <Link href="#contact" className="inline-block mt-auto">
                                            <Button
                                                variant="secondary"
                                                className="rounded-full bg-white/10 text-white hover:bg-white/20 border-0"
                                            >
                                                Get started
                                            </Button>
                                        </Link>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
