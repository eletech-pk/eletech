import { MetadataRoute } from "next";
import { getClient } from "@/sanity/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://eletech.io";

    // Static routes
    const routes = [
        "",
        "/about",
        "/careers",
        "/case-studies",
        "/contact",
        "/privacy",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Dynamic routes from Sanity
    try {
        const client = getClient();

        // Fetch Job slugs
        const jobs = await client.fetch<{ slug: string }[]>(
            `*[_type == "job" && isActive != false] { "slug": slug.current }`
        );
        const jobRoutes = jobs.map((job) => ({
            url: `${baseUrl}/careers/${job.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        }));

        // Fetch Case Study slugs
        const caseStudies = await client.fetch<{ slug: string }[]>(
            `*[_type == "caseStudy"] { "slug": slug.current }`
        );
        const caseStudyRoutes = caseStudies.map((cs) => ({
            url: `${baseUrl}/case-studies/${cs.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        }));

        return [...routes, ...jobRoutes, ...caseStudyRoutes];
    } catch (error) {
        console.error("Error generating sitemap dynamic routes:", error);
        return routes;
    }
}
