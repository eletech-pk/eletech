"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-background/75 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg shadow-primary/25">
                        E
                    </div>
                    <span className="self-center text-xl font-display font-semibold tracking-wide whitespace-nowrap">
                        ELETECH Solutions
                    </span>
                </Link>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Button className="hidden md:flex rounded-full px-6 h-11 font-medium">
                        Contact Us
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                <div
                    className={cn(
                        "items-center justify-between w-full md:flex md:w-auto md:order-1",
                        isOpen ? "block" : "hidden"
                    )}
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-xl border border-white/10 bg-background/90 md:bg-transparent md:border-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 backdrop-blur-sm">
                        {["Home", "Services", "About", "Team", "Contact"].map((item) => (
                            <li key={item}>
                                <Link
                                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    className="block py-2 px-3 text-sm md:text-base text-foreground/80 rounded-md hover:bg-accent/70 md:hover:bg-transparent md:hover:text-primary md:p-0 transition-colors"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                        {/* Mobile Button */}
                        <li className="md:hidden mt-4">
                            <Button className="w-full">
                                Contact Us
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
