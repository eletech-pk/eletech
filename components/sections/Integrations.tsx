"use client"

import { m } from "framer-motion"

export function Integrations() {
    return (
        <section className="py-24 overflow-hidden relative w-full">
            <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 text-center"
            >
                <h2 className="text-3xl font-display font-bold mb-4 dark:text-white">
                    Effortless Connections
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Seamlessly integrate with the tools your team already uses and loves.
                </p>
            </m.div>

            <div className="relative w-full overflow-x-auto pt-8 pb-12 hide-scrollbar">
                <m.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="flex gap-6 px-4 sm:px-6 lg:px-8 min-w-max justify-center"
                >
                    <m.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                        }}
                        className="w-80"
                    >
                        <m.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                            className="p-6 rounded-2xl glass-card bg-gradient-to-b from-gray-800/50 to-gray-900/80 border border-white/10 h-full"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                {/* Placeholder for Slack Logo */}
                                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold">
                                    S
                                </div>
                                <div className="font-bold dark:text-white">Slack Integration</div>
                            </div>
                            <p className="text-sm text-gray-400">
                                "The AI bot now automatically summarizes our daily standups."
                            </p>
                        </m.div>
                    </m.div>

                    <m.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                        }}
                        className="w-80"
                    >
                        <m.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="p-6 rounded-2xl glass-card bg-gradient-to-b from-primary/20 to-orange-950/40 border border-primary/30 transform lg:scale-105 shadow-xl shadow-primary/10 h-full"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                {/* Placeholder for Notion Logo */}
                                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold">
                                    N
                                </div>
                                <div className="font-bold dark:text-white">Notion Sync</div>
                            </div>
                            <p className="text-sm text-gray-300">
                                "Documentation has never been this automated and organized."
                            </p>
                        </m.div>
                    </m.div>

                    <m.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                        }}
                        className="w-80"
                    >
                        <m.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="p-6 rounded-2xl glass-card bg-gradient-to-b from-gray-800/50 to-gray-900/80 border border-white/10 h-full"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                {/* Placeholder for Teams Logo */}
                                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white font-bold">
                                    T
                                </div>
                                <div className="font-bold dark:text-white">Teams Connect</div>
                            </div>
                            <p className="text-sm text-gray-400">
                                "Meetings are transcribed and action items are created instantly."
                            </p>
                        </m.div>
                    </m.div>
                </m.div>
            </div>
        </section>
    )
}
