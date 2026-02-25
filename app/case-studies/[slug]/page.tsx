import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { getClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    Calendar,
    Building2,
    AlertTriangle,
    Lightbulb,
    TrendingUp,
    ArrowRight,
} from "lucide-react";

export const dynamic = "force-dynamic";

const CASE_STUDY_QUERY = `*[_type == "caseStudy" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    client,
    mainImage,
    summary,
    tags,
    technologies,
    challenge,
    solution,
    result,
    body,
    gallery,
    publishedAt
}`;

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
    const { slug } = await params;

    let caseStudy: {
        title: string;
        slug?: string;
        client?: string;
        mainImage?: unknown;
        summary?: string;
        tags?: string[];
        technologies?: string[];
        challenge?: string;
        solution?: string;
        result?: string;
        body?: unknown[];
        gallery?: unknown[];
        publishedAt?: string;
    } | null = null;

    try {
        caseStudy = await getClient().fetch(CASE_STUDY_QUERY, { slug });
    } catch (err) {
        console.error("Failed to fetch case study from Sanity:", err);
    }

    if (!caseStudy) {
        return (
            <main className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-display font-bold mb-4">
                            Case Study Not Found
                        </h1>
                        <p className="text-muted-foreground mb-8">
                            The project you&apos;re looking for doesn&apos;t exist.
                        </p>
                        <Link href="/case-studies">
                            <Button>
                                <ArrowLeft className="w-4 h-4 mr-2" /> Back to
                                Case Studies
                            </Button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    const imageUrl = caseStudy.mainImage
        ? urlFor(caseStudy.mainImage).width(1200).height(600).url()
        : undefined;

    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <article className="flex-grow pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back link */}
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors text-sm"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case
                        Studies
                    </Link>

                    {/* Header */}
                    <div className="mb-10">
                        {/* Tags */}
                        {caseStudy.tags && caseStudy.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {caseStudy.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-xs font-medium border border-primary/30 bg-primary/10 text-primary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
                            {caseStudy.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            {caseStudy.client && (
                                <span className="inline-flex items-center gap-1.5">
                                    <Building2 className="w-4 h-4" />{" "}
                                    {caseStudy.client}
                                </span>
                            )}
                            {caseStudy.publishedAt && (
                                <span className="inline-flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />{" "}
                                    {new Date(
                                        caseStudy.publishedAt
                                    ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                    })}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Main Image */}
                    {imageUrl && (
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 mb-12">
                            <Image
                                src={imageUrl}
                                alt={caseStudy.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Summary */}
                    {caseStudy.summary && (
                        <p className="text-lg text-muted-foreground leading-relaxed mb-12 border-l-2 border-primary pl-6">
                            {caseStudy.summary}
                        </p>
                    )}

                    {/* Technologies */}
                    {caseStudy.technologies &&
                        caseStudy.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-12">
                                <span className="text-xs uppercase tracking-wider text-muted-foreground mr-2 self-center">
                                    Tech Stack:
                                </span>
                                {caseStudy.technologies.map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full text-xs font-medium border border-secondary/30 bg-secondary/10 text-secondary"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}

                    {/* Challenge / Solution / Result */}
                    <div className="space-y-10 mb-12">
                        {caseStudy.challenge && (
                            <div className="p-6 rounded-2xl border border-white/5 bg-[#0A0A0A]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                        <AlertTriangle className="w-5 h-5 text-red-400" />
                                    </div>
                                    <h2 className="text-xl font-display font-bold">
                                        The Challenge
                                    </h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {caseStudy.challenge}
                                </p>
                            </div>
                        )}

                        {caseStudy.solution && (
                            <div className="p-6 rounded-2xl border border-white/5 bg-[#0A0A0A]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <Lightbulb className="w-5 h-5 text-primary" />
                                    </div>
                                    <h2 className="text-xl font-display font-bold">
                                        Our Solution
                                    </h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {caseStudy.solution}
                                </p>
                            </div>
                        )}

                        {caseStudy.result && (
                            <div className="p-6 rounded-2xl border border-white/5 bg-[#0A0A0A]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-green-400" />
                                    </div>
                                    <h2 className="text-xl font-display font-bold">
                                        The Result
                                    </h2>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {caseStudy.result}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Gallery */}
                    {caseStudy.gallery &&
                        (caseStudy.gallery as unknown[]).length > 0 && (
                            <div className="mb-12">
                                <h2 className="text-xl font-display font-bold mb-6">
                                    Project Gallery
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {(caseStudy.gallery as unknown[]).map(
                                        (
                                            img: unknown,
                                            i: number
                                        ) => (
                                            <div
                                                key={i}
                                                className="relative aspect-video rounded-xl overflow-hidden border border-white/10"
                                            >
                                                <Image
                                                    src={urlFor(img)
                                                        .width(600)
                                                        .height(400)
                                                        .url()}
                                                    alt={`${caseStudy!.title} screenshot ${i + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        )}

                    {/* CTA */}
                    <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 to-transparent text-center">
                        <h3 className="text-2xl font-display font-bold mb-3">
                            Got a Similar Project in Mind?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Let&apos;s discuss how we can help you achieve
                            similar results.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="group">
                                Start a Conversation
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
