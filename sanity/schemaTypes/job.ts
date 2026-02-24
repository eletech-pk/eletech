import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'job',
    title: 'Job Position',
    type: 'document',
    fields: [
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
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
    ],
})
