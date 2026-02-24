import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
    projectId: projectId || 'pv8y60vp', // Fallback to prevent build crash
    dataset: dataset || 'production',
    apiVersion,
    useCdn,
    perspective: 'published',
})
