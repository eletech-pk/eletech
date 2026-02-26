import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 w-full min-h-screen flex items-center overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-muted-foreground mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                            Next-Gen Automation
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                            Transform Your Business with{" "}
                            <span className="text-gradient-purple italic">
                                AI Solutions
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
                            We help businesses leverage artificial intelligence to drive growth, efficiency, and innovation. Discover the future of operational excellence.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Button size="lg" className="w-full sm:w-auto rounded-full font-semibold">
                                Start Transformation
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full">
                                Our Services
                            </Button>
                        </div>
                    </div>

                    {/* 3D Graphic Placeholder */}
                    <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center perspective-1000">
                        <div className="relative w-64 h-64 lg:w-80 lg:h-80 transform rotate-y-12 rotate-x-12 animate-float">
                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500/30 to-blue-500/10 backdrop-blur-xl border border-white/20 shadow-2xl z-10 transform translate-z-10" />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-secondary/40 to-pink-500/10 backdrop-blur-md border border-white/10 -translate-x-12 -translate-y-12 z-0" />
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-xl bg-gradient-to-tl from-white/20 to-transparent backdrop-blur-lg border border-white/20 z-20" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
