import type { CollectionConfig } from 'payload'

export const Packages: CollectionConfig = {
  slug: 'packages',
  fields: [
    {
      name: 'destination',
      type: 'text',
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
  ],
}
