import { isAdminOrEditor } from '@/access/isAdmin'
import type { CollectionConfig } from 'payload'

export const FixedPackages: CollectionConfig = {
  slug: 'fixed-packages',
  access: {
    read: () => true, // ✅ Make "GET /api/packages" public
    create: isAdminOrEditor, // ✅ Allow [admin, editor] to add data (optional)
    update: isAdminOrEditor, // ❌ Prevent public updates (optional)
    delete: isAdminOrEditor, // ❌ Prevent public deletes (optional)
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
      name: 'start_date',
      type: 'date',
    },
    {
      name: 'end_date',
      type: 'date',
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
      name: 'order',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 10,
    },
    {
      name: 'category',
      type: 'select',
      options: ['Group'],
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
              name: 'date',
              type: 'date',
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
          name: 'locations',
          type: 'array',
          fields: [
            {
              name: 'name',
              type: 'text',
            },
            {
              name: 'location',
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
