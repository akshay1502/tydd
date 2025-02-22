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
