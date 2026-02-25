import { type SchemaTypeDefinition } from 'sanity'
import caseStudy from './caseStudy'
import job from './job'
import jobApplication from './jobApplication'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [caseStudy, job, jobApplication],
}
