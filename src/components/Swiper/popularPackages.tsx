'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import IconSwiperLeft from '@/assets/icons/swiperLeft'
import Pill from '../pill'
import Packages from '../cards/package'
import { useState } from 'react'
import { Package } from '@/payload-types'

type SwiperPopularPackagesProps = {
  title: string
  data: Package[]
}
export default function SwiperPopularPackages({ title, data }: SwiperPopularPackagesProps) {
  const [activePill, setActivePill] = useState('All')

  const setOfCategories = [...new Set(data.flatMap((item) => item.category || []))]

  return (
    <div className="px-4 lg:px-20">
      <div className="flexCenter">
        <h2 className="text-darkBlue ">{title}</h2>
        <div className="flex gap-6">
          <button className="custom-prev">
            <IconSwiperLeft />
          </button>
          <button className="custom-next rotate-180">
            <IconSwiperLeft />
          </button>
        </div>
      </div>
      <div className="flex gap-4  mt-8 mb-6 lg:gap-6 lg:mt-10 lg:mb-8 overflow-x-scroll">
        <Pill text="All" isActive={'All' === activePill} setActivePill={setActivePill} />
        {setOfCategories?.map((category: string, index: number) => (
          <Pill
            key={index}
            text={category ?? ''}
            setActivePill={setActivePill}
            isActive={category === activePill}
          />
        ))}
      </div>
      <Swiper
        // spaceBetween={24}
        modules={[Navigation]}
        slidesPerView="auto"
        slidesPerGroup={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        breakpoints={{
          // When the window width is 640px or smaller (mobile)
          320: {
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
          ?.filter((packages: Package) => activePill === 'All' || packages?.category === activePill)
          .map((data: Package) => (
            <SwiperSlide key={data?.id} className="!w-auto">
              <Packages data={data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
