'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import IconSwiperLeft from '@/assets/icons/swiperLeft'
import Pill from '../pill'

export default function SwiperPopularPackages({ title, children }) {
  return (
    <div className="px-20">
      <div className="flexCenter">
        <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold">{title}</h2>
        <div className="flex gap-6">
          <button className="custom-prev">
            <IconSwiperLeft />
          </button>
          <button className="custom-next rotate-180">
            <IconSwiperLeft />
          </button>
        </div>
      </div>
      <div className="flex gap-6 mt-10 mb-8">
        <Pill text="All" isActive />
        <Pill text="All" />
        <Pill text="All" />
        <Pill text="All" />
      </div>
      <Swiper
        spaceBetween={24}
        modules={[Navigation]}
        slidesPerView="auto"
        slidesPerGroup={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
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
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index} className="!w-auto">
            {children}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
