'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import IconHeroSwiperRight from '@/assets/icons/heroSwiperRight'
import { Package } from '@/payload-types'

export default function SwiperHeroPackages({ data }: { data: Package[] }) {
  return (
    <div className="mx-20">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data?.map((item: Package) => (
          <SwiperSlide
            key={item?.id}
            className="!w-full !h-[700px] relative rounded-3xl overflow-hidden"
          >
            <Image
              src={typeof item.image === 'object' && item.image?.url ? item.image.url : ''}
              alt={typeof item.image === 'object' && item.image?.alt ? item.image.alt : ''}
              fill
              className="object-cover -z-10"
            />
            <div className="flex flex-col gap-5 absolute left-24 top-1/2 -translate-y-1/2">
              <h4 className="text-white font-bold text-2xl">{item?.title}</h4>
              <h1 className="text-white font-bold text-5xl">{item?.destination}</h1>
              <Button variant="explore" size="sm" asChild>
                <Link href={`/package/packages/${item?.destination}`}>
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
