'use client'
import {
  Accordion,
  AccordionContent2,
  AccordionItem2,
  AccordionTrigger2,
} from '@/components/ui/accordion'
import IconTick from '@/assets/icons/tick'
import { useState } from 'react'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Corporate & Group Travel',
    description:
      'Specialized booking services for corporate events, team retreats, and large group travel with customized itineraries and exclusive rates.',
    points: [
      'Corporate team building retreats',
      'Exclusive group booking discounts',
      'Customized corporate travel management',
    ],
    image: '/image1.webp',
  },
  {
    id: 2,
    title: 'Packages & Cruises',
    description:
      'Specialized booking services for corporate events, team retreats, and large group travel with customized itineraries and exclusive rates.',
    points: [
      'Corporate team building retreats',
      'Exclusive group booking discounts',
      'Customized corporate travel management',
    ],
    image: '/image2.webp',
  },
  {
    id: 3,
    title: 'Flight Booking',
    description:
      'Specialized booking services for corporate events, team retreats, and large group travel with customized itineraries and exclusive rates.',
    points: [
      'Corporate team building retreats',
      'Exclusive group booking discounts',
      'Customized corporate travel management',
    ],
    image: '/image3.webp',
  },
  {
    id: 4,
    title: 'Travel Documentation',
    description:
      'Specialized booking services for corporate events, team retreats, and large group travel with customized itineraries and exclusive rates.',
    points: [
      'Corporate team building retreats',
      'Exclusive group booking discounts',
      'Customized corporate travel management',
    ],
    image: '/contact.webp',
  },
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      <h2 className="mb-14">Services we offer</h2>
      <div className="flex flex-row gap-44 items-end">
        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-0"
            onValueChange={(value) => {
              const index = Number(value?.split('-')[1]) || 0
              setActiveIndex(index)
            }}
          >
            {services?.map((service, index) => (
              <div key={service?.id} className="flex w-full">
                <AccordionItem2 value={`item-${index}`}>
                  <AccordionTrigger2>
                    <h3>{service.title}</h3>
                  </AccordionTrigger2>
                  <AccordionContent2>
                    <div>
                      <p className="mb-6 text-borderStroke b2reg">{service.description}</p>
                      <div className="flex flex-col gap-3">
                        {service?.points?.map((point, index) => (
                          <div key={index} className="flex gap-4 items-center">
                            <IconTick />
                            <p className="text-black b2sb">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent2>
                </AccordionItem2>
              </div>
            ))}
          </Accordion>
        </div>
        <div className="relative w-[360px] h-[360px] shrink-0">
          {services.map((service, index) => {
            const isHidden = index < activeIndex

            return (
              <div
                key={index}
                className={`w-[360px] h-[360px] absolute transition-all duration-700 overflow-hidden`}
                style={{
                  bottom: `${(3 - index) * 16}px`,
                  transform: isHidden
                    ? `translateY(-100%) scale(${1 + (4 * (3 - index)) / 100})`
                    : `translateY(0) scale(${1 + (4 * (3 - index)) / 100})`,
                  zIndex: (3 - index) * 20,
                  opacity: isHidden ? 0 : 1,
                }}
              >
                <div>
                  <Image
                    src={service.image}
                    alt="image"
                    fill
                    className="object-cover brightness-75"
                  />
                </div>
                <h4 className="h4b absolute bottom-6 left-6 text-white">{service.title}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
