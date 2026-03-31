import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroCanvas } from "@/components/ui/HeroCanvas";

const PlusIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 5v14M5 12h14" />
    </svg>
);

const ShapesIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M8.3 8.5a1 1 0 0 1 1-1h6.4a1 1 0 0 1 1 1v6.4a1 1 0 0 1-1 1H9.3a1 1 0 0 1-1-1z" />
        <path d="M4 14v-2c0-2 2-4 4-4" />
        <path d="M16 8c2 0 4 2 4 4v2" />
        <path d="M12 20h2" />
        <path d="M8 20h2" />
        <path d="M20 16v2" />
        <path d="M4 16v2" />
    </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

export function Hero2() {
    return (
        <section id="hero2" className="relative w-full overflow-hidden py-24 bg-background">
            <HeroCanvas />

            <div className="relative z-10 mt-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
                {/* Animation removed for mobile performance (LCP) */}
                <div className="mb-6 mt-10 sm:justify-center md:mb-4 md:mt-10 max-w-[90vw] md:max-w-none md:animate-in md:fade-in md:duration-700">
                    <div className="relative flex items-center whitespace-nowrap rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-3 py-1 text-xs leading-6 text-primary/80 shadow-xl">
                        <ShapesIcon className="h-5 p-1" /> Next-Gen Automation
                        <Link
                            href="#"
                            rel="noreferrer"
                            className="hover:text-primary transition-colors ml-1 flex items-center font-semibold"
                        >
                            <div className="absolute inset-0 flex" aria-hidden="true" />
                            Explore{" "}
                            <span aria-hidden="true">
                                <ArrowRightIcon className="h-4 w-4 ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="mb-10 mt-4 md:mt-6">
                    <div className="px-2">
                        <div className="border-white/10 relative mx-auto h-full max-w-7xl border p-6 md:px-12 md:py-20 bg-black/40 md:bg-black/20 md:backdrop-blur-sm glass-card rounded-3xl">
                            <h1 className="select-none px-3 py-2 text-center text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl text-white">
                                <PlusIcon
                                    className="text-primary absolute -left-5 -top-5 h-10 w-10 opacity-70 stroke-[4]"
                                />
                                <PlusIcon
                                    className="text-primary absolute -bottom-5 -left-5 h-10 w-10 opacity-70 stroke-[4]"
                                />
                                <PlusIcon
                                    className="text-primary absolute -right-5 -top-5 h-10 w-10 opacity-70 stroke-[4]"
                                />
                                <PlusIcon
                                    className="text-primary absolute -bottom-5 -right-5 h-10 w-10 opacity-70 stroke-[4]"
                                />
                                <span className="block">Transform Your Business with</span>
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
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Button asChild variant="default" size="lg" className="rounded-full shadow-lg shadow-primary/20">
                            <Link href="#contact">
                                Start Transformation
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10">
                            <Link href="#services">
                                Our Services
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10">
                            <Link href="#projects">
                                View Projects
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
