import Link from "next/link"
import Image from "next/image"
import { Globe, Monitor, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="w-full pt-24 pb-8 border-t border-white/5 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-16">
                <h2 className="text-4xl font-display font-bold mb-6">
                    Eletech - Simplify. Automate. Accelerate.
                </h2>
                <p className="text-gray-400 mb-8">
                    Join forward-thinking companies streamlining their future with us.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Button asChild variant="secondary" size="lg" className="rounded-full font-bold text-black bg-white hover:bg-gray-200">
                        <Link href="#contact">
                            Get Started
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full border-gray-700 text-white hover:bg-white/10">
                        <Link href="#contact">
                            Contact Sales
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/Eletech logo with name.svg"
                        alt="Eletech Solutions Logo"
                        width={150}
                        height={25}
                        className="h-6 w-auto"
                    />
                </Link>

                <div className="text-xs text-gray-400 flex flex-col md:flex-row gap-4 items-center">
                    <span>Lahore, Pakistan</span>
                    <span>+92 (300) 044-2407</span>
                    <span>support@eletech.io</span>
                </div>

                <div className="flex space-x-6">
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                        <Globe className="h-4 w-4" />
                        <span className="sr-only">Website</span>
                    </Link>
                    <Link href="mailto:support@eletech.io" className="text-gray-400 hover:text-white transition-colors">
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
