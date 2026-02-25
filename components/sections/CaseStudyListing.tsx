"use client"

import { useState, useMemo } from "react"
import { AnimatePresence } from "framer-motion"
import { SearchBar } from "@/components/ui/search-bar"
import { FilterBar } from "@/components/ui/filter-bar"
import { ProjectCard } from "@/components/ui/project-card"
import { FolderOpen } from "lucide-react"

export interface CaseStudyItem {
    title: string
    slug: string
    client?: string
    summary: string
    imageUrl?: string
    tags: string[]
    technologies: string[]
}

interface CaseStudyListingProps {
    caseStudies: CaseStudyItem[]
}

export function CaseStudyListing({ caseStudies }: CaseStudyListingProps) {
    const [search, setSearch] = useState("")
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [selectedTech, setSelectedTech] = useState<string[]>([])

    // Extract unique tags and technologies from all case studies
    const allTags = useMemo(() => {
        const tags = new Set<string>()
        caseStudies.forEach((cs) => cs.tags?.forEach((t) => tags.add(t)))
        return Array.from(tags).sort()
    }, [caseStudies])

    const allTech = useMemo(() => {
        const tech = new Set<string>()
        caseStudies.forEach((cs) => cs.technologies?.forEach((t) => tech.add(t)))
        return Array.from(tech).sort()
    }, [caseStudies])

    // Filter case studies
    const filtered = useMemo(() => {
        return caseStudies.filter((cs) => {
            // Search filter
            const searchLower = search.toLowerCase()
            const matchesSearch =
                !search ||
                cs.title.toLowerCase().includes(searchLower) ||
                cs.client?.toLowerCase().includes(searchLower) ||
                cs.summary.toLowerCase().includes(searchLower) ||
                cs.tags?.some((t) => t.toLowerCase().includes(searchLower)) ||
                cs.technologies?.some((t) => t.toLowerCase().includes(searchLower))

            // Tag filter
            const matchesTags =
                selectedTags.length === 0 ||
                selectedTags.some((tag) => cs.tags?.includes(tag))

            // Tech filter
            const matchesTech =
                selectedTech.length === 0 ||
                selectedTech.some((tech) => cs.technologies?.includes(tech))

            return matchesSearch && matchesTags && matchesTech
        })
    }, [caseStudies, search, selectedTags, selectedTech])

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        )
    }

    const toggleTech = (tech: string) => {
        setSelectedTech((prev) =>
            prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
        )
    }

    return (
        <section className="pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Search + Filters */}
                <div className="flex flex-col gap-4 mb-10">
                    <SearchBar
                        value={search}
                        onChange={setSearch}
                        placeholder="Search case studies..."
                        className="max-w-lg"
                    />
                    {allTags.length > 0 && (
                        <FilterBar
                            label="Tags"
                            items={allTags}
                            selected={selectedTags}
                            onToggle={toggleTag}
                        />
                    )}
                    {allTech.length > 0 && (
                        <FilterBar
                            label="Tech"
                            items={allTech}
                            selected={selectedTech}
                            onToggle={toggleTech}
                        />
                    )}
                </div>

                {/* Results count */}
                <p className="text-sm text-muted-foreground mb-6">
                    Showing {filtered.length} of {caseStudies.length} project{caseStudies.length !== 1 ? "s" : ""}
                </p>

                {/* Card Grid */}
                {filtered.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((cs) => (
                                <ProjectCard
                                    key={cs.slug}
                                    title={cs.title}
                                    slug={cs.slug}
                                    client={cs.client}
                                    summary={cs.summary}
                                    imageUrl={cs.imageUrl}
                                    tags={cs.tags}
                                    technologies={cs.technologies}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <FolderOpen className="w-12 h-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-bold mb-2">No projects found</h3>
                        <p className="text-sm text-muted-foreground">
                            Try adjusting your search or filters to find what you&apos;re looking for.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}
