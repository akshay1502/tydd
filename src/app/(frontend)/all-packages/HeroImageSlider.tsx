'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { Suspense } from 'react'
import PackagesTab from './PackagesTab'
import { useSearchParams } from 'next/navigation'

export default function HeroImageSlider() {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get('type') || 'domestic'
  useGSAP(() => {
    gsap.fromTo(
      '.firstImage',
      { x: '-100%' }, // Start from outside the left
      { x: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )

    gsap.fromTo(
      '.secondImage',
      { y: '100%' }, // Start from outside the left
      { y: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )

    gsap.fromTo(
      '.thirdImage',
      { y: '100%' }, // Start from outside the left
      { y: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )

    gsap.fromTo(
      '.fourthImage',
      { x: '-100%' }, // Start from outside the left
      { x: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )

    gsap.fromTo(
      '.fifthImage',
      { x: '-100%' }, // Start from outside the left
      { x: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )

    gsap.fromTo(
      '.sixthImage',
      { y: '-100%' }, // Start from outside the left
      { y: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )

    gsap.fromTo(
      '.seventhImage',
      { y: '-100%' }, // Start from outside the left
      { y: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )

    gsap.fromTo(
      '.eightImage',
      { x: '100%' }, // Start from outside the left
      { x: '0%', duration: 1, ease: 'power2.out' }, // Animate to original position
    )
  }, [activeTab])

  return (
    <div className="lg:h-[516px] h-[260px] flex gap-4 relative lg:mx-20 lg:rounded-3xl overflow-hidden bg-[#373535]">
      <div className="flex-[1.5] h-full grid grid-cols-2 grid-rows-[7fr_10fr] gap-4 relative">
        {/* Image 1 */}
        <div className="relative col-span-2 row-span-1 rounded-br-lg overflow-hidden bg-[#1E1F23]">
          <Image src="/image1.webp" alt="Image 1" fill className="firstImage object-cover" />
        </div>

        {/* Image 2 */}
        <div className="relative col-span-1 row-span-1 rounded-tr-lg overflow-hidden bg-[#1E1F23]">
          <Image src="/image2.webp" alt="Image 2" fill className="secondImage object-cover" />
        </div>

        {/* Image 3 */}
        <div className="relative col-span-1 row-span-1 rounded-t-lg overflow-hidden bg-[#1E1F23]">
          <Image src="/image3.webp" alt="Image 3" fill className="thirdImage object-cover" />
        </div>
      </div>
      <div className="flex-[1.5] h-full grid grid-cols-2 grid-rows-[10fr_7fr] gap-4 relative">
        {/* Image 1 */}
        <div className="relative col-span-1 row-span-1 rounded-b-lg overflow-hidden bg-[#1E1F23]">
          <Image src="/image3.webp" alt="Image 1" fill className="fourthImage object-cover" />
        </div>

        {/* Image 2 */}
        <div className="relative col-span-1 row-span-1 rounded-b-lg overflow-hidden bg-[#1E1F23]">
          <Image src="/image2.webp" alt="Image 2" fill className="fifthImage object-cover" />
        </div>

        {/* Image 3 */}
        <div className="relative col-span-2 row-span-1 rounded-t-lg overflow-hidden bg-[#1E1F23]">
          <Image src="/image1.webp" alt="Image 3" fill className="sixthImage object-cover" />
        </div>
      </div>
      <div className="hidden flex-1 h-full lg:grid grid-cols-1 grid-rows-2 gap-4 relative">
        {/* Image 1 */}
        <div className="relative col-span-1 row-span-1 rounded-bl-lg overflow-hidden bg-[#1E1F23]">
          <Image src="/image2.webp" alt="Image 1" fill className="seventhImage object-cover" />
        </div>

        {/* Image 2 */}
        <div className="relative col-span-1 row-span-1 rounded-tl-lg overflow-hidden bg-[#1E1F23]">
          <Image src="/image3.webp" alt="Image 2" fill className="eightImage object-cover" />
        </div>
      </div>
      <div className="bg-all-packages-images-gradient z-10 absolute w-full h-full top-0 bottom-0 left-0 right-0"></div>
      <Suspense fallback={<div>Loading...</div>}>
        <PackagesTab activeTab={activeTab} />
      </Suspense>
      <div className="absolute lg:left-28 left-4 top-32 z-10 lg:w-[512px]">
        <h2 className="text-white text-xl mb-4 capitalize">{activeTab}</h2>
        <p className="text-white lg:text-xl text-xs">
          Discover the beauty of India with our curated travel packages, covering breathtaking
          destinations from the Himalayas to the beaches of Goa.
        </p>
      </div>
    </div>
  )
}
