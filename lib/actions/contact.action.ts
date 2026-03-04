'use server'

import { getClient } from "@/sanity/lib/client"

interface ContactData {
    name: string
    email: string
    message: string
}

export async function submitContactForm(data: ContactData) {
    try {
        const client = getClient()

        // This will create a new 'contact' document in Sanity
        const response = await client.create({
            _type: 'contact',
            ...data,
            submittedAt: new Date().toISOString()
        })

        return { success: true, messageId: response._id }
    } catch (error) {
        console.error('Error submitting contact form to Sanity:', error)
        return { success: false, error: 'Failed to send message. Please try again later.' }
    }
}
