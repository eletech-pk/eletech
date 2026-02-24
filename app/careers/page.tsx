import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { SubtleBadge } from "@/components/ui/subtle-badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

async function getJobs() {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
        return [
            {
                title: "Senior AI Engineer",
                slug: { current: "senior-ai-engineer" },
                department: "Engineering",
                location: "Remote",
                type: "full-time"
            },
            {
                title: "Product Designer",
                slug: { current: "product-designer" },
                department: "Design",
                location: "Lahore, Pakistan",
                type: "full-time"
            }
        ];
    }
    const query = `*[_type == "job"] | order(publishedAt desc) {
    title,
    slug,
    department,
    location,
    type,
    publishedAt
  }`;
    return client.fetch(query);
}

export default async function CareersPage() {
    const jobs = await getJobs();

    return (
        <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <SubtleBadge className="mb-4">Join Us</SubtleBadge>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Careers at Eletech</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Help us build the future of AI automation. We are always looking for talented individuals.
                </p>
            </div>

            <div className="space-y-4">
                {jobs.map((job: any) => (
                    <Link key={job.slug.current} href={`/careers/${job.slug.current}`} className="block border border-border rounded-xl p-6 hover:border-primary/50 hover:bg-white/5 transition-all">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                                <div className="flex gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                                    <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs">{job.department}</span>
                                </div>
                            </div>
                            <Button variant="outline">View Details</Button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
