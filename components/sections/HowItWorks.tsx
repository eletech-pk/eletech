"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Command } from "lucide-react";
import { SubtleBadge } from "@/components/ui/subtle-badge";
import { BlurInHeading } from "@/components/ui/blur-in-heading";
import { cn } from "@/lib/utils";

// Placeholder images since assets are not available yet
const step1Img = "https://placehold.co/600x400/8b5cf6/ffffff?text=Schedule+Call";
const step2Img = "https://placehold.co/600x400/f97316/ffffff?text=AI+Design";
const step3Img = "https://placehold.co/600x400/10b981/ffffff?text=Optimization";
const cardLight = "https://placehold.co/600x400/transparent/transparent"; // Transparent or light effect

const steps = [
    {
        number: 1,
        title: "Schedule a Free Call",
        description: "Start by sharing your design goals with us. We'll gather all the necessary details to tailor our services to your needs. Simply fill out our contact form or give us a call.",
        image: step1Img,
    },
    {
        number: 2,
        title: "AI Design & Development",
        description: "Our team designs, builds systems tailored to your business processes. We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.",
        image: step2Img,
    },
    {
        number: 3,
        title: "Continuous Optimization",
        description: "We refine performance, analyze insights, and enhance automation for long-term growth.",
        image: step3Img,
    },
];

interface StepCardProps {
    step: typeof steps[0];
    index: number;
    isLast: boolean;
}

const StepCard = ({ step, index, isLast }: StepCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Number badge fills when line reaches it (previous step completes)
    const isFirstStep = index === 0;
    const numberBgProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 relative"
        >
            {/* Left - Number & Line */}
            <div className="flex items-start gap-6 lg:gap-8 flex-shrink-0">
                <div className="flex flex-col items-center">
                    {/* Number Badge */}
                    <motion.div
                        className="w-12 h-12 p-2 rounded-lg inline-flex flex-col justify-center items-center relative overflow-hidden border border-white/10"
                        style={{
                            background: isFirstStep
                                ? "linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 100%)"
                                : "rgba(255,255,255,0.1)"
                        }}
                    >
                        {/* Fill overlay for non-first steps */}
                        {!isFirstStep && (
                            <motion.div
                                className="absolute inset-0 rounded-lg"
                                style={{
                                    background: "linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 100%)",
                                    opacity: numberBgProgress
                                }}
                            />
                        )}
                        <motion.span
                            className="text-xl font-normal leading-9 relative z-10 font-display"
                            style={{
                                color: isFirstStep ? "#000000" : useTransform(numberBgProgress, [0, 1], ["#FFFFFF", "#000000"])
                            }}
                        >
                            {step.number}
                        </motion.span>
                    </motion.div>

                    {/* Vertical Line with scroll fill */}
                    {!isLast && (
                        <div className="relative w-[1px] h-80 lg:h-96 mt-4 bg-white/10">
                            {/* Fill line */}
                            <motion.div
                                className="absolute top-0 left-0 w-full bg-primary"
                                style={{ height: lineHeight }}
                            />
                            {/* Fade effect at bottom of fill */}
                            <motion.div
                                className="absolute left-0 w-full h-8 bg-gradient-to-b from-primary to-transparent"
                                style={{ top: lineHeight }}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Content & Image */}
            <div className="flex flex-col lg:flex-row gap-8 w-full">
                {/* Title & Description */}
                <div className="flex flex-col gap-3 max-w-md pt-2">
                    <h3 className="text-foreground text-2xl lg:text-3xl font-display font-medium leading-8">
                        {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base font-normal leading-6">
                        {step.description}
                    </p>
                </div>

                {/* Right - Image Card */}
                <div className="relative w-full lg:w-96 h-64 lg:h-80 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden flex-shrink-0 lg:ml-auto bg-white/5">
                    {/* Light effect background - positioned at top */}
                    {/* Placeholder for light effect */}
                    <div className="absolute -top-10 left-0 right-0 h-40 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none" />

                    {/* Step image */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        {/* Using img tag directly since Next Image might require config for external domains */}
                        <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover rounded-xl opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export function HowItWorks() {
    return (
        <section className="relative z-20 w-full py-24 px-6 md:px-12 lg:px-24 bg-background">
            <div className="w-full max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center text-center gap-7 mb-24 lg:mb-36">
                    <SubtleBadge icon={<Command className="w-4 h-4" />}>How it Works</SubtleBadge>
                    <BlurInHeading as="h2" className="text-foreground text-3xl md:text-4xl lg:text-5xl max-w-3xl">
                        We streamline product design and development workflow
                    </BlurInHeading>
                    <p className="text-muted-foreground text-base max-w-xl">
                        Each UI we design closely aligns with your product's intent and business objectives. We never create without testing — validation is essential.
                    </p>
                </div>

                {/* Steps */}
                <div className="flex flex-col gap-16 lg:gap-0">
                    {steps.map((step, index) => (
                        <StepCard
                            key={step.number}
                            step={step}
                            index={index}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
