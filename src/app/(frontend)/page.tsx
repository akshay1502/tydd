import React from 'react'
import './styles.css'
import SwiperPopularPackages from '@/components/Swiper/popularPackages'
import SwiperFixedPackages from '@/components/Swiper/fixedPackages'
import SwiperInternationalPackages from '@/components/Swiper/internationalPackages'
import SwiperLastMinutePackages from '@/components/Swiper/lastMinutePackages'
import SwiperHeroPackages from '@/components/Swiper/heroPackages'
import IconExperStar from '@/assets/icons/expertStar'
import Image from 'next/image'
import { getFixedPackages, getLastMinutePackages, getPackages } from '@/payload'

// swiper navigation and pagination css files
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default async function HomePage() {
  const packages = await getPackages()
  const fixedPackages = await getFixedPackages()
  const lastMinutePackages = await getLastMinutePackages()

  return (
    <div className="flex flex-col gap-28 pt-10 pb-20">
      {/* Hero packages will redirect to same as popular packages */}
      <SwiperHeroPackages />
      {/* packages with popular boolean marked as true */}
      <SwiperPopularPackages title="Popular Packages" data={packages} />
      {/* last minute date packages with discount */}
      <SwiperLastMinutePackages title="Last Minute Deals" data={lastMinutePackages} />
      {/* fixed date packages */}
      <SwiperFixedPackages title="Fixed Departures" data={fixedPackages} />
      {/* packages with international type */}
      <SwiperInternationalPackages title="International Budget-Friendly Packages" data={packages} />
      <div className="px-20">
        <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold">Why TYDD</h2>
        <div className="mt-14 flex gap-32">
          <div className="flex flex-col gap-14">
            <p className="text-xl">
              At TYDD, we go beyond ordinary travel experiences to create extraordinary memories.
              Our dedication to personalized service and seamless journeys ensures your trip is
              unforgettable. With expert planning and attention to detail, every aspect of your
              travel is in safe hands. Let us turn your dream vacation into a reality, stress-free
              and memorable.
            </p>
            <div className="grid grid-cols-2 gap-y-10 gap-x-16">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="py-2 flex items-center gap-6">
                  <IconExperStar />
                  <h4 className="text-black font-bold text-2xl">Affordable Luxury</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[412px] h-[468px] relative shrink-0">
            <Image src="/whytydd.png" alt="image" fill className="object-cover" />
          </div>
        </div>
      </div>
      <div className="px-20">
        <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold">Our Partners</h2>
        <div className="flex justify-between gap-20 flex-wrap mt-14">
          <Image
            src="/partner1.png"
            alt="image"
            width={0}
            height={156}
            className="h-[156px] w-auto object-contain"
          />
          <Image
            src="/partner2.png"
            alt="image"
            width={0}
            height={156}
            className="h-[156px] w-auto object-contain"
          />
          <Image
            src="/partner3.png"
            alt="image"
            width={0}
            height={156}
            className="h-[156px] w-auto object-contain"
          />
          <Image
            src="/partner4.png"
            alt="image"
            width={0}
            height={156}
            className="h-[156px] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}
