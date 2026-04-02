"use client";

import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectGridWithSlider({ projects }: { projects: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [projects.length]);

    const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

    if (!projects?.length) return null;

    return (
        <>
            {/* Desktop View: Static Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project._id} project={project} priority={true} />
                ))}
            </div>

            {/* Mobile View: Infinite Auto-Slider */}
            <div className="block md:hidden relative w-full overflow-hidden pb-4 px-6 sm:px-16">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {projects.map((project, i) => (
                        <div key={project._id} className="w-full flex-shrink-0 px-1">
                            <ProjectCard project={project} priority={i === 0} />
                        </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center items-center gap-4 mt-8">
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary/20 hover:border-primary/50 transition-colors" onClick={prev}>
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <div className="flex gap-2 mx-2">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-primary w-6" : "bg-white/20 w-2"}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary/20 hover:border-primary/50 transition-colors" onClick={next}>
                        <ChevronRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </>
    );
}
