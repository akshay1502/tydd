'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import IconLastMinuteSwiperLeft from '@/assets/icons/lastMinuteSwiperLeft'
import LastMinuteDeal from '../cards/lastMinuteDeal'
import { LastMinutePackage } from '@/payload-types'

export default function SwiperLastMinutePackages({
  title,
  data,
}: {
  title: string
  data: LastMinutePackage[]
}) {
  return (
    <div className="mx-20">
      <div className="py-20 relative rounded-3xl overflow-hidden">
        <Image src="/destination.jpg" alt="image" fill className="object-cover -z-10" />
        <div className="px-16 flexCenter">
          <h2 className="text-white text-[40px] leading-[48px] font-bold">{title}</h2>
          <div className="flex gap-6">
            <button className="lastMinuteSwiperLeft">
              <IconLastMinuteSwiperLeft />
            </button>
            <button className="lastMinuteSwiperRight rotate-180">
              <IconLastMinuteSwiperLeft />
            </button>
          </div>
        </div>
        <h2 className="px-16 text-white text-2xl font-bold mt-6 mb-8">
          Deals for : <b>25 Dec - 29 Dec 2024</b>
        </h2>
        <Swiper
          spaceBetween={24}
          modules={[Navigation]}
          slidesPerView="auto"
          slidesPerGroup={1}
          navigation={{
            nextEl: '.lastMinuteSwiperRight',
            prevEl: '.lastMinuteSwiperLeft',
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
          className="mySwiper !px-16"
        >
          {data.map((data) => (
            <SwiperSlide key={data?.id} className="!w-auto">
              <LastMinuteDeal data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
