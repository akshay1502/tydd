'use client'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import Image from 'next/image'
import { Media } from '@/payload-types'

gsap.registerPlugin(MotionPathPlugin)

type Testimonial = {
  name?: string | null
  review?: string | null
  image?: (number | null) | Media
  id?: string | null
}

export default function CircularSlider({ data }: { data: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const items = gsap.utils.toArray('.item') as HTMLElement[]
    const numItems = items.length

    gsap.set(items, {
      motionPath: {
        path: '#circlePath',
        align: '#circlePath',
        alignOrigin: [0.5, 0.5],
        end: (i) => 0.5 + i / numItems,
      },
    })

    const itemStep = 1 / numItems,
      wrapProgress = gsap.utils.wrap(0, 1),
      snap = gsap.utils.snap(itemStep),
      wrapTracker = gsap.utils.wrap(0, numItems),
      tracker = { item: 0 }

    const tl = gsap.timeline({ paused: true })

    tl.to('.wrapper', {
      rotation: 360,
      transformOrigin: 'center',
      duration: 1,
      ease: 'none',
    })

    tl.to(
      items,
      {
        rotation: '-=360',
        transformOrigin: 'center',
        duration: 1,
        ease: 'none',
      },
      0,
    )

    tl.to(
      tracker,
      {
        item: numItems,
        duration: 1,
        ease: 'none',
        modifiers: {
          item(value) {
            const newIndex = wrapTracker(numItems - Math.round(value))
            setActiveIndex(newIndex) // Update activeIndex state
            scaleActiveImage(newIndex)
            return newIndex
          },
        },
      },
      0,
    )

    items.forEach((el, i) => {
      el.addEventListener('click', () => {
        const current = tracker.item

        if (i === current) return

        const diff = current - i

        if (Math.abs(diff) < numItems / 2) {
          moveWheel(diff * itemStep)
        } else {
          const amt = numItems - Math.abs(diff)
          moveWheel(current > i ? amt * -itemStep : amt * itemStep)
        }
      })
    })

    function moveWheel(amount: number) {
      gsap.to(tl, {
        progress: snap(tl.progress() + amount),
        modifiers: {
          progress: wrapProgress,
        },
      })
    }

    function scaleActiveImage(index: number) {
      gsap.to(items, {
        scale: (i) => (i === index ? 1.5 : 1),
        duration: 0.3,
        ease: 'power2.out',
      })
    }
    // 🟢 Ensure first image is scaled properly on mount
    scaleActiveImage(0)
  }, [])

  return (
    <div className="relative h-[730px] items-center overflow-hidden">
      <div className="absolute w-full h-full -z-10 opacity-10">
        <Image src="/map.png" alt="dummy" fill className="object-cover" />
      </div>
      <h2 className="px-20 text-darkBlue text-[40px] leading-[48px] font-bold">
        What our customer says
      </h2>
      <div className="absolute top-1/2 left-20 -translate-y-1/2 w-1/2">
        <h3 className="text-black text-[32px] leading-[40px] font-semibold">
          {data[activeIndex]?.name}
        </h3>
        <p className="text-black text-2xl tracking-wide mt-8">{data[activeIndex]?.review}</p>
      </div>
      <div className="wrapper absolute right-0 translate-x-[40%] top-1/2 -translate-y-1/2 flex h-[550px] w-[550px]">
        <svg width="550" height="550">
          <path
            d="M 549,275 A 274,274 0 1,1 1,275 A 274,274 0 1,1 549,275"
            stroke="black"
            strokeWidth="2.5"
            fill="none"
            id="circlePath"
          />
        </svg>

        {data?.map((testimonial: Testimonial, index: number) => (
          <div
            ref={(el) => {
              imageRefs.current[index] = el
            }}
            className="h-40 w-40 absolute rounded-full overflow-hidden item"
            key={index}
          >
            <Image
              src={typeof testimonial?.image === 'object' ? (testimonial?.image?.url ?? '') : ''}
              alt={typeof testimonial?.image === 'object' ? (testimonial?.image?.alt ?? '') : ''}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
