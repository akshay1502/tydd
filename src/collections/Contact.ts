import type { CollectionConfig } from 'payload'

export const Contact: CollectionConfig = {
  slug: 'contact',
  access: {
    read: () => true, // ✅ Make "GET /api/packages" public
    create: () => true, // ✅ Allow public to add data (optional)
    update: () => true, // ❌ Prevent public updates (optional)
    delete: () => true, // ❌ Prevent public deletes (optional)
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'mobile',
      type: 'text',
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'destination',
      type: 'text',
    },
    {
      name: 'ideas',
      type: 'text',
    },
  ],
}
