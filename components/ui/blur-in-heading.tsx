"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BlurInHeadingProps {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    children: React.ReactNode
    className?: string
}

export function BlurInHeading({ as: Component = "h2", children, className }: BlurInHeadingProps) {
    return (
        <motion.div
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Component className={cn("font-display font-bold tracking-tight", className)}>
                {children}
            </Component>
        </motion.div>
    )
}
