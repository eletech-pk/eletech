'use client'

/**
 * Client component that wraps Sanity Studio.
 * Must be a client component because Sanity Studio is entirely client-side.
 */
import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export default function StudioClient() {
    return <NextStudio config={config} />
}
