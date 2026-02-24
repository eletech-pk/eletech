import Link from "next/link"
import { Globe, Monitor, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="w-full pt-24 pb-8 border-t border-white/5 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h2 className="text-4xl font-display font-bold mb-6">
                    Eletech - Simplify. Automate. Accelerate.
                </h2>
                <p className="text-gray-500 mb-8">
                    Join forward-thinking companies streamlining their future with us.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Button variant="secondary" size="lg" className="rounded-full font-bold text-black bg-white hover:bg-gray-200">
                        Get Started
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full border-gray-700 text-white hover:bg-white/10">
                        Contact Sales
                    </Button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                        E
                    </div>
                    <span className="text-lg font-display font-semibold">
                        ELETECH Solutions
                    </span>
                </div>

                <div className="text-xs text-gray-500 flex flex-col md:flex-row gap-4 items-center">
                    <span>Lahore, Pakistan</span>
                    <span>+92 (300) 044-2407</span>
                    <span>support@eletech.io</span>
                </div>

                <div className="flex space-x-6">
                    <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                        <Globe className="h-4 w-4" />
                        <span className="sr-only">Website</span>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                        <Monitor className="h-4 w-4" />
                        <span className="sr-only">Display</span>
                    </Link>
                    <Link href="mailto:support@eletech.io" className="text-gray-500 hover:text-white transition-colors">
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
