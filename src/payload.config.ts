// storage-adapter-import-placeholder
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { postgresAdapter } from '@payloadcms/db-postgres'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Packages } from './collections/Packages'
import { Inquiry } from './collections/Inquiry'
import { FixedPackages } from './collections/FixedPackages'
import { LastMinutePackages } from './collections/LastMinutePackages'
import { Contact } from './collections/Contact'
import { Home } from './globals/home'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { Categories } from './collections/Categories'
import { Locations } from './collections/Locations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Packages,
    Inquiry,
    FixedPackages,
    LastMinutePackages,
    Contact,
    Categories,
    Locations,
  ],
  globals: [Home],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    // Postgres-specific arguments go here.
    // `pool` is required.
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  email: nodemailerAdapter({
    defaultFromName: 'Akshay Shinde',
    defaultFromAddress: 'akshay.shinde@ly.design',
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  sharp,
  plugins: [],
})
