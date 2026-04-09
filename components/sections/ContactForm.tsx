"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { submitContactForm } from "@/lib/actions/contact.action"

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
    _hp_field: z.string().optional(), // Honeypot
})

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)
    const [error, setError] = React.useState<string | null>(null)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
            _hp_field: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        setError(null)

        const result = await submitContactForm(values)

        setIsSubmitting(false)
        if (result.success) {
            setIsSuccess(true)
            form.reset()
        } else {
            setError(result.error || "Something went wrong")
        }
    }

    if (isSuccess) {
        return (
            <div className="w-full max-w-md mx-auto p-12 bg-card rounded-xl border border-border text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <h2 className="text-2xl font-bold">Message Sent!</h2>
                <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-4">
                    Send another message
                </Button>
            </div>
        )
    }

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-card rounded-xl border border-border">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot - bot protection */}
                <div
                    aria-hidden="true"
                    className="absolute opacity-0 pointer-events-none -z-10"
                >
                    <input
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        {...form.register("_hp_field")}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                        id="name"
                        {...form.register("name")}
                        className={cn(
                            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                            form.formState.errors.name && "border-destructive focus-visible:ring-destructive"
                        )}
                        placeholder="John Doe"
                    />
                    {form.formState.errors.name && (
                        <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                        id="email"
                        {...form.register("email")}
                        className={cn(
                            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                            form.formState.errors.email && "border-destructive focus-visible:ring-destructive"
                        )}
                        placeholder="john@example.com"
                    />
                    {form.formState.errors.email && (
                        <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea
                        id="message"
                        {...form.register("message")}
                        className={cn(
                            "flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                            form.formState.errors.message && "border-destructive focus-visible:ring-destructive"
                        )}
                        placeholder="Tell us about your project..."
                    />
                    {form.formState.errors.message && (
                        <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                    )}
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {error && (
                    <p className="text-sm text-destructive text-center mt-2">{error}</p>
                )}
            </form>
        </div>
    )
}
