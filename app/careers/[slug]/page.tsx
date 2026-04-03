import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { getClient } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import {
    ArrowLeft,
    MapPin,
    Briefcase,
    Clock,
    DollarSign,
    Calendar,
    CheckCircle2,
    ListChecks,
} from "lucide-react";
import { JobDetailClient } from "./JobDetailClient";

export const dynamic = "force-dynamic";

const JOB_QUERY = `*[_type == "job" && slug.current == $slug && isActive != false][0] {
    title,
    "slug": slug.current,
    department,
    location,
    type,
    tags,
    salary,
    description,
    requirements,
    responsibilities,
    applicationDeadline,
    publishedAt  
}`;

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function JobDetailPage({ params }: PageProps) {
    const { slug } = await params;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let job: any = null;

    try {
        job = await getClient().fetch(JOB_QUERY, { slug });
    } catch (err) {
        console.error("Failed to fetch job from Sanity:", err);
    }

    if (!job) {
        return (
            <main className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-display font-bold mb-4">
                            Position Not Found
                        </h1>
                        <p className="text-muted-foreground mb-8">
                            This job posting may have been removed or
                            doesn&apos;t exist.
                        </p>
                        <Link href="/careers">
                            <Button>
                                <ArrowLeft className="w-4 h-4 mr-2" /> Back to
                                Careers
                            </Button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <article className="flex-grow pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back link */}
                    <Link
                        href="/careers"
                        className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors text-sm"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Careers
                    </Link>

                    {/* Header */}
                    <div className="mb-10">
                        {/* Department badge */}
                        {job.department && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider border border-primary/30 bg-primary/10 text-primary mb-4">
                                <Briefcase className="w-3 h-3 mr-1.5" />
                                {job.department}
                            </span>
                        )}

                        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
                            {job.title}
                        </h1>

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                            {job.location && (
                                <span className="inline-flex items-center gap-1.5">
                                    <MapPin className="w-4 h-4" /> {job.location}
                                </span>
                            )}
                            {job.type && (
                                <span className="inline-flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" /> {job.type}
                                </span>
                            )}
                            {job.salary && (
                                <span className="inline-flex items-center gap-1.5">
                                    <DollarSign className="w-4 h-4" />{" "}
                                    {job.salary}
                                </span>
                            )}
                            {job.publishedAt && (
                                <span className="inline-flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" /> Posted{" "}
                                    {new Date(
                                        job.publishedAt
                                    ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                    })}
                                </span>
                            )}
                        </div>

                        {/* Tags */}
                        {job.tags && job.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {job.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-muted-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    {job.description && (
                        <div className="mb-10">
                            {typeof job.description === "string" ? (
                                <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary pl-6">
                                    {job.description}
                                </p>
                            ) : (
                                <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed border-l-2 border-primary pl-6">
                                    <PortableText value={job.description} />
                                </div>
                            )}
                        </div>
                    )}

                    {/* Requirements */}
                    {job.requirements && job.requirements.length > 0 && (
                        <div className="mb-10 p-6 rounded-2xl border border-white/5 bg-[#0A0A0A]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-xl font-display font-bold">
                                    Requirements
                                </h2>
                            </div>
                            <ul className="space-y-3">
                                {job.requirements.map(
                                    (req: string, i: number) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-muted-foreground"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm leading-relaxed">
                                                {req}
                                            </span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )}

                    {/* Responsibilities */}
                    {job.responsibilities &&
                        job.responsibilities.length > 0 && (
                            <div className="mb-10 p-6 rounded-2xl border border-white/5 bg-[#0A0A0A]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                                        <ListChecks className="w-5 h-5 text-secondary" />
                                    </div>
                                    <h2 className="text-xl font-display font-bold">
                                        Responsibilities
                                    </h2>
                                </div>
                                <ul className="space-y-3">
                                    {job.responsibilities.map(
                                        (resp: string, i: number) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 text-muted-foreground"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                                                <span className="text-sm leading-relaxed">
                                                    {resp}
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}

                    {/* Apply CTA - Uses client component for modal */}
                    <JobDetailClient
                        jobTitle={job.title}
                        jobSlug={slug}
                    />
                </div>
            </article>

            <Footer />
        </main>
    );
}
