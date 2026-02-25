"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

type ToastType = "success" | "error"

interface ToastProps {
    message: string
    type: ToastType
    isVisible: boolean
    onClose: () => void
}

export function Toast({ message, type, isVisible, onClose }: ToastProps) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(onClose, 5000)
            return () => clearTimeout(timer)
        }
    }, [isVisible, onClose])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 50, x: "-50%" }}
                    className="fixed bottom-6 left-1/2 z-[100]"
                >
                    <div
                        className={cn(
                            "flex items-center gap-3 px-5 py-3 rounded-xl border backdrop-blur-xl shadow-lg",
                            type === "success"
                                ? "border-green-500/30 bg-green-500/10 text-green-400"
                                : "border-red-500/30 bg-red-500/10 text-red-400"
                        )}
                    >
                        {type === "success" ? (
                            <CheckCircle className="w-4 h-4 shrink-0" />
                        ) : (
                            <XCircle className="w-4 h-4 shrink-0" />
                        )}
                        <p className="text-sm font-medium">{message}</p>
                        <button onClick={onClose} className="ml-2 hover:opacity-70 transition-opacity">
                            <X className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

// Hook for easy toast management
export function useToast() {
    const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null)

    const showToast = (message: string, type: ToastType) => {
        setToast({ message, type })
    }

    const hideToast = () => {
        setToast(null)
    }

    return { toast, showToast, hideToast }
}
