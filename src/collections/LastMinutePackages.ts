import { isAdminOrEditor } from '@/access/isAdmin'
import type { CollectionConfig } from 'payload'

export const LastMinutePackages: CollectionConfig = {
  slug: 'last-minute-packages',
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
      name: 'discount',
      type: 'number',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      min: 0,
      max: 10,
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
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
          name: 'locations',
          type: 'array',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
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
