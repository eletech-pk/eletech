"use client"

export function Integrations() {
    return (
        <section className="py-24 overflow-hidden relative w-full">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 text-center">
                <h2 className="text-3xl font-display font-bold mb-4 dark:text-white">
                    Effortless Connections
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Seamlessly integrate with the tools your team already uses and loves.
                </p>
            </div>
            <div className="relative w-full overflow-x-auto pb-8 hide-scrollbar">
                <div className="flex gap-6 px-4 sm:px-6 lg:px-8 min-w-max justify-center">
                    <div className="w-80 p-6 rounded-2xl glass-card bg-gradient-to-b from-gray-800/50 to-gray-900/80 border border-white/10">
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
                    </div>
                    <div className="w-80 p-6 rounded-2xl glass-card bg-gradient-to-b from-primary/20 to-purple-900/40 border border-primary/30 transform scale-105 shadow-xl shadow-primary/10">
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
                    </div>
                    <div className="w-80 p-6 rounded-2xl glass-card bg-gradient-to-b from-gray-800/50 to-gray-900/80 border border-white/10">
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
                    </div>
                </div>
            </div>
        </section>
    )
}
