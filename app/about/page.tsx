import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { Button } from "@/components/ui/button";
import {
    Sparkles,
    Target,
    Eye,
    Lightbulb,
    Shield,
    Rocket,
    Heart,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";

const values = [
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "We push the boundaries of technology, constantly exploring new frontiers in AI and automation to deliver transformative solutions.",
    },
    {
        icon: Shield,
        title: "Integrity",
        description:
            "We build trust through transparency, honesty, and a steadfast commitment to ethical practices in everything we do.",
    },
    {
        icon: Rocket,
        title: "Excellence",
        description:
            "We hold ourselves to the highest standards, delivering polished, production-ready solutions that exceed expectations.",
    },
    {
        icon: Heart,
        title: "Collaboration",
        description:
            "We believe the best results come from working closely with our clients, treating every project as a true partnership.",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            {/* Hero */}
            <PageHero
                badge="About Us"
                badgeIcon={<Sparkles className="w-3 h-3" />}
                title="Empowering Businesses Through Intelligent Technology"
                subtitle="At ELETECH Solutions, we bridge the gap between complex AI capabilities and real-world business needs. Based in Lahore, Pakistan, we're a team of engineers, strategists, and designers building the future of automation."
            />

            {/* Mission Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] -translate-y-1/2 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Icon */}
                        <div className="hidden lg:flex justify-center">
                            <div className="relative w-32 h-32 lg:w-64 lg:h-64">
                                <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 to-transparent backdrop-blur-sm" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Target className="w-12 h-12 lg:w-24 lg:h-24 text-primary" />
                                </div>
                                <div className="absolute -inset-2 lg:-inset-4 rounded-3xl border border-white/5 animate-pulse" />
                            </div>
                        </div>

                        {/* Text */}
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                                Our Mission
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                                Democratizing Access to Advanced AI
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                We believe that artificial intelligence is not just a buzzword, but a
                                transformative force that should be accessible to businesses of all sizes.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Our mission is to simplify complex business processes through innovative
                                technology, empowering organizations to automate the mundane and illuminate
                                the strategic. We turn data into decisions and ideas into reality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[120px] -translate-y-1/2 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text (reversed order) */}
                        <div className="order-2 lg:order-1">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">
                                Our Vision
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                                A Future Where Every Business is Intelligent
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                We envision a world where intelligent automation is the backbone of every
                                successful business — not a luxury reserved for tech giants.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                By 2030, we aim to be the leading AI solutions partner for emerging
                                businesses across the globe, known for our innovation, reliability, and
                                the measurable impact we deliver to every client we serve.
                            </p>
                        </div>

                        {/* Icon */}
                        <div className="hidden lg:flex justify-center order-1 lg:order-2">
                            <div className="relative w-32 h-32 lg:w-64 lg:h-64">
                                <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-secondary/20 to-transparent backdrop-blur-sm" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Eye className="w-12 h-12 lg:w-24 lg:h-24 text-secondary" />
                                </div>
                                <div className="absolute -inset-2 lg:-inset-4 rounded-3xl border border-white/5 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Preview (reused from homepage) */}
            <AboutPreview />

            {/* Values Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                            Our Core Values
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-display font-bold">
                            What Drives Us Forward
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="p-6 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:border-white/15 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4 mb-4 lg:mb-4 lg:block">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center lg:mb-4 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                        <value.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="text-lg font-bold lg:mb-2">{value.title}</h4>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section (reused from homepage) */}
            <TeamPreview />

            {/* Join Us CTA */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-24 text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        Want to Join Our Team?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        We&apos;re always looking for talented individuals who share our passion for
                        innovation and technology. Explore our open positions.
                    </p>
                    <Link href="/careers">
                        <Button size="lg" className="group">
                            View Open Positions
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
