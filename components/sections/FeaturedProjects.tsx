import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectGridWithSlider } from "@/components/sections/ProjectGridWithSlider";

async function getFeaturedProjects() {
    const query = `*[_type == "caseStudy" && featured == true && defined(slug.current)] | order(publishedAt desc)[0...3] {
        _id,
        title,
        "slug": slug.current,
        summary,
        "videoUrl": videoFile.asset->url,
        "imageUrl": mainImage.asset->url
    }`;
    return await client.fetch(query);
}

export async function FeaturedProjects() {
    const projects = await getFeaturedProjects();

    if (!projects?.length) return null;

    return (
        <section id="projects" className="py-24 bg-black w-full border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            Featured <span className="italic font-serif font-light text-gray-400">Projects</span>
                        </h2>
                        <p className="text-gray-400 text-sm md:text-lg mt-4 max-w-2xl">
                            Explore our recent case studies and see how we've helped businesses transform through next-gen automation and AI solutions.
                        </p>
                    </div>
                </div>

                {/* Cross-Platform Projects Grid/Slider */}
                <ProjectGridWithSlider projects={projects} />
                
                {/* View All Projects Button */}
                <div className="mt-16 flex justify-center">
                    <Button asChild variant="outline" size="lg" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 text-white px-8">
                        <Link href="/case-studies">
                            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
