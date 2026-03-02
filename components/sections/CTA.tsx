"use client"

import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { BlurInHeading } from "@/components/ui/blur-in-heading"
import { SubtleBadge } from "@/components/ui/subtle-badge"

export function CTA() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return (
        <section className="py-24 bg-background relative w-full" id="contact">
            <div className="absolute top-0 left-0 w-full h-full from-transparent to-primary/5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <SubtleBadge className="mb-4">Get Started</SubtleBadge>
                    <BlurInHeading as="h2" className="text-3xl md:text-5xl mb-4">
                        Ready to Transform Your Business?
                    </BlurInHeading>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
                        Schedule a free consultation below to discuss how we can help you automate and scale.
                    </p>
                </div>

                <div className="w-full max-w-4xl mx-auto bg-card rounded-2xl border border-border overflow-hidden shadow-2xl glass-card">
                    <Cal
                        namespace="30min"
                        calLink="reh1t/30min"
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true" }}
                    />
                </div>
            </div>
        </section>
    )
}
