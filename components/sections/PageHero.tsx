"use client"

import { SubtleBadge } from "@/components/ui/subtle-badge"
import { BlurInHeading } from "@/components/ui/blur-in-heading"

interface PageHeroProps {
    badge?: string
    title: string
    subtitle?: string
    badgeIcon?: React.ReactNode
}

export function PageHero({ badge, title, subtitle, badgeIcon }: PageHeroProps) {
    return (
        <section className="relative pt-40 pb-20 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 relative z-10 text-center">
                {badge && (
                    <SubtleBadge icon={badgeIcon} className="mb-6">
                        {badge}
                    </SubtleBadge>
                )}
                <BlurInHeading as="h1" className="text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto">
                    {title}
                </BlurInHeading>
                {subtitle && (
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    )
}
