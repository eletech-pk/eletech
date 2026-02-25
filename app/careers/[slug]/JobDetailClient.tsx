"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ApplicationModal } from "@/components/sections/ApplicationModal"
import { Send, ArrowRight } from "lucide-react"
import Link from "next/link"

interface JobDetailClientProps {
    jobTitle: string
    jobSlug: string
}

export function JobDetailClient({ jobTitle, jobSlug }: JobDetailClientProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            {/* Apply CTA */}
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 to-transparent text-center">
                <h3 className="text-2xl font-display font-bold mb-3">
                    Ready to Apply?
                </h3>
                <p className="text-muted-foreground mb-6">
                    Think you&apos;re a great fit? We&apos;d love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button
                        size="lg"
                        onClick={() => setIsModalOpen(true)}
                        className="group"
                    >
                        <Send className="w-4 h-4 mr-2" />
                        Apply Now
                    </Button>
                    <Link href="/contact">
                        <Button size="lg" variant="outline" className="group">
                            Ask a Question
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Application Modal */}
            <ApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={jobTitle}
                jobSlug={jobSlug}
            />
        </>
    )
}
