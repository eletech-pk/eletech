import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SubtleBadgeProps {
    children: ReactNode
    icon?: ReactNode
    className?: string
}

export function SubtleBadge({ children, icon, className }: SubtleBadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-muted-foreground",
                className
            )}
        >
            {icon && <span className="mr-2 flex items-center">{icon}</span>}
            {children}
        </div>
    )
}
