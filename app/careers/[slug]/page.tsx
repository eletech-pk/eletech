import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function JobDetail({ params }: { params: { slug: string } }) {
    // In a real app, fetch data based on params.slug
    const { slug } = params;

    return (
        <div className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/careers" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Careers
            </Link>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <h1 className="text-4xl md:text-5xl font-display font-bold">
                    {slug.replace(/-/g, ' ')}
                </h1>
                <Button size="lg">Apply Now</Button>
            </div>

            <div className="prose prose-invert max-w-none">
                <h3>Description</h3>
                <p>
                    This is a placeholder for the job description.
                    Connect Sanity to populate this with rich text content.
                </p>
            </div>
        </div>
    );
}
