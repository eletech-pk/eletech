import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/ui/HeroCanvas";

export function Hero2() {
    return (
        <section id="hero2" className="relative w-full overflow-hidden min-h-[100vh] flex items-center justify-center bg-background pt-16">
            <HeroCanvas />

            <div className="relative z-10 mt-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">


                <div className="mb-10 mt-4 md:mt-6">
                    <div className="px-2">
                        <div className="!border-[#FF6000]/20 !border-3 relative mx-auto h-full max-w-7xl p-6 md:px-12 md:py-20 bg-black/40 md:bg-black/20 md:backdrop-blur-sm glass-card rounded-3xl shadow-xl shadow-[#FF6000]/10">
                            <h1 className="select-none px-3 py-2 text-center text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl text-white">

                                <span className="block">Transform Your Business With</span>
                                <span className="block text-gradient-orange italic mt-2">AI Solutions</span>
                            </h1>
                        </div>
                    </div>

                    <h2 className="mt-12 text-2xl md:text-3xl text-gray-200">
                        Discover the future of{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">Operational Excellence</span>
                    </h2>

                    <p className="mx-auto mb-16 mt-4 max-w-sm px-4 sm:max-w-2xl sm:px-6 md:max-w-3xl md:px-20 text-base text-gray-400 lg:text-lg text-balance">
                        We help businesses leverage artificial intelligence to drive growth, efficiency, and innovation. Discover the future of operational excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:px-0 w-full max-w-lg sm:max-w-none mx-auto">
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-white bg-white/5 border-white/10 hover:bg-[#FF6000]/20 hover:border-[#FF6000]/50 transition-all duration-300">
                            <Link href="#contact">
                                Start Transformation
                            </Link>
                        </Button>
                        <div className="flex w-full sm:w-auto justify-center gap-4">
                            <Button asChild variant="outline" size="lg" className="flex-1 sm:flex-none rounded-full text-white bg-white/5 border-white/10 hover:bg-[#FF6000]/20 hover:border-[#FF6000]/50 transition-all duration-300">
                                <Link href="#services">
                                    Our Services
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="flex-1 sm:flex-none rounded-full text-white bg-white/5 border-white/10 hover:bg-[#FF6000]/20 hover:border-[#FF6000]/50 transition-all duration-300">
                                <Link href="#projects">
                                    View Projects
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
