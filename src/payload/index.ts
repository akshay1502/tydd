import { CollectionSlug, getPayload } from 'payload'
import config from '@/payload.config'

// initializing payload to be used for local queries
const payload = await getPayload({ config })

export const getDetailPage = async (slug: CollectionSlug, id: string) => {
  const result = await payload.findByID({
    collection: slug, // required
    id, // required
    depth: 1,
  })
  return result
}

export const getPackages = async () => {
  const result = await payload.find({
    collection: 'packages', // required
    depth: 1,
    pagination: false, // If you want to disable pagination count, etc.
  })
  return result?.docs
}
