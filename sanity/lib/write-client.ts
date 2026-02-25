import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

/**
 * Server-only Sanity client with write permissions.
 * Used for creating documents (e.g. job applications).
 * Requires SANITY_API_WRITE_TOKEN in environment variables.
 */
export const writeClient = createClient({
    projectId: projectId || 'pv8y60vp',
    dataset: dataset || 'production',
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_API_WRITE_TOKEN,
})
