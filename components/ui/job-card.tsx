"use client"

import Link from "next/link"
import { ArrowRight, MapPin, Briefcase, Clock, DollarSign } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface JobCardProps {
    title: string
    slug: string
    department?: string
    location?: string
    type?: string
    tags?: string[]
    salary?: string
    className?: string
}

export function JobCard({
    title,
    slug,
    department,
    location,
    type,
    tags = [],
    salary,
    className,
}: JobCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={cn("group", className)}
        >
            <Link href={`/careers/${slug}`} className="block h-full">
                <div className="h-full rounded-2xl border border-white/5 bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-primary/5 flex flex-col">
                    {/* Department badge */}
                    {department && (
                        <span className="inline-flex items-center self-start px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider border border-primary/30 bg-primary/10 text-primary mb-4">
                            <Briefcase className="w-3 h-3 mr-1.5" />
                            {department}
                        </span>
                    )}

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {title}
                    </h3>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                        {location && (
                            <span className="inline-flex items-center gap-1">
                                <MapPin className="w-3 h-3" /> {location}
                            </span>
                        )}
                        {type && (
                            <span className="inline-flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {type}
                            </span>
                        )}
                        {salary && (
                            <span className="inline-flex items-center gap-1">
                                <DollarSign className="w-3 h-3" /> {salary}
                            </span>
                        )}
                    </div>

                    {/* Tags */}
                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 rounded-full text-[10px] font-medium border border-white/10 bg-white/5 text-muted-foreground"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* CTA */}
                    <div className="flex items-center text-sm text-primary font-medium group-hover:gap-2 gap-1 transition-all pt-2 border-t border-white/5">
                        View Details <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
