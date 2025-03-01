// import Packages from '@/components/cards/package'
// import Pill from '@/components/pill'
// commenting above for deployment
import Packages from '@/components/cards/package'
import PackagesTab from '@/components/PackagesTab'
import { getPackages } from '@/payload'
import Image from 'next/image'

export default async function AllPackagesPage() {
  const allPackages = await getPackages()
  return (
    <div className="px-20 flex flex-col gap-28 pt-10">
      {/* image gallery section */}
      <div className="h-[516px] flex gap-4 relative">
        <PackagesTab />
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
      <div>
        <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold mb-8">Explore India</h2>
        <div className="flex gap-6 my-9">
          {/* <Pill text="All" isActive />
          <Pill text="All" />
          <Pill text="All" />
          <Pill text="All" /> */}
        </div>
        {/* <div className="flex flex-wrap gap-6 justify-between"> */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(193px,1fr))] gap-6">
          {allPackages.map((item) => (
            <Packages key={item?.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
