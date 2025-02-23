import { HighlightPill } from '@/components/pill'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import IconLocation from '@/assets/icons/location'
import Link from 'next/link'
import IconCalendar from '@/assets/icons/calendar'
import { CollectionSlug } from 'payload'
import { getDetailPage } from '@/payload'

type DetailPageProps = {
  params: {
    slug: CollectionSlug
    id: string
  }
}
export default async function DetailPage({ params }: DetailPageProps) {
  const { slug, id } = await params

  const data = await getDetailPage(slug, id)
  console.log(data)

  return (
    <div className="px-20 flex flex-col gap-28">
      <div>
        <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold mb-8">Maldives</h2>

        {/* Image section */}
        <div className="grid grid-cols-4 grid-rows-[250px_250px] gap-6 relative">
          {/* Image 1 */}
          <div className="relative col-span-2 row-span-2">
            <Image src="/image1.png" alt="Image 1" fill className="object-cover rounded-xl" />
          </div>

          {/* Image 2 */}
          <div className="relative col-span-2 row-span-1">
            <Image src="/image1.png" alt="Image 2" fill className="object-cover rounded-xl" />
          </div>

          {/* Image 3 */}
          <div className="relative col-span-1 row-span-1">
            <Image src="/image1.png" alt="Image 3" fill className="object-cover rounded-xl" />
          </div>

          {/* Image 4 */}
          <div className="relative col-span-1 row-span-1">
            <Image src="/image1.png" alt="Image 4" fill className="object-cover rounded-xl" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        <div>
          <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold">Overview</h2>
          <p className="text-xl text-black mt-8">
            Embark on an unforgettable 4-night, 5-day journey to the Maldives, where pristine
            beaches and crystal-clear waters await. Stay in luxurious overwater villas, dive into
            thrilling water sports, and explore vibrant coral reefs. Indulge in world-class cuisine,
            relax with rejuvenating spa treatments, and immerse yourself in Maldivian culture with
            local island tours. Whether it’s a sunset cruise or a private sandbank picnic, every
            moment is designed for the perfect mix of relaxation and adventure in this tropical
            paradise.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold">Highlights</h2>
          <div className="flex gap-6 flex-wrap">
            <HighlightPill text="Beach House" />
            <HighlightPill text="Beach House" />
            <HighlightPill text="Beach House" />
          </div>
          <ul className="flex flex-col gap-4 list-disc list-inside">
            {[...Array(4)].map((_, index) => (
              <li key={index} className="text-darkBlue text-lg">
                Experience the thrill of a speedboat to the stunning Phi Phi Islands
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold mb-10">Day-Wise</h2>
          <Accordion type="single" collapsible className="w-full">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex w-full">
                <IconLocation />
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>
                    <p>
                      <b className="mr-2">Day 1: </b>Arrival and Resort Exploration
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-4">
                      {[...Array(3)].map((_, index) => (
                        <div key={index}>
                          <p className="text-darkBlue font-semibold text-xl mb-3">Arrival</p>
                          <p className="text-black">
                            Spend the day exploring the resort and its amenities. Enjoy the
                            picturesque surroundings.
                          </p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>

      <div>
        <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold mb-10">Accommodations</h2>
        <div className="flex justify-between flex-wrap">
          {[...Array(3)].map((_, index) => (
            <Link key={index} href="/" className="border border-offWhite rounded-xl">
              <div className="w-[412px] h-[232px] rounded-lg overflow-hidden relative">
                <Image src="/destination.jpg" alt="image" fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-col gap-2">
                  <p className="text-black font-bold text-2xl">Adaaran Club Rannalhi</p>
                  <p className="text-black text-xl">Maldives</p>
                </div>
                <div className="flex items-center gap-2">
                  <IconCalendar />
                  <p className="text-black text-sm">Super Deluxe Room</p>
                </div>
                <div className="flex items-center gap-2">
                  <IconCalendar />
                  <p className="text-black text-sm">Super Deluxe Room</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
