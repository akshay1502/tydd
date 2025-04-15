import { isAdminOrEditor } from '@/access/isAdmin'
import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    read: () => true, // ✅ Make "GET /api/packages" public
    create: isAdminOrEditor, // ✅ Allow [admin, editor] to add data (optional)
    update: isAdminOrEditor, // ❌ Prevent public updates (optional)
    delete: isAdminOrEditor, // ❌ Prevent public deletes (optional)
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
  admin: {
    useAsTitle: 'name',
  },
}
