import { isAdminOrEditor } from '@/access/isAdmin'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: isAdminOrEditor, // Only Admin & Editor can create
    update: isAdminOrEditor, // Only Admin & Editor can update
    delete: isAdminOrEditor, // Only Admin & Editor can delete
  },
  fields: [
    // not making alt required as it would affect bulk uploading of images
    {
      name: 'alt',
      type: 'text',
    },
  ],
  upload: true,
}
