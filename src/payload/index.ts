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

export const getHomeData = async () => {
  // get the home page data
  const homeData = await payload.findGlobal({
    slug: 'home',
    depth: 0,
  })

  // populate hero packages with necessary field to be shown on UI
  const heroPackagesData = await payload.find({
    collection: 'packages',
    where: {
      id: { in: homeData?.hero_Packages }, // Fetch only the selected package IDs
    },
    depth: 1, // Prevents excessive nesting
    select: { destination: true, image: true, updatedAt: true, createdAt: true }, // Fetch only required fields
  })

  return {
    ...homeData,
    hero_Packages: heroPackagesData?.docs,
  }
}
