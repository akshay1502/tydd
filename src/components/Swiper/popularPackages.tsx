'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import IconSwiperLeft from '@/assets/icons/swiperLeft'
import Pill from '../pill'
import Packages from '../cards/package'
import { useState } from 'react'
import { PopularPackages } from '@/types/global'

type SwiperPopularPackagesProps = {
  title: string
  data: PopularPackages[]
}
export default function SwiperPopularPackages({ title, data }: SwiperPopularPackagesProps) {
  const [activePopularCategory, setActivePopularCategory] = useState('All')

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
        <Pill
          text="All"
          isActive={'All' === activePopularCategory}
          setActivePopularCategory={setActivePopularCategory}
        />
        {data?.map((data: PopularPackages) => (
          <Pill
            key={data?.id}
            text={data?.category}
            setActivePopularCategory={setActivePopularCategory}
            isActive={data?.category === activePopularCategory}
          />
        ))}
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
        {data
          ?.filter(
            (packages: PopularPackages) =>
              activePopularCategory === 'All' || packages?.category === activePopularCategory,
          )
          .map((data: PopularPackages) => (
            <SwiperSlide key={data?.id} className="!w-auto">
              <Packages data={data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
