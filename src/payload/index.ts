import { CollectionSlug, getPayload } from 'payload'
import config from '@/payload.config'
import { FixedPackage, LastMinutePackage, Package } from '@/payload-types'

// initializing payload to be used for local queries
const payload = await getPayload({ config })

export const getDetailPage = async (collection: CollectionSlug, destination: string) => {
  const result = await payload.find({
    collection, // required
    where: {
      destination: {
        equals: destination,
      },
    }, // required
    depth: 1,
    limit: 1,
  })
  return result?.docs[0] as Package | LastMinutePackage | FixedPackage
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
  return result?.docs as LastMinutePackage[]
}
