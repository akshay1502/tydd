import { isAdmin, isAdminOrEditor } from '@/access/isAdmin'
import type { CollectionConfig } from 'payload'

export const Inquiry: CollectionConfig = {
  slug: 'inquiry',
  access: {
    read: isAdminOrEditor, // ✅ Make "GET /api/packages" admin specific
    create: () => true, // ✅ Allow public to add data (optional)
    update: isAdmin, // ❌ Prevent public updates (only for admin)
    delete: isAdmin, // ❌ Prevent public deletes (only for admin)
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
      name: 'travellers',
      type: 'text',
    },
    {
      name: 'destination',
      type: 'text',
    },
    {
      name: 'type',
      type: 'text',
    },
  ],
}
