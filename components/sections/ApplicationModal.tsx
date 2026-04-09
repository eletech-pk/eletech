"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { X, Send, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const applicationSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().optional(),
    coverLetter: z
        .string()
        .min(50, "Cover letter must be at least 50 characters")
        .max(2000, "Cover letter must be under 2000 characters"),
    resumeUrl: z.string().url("Please enter a valid URL to your resume"),
    _hp_field: z.string().optional(), // Honeypot field
})

type ApplicationFormData = z.infer<typeof applicationSchema>

interface ApplicationModalProps {
    isOpen: boolean
    onClose: () => void
    jobTitle: string
    jobSlug: string
}

export function ApplicationModal({
    isOpen,
    onClose,
    jobTitle,
    jobSlug,
}: ApplicationModalProps) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ApplicationFormData>({
        resolver: zodResolver(applicationSchema),
        defaultValues: {
            _hp_field: "",
        }
    })

    const onSubmit = async (data: ApplicationFormData) => {
        setStatus("submitting")
        setErrorMessage("")

        try {
            const res = await fetch("/api/apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...data,
                    jobTitle,
                    jobSlug,
                }),
            })

            if (!res.ok) {
                const err = await res.json()
                throw new Error(err.error || "Failed to submit application")
            }

            setStatus("success")
            reset()
        } catch (err) {
            setStatus("error")
            setErrorMessage(
                err instanceof Error ? err.message : "Something went wrong. Please try again."
            )
        }
    }

    const handleClose = () => {
        if (status !== "submitting") {
            setStatus("idle")
            setErrorMessage("")
            reset()
            onClose()
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={handleClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#111111] shadow-2xl"
                    >
                        {/* Header */}
                        <div className="sticky top-0 z-10 flex items-center justify-between p-6 pb-4 border-b border-white/5 bg-[#111111]">
                            <div>
                                <h2 className="text-xl font-display font-bold">
                                    Apply for Position
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    {jobTitle}
                                </p>
                            </div>
                            <button
                                onClick={handleClose}
                                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Success State */}
                        {status === "success" ? (
                            <div className="p-8 text-center">
                                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-400" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">
                                    Application Submitted!
                                </h3>
                                <p className="text-sm text-muted-foreground mb-6">
                                    Thank you for applying. We&apos;ll review
                                    your application and get back to you soon.
                                </p>
                                <Button onClick={handleClose} variant="outline">
                                    Close
                                </Button>
                            </div>
                        ) : (
                            /* Form */
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="p-6 space-y-5"
                            >
                                {/* Honeypot - bot protection */}
                                <div
                                    aria-hidden="true"
                                    className="absolute opacity-0 pointer-events-none -z-10"
                                >
                                    <input
                                        type="text"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        {...register("_hp_field")}
                                    />
                                </div>

                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium mb-1.5">
                                        Full Name{" "}
                                        <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("name")}
                                        className="w-full h-10 px-4 rounded-xl border border-white/10 bg-white/5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-xs text-red-400">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium mb-1.5">
                                        Email{" "}
                                        <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email")}
                                        className="w-full h-10 px-4 rounded-xl border border-white/10 bg-white/5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-xs text-red-400">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium mb-1.5">
                                        Phone{" "}
                                        <span className="text-muted-foreground">
                                            (optional)
                                        </span>
                                    </label>
                                    <input
                                        type="tel"
                                        {...register("phone")}
                                        className="w-full h-10 px-4 rounded-xl border border-white/10 bg-white/5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="+1 234 567 8900"
                                    />
                                </div>

                                {/* Resume URL */}
                                <div>
                                    <label className="block text-sm font-medium mb-1.5">
                                        Resume URL{" "}
                                        <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="url"
                                        {...register("resumeUrl")}
                                        className="w-full h-10 px-4 rounded-xl border border-white/10 bg-white/5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="https://drive.google.com/your-resume"
                                    />
                                    {errors.resumeUrl && (
                                        <p className="mt-1 text-xs text-red-400">
                                            {errors.resumeUrl.message}
                                        </p>
                                    )}
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Share a link to your resume (Google
                                        Drive, Dropbox, etc.)
                                    </p>
                                </div>

                                {/* Cover Letter */}
                                <div>
                                    <label className="block text-sm font-medium mb-1.5">
                                        Cover Letter{" "}
                                        <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        {...register("coverLetter")}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                        placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                                    />
                                    {errors.coverLetter && (
                                        <p className="mt-1 text-xs text-red-400">
                                            {errors.coverLetter.message}
                                        </p>
                                    )}
                                </div>

                                {/* Error message */}
                                {status === "error" && (
                                    <div className="p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-sm">
                                        {errorMessage}
                                    </div>
                                )}

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={status === "submitting"}
                                    className="w-full"
                                >
                                    {status === "submitting" ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 mr-2" />
                                            Submit Application
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
