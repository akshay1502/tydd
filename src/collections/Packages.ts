import type { CollectionConfig } from 'payload'

export const Packages: CollectionConfig = {
  slug: 'packages',
  access: {
    read: () => true, // ✅ Make "GET /api/packages" public
    create: () => true, // ✅ Allow public to add data (optional)
    update: () => true, // ❌ Prevent public updates (optional)
    delete: () => true, // ❌ Prevent public deletes (optional)
  },
  fields: [
    {
      name: 'destination',
      type: 'text',
      unique: true,
    },
    {
      name: 'package',
      type: 'text',
    },
    {
      name: 'cost',
      type: 'number',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'category',
      type: 'select',
      options: ['Solo', 'Adventure', 'Honeymoon'],
    },
    {
      name: 'gallery',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'overview',
      type: 'textarea',
    },
    {
      name: 'highlights',
      type: 'group',
      fields: [
        {
          name: 'chips',
          type: 'array',
          fields: [
            {
              name: 'chip',
              type: 'text',
            },
          ],
        },
        {
          name: 'pointers',
          type: 'array',
          fields: [
            {
              name: 'pointer',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'day_breakup',
      type: 'group',
      fields: [
        {
          name: 'days',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'break_up',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'accomodations',
      type: 'group',
      fields: [
        {
          name: 'location',
          type: 'array',
          fields: [
            {
              name: 'name',
              type: 'text',
            },
            {
              name: 'type',
              type: 'text',
            },
            {
              name: 'whats_included',
              type: 'text',
            },
            {
              name: 'link',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
