import { CollectionSlug, getPayload } from 'payload'
import config from '@/payload.config'
import { FixedPackage, LastMinutePackage, Package } from '@/payload-types'

// initializing payload to be used for local queries
export const payload = await getPayload({ config })

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
    select: {
      destination: true,
      package: true,
      cost: true,
      image: true,
      type: true,
      updatedAt: true,
      createdAt: true,
      category: true,
      location: true,
    }, // Fetch only required fields
    sort: '-order',
  })
  return result?.docs as Package[]
}

export const getInternationalPackages = async () => {
  const result = await payload.find({
    collection: 'packages', // required
    depth: 1,
    pagination: false, // If you want to disable pagination count, etc.
    select: {
      destination: true,
      package: true,
      cost: true,
      image: true,
      type: true,
      updatedAt: true,
      createdAt: true,
      category: true,
      location: true,
    }, // Fetch only required fields
    where: {
      type: { equals: 'international' },
    },
    sort: '-order',
  })
  return result?.docs as Package[]
}

export const getPopularPackages = async () => {
  const result = await payload.find({
    collection: 'packages', // required
    depth: 1,
    pagination: false, // If you want to disable pagination count, etc.
    select: {
      destination: true,
      package: true,
      cost: true,
      image: true,
      type: true,
      updatedAt: true,
      createdAt: true,
      category: true,
      is_popular: true,
      popular_order: true,
    }, // Fetch only required fields
    where: {
      is_popular: { equals: true },
    },
    sort: '-popular_order',
  })
  return result?.docs as Package[]
}

export const getFixedPackages = async () => {
  const result = await payload.find({
    collection: 'fixed-packages', // required
    depth: 1,
    pagination: false, // If you want to disable pagination count, etc.
    select: {
      destination: true,
      package: true,
      cost: true,
      image: true,
      start_date: true,
      end_date: true,
      category: true,
      updatedAt: true,
      createdAt: true,
    }, // Fetch only required fields
    sort: '-order',
  })
  return result?.docs as FixedPackage[]
}

export const getLastMinutePackages = async () => {
  const result = await payload.find({
    collection: 'last-minute-packages', // required
    depth: 1,
    pagination: false, // If you want to disable pagination count, etc.
    select: {
      destination: true,
      package: true,
      cost: true,
      image: true,
      discount: true,
      features: true,
      updatedAt: true,
      createdAt: true,
    }, // Fetch only required fields
    sort: '-order',
  })
  return result?.docs as LastMinutePackage[]
}

export const getHomeData = async (depth: number) => {
  // get the home page data
  const homeData = await payload.findGlobal({
    slug: 'home',
    depth,
    populate: {
      packages: {
        destination: true,
        image: true,
        updatedAt: true,
        createdAt: true,
        title: true,
      },
    },
  })

  return homeData
}

export const getAllPackagesTestimonials = async (depth: number) => {
  // get the All Packages testimonial data [domestic, international, cruise] data
  const homeData = await payload.findGlobal({
    slug: 'home',
    depth,
    select: {
      testimonials_domestic: true,
      testimonials_international: true,
      testimonials_cruise: true,
    },
  })

  return homeData
}
