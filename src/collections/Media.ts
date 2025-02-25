import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
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
