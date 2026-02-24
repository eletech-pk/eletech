import { type SchemaTypeDefinition } from 'sanity'
import caseStudy from './caseStudy'
import job from './job'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [caseStudy, job],
}
