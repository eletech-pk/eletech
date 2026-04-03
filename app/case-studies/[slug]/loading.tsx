import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";

export default function Loading() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <article className="flex-grow pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back link */}
                    <div className="inline-flex items-center text-muted-foreground mb-8 text-sm opacity-50">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
                    </div>

                    {/* Header */}
                    <div className="mb-10 animate-pulse">
                        {/* Tags skeleton */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            <div className="h-6 w-16 bg-primary/10 rounded-full border border-primary/20"></div>
                            <div className="h-6 w-20 bg-primary/10 rounded-full border border-primary/20"></div>
                        </div>

                        {/* Title skeleton */}
                        <div className="h-12 w-3/4 bg-white/10 rounded-lg mb-4"></div>
                        <div className="h-12 w-1/2 bg-white/10 rounded-lg mb-6"></div>

                        {/* Meta info skeleton */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="h-4 w-32 bg-white/5 rounded"></div>
                            <div className="h-4 w-28 bg-white/5 rounded"></div>
                        </div>
                    </div>

                    {/* Main Video or Image skeleton */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 mb-12 bg-zinc-900/50 animate-pulse">
                    </div>

                    {/* Summary skeleton */}
                    <div className="mb-12 pl-6 border-l-2 border-primary/20 animate-pulse">
                        <div className="h-5 w-full bg-white/5 rounded mb-2"></div>
                        <div className="h-5 w-full bg-white/5 rounded mb-2"></div>
                        <div className="h-5 w-4/5 bg-white/5 rounded"></div>
                    </div>

                    {/* Technologies skeleton */}
                    <div className="flex flex-wrap gap-2 mb-12 animate-pulse">
                        <div className="h-4 w-20 bg-white/5 rounded self-center mr-2"></div>
                        <div className="h-7 w-16 bg-secondary/10 rounded-full border border-secondary/20"></div>
                        <div className="h-7 w-20 bg-secondary/10 rounded-full border border-secondary/20"></div>
                        <div className="h-7 w-14 bg-secondary/10 rounded-full border border-secondary/20"></div>
                    </div>

                    {/* Challenge / Solution / Result skeletons */}
                    <div className="space-y-10 mb-12 animate-pulse">
                        <div className="p-6 rounded-2xl border border-white/5 bg-[#0A0A0A]">
                            <div className="h-6 w-40 bg-white/10 rounded mb-4"></div>
                            <div className="space-y-3">
                                <div className="h-4 w-full bg-white/5 rounded"></div>
                                <div className="h-4 w-full bg-white/5 rounded"></div>
                                <div className="h-4 w-3/4 bg-white/5 rounded"></div>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl border border-white/5 bg-[#0A0A0A]">
                            <div className="h-6 w-40 bg-white/10 rounded mb-4"></div>
                            <div className="space-y-3">
                                <div className="h-4 w-full bg-white/5 rounded"></div>
                                <div className="h-4 w-full bg-white/5 rounded"></div>
                                <div className="h-4 w-4/5 bg-white/5 rounded"></div>
                            </div>
                        </div>
                    </div>

                    {/* CTA skeleton */}
                    <div className="p-8 rounded-2xl border border-white/10 bg-white/5 text-center animate-pulse">
                        <div className="h-8 w-64 bg-white/10 rounded mx-auto mb-3"></div>
                        <div className="h-4 w-48 bg-white/5 rounded mx-auto mb-6"></div>
                        <div className="h-12 w-48 bg-primary/20 rounded-lg mx-auto"></div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
