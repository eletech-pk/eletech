import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

/**
 * Creates a Sanity client with authentication token for server-side reads.
 * The token is resolved lazily at call time (not at import time) to ensure
 * it's available when Next.js renders server components.
 */
export function getClient() {
    return createClient({
        projectId: projectId || 'pv8y60vp',
        dataset: dataset || 'production',
        apiVersion,
        useCdn,
        token: process.env.SANITY_API_WRITE_TOKEN,
    })
}

/**
 * Default client instance (without token) for non-sensitive reads.
 * For authenticated reads on private datasets, use getClient() instead.
 */
export const client = createClient({
    projectId: projectId || 'pv8y60vp',
    dataset: dataset || 'production',
    apiVersion,
    useCdn,
})
