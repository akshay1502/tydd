import { CollectionSlug, getPayload } from 'payload'
import config from '@/payload.config'
import { LastMinutePackages, PopularPackages } from '@/types/global'
import { FixedPackage, Package } from '@/payload-types'

// initializing payload to be used for local queries
const payload = await getPayload({ config })

export const getDetailPage = async (slug: CollectionSlug, id: string): Promise<PopularPackages> => {
  const result = await payload.findByID({
    collection: slug, // required
    id, // required
    depth: 1,
  })
  return result as LastMinutePackages
}

export const getPackages = async () => {
  const result = await payload.find({
    collection: 'packages', // required
    depth: 1,
    pagination: false, // If you want to disable pagination count, etc.
  })
  return result?.docs as Package[]
}

export const getFixedPackages = async () => {
  const result = await payload.find({
    collection: 'fixed-packages', // required
    depth: 1,
    pagination: false, // If you want to disable pagination count, etc.
  })
  return result?.docs as FixedPackage[]
}

export const getLastMinutePackages = async () => {
  const result = await payload.find({
    collection: 'last-minute-packages', // required
    depth: 1,
    pagination: false, // If you want to disable pagination count, etc.
  })
  return result?.docs as PopularPackages[]
}

export const createInquiry = async (data) => {
  const response = await payload.create({
    collection: 'inquiry', // required
    data,
  })
  return response
}
