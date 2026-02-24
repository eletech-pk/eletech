import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
    // In a real app, fetch data based on params.slug using `client.fetch`
    const { slug } = params;

    return (
        <div className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/case-studies" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
            </Link>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Case Study: {slug}
            </h1>

            <div className="prose prose-invert max-w-none">
                <p className="lead">
                    This is a placeholder for the dynamic content of the case study.
                    Connect Sanity to populate this with real "Challenge", "Solution", and "Result" data.
                </p>
                {/* Render PortableText here */}
            </div>
        </div>
    );
}
