import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { SubtleBadge } from "@/components/ui/subtle-badge";

async function getCaseStudies() {
    // If no projectId, return dummy data to prevent crash
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
        return [
            {
                title: "Global Logistics Automation",
                slug: { current: "global-logistics-automation" },
                summary: "Reduced operational costs by 40% through intelligent route optimization.",
                client: "LogiTech Industries",
                publishedAt: "2024-01-15T00:00:00.000Z",
                // Placeholder image logic would go here
            },
            {
                title: "Healthcare Patient Triage AI",
                slug: { current: "healthcare-patient-triage-ai" },
                summary: "Improved patient response time by 60% with NLP-powered triage system.",
                client: "MediCare Plus",
                publishedAt: "2024-02-10T00:00:00.000Z",
            }
        ];
    }

    const query = `*[_type == "caseStudy"] | order(publishedAt desc) {
    title,
    slug,
    client,
    mainImage,
    summary,
    publishedAt
  }`;
    return client.fetch(query);
}

export default async function CaseStudiesPage() {
    const caseStudies = await getCaseStudies();

    return (
        <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <SubtleBadge className="mb-4">Success Stories</SubtleBadge>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Case Studies</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Explore how we've helped businesses transform their operations with AI.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((post: any) => (
                    <Link key={post.slug.current} href={`/case-studies/${post.slug.current}`} className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all">
                        <div className="aspect-video bg-muted relative overflow-hidden">
                            {post.mainImage ? (
                                <img
                                    src={urlFor(post.mainImage).width(800).height(450).url()}
                                    alt={post.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-500">
                                    No Image
                                </div>
                            )}
                        </div>
                        <div className="p-6">
                            <div className="text-sm text-primary mb-2 font-medium">{post.client}</div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                            <p className="text-muted-foreground">{post.summary}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
