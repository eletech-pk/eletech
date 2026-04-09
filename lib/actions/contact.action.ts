'use server'

import { getClient } from "@/sanity/lib/client"
import { checkRateLimit } from "@/lib/utils/rate-limit"
import { headers } from "next/headers"

interface ContactData {
    name: string
    email: string
    message: string
    _hp_field?: string // Honeypot field
}

export async function submitContactForm(data: ContactData) {
    try {
        // 1. Bot Protection: Check Honeypot
        if (data._hp_field && data._hp_field.length > 0) {
            console.warn("Contact honeypot triggered.");
            return { success: true } // Fake success
        }

        // 2. Rate Limiting
        const headerList = await headers()
        const ip = headerList.get("x-forwarded-for") || "anonymous"
        const { success } = checkRateLimit(ip)

        if (!success) {
            return { success: false, error: 'Too many messages. Please try again later.' }
        }

        const client = getClient()

        // Remove honeypot field before saving to Sanity
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { _hp_field, ...sanitizedData } = data;

        // This will create a new 'contact' document in Sanity
        const response = await client.create({
            _type: 'contact',
            ...sanitizedData,
            submittedAt: new Date().toISOString()
        })

        return { success: true, messageId: response._id }
    } catch (error) {
        console.error('Error submitting contact form to Sanity:', error)
        return { success: false, error: 'Failed to send message. Please try again later.' }
    }
}
