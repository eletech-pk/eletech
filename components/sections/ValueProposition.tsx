"use client"

import { CheckCircle, TrendingUp, Zap, Settings, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

export function ValueProposition() {
    return (
        <section className="py-24 space-y-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Block 1: Expert Team */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative bg-gradient-to-br from-purple-900/40 to-black border border-white/10 rounded-2xl p-2 h-[400px] overflow-hidden flex items-center justify-center">
                        <div className="relative w-64 h-64 bg-gradient-to-b from-primary/40 to-transparent rounded-full blur-sm backdrop-blur-md border-t border-white/20 shadow-[0_0_50px_rgba(139,92,246,0.3)] animate-pulse"></div>
                        <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl bg-black/40 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-ping"></div>
                                <span className="text-xs text-gray-300 font-mono">
                                    Expertise Active
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 dark:text-white">
                        Expert Team
                    </h3>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
                        Our team consists of industry veterans and technical wizards
                        dedicated to solving your most complex challenges.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="text-primary w-5 h-5" />
                                <span className="font-bold dark:text-white">
                                    Skilled Engineers
                                </span>
                            </div>
                            <p className="text-xs text-gray-500">
                                Top-tier talent in AI and dev.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="text-primary w-5 h-5" />
                                <span className="font-bold dark:text-white">
                                    Domain Experts
                                </span>
                            </div>
                            <p className="text-xs text-gray-500">
                                Deep understanding of varied industries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Block 2: Proven Results */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 dark:text-white">
                        Proven Results
                    </h3>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
                        We don't just promise; we deliver measurable improvements in
                        efficiency, cost reduction, and revenue growth.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <TrendingUp className="text-secondary w-5 h-5" />
                                <span className="font-bold dark:text-white">High ROI</span>
                            </div>
                            <p className="text-xs text-gray-500">
                                Solutions that pay for themselves.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Zap className="text-secondary w-5 h-5" />
                                <span className="font-bold dark:text-white">
                                    Rapid Deployment
                                </span>
                            </div>
                            <p className="text-xs text-gray-500">
                                Get up and running in record time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2 relative group">
                    <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative bg-gradient-to-br from-orange-900/40 to-black border border-white/10 rounded-2xl p-2 h-[400px] overflow-hidden flex items-center justify-center">
                        <div className="relative w-64 h-64 bg-gradient-to-tr from-secondary/40 to-orange-600/10 rounded-full blur-sm backdrop-blur-md border-b border-white/20 shadow-[0_0_50px_rgba(249,115,22,0.3)]"></div>
                        <div className="absolute bottom-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                            <CheckCircle className="text-white w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Block 3: Custom Solutions */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative bg-gradient-to-br from-blue-900/40 to-black border border-white/10 rounded-2xl p-2 h-[400px] overflow-hidden flex items-center justify-center">
                        <div className="relative w-64 h-64 border-[20px] border-blue-500/20 rounded-full transform rotate-45 backdrop-blur-sm"></div>
                        <div className="absolute w-48 h-48 bg-blue-500/30 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-6 left-6 p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-2">
                            <Settings className="text-blue-400 w-4 h-4" />
                            <span className="text-xs text-white">100% Tailored</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 dark:text-white">
                        Custom Solutions
                    </h3>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
                        Every business is unique. We build bespoke AI architectures that fit
                        your specific infrastructure and goals perfectly.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Settings className="text-blue-400 w-5 h-5" />
                                <span className="font-bold dark:text-white">
                                    Seamless Integration
                                </span>
                            </div>
                            <p className="text-xs text-gray-500">
                                Works with your existing stack.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Shield className="text-blue-400 w-5 h-5" />
                                <span className="font-bold dark:text-white">
                                    Enterprise Security
                                </span>
                            </div>
                            <p className="text-xs text-gray-500">Built with safety first.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
