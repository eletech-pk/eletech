import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SubtleBadge } from "@/components/ui/subtle-badge";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <SubtleBadge className="mb-4">Our Mission</SubtleBadge>
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
                        Empowering Business with AI
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        At Eletech Solutions, we believe that artificial intelligence is not just a buzzword, but a transformative force. Our mission is to democratize access to advanced automation and data insights for businesses of all sizes.
                    </p>
                </div>

                {/* Team Section Placeholder */}
                <div className="grid md:grid-cols-3 gap-8 mt-24">
                    <div className="text-center">
                        <div className="w-32 h-32 bg-secondary/20 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold">Muhammad Abaidullah</h3>
                        <p className="text-primary text-sm">CEO & Co-Founder</p>
                    </div>
                    <div className="text-center">
                        <div className="w-32 h-32 bg-secondary/20 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold">Zubair Shahid</h3>
                        <p className="text-primary text-sm">CTO & Co-Founder</p>
                    </div>
                    <div className="text-center">
                        <div className="w-32 h-32 bg-secondary/20 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold">Muhammad Saood</h3>
                        <p className="text-primary text-sm">CIO</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
