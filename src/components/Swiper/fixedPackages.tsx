'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import IconSwiperLeft from '@/assets/icons/swiperLeft'
import FixedDeparture from '../cards/fixedDeparture'
import { FixedPackages } from '@/types/global'

export default function SwiperFixedPackages({
  title,
  data,
}: {
  title: string
  data: FixedPackages[]
}) {
  return (
    <div className="px-20">
      <div className="flexCenter mb-10">
        <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold">{title}</h2>
        <div className="flex gap-6">
          <button className="fixedSwiperLeft">
            <IconSwiperLeft />
          </button>
          <button className="fixedSwiperRight rotate-180">
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
          nextEl: '.fixedSwiperRight',
          prevEl: '.fixedSwiperLeft',
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
        {data.map((data) => (
          <SwiperSlide key={data?.id} className="!w-auto">
            <FixedDeparture data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
