import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'jobApplication',
    title: 'Job Application',
    type: 'document',
    fields: [
        defineField({
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'jobSlug',
            title: 'Job Slug',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'name',
            title: 'Applicant Name',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
            readOnly: true,
        }),
        defineField({
            name: 'coverLetter',
            title: 'Cover Letter',
            type: 'text',
            readOnly: true,
        }),
        defineField({
            name: 'resumeUrl',
            title: 'Resume URL',
            type: 'url',
            readOnly: true,
        }),
        defineField({
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
            readOnly: true,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'jobTitle',
        },
    },
})
