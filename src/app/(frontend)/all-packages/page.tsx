import PackagesTab from '@/app/(frontend)/all-packages/PackagesTab'
import { getHomeData, getPackages } from '@/payload'
import Image from 'next/image'
import FilterPackages from './FilterPackages'
import CircularSlider from '@/components/ImageCircularSlider'
import { Suspense } from 'react'

export default async function AllPackagesPage() {
  const allPackages = await getPackages()
  const homeData = await getHomeData(1)
  return (
    <div className="flex flex-col gap-28 pt-10 pb-20">
      {/* image gallery section */}
      <div className="h-[516px] flex gap-4 relative px-20">
        <Suspense fallback={<div>Loading...</div>}>
          <PackagesTab />
        </Suspense>
        <div className="flex-[1.5] h-full grid grid-cols-2 grid-rows-[7fr_10fr] gap-4 relative">
          {/* Image 1 */}
          <div className="relative col-span-2 row-span-1">
            <Image src="/image1.png" alt="Image 1" fill className="object-cover rounded-xl" />
          </div>

          {/* Image 2 */}
          <div className="relative col-span-1 row-span-1">
            <Image src="/image1.png" alt="Image 2" fill className="object-cover rounded-xl" />
          </div>

          {/* Image 3 */}
          <div className="relative col-span-1 row-span-1">
            <Image src="/image1.png" alt="Image 3" fill className="object-cover rounded-xl" />
          </div>
        </div>
        <div className="flex-[1.5] h-full grid grid-cols-2 grid-rows-[10fr_7fr] gap-4 relative">
          {/* Image 1 */}
          <div className="relative col-span-1 row-span-1">
            <Image src="/image1.png" alt="Image 1" fill className="object-cover rounded-xl" />
          </div>

          {/* Image 2 */}
          <div className="relative col-span-1 row-span-1">
            <Image src="/image1.png" alt="Image 2" fill className="object-cover rounded-xl" />
          </div>

          {/* Image 3 */}
          <div className="relative col-span-2 row-span-1">
            <Image src="/image1.png" alt="Image 3" fill className="object-cover rounded-xl" />
          </div>
        </div>
        <div className="flex-1 h-full grid grid-cols-1 grid-rows-2 gap-4 relative">
          {/* Image 1 */}
          <div className="relative col-span-1 row-span-1">
            <Image src="/image1.png" alt="Image 1" fill className="object-cover rounded-xl" />
          </div>

          {/* Image 2 */}
          <div className="relative col-span-1 row-span-1">
            <Image src="/image1.png" alt="Image 2" fill className="object-cover rounded-xl" />
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <FilterPackages allPackages={allPackages} />
      </Suspense>
      <CircularSlider data={homeData?.testimonials_domestic ?? []} />
    </div>
  )
}
