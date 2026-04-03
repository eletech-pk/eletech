import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'job',
    title: 'Job Position',
    type: 'document',
    fields: [
        defineField({
            name: 'isActive',
            title: 'Is Active Position?',
            type: 'boolean',
            description: 'Turn off when the position is filled to hide it from the website without deleting the post.',
            initialValue: true,
        }),
        defineField({
            name: 'title',
            title: 'Job Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'department',
            title: 'Department',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'type',
            title: 'Job Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Full-time', value: 'full-time' },
                    { title: 'Part-time', value: 'part-time' },
                    { title: 'Contract', value: 'contract' },
                    { title: 'Remote', value: 'remote' },
                ],
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
            description: 'Filterable tags (e.g. AI, Backend, Remote)',
        }),
        defineField({
            name: 'requirements',
            title: 'Requirements',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Bullet-point list of job requirements',
        }),
        defineField({
            name: 'responsibilities',
            title: 'Responsibilities',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Bullet-point list of job responsibilities',
        }),
        defineField({
            name: 'salary',
            title: 'Salary Range',
            type: 'string',
            description: 'e.g. $80,000 - $120,000 (optional)',
        }),
        defineField({
            name: 'applicationDeadline',
            title: 'Application Deadline',
            type: 'datetime',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
    ],
})
