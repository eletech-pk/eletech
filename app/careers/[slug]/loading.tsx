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
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Careers
                    </div>

                    {/* Header */}
                    <div className="mb-10 animate-pulse">
                        {/* Department badge skeleton */}
                        <div className="h-6 w-32 bg-white/10 rounded-full mb-4"></div>

                        {/* Title skeleton */}
                        <div className="h-12 w-3/4 bg-white/10 rounded-lg mb-4"></div>
                        <div className="h-12 w-1/2 bg-white/10 rounded-lg mb-6"></div>

                        {/* Meta info skeleton */}
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className="h-4 w-24 bg-white/5 rounded"></div>
                            <div className="h-4 w-20 bg-white/5 rounded"></div>
                            <div className="h-4 w-28 bg-white/5 rounded"></div>
                            <div className="h-4 w-32 bg-white/5 rounded"></div>
                        </div>

                        {/* Tags skeleton */}
                        <div className="flex flex-wrap gap-2">
                            <div className="h-6 w-16 bg-white/5 rounded-full border border-white/5"></div>
                            <div className="h-6 w-20 bg-white/5 rounded-full border border-white/5"></div>
                            <div className="h-6 w-14 bg-white/5 rounded-full border border-white/5"></div>
                        </div>
                    </div>

                    {/* Description skeleton */}
                    <div className="mb-10 pl-6 border-l-2 border-primary/20 animate-pulse">
                        <div className="h-4 w-full bg-white/5 rounded mb-2"></div>
                        <div className="h-4 w-full bg-white/5 rounded mb-2"></div>
                        <div className="h-4 w-4/5 bg-white/5 rounded mb-2"></div>
                        <div className="h-4 w-full bg-white/5 rounded mb-2"></div>
                        <div className="h-4 w-3/4 bg-white/5 rounded"></div>
                    </div>

                    {/* Requirements/Responsibilities boxes skeletons */}
                    <div className="space-y-6 animate-pulse">
                        <div className="h-48 w-full bg-[#0A0A0A] border border-white/5 rounded-2xl p-6">
                            <div className="h-6 w-40 bg-white/10 rounded mb-6"></div>
                            <div className="space-y-3">
                                <div className="h-4 w-full bg-white/5 rounded"></div>
                                <div className="h-4 w-full bg-white/5 rounded"></div>
                                <div className="h-4 w-3/4 bg-white/5 rounded"></div>
                            </div>
                        </div>
                        <div className="h-48 w-full bg-[#0A0A0A] border border-white/5 rounded-2xl p-6">
                            <div className="h-6 w-40 bg-white/10 rounded mb-6"></div>
                            <div className="space-y-3">
                                <div className="h-4 w-full bg-white/5 rounded"></div>
                                <div className="h-4 w-full bg-white/5 rounded"></div>
                                <div className="h-4 w-4/5 bg-white/5 rounded"></div>
                            </div>
                        </div>
                    </div>

                    {/* Button skeleton */}
                    <div className="mt-12 h-14 w-full bg-primary/20 rounded-full animate-pulse"></div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
