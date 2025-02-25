import Packages from '@/components/cards/package'
import Pill from '@/components/pill'
import Image from 'next/image'

export default function AllPackagesPage() {
  return (
    <div className="px-20 flex flex-col gap-28 pt-10">
      {/* image gallery section */}
      <div className="h-[516px] flex gap-4 relative">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 rounded-lg py-3 px-6 flex gap-10 z-10 bg-all-packages-buttons backdrop-blur-[50px]">
          <button className="font-semibold text-xl text-blue pb-0.5 border-b border-blue">
            Domestic
          </button>
          <button className="font-semibold text-xl text-white">Domestic</button>
          <button className="font-semibold text-xl text-white">Domestic</button>
        </div>
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
          <Pill text="All" isActive />
          <Pill text="All" />
          <Pill text="All" />
          <Pill text="All" />
        </div>
        {/* <div className="flex flex-wrap gap-6 justify-between"> */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(193px,1fr))]  gap-6">
          {[...Array(10)].map((_, index) => (
            <Packages key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
