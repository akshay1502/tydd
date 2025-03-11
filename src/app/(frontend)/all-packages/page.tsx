import { getHomeData, getPackages } from '@/payload'
import FilterPackages from './FilterPackages'
import CircularSlider from '@/components/ImageCircularSlider'
import { Suspense } from 'react'
import HeroImageSlider from './HeroImageSlider'

export default async function AllPackagesPage() {
  const allPackages = await getPackages()
  const homeData = await getHomeData(1)
  return (
    <div className="flex flex-col gap-28 pt-10 pb-20">
      {/* image gallery section */}
      <HeroImageSlider />
      <Suspense fallback={<div>Loading...</div>}>
        <FilterPackages allPackages={allPackages} />
      </Suspense>
      <CircularSlider data={homeData?.testimonials_domestic ?? []} />
    </div>
  )
}
