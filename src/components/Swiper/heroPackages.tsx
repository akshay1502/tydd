'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import IconHeroSwiperRight from '@/assets/icons/heroSwiperRight'

export default function SwiperHeroPackages() {
  return (
    <div className="mx-20">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {[...Array(3)].map((_, index) => (
          <SwiperSlide
            key={index}
            className="!w-full !h-[700px] relative rounded-3xl overflow-hidden"
          >
            <Image src="/image1.png" alt="image" fill className="object-cover -z-10" />
            <div className="flex flex-col gap-5 absolute left-24 top-1/2 -translate-y-1/2">
              <h4 className="text-white font-bold text-2xl">Turquoise Treasure of Asia</h4>
              <h1 className="text-white font-bold text-5xl">Maldives</h1>
              <Button variant="explore" size="sm" asChild>
                <Link href="/">
                  Explore Now <IconHeroSwiperRight />
                </Link>
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
