import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { CaseStudyListing } from "@/components/sections/CaseStudyListing";
import type { CaseStudyItem } from "@/components/sections/CaseStudyListing";
import { getClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { FolderKanban } from "lucide-react";

export const dynamic = "force-dynamic";

const CASE_STUDIES_QUERY = `*[_type == "caseStudy"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    client,
    mainImage,
    summary,
    tags,
    technologies,
    featured,
    publishedAt
}`;

export default async function CaseStudiesPage() {
    let caseStudies: CaseStudyItem[] = [];

    try {
        const data = await getClient().fetch(CASE_STUDIES_QUERY);
        if (data && data.length > 0) {
            caseStudies = data.map(
                (cs: {
                    title: string;
                    slug: string;
                    client?: string;
                    mainImage?: unknown;
                    summary?: string;
                    tags?: string[];
                    technologies?: string[];
                }) => ({
                    title: cs.title,
                    slug: cs.slug,
                    client: cs.client,
                    summary: cs.summary || "",
                    imageUrl: cs.mainImage
                        ? urlFor(cs.mainImage).width(600).height(400).url()
                        : undefined,
                    tags: cs.tags || [],
                    technologies: cs.technologies || [],
                })
            );
        }
    } catch (err) {
        console.error("Failed to fetch case studies from Sanity:", err);
    }

    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <PageHero
                badge="Our Work"
                badgeIcon={<FolderKanban className="w-3 h-3" />}
                title="Case Studies & Projects"
                subtitle="Explore our portfolio of successful projects. From AI-powered platforms to automation suites, see how we've helped businesses transform through technology."
            />

            <CaseStudyListing caseStudies={caseStudies} />

            <Footer />
        </main>
    );
}
