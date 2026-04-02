"use client"

import { m, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Cpu, Code2, Server, CheckCircle, TrendingUp, Settings } from "lucide-react"

// --- Components Extracted from Stats & WhyUs ---

const statsData = [
    { value: 50, suffix: "+", label: "Enterprise Clients" },
    { value: 98, suffix: "%", label: "Client Retention" },
    { value: 1, suffix: "M+", label: "Tasks Automated" }
]

function CountingNumber({ value }: { value: number }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, Math.round)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    useEffect(() => {
        if (isInView) {
            const animation = animate(count, value, {
                duration: 2.5,
                ease: "easeOut",
            })
            return animation.stop
        }
    }, [count, value, isInView])

    return <m.span ref={ref}>{rounded}</m.span>
}

function AnimatedNumber({ min, max, suffix = "", speed = 2000 }: { min: number, max: number, suffix?: string, speed?: number }) {
    const [value, setValue] = useState(max)

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(Math.floor(Math.random() * (max - min + 1) + min))
        }, speed)
        return () => clearInterval(interval)
    }, [min, max, speed])

    return <>{value}{suffix}</>
}

// --- Main Component ---

export function ValueAndProof() {
    return (
        <section className="py-24 w-full overflow-hidden bg-background border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header Above Everything */}
                <div className="flex flex-col items-center text-center gap-6 mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                         Transforming Ambition into <span className="text-primary italic">Measurable Reality</span>
                    </h2>
                    <p className="text-lg text-gray-400">
                        We don't just implement technology; we architect competitive advantages. Our AI solutions radically cut operational latency, accelerate workflows, and scale flawlessly to dominate your market.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
                    
                    {/* Left Column: Neural Engine Graphic (Extracted perfectly from WhyUs) */}
                    <div className="relative h-[400px] md:h-[500px] flex items-center justify-center -ml-4 lg:-ml-12 perspective-1000">
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
                            className="absolute top-[15%] md:top-[20%] left-[2%] md:left-[10%] z-20 w-[130px] md:w-40 glass-card p-2 md:p-3 rounded-xl border border-white/10 shadow-2xl backdrop-blur-md bg-black/40"
                        >
                            <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] md:text-xs text-gray-400 font-mono tracking-wider uppercase">System Ops</span>
                            </div>
                            <div className="font-mono text-lg md:text-xl font-bold text-white mb-1">
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
                            className="absolute top-[20%] md:top-[25%] right-0 md:right-[5%] z-20 w-[140px] md:w-44 glass-card p-2.5 md:p-4 rounded-xl border border-primary/20 shadow-xl shadow-primary/5 backdrop-blur-md bg-black/40"
                        >
                            <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                                <Code2 className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                                <span className="text-[10px] md:text-xs text-primary/80 font-mono tracking-wider uppercase">Model Gen</span>
                            </div>
                            <div className="font-mono text-base md:text-lg font-bold text-white">
                                <AnimatedNumber min={1024} max={4096} suffix=" tokens" speed={100} />
                            </div>
                            <p className="text-[8px] md:text-[10px] text-gray-500 mt-0.5 md:mt-1 uppercase tracking-widest">/ sec</p>
                        </m.div>

                        {/* Floating Data Card 3 : Latency */}
                        <m.div
                            animate={{ y: [-8, 8, -8], x: [5, -5, 5] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-[15%] md:bottom-[20%] left-[6%] md:left-[20%] z-20 glass-card px-2.5 py-2 md:px-4 md:py-3 rounded-xl border border-white/10 shadow-xl backdrop-blur-md flex items-center gap-3 md:gap-4 bg-black/40"
                        >
                            <Server className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                            <div>
                                <div className="text-[8px] md:text-[10px] text-gray-500 font-mono tracking-wider uppercase mb-0.5">Latency</div>
                                <div className="font-mono text-xs md:text-sm font-bold text-green-400 flex items-baseline gap-1">
                                    <AnimatedNumber min={8} max={24} speed={500} />
                                    <span className="text-[10px] md:text-xs text-gray-400 font-normal">ms</span>
                                </div>
                            </div>
                        </m.div>

                        {/* Floating Code Snippet */}
                        <m.div
                            animate={{ y: [8, -8, 8] }}
                            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute bottom-[20%] md:bottom-[25%] right-[1%] md:right-[5%] z-10 glass-card p-2 md:p-3 rounded-lg border border-white/5 opacity-60 backdrop-blur-sm bg-black/40"
                        >
                            <pre className="text-[8px] md:text-[10px] font-mono text-gray-400 leading-tight">
                                <span className="text-pink-500">const</span> optimize = <span className="text-yellow-300">await</span> ai.run({`{`}<br />
                                &nbsp;&nbsp;model: <span className="text-green-300">'eletech-v2'</span>,<br />
                                &nbsp;&nbsp;data: stream<br />
                                {`}`})<br />
                                <span className="text-blue-400">return</span> optimized;
                            </pre>
                        </m.div>
                    </div>

                    {/* Right Column: Stats & Values Merged */}
                    <div className="space-y-12">
                        {/* 1. Header & Stats Section */}
                        <div className="space-y-8">
                            
                            {/* Animated Stats Row */}
                            <m.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                                className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10"
                            >
                                {statsData.map((stat, idx) => (
                                    <m.div
                                        key={idx}
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                        }}
                                        className="flex flex-col"
                                    >
                                        <div className="text-3xl lg:text-4xl font-display font-bold text-white mb-1 flex items-center">
                                            <CountingNumber value={stat.value} />
                                            <span>{stat.suffix}</span>
                                        </div>
                                        <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                                            {stat.label}
                                        </div>
                                    </m.div>
                                ))}
                            </m.div>
                        </div>

                        {/* 2. Core Value Propositions (List Format) */}
                        <div className="space-y-6 pt-6">
                            <m.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex gap-4"
                            >
                                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold dark:text-white mb-1">Expert Team</h3>
                                    <p className="text-sm text-gray-400">Industry veterans & technical wizards dedicated to solving complex challenges, featuring top-tier AI talent and deep domain expertise.</p>
                                </div>
                            </m.div>

                            <m.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex gap-4"
                            >
                                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold dark:text-white mb-1">Proven ROI</h3>
                                    <p className="text-sm text-gray-400">Solutions that rapidly generate returns by radically cutting operational latency, accelerating workflows, and scaling flawlessly.</p>
                                </div>
                            </m.div>

                            <m.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex gap-4"
                            >
                                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                    <Settings className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold dark:text-white mb-1">Custom Solutions</h3>
                                    <p className="text-sm text-gray-400">100% tailored architectures that seamlessly integrate with your existing tech-stack and maintain best-in-class enterprise security.</p>
                                </div>
                            </m.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
