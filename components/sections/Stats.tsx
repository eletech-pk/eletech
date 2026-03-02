"use client"

import { m, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect } from "react"

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

export function Stats() {
    return (
        <section className="py-16 border-y border-white/5 bg-black/30 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <m.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10"
                >
                    {statsData.map((stat, idx) => (
                        <m.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                            className="p-4"
                        >
                            <div className="text-5xl font-display font-bold text-white mb-2 flex justify-center items-center">
                                <CountingNumber value={stat.value} />
                                <span>{stat.suffix}</span>
                            </div>
                            <div className="text-gray-400 text-sm uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </m.div>
                    ))}
                </m.div>
            </div>
        </section>
    )
}
