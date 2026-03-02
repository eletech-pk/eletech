"use client"

export function Stats() {
    return (
        <section className="py-16 border-y border-white/5 bg-black/30 w-full">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                <div className="p-4">
                    <div className="text-5xl font-display font-bold text-white mb-2">
                        50+
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wide">
                        Enterprise Clients
                    </div>
                </div>
                <div className="p-4">
                    <div className="text-5xl font-display font-bold text-white mb-2">
                        98%
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wide">
                        Client Retention
                    </div>
                </div>
                <div className="p-4">
                    <div className="text-5xl font-display font-bold text-white mb-2">
                        1M+
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wide">
                        Tasks Automated
                    </div>
                </div>
            </div>
        </section>
    )
}
