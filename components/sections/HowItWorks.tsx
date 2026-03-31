"use client"

import { m } from "framer-motion"
import { Command, PhoneCall, Code, Rocket } from "lucide-react"
import { SubtleBadge } from "@/components/ui/subtle-badge"
import { BlurInHeading } from "@/components/ui/blur-in-heading"

const steps = [
    {
        number: 1,
        title: "Schedule a Free Call",
        description: "Start by sharing your goals with us. We'll gather all necessary details to tailor our services to your exact needs.",
        icon: PhoneCall,
    },
    {
        number: 2,
        title: "AI Design & Dev",
        description: "Our team designs and builds intelligent systems tailored to your business, smoothly integrating with your existing infrastructure.",
        icon: Code,
    },
    {
        number: 3,
        title: "Continuous Optimization",
        description: "We constantly refine performance, analyze insights, and enhance your automation pipelines for long-term growth.",
        icon: Rocket,
    },
]

export function HowItWorks() {
    return (
        <section className="relative z-20 w-full py-16 px-6 sm:px-8 lg:px-24 bg-background">
            <div className="w-full max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center text-center gap-6 mb-16">
                    <SubtleBadge icon={<Command className="w-4 h-4" />}>Our Process</SubtleBadge>
                    <BlurInHeading as="h2" className="text-foreground text-3xl md:text-4xl lg:text-5xl max-w-3xl">
                        A seamless workflow from concept to deployment
                    </BlurInHeading>
                    <p className="text-muted-foreground text-base max-w-xl">
                        Every system we architect closely aligns with your business objectives. We prioritize rapid validation and enterprise-grade reliability.
                    </p>
                </div>

                {/* Horizontal 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
                    {/* Optional: Horizontal connecting line on desktop */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

                    {steps.map((step, index) => (
                        <m.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Number Badge */}
                            <div className="w-16 h-16 rounded-2xl flex flex-col justify-center items-center relative overflow-hidden border border-white/10 mb-6 bg-black/40 group-hover:bg-primary/10 transition-colors duration-500">
                                <span className="text-2xl font-bold font-mono text-white group-hover:text-primary transition-colors">{step.number}</span>
                            </div>

                            {/* Icon */}
                            <div className="mb-6 h-20 flex items-center justify-center">
                                <step.icon className="w-12 h-12 text-primary/60 group-hover:text-primary transition-colors duration-500 group-hover:scale-110" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-display font-medium text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                                {step.description}
                            </p>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
