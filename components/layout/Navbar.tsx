"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    const MenuIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
    )

    const XIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
    )

    const ArrowRightIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
    )

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-background/75 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 sm:px-8 lg:px-12 py-4">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/Eletech logo with name.svg"
                        alt="Eletech Solutions Logo"
                        width={180}
                        height={30}
                        className="h-8 w-auto"
                        priority
                    />
                </Link>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Button asChild className="hidden md:flex rounded-full px-6 h-11 font-medium">
                        <Link href="/contact">
                            Contact Us
                            <ArrowRightIcon />
                        </Link>
                    </Button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>

                <div
                    className={cn(
                        "items-center justify-between w-full md:flex md:w-auto md:order-1",
                        isOpen ? "block" : "hidden"
                    )}
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-xl border border-white/10 bg-background/90 md:bg-transparent md:border-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 backdrop-blur-sm">
                        {[
                            { label: "Home", href: "/" },
                            { label: "About", href: "/about" },
                            { label: "Case Studies", href: "/case-studies" },
                            { label: "Careers", href: "/careers" },
                        ].map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className="block py-2 px-3 text-sm md:text-base text-foreground/80 rounded-md hover:bg-accent/70 md:hover:bg-transparent md:hover:text-primary md:p-0 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        {/* Mobile Button */}
                        <li className="md:hidden mt-4">
                            <Button asChild className="w-full">
                                <Link href="/contact">
                                    Contact Us
                                    <ArrowRightIcon />
                                </Link>
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
