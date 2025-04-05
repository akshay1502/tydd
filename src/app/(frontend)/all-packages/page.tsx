import { getHomeData, getPackages } from '@/payload'
import FilterPackages from './FilterPackages'
import CircularSlider from '@/components/ImageCircularSlider'
import { Suspense } from 'react'
import HeroImageSlider from './HeroImageSlider'

export default async function AllPackagesPage() {
  const allPackages = await getPackages()
  const homeData = await getHomeData(1)
  return (
    <div className="layout">
      {/* image gallery section */}
      <Suspense fallback={<div>Loading...</div>}>
        <HeroImageSlider />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FilterPackages allPackages={allPackages} />
      </Suspense>
      <CircularSlider data={homeData?.testimonials_domestic ?? []} />
    </div>
  )
}
