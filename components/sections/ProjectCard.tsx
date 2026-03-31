"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
    _id: string;
    title: string;
    slug: string;
    summary: string;
    videoUrl?: string;
    imageUrl?: string;
}

export function ProjectCard({ project }: { project: Project }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleInteractionStart = () => {
        setIsHovered(true);
        if (videoRef.current) {
            // Attempt to play, catch any browser auto-play prevention errors
            videoRef.current.play().catch(() => {});
        }
    };

    const handleInteractionEnd = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            // Reset video to start when un-hovered
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div 
            className="flex flex-col rounded-3xl bg-[#0A0A0A] border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 group shadow-2xl shadow-black/50"
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            onTouchCancel={handleInteractionEnd}
        >
            {/* Video / Image Area */}
            <div className="relative aspect-video w-full bg-zinc-900/50 overflow-hidden border-b border-white/5">
                {/* Primary Image Layer */}
                {project.imageUrl ? (
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className={`object-cover w-full h-full absolute inset-0 transition-all duration-700 scale-[1.02] group-hover:scale-100 ${project.videoUrl && isHovered ? 'opacity-0' : 'opacity-80 group-hover:opacity-100'}`}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 bg-black/40">
                        <PlayCircle className="w-12 h-12 opacity-50" />
                    </div>
                )}

                {/* Video Layer (Hidden statically, Fades in on hover) */}
                {project.videoUrl && (
                    <video 
                        ref={videoRef}
                        src={project.videoUrl} 
                        muted 
                        loop 
                        playsInline
                        preload="none"
                        className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-700 scale-[1.02] group-hover:scale-100 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    />
                )}
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-8 line-clamp-3 text-sm sm:text-base leading-relaxed">
                    {project.summary || "Explore how we implemented tailored automation solutions to drive efficiency and reduce operational costs."}
                </p>
                
                <div className="mt-auto">
                    <Button asChild variant="secondary" className="w-full rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-white border-0 transition-colors pointer-events-auto z-10 relative">
                        <Link href={`/case-studies/${project.slug}`}>
                            View Details
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
