"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"

import {
    Bot,
    Code2,
    LineChart,
    Cpu,
    BarChart3,
    Cloud,
    ChevronLeft,
    ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
    {
        title: "Task Automation",
        description:
            "We simplify your work by turning manual tasks into automated ones!",
        icon: Bot,
        color: "bg-[#FF6000]/10 text-[#FF6000]",
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

// Card width on mobile: 80% of viewport minus section padding (px-6 = 24px * 2 = 48px)
// So card = 100vw - 48px (section) - 48px (right peek space) = 100vw - 96px
const MOBILE_CARD_VW = "calc(100vw - 96px)"
// The scroll step per card in pixels (used for programmatic scrollTo)
const getMobileCardPx = () => window.innerWidth - 96

export function Services() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const mobileScrollRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    // Clone enough cards at the end so the carousel always has cards to show
    const CLONES = 3
    const extendedServices = [...services, ...services.slice(0, CLONES)]

    // ── Mobile: programmatic scroll ──────────────────────────────────────────
    const scrollMobileTo = (idx: number) => {
        const el = mobileScrollRef.current
        if (!el) return
        el.scrollTo({ left: idx * getMobileCardPx(), behavior: "smooth" })
    }

    const nextSlide = () => {
        let idx = currentIndex
        // If already in clone zone (rapid clicking skipped onTransitionEnd), snap back first
        if (idx >= services.length) {
            const track = trackRef.current
            if (track) {
                track.style.transition = 'none'
                idx = idx % services.length
                track.style.transform = `translateX(calc(-${idx} * 40%))`
                void track.offsetHeight
                track.style.transition = ''
            }
        }
        const next = idx + 1
        setCurrentIndex(next)
        scrollMobileTo(next % services.length)
    }

    const prevSlide = () => {
        if (currentIndex === 0) {
            // Jump to clone zone instantly, then animate one step back
            const track = trackRef.current
            if (track) {
                track.style.transition = 'none'
                track.style.transform = `translateX(calc(-${services.length} * 40%))`
                void track.offsetHeight
                track.style.transition = ''
            }
            setCurrentIndex(services.length - 1)
            scrollMobileTo(services.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
            scrollMobileTo((currentIndex - 1) % services.length)
        }
    }

    // When desktop transition ends in clone zone, snap back to real position
    // Uses direct DOM manipulation to guarantee the jump is invisible
    const handleTransitionEnd = () => {
        if (currentIndex >= services.length) {
            const track = trackRef.current
            if (track) {
                // 1. Kill transition
                track.style.transition = 'none'
                // 2. Jump to real position
                const realIndex = currentIndex % services.length
                track.style.transform = `translateX(calc(-${realIndex} * 40%))`
                // 3. Force reflow so the browser commits the jump
                void track.offsetHeight
                // 4. Re-enable transition
                track.style.transition = ''
                // 5. Sync React state (no re-render flicker since DOM already matches)
                setCurrentIndex(realIndex)
            }
        }
    }

    // ── Auto-play ────────────────────────────────────────────────────────────
    useEffect(() => {
        if (isHovered) return
        const interval = setInterval(nextSlide, 3000)
        return () => clearInterval(interval)
    }, [isHovered, currentIndex])

    // ── Shared card content ──────────────────────────────────────────────────
    const renderCard = (service: (typeof services)[0], idx: number) => (
        <div className="flex flex-col h-full p-6 sm:p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors group">
            <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${service.color}`}>
                    <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
            </div>
            <p className="text-gray-400 mb-6 flex-grow text-sm sm:text-base leading-relaxed">
                {service.description}
            </p>
            <Link href="#contact" className="inline-block mt-auto w-full sm:w-auto">
                <Button
                    variant="secondary"
                    className="w-full rounded-full bg-white/10 text-white hover:bg-white/20 border-0"
                >
                    Get started
                </Button>
            </Link>
        </div>
    )

    return (
        <section
            id="services"
            className="py-24 bg-black w-full overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column */}
                    <div className="lg:col-span-4 space-y-8">
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

                        {/* Nav Buttons — mobile */}
                        <div className="flex lg:hidden gap-4">
                            <button
                                onClick={prevSlide}
                                aria-label="Previous service"
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                aria-label="Next service"
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-8 flex flex-col">

                        {/* ── MOBILE carousel (scroll-snap, vw-based widths) ── */}
                        <div
                            ref={mobileScrollRef}
                            className="md:hidden flex overflow-x-auto snap-x snap-mandatory py-4"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
                        >
                            {services.map((service, idx) => (
                                <div
                                    key={`mob-${service.title}-${idx}`}
                                    className="flex-shrink-0 snap-start pr-3"
                                    style={{ width: MOBILE_CARD_VW }}
                                >
                                    {renderCard(service, idx)}
                                </div>
                            ))}
                        </div>

                        {/* ── DESKTOP carousel (translateX, infinite loop) ── */}
                        <div className="hidden md:block relative w-full overflow-hidden py-4">
                            <div
                                ref={trackRef}
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(calc(-${currentIndex} * 40%))` }}
                                onTransitionEnd={handleTransitionEnd}
                            >
                                {extendedServices.map((service, idx) => (
                                    <div
                                        key={`desk-${idx}`}
                                        className="w-[40%] flex-shrink-0 px-2 md:px-4"
                                    >
                                        {renderCard(service, idx)}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Nav Buttons — desktop */}
                        <div className="hidden lg:flex gap-4 pl-4 md:pl-8 mt-6">
                            <button
                                onClick={prevSlide}
                                aria-label="Previous service"
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/50 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                aria-label="Next service"
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/50 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
