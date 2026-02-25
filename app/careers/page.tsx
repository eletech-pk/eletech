import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { CareerListing } from "@/components/sections/CareerListing";
import type { JobItem } from "@/components/sections/CareerListing";
import { getClient } from "@/sanity/lib/client";
import { Users } from "lucide-react";

export const dynamic = "force-dynamic";

const JOBS_QUERY = `*[_type == "job"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    department,
    location,
    type,
    tags,
    salary,
    publishedAt,
    applicationDeadline
}`;

export default async function CareersPage() {
    let jobs: JobItem[] = [];

    try {
        const data = await getClient().fetch(JOBS_QUERY);
        if (data && data.length > 0) {
            jobs = data.map(
                (job: {
                    title: string;
                    slug: string;
                    department?: string;
                    location?: string;
                    type?: string;
                    tags?: string[];
                    salary?: string;
                }) => ({
                    title: job.title,
                    slug: job.slug,
                    department: job.department,
                    location: job.location,
                    type: job.type,
                    tags: job.tags || [],
                    salary: job.salary,
                })
            );
        }
    } catch (err) {
        console.error("Failed to fetch jobs from Sanity:", err);
    }

    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <PageHero
                badge="Careers"
                badgeIcon={<Users className="w-3 h-3" />}
                title="Join Our Team"
                subtitle="We're building the future of AI-powered business solutions. Join a team of passionate engineers, designers, and strategists who love solving complex problems."
            />

            <CareerListing jobs={jobs} />

            <Footer />
        </main>
    );
}
