import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { writeClient } from "@/sanity/lib/write-client";

const applicationSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    coverLetter: z.string().min(50).max(2000),
    resumeUrl: z.string().url(),
    jobTitle: z.string(),
    jobSlug: z.string(),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const data = applicationSchema.parse(body);

        // Check if write token is configured
        if (!process.env.SANITY_API_WRITE_TOKEN) {
            return NextResponse.json(
                {
                    error: "Application system is not configured yet. Please contact us directly.",
                },
                { status: 503 }
            );
        }

        // Create a jobApplication document in Sanity
        await writeClient.create({
            _type: "jobApplication",
            jobTitle: data.jobTitle,
            jobSlug: data.jobSlug,
            name: data.name,
            email: data.email,
            phone: data.phone || "",
            coverLetter: data.coverLetter,
            resumeUrl: data.resumeUrl,
            submittedAt: new Date().toISOString(),
        });

        return NextResponse.json(
            { message: "Application submitted successfully" },
            { status: 201 }
        );
    } catch (err) {
        if (err instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Invalid form data", details: err.issues },
                { status: 400 }
            );
        }

        console.error("Application submission error:", err);
        return NextResponse.json(
            { error: "Failed to submit application. Please try again." },
            { status: 500 }
        );
    }
}
