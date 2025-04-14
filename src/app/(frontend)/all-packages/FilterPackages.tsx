'use client'
import Packages from '@/components/cards/package'
import CircularSlider, { Testimonial } from '@/components/ImageCircularSlider'
import Pill from '@/components/pill'
import { Package } from '@/payload-types'
import { useSearchParams } from 'next/navigation'

export default function FilterPackages({
  allPackages,
  testimonial_data,
}: {
  allPackages: Package[]
  testimonial_data: {
    id: number
    testimonials_domestic?: Testimonial[] | null
    testimonials_international?: Testimonial[] | null
    testimonials_cruise?: Testimonial[] | null
  }
}) {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get('type') || 'domestic'

  const testimonial =
    activeTab === 'domestic'
      ? testimonial_data?.testimonials_domestic
      : activeTab === 'international'
        ? testimonial_data?.testimonials_international
        : testimonial_data?.testimonials_cruise

  return (
    <>
      <div className="lg:px-20 px-4">
        <h2 className="text-darkBlue lg:mb-8 mb-6 capitalize">Explore {activeTab}</h2>
        {/* <div className="flex gap-6 my-9">
        <Pill text="All" isActive />
        <Pill text="All" />
        <Pill text="All" />
        <Pill text="All" />
        </div> */}
        <div className="grid lg:grid-cols-[repeat(auto-fit,minmax(193px,193px))] grid-cols-2 lg:gap-6 gap-4 gap-y-6">
          {allPackages
            .filter((item) => item?.type == activeTab)
            ?.map((item) => <Packages key={item?.id} data={item} smallVariant={true} />)}
        </div>
      </div>
      <CircularSlider data={testimonial ?? []} />
    </>
  )
}
