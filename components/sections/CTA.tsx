"use client"

import { useEffect, useState, useRef } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { BlurInHeading } from "@/components/ui/blur-in-heading"
import { SubtleBadge } from "@/components/ui/subtle-badge"
import { m } from "framer-motion"

export function CTA() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" } // Load slightly before it comes into view
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [isVisible])

    return (
        <section ref={containerRef} className="py-24 bg-background relative w-full overflow-hidden" id="contact">
            <div className="absolute top-0 left-0 w-full h-full from-transparent to-primary/5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <BlurInHeading as="h2" className="text-3xl md:text-5xl mb-4">
                        Ready to Transform Your Business?
                    </BlurInHeading>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
                        Schedule a free consultation below to discuss how we can help you automate and scale.
                    </p>
                </m.div>

                <m.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-4xl mx-auto bg-card rounded-2xl border border-border overflow-hidden shadow-2xl glass-card min-h-[600px] flex flex-col justify-center"
                >
                    {!isVisible ? (
                        <div className="flex flex-col items-center justify-center text-muted-foreground w-full h-full py-20">
                            <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin mb-4" />
                            <p>Loading Calendar...</p>
                        </div>
                    ) : (
                        <Cal
                            namespace="30min"
                            calLink="eletech/30min"
                            style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }}
                            config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true" }}
                        />
                    )}
                </m.div>
            </div>
        </section>
    )
}
