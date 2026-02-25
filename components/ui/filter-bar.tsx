"use client"

import { cn } from "@/lib/utils"

interface FilterBarProps {
    label: string
    items: string[]
    selected: string[]
    onToggle: (item: string) => void
    className?: string
}

export function FilterBar({ label, items, selected, onToggle, className }: FilterBarProps) {
    if (items.length === 0) return null

    return (
        <div className={cn("flex flex-wrap items-center gap-2", className)}>
            <span className="text-xs uppercase tracking-wider text-muted-foreground mr-1 shrink-0">
                {label}:
            </span>
            <button
                onClick={() => {
                    // Clear all selections
                    selected.forEach((s) => onToggle(s))
                }}
                className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium transition-all border",
                    selected.length === 0
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10"
                )}
            >
                All
            </button>
            {items.map((item) => (
                <button
                    key={item}
                    onClick={() => onToggle(item)}
                    className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-medium transition-all border",
                        selected.includes(item)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10"
                    )}
                >
                    {item}
                </button>
            ))}
        </div>
    )
}
