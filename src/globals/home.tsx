import type { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero_Packages',
      label: 'Hero Packages',
      type: 'relationship',
      relationTo: 'packages', // Reference to the `packages` collection
      hasMany: true, // Allows selecting multiple packages
      maxRows: 3, // Limits the selection to 3 packages
    },
    {
      name: 'last_minute_date',
      type: 'group',
      fields: [
        {
          name: 'show_last_minute_packages',
          type: 'checkbox',
        },
        {
          name: 'start_date',
          type: 'date',
        },
        {
          name: 'end_date',
          type: 'date',
        },
      ],
    },
    {
      name: 'show_fixed_departures_packages',
      type: 'checkbox',
    },
  ],
}
