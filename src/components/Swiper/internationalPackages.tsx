'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import IconSwiperLeft from '@/assets/icons/swiperLeft'
import Packages from '../cards/package'
import { PopularPackages } from '@/types/global'

type SwiperInternationalPackagesProps = {
  title: string
  data: PopularPackages[]
}

export default function SwiperInternationalPackages({
  title,
  data,
}: SwiperInternationalPackagesProps) {
  return (
    <div className="px-20">
      <div className="flexCenter mb-10">
        <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold">{title}</h2>
        <div className="flex gap-6">
          <button className="internationalSwiperLeft">
            <IconSwiperLeft />
          </button>
          <button className="internationalSwiperRight rotate-180">
            <IconSwiperLeft />
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={24}
        modules={[Navigation]}
        slidesPerView="auto"
        slidesPerGroup={1}
        navigation={{
          nextEl: '.internationalSwiperRight',
          prevEl: '.internationalSwiperLeft',
        }}
        breakpoints={{
          // When the window width is 640px or smaller (mobile)
          425: {
            spaceBetween: 12, // 10px space between slides
          },
          // For larger screens (desktop)
          1024: {
            spaceBetween: 24, // 20px space between slides
          },
        }}
        className="mySwiper"
      >
        {data.map((data: PopularPackages) => (
          <SwiperSlide key={data?.id} className="!w-auto">
            <Packages data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
