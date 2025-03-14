'use client'
import Packages from '@/components/cards/package'
import { Package } from '@/payload-types'
import { useSearchParams } from 'next/navigation'

export default function FilterPackages({ allPackages }: { allPackages: Package[] }) {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get('type') || 'domestic'

  return (
    <div className="px-20">
      <h2 className="text-darkBlue  mb-8 capitalize">Explore {activeTab}</h2>
      <div className="flex gap-6 my-9">
        {/* <Pill text="All" isActive />
          <Pill text="All" />
          <Pill text="All" />
          <Pill text="All" /> */}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(193px,193px))] gap-6">
        {allPackages
          .filter((item) => item?.type == activeTab)
          ?.map((item) => <Packages key={item?.id} data={item} />)}
      </div>
    </div>
  )
}
