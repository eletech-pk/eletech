"use client"

import { useState, useMemo } from "react"
import { AnimatePresence } from "framer-motion"
import { SearchBar } from "@/components/ui/search-bar"
import { FilterBar } from "@/components/ui/filter-bar"
import { JobCard } from "@/components/ui/job-card"
import { Briefcase } from "lucide-react"

export interface JobItem {
    title: string
    slug: string
    department?: string
    location?: string
    type?: string
    tags: string[]
    salary?: string
}

interface CareerListingProps {
    jobs: JobItem[]
}

export function CareerListing({ jobs }: CareerListingProps) {
    const [search, setSearch] = useState("")
    const [selectedTags, setSelectedTags] = useState<string[]>([])

    // Extract unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>()
        jobs.forEach((job) => job.tags?.forEach((t) => tags.add(t)))
        return Array.from(tags).sort()
    }, [jobs])

    // Filter jobs
    const filtered = useMemo(() => {
        return jobs.filter((job) => {
            const searchLower = search.toLowerCase()
            const matchesSearch =
                !search ||
                job.title.toLowerCase().includes(searchLower) ||
                job.department?.toLowerCase().includes(searchLower) ||
                job.location?.toLowerCase().includes(searchLower) ||
                job.type?.toLowerCase().includes(searchLower) ||
                job.tags?.some((t) => t.toLowerCase().includes(searchLower))

            const matchesTags =
                selectedTags.length === 0 ||
                selectedTags.some((tag) => job.tags?.includes(tag))

            return matchesSearch && matchesTags
        })
    }, [jobs, search, selectedTags])

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
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
                        placeholder="Search positions..."
                        className="max-w-lg"
                    />
                    {allTags.length > 0 && (
                        <FilterBar
                            label="Filter"
                            items={allTags}
                            selected={selectedTags}
                            onToggle={toggleTag}
                        />
                    )}
                </div>

                {/* Results count */}
                <p className="text-sm text-muted-foreground mb-6">
                    Showing {filtered.length} of {jobs.length} position{jobs.length !== 1 ? "s" : ""}
                </p>

                {/* Card Grid */}
                {filtered.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((job) => (
                                <JobCard
                                    key={job.slug}
                                    title={job.title}
                                    slug={job.slug}
                                    department={job.department}
                                    location={job.location}
                                    type={job.type}
                                    tags={job.tags}
                                    salary={job.salary}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <Briefcase className="w-12 h-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-bold mb-2">No positions found</h3>
                        <p className="text-sm text-muted-foreground">
                            Try adjusting your search or filters, or check back later for new openings.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}
