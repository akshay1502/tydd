import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import config from '@/payload.config'
import './styles.css'
import Packages from '@/components/cards/package'
import FixedDeparture from '@/components/cards/fixedDeparture'
import SwiperPopularPackages from '@/components/Swiper/popularPackages'
import SwiperFixedPackages from '@/components/Swiper/fixedPackages'
import SwiperInternationalPackages from '@/components/Swiper/internationalPackages'
import LastMinuteDeal from '@/components/cards/lastMinuteDeal'
import SwiperLastMinutePackages from '@/components/Swiper/lastMinutePackages'
import SwiperHeroPackages from '@/components/Swiper/heroPackages'
import IconExperStar from '@/assets/icons/whytddstart'
import Image from 'next/image'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'packages', // required
    depth: 1,
    pagination: false, // If you want to disable pagination count, etc.
  })
  console.log(result?.docs)

  return (
    <div className="flex flex-col gap-28">
      <SwiperHeroPackages />
      <SwiperPopularPackages title="Popular Packages" data={result?.docs} />
      <SwiperLastMinutePackages title="Last Minute Deals">
        <LastMinuteDeal />
      </SwiperLastMinutePackages>
      <SwiperFixedPackages title="Fixed Departures">
        <FixedDeparture />
      </SwiperFixedPackages>
      <SwiperInternationalPackages title="International Budget-Friendly Packages">
        <Packages />
      </SwiperInternationalPackages>
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
        <div className="flex gap-20 flex-wrap mt-14">
          <Image
            src="/image1.png"
            alt="image"
            width={0}
            height={156}
            className="h-[156px] w-auto object-contain"
          />
          <Image
            src="/image1.png"
            alt="image"
            width={0}
            height={156}
            className="h-[156px] w-auto object-contain"
          />
          <Image
            src="/image1.png"
            alt="image"
            width={0}
            height={156}
            className="h-[156px] w-auto object-contain"
          />
          <Image
            src="/image1.png"
            alt="image"
            width={0}
            height={156}
            className="h-[156px] w-auto object-contain"
          />
          <Image
            src="/image1.png"
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
