import { type SchemaTypeDefinition } from 'sanity'
import caseStudy from './caseStudy'
import job from './job'
import jobApplication from './jobApplication'
import contact from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [caseStudy, job, jobApplication, contact],
}
