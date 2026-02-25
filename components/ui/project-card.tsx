"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
    title: string
    slug: string
    client?: string
    summary: string
    imageUrl?: string
    tags?: string[]
    technologies?: string[]
    className?: string
}

export function ProjectCard({
    title,
    slug,
    client,
    summary,
    imageUrl,
    tags = [],
    technologies = [],
    className,
}: ProjectCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={cn("group", className)}
        >
            <Link href={`/case-studies/${slug}`} className="block h-full">
                <div className="h-full rounded-2xl border border-white/5 bg-[#0A0A0A] overflow-hidden transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-primary/5">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden bg-white/5">
                        {imageUrl ? (
                            <Image
                                src={imageUrl}
                                alt={title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                                No Image
                            </div>
                        )}
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {client && (
                            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                                {client}
                            </p>
                        )}
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {summary}
                        </p>

                        {/* Tags */}
                        {(tags.length > 0 || technologies.length > 0) && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-0.5 rounded-full text-[10px] font-medium border border-primary/30 bg-primary/10 text-primary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                                {technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-0.5 rounded-full text-[10px] font-medium border border-secondary/30 bg-secondary/10 text-secondary"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* CTA */}
                        <div className="flex items-center text-sm text-primary font-medium group-hover:gap-2 gap-1 transition-all">
                            Learn More <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
