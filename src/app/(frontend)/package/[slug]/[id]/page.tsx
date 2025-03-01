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
import { CollectionSlug } from 'payload'
import { getDetailPage } from '@/payload'
import IconFeature from '@/assets/icons/feature'
import IconBreakFast from '@/assets/icons/breakfast'
import DetailPageForm from '@/components/detailPageForm'
import LightBoxWrapper from '@/components/Lightbox'

type DetailPageProps = Promise<{
  slug: CollectionSlug
  id: string
}>

export default async function DetailPage({ params }: { params: DetailPageProps }) {
  const { slug, id } = await params

  const data = await getDetailPage(slug, id)

  const slides = data?.gallery?.map((image) => ({
    src: image?.url,
    alt: image?.alt,
  }))

  return (
    <div className="px-20 flex flex-col gap-28 pt-10 pb-20">
      <div>
        <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold mb-8">
          {data?.destination}
        </h2>

        {/* Image section */}
        <div className="grid grid-cols-4 grid-rows-[250px_250px] gap-6 relative">
          {/* Image 1 */}
          <div className="relative col-span-2 row-span-2">
            <Image
              src={data?.gallery[0]?.url}
              alt={data?.gallery[0]?.alt}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Image 2 */}
          <div className="relative col-span-2 row-span-1">
            <Image
              src={data?.gallery[1]?.url}
              alt={data?.gallery[1]?.alt}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Image 3 */}
          <div className="relative col-span-1 row-span-1">
            <Image
              src={data?.gallery[2]?.url}
              alt={data?.gallery[2]?.alt}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Image 4 */}
          <div className="relative col-span-1 row-span-1">
            <Image
              src={data?.gallery[3]?.url}
              alt={data?.gallery[3]?.alt}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <LightBoxWrapper slides={slides} />
        </div>
      </div>

      <div className="flex gap-24">
        <div className="flex flex-col gap-16">
          <div>
            <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold">Overview</h2>
            <p className="text-xl text-black mt-8">{data?.overview}</p>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold">Highlights</h2>
            <div className="flex gap-6 flex-wrap">
              {data?.highlights?.chips?.map((chip) => (
                <HighlightPill key={chip?.id} text={chip?.chip} />
              ))}
            </div>
            <ul className="flex flex-col gap-4 list-disc list-inside">
              {data?.highlights?.pointers?.map((pointer) => (
                <li key={pointer?.id} className="text-darkBlue text-lg">
                  {pointer?.pointer}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold mb-10">Day-Wise</h2>
            <Accordion type="single" collapsible className="w-full">
              {data?.day_breakup?.days?.map((day, index) => (
                <div key={day?.id} className="flex w-full">
                  <IconLocation />
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>
                      <p>
                        <b className="mr-2">Day {index + 1}: </b>
                        {day?.title}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-4">
                        {day?.break_up?.map((breakup) => (
                          <div key={breakup?.id}>
                            <p className="text-darkBlue font-semibold text-xl mb-3">
                              {breakup?.title}
                            </p>
                            <p className="text-black">{breakup?.subtitle}</p>
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
        <DetailPageForm
          destination={data?.destination}
          discount={data?.discount}
          cost={data?.cost}
          type={slug}
        />
      </div>

      <div>
        <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold mb-10">Accommodations</h2>
        <div className="flex gap-6 flex-wrap">
          {data?.accomodations?.location?.map((accomodation) => (
            <Link
              key={accomodation?.id}
              href={accomodation?.link as string}
              className="border border-offWhite rounded-xl"
            >
              <div className="w-[412px] h-[232px] rounded-lg overflow-hidden relative">
                {/* <Image src="/destination.jpg" alt="image" fill className="object-cover" /> */}
                <iframe
                  src={accomodation?.link as string}
                  style={{ width: '100%', height: '100%', border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-col gap-2">
                  <p className="text-black font-bold text-2xl">{accomodation?.name}</p>
                  <p className="text-black text-xl">Maldives</p>
                </div>
                <div className="flex items-center gap-2">
                  <IconFeature color="#1A1A1A" />
                  <p className="text-black text-sm">{accomodation?.type}</p>
                </div>
                <div className="flex items-center gap-2">
                  <IconBreakFast />
                  <p className="text-black text-sm">{accomodation?.whats_included}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
