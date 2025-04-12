import IconExperStar from '@/assets/icons/expertStar'
import Image from 'next/image'
import Services from './services'

const standings = [
  {
    id: 1,
    title: 'Personalisation',
    description:
      'Your journey, your way—every itinerary is crafted to match your unique preferences and desires.',
  },
  {
    id: 2,
    title: 'Trust',
    description:
      'Count on us for reliable service, seamless planning, and unforgettable travel experiences.',
  },
  {
    id: 3,
    title: 'Passion',
    description:
      'Our love for travel fuels our dedication to creating unforgettable journeys for every explorer.',
  },
  {
    id: 4,
    title: 'Excellence',
    description:
      'From start to finish, we aim for perfection, delivering top-notch service and memorable experiences.',
  },
]

const luxuries = [
  {
    id: 1,
    title: 'Affordable Luxury',
  },
  {
    id: 2,
    title: 'Custom Itineraries',
  },
  {
    id: 3,
    title: 'Seamless Planning',
  },
  {
    id: 4,
    title: 'Trusted Quality',
  },
]

export default function AboutPage() {
  return (
    <div className="lg:px-20 px-4 layout">
      <div className="w-full h-[508px] relative rounded-3xl overflow-hidden">
        <Image src="/contact.webp" alt="image" fill className="object-cover" />
        <div className="absolute top-1/2 -translate-y-1/2 lg:left-24 left-4 right-4 lg:right-0 lg:w-[848px]">
          <h2 className="text-white  mb-5">About us</h2>
          <p className="text-xl text-white">
            At Travel Your Dream Destination (TYDD), we turn your travel dreams into reality with
            affordable yet luxurious experiences. Based in Mumbai, we specialize in personalized
            national and international trips crafted to suit your preferences. Our passion lies in
            creating unique journeys while ensuring hassle-free planning. Let us help you explore
            the world, one unforgettable adventure at a time.
          </p>
        </div>
      </div>
      <div className="flex lg:gap-24 gap-6 lg:flex-row flex-col">
        <div>
          <h2 className="text-black">Meet the founder</h2>
          <p className="text-3xl text-black font-semibold lg:mt-8 lg:mb-12 my-4">Eshant</p>
          <p className="lg:text-2xl text-base text-black">
            Eshant, the visionary founder of Travel Your Dream Destination (TYDD), is a passionate
            traveler with a mission to make dream vacations accessible to all. With years of
            experience in curating personalized travel experiences, he brings expertise and a deep
            understanding of what makes a journey truly memorable. Based in Mumbai, Eshant founded
            TYDD to blend affordability with luxury, ensuring every traveler enjoys a unique and
            seamless experience. His commitment to quality and customer satisfaction drives the
            agency&apos;s success. Eshant believes in turning travel dreams into lifelong memories
            for every client.
          </p>
        </div>
        <div className="lg:w-[508px] lg:h-[508px] w-full aspect-square relative rounded-2xl overflow-hidden shrink-0 self-center">
          <Image src="/contact.webp" alt="image" fill className="object-cover" />
        </div>
      </div>

      <Services />

      <div>
        <h2 className="text-darkBlue">Why TYDD</h2>
        <div className="lg:mt-12 mt-6 flex gap-6 lg:flex-row flex-col">
          {standings.map((item) => (
            <div
              key={item?.id}
              className="lg:p-6 p-4 flex lg:gap-6 gap-4 bg-skin flex-col shadow-about rounded-xl"
            >
              <IconExperStar />
              <h4 className="text-black">{item?.title}</h4>
              <p className="text-black text-xl">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-darkBlue ">Why TYDD</h2>
        <div className="lg:mt-14 mt-8 flex lg:gap-32 gap-6 lg:flex-row flex-col">
          <div className="flex flex-col lg:gap-14 gap-6">
            <p className="lg:text-xl text-sm">
              At TYDD, we go beyond ordinary travel experiences to create extraordinary memories.
              Our dedication to personalized service and seamless journeys ensures your trip is
              unforgettable. With expert planning and attention to detail, every aspect of your
              travel is in safe hands. Let us turn your dream vacation into a reality, stress-free
              and memorable.
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-y-10 gap-y-4 gap-x-16">
              {luxuries.map((item) => (
                <div key={item?.id} className="lg:py-2 flex items-center lg:gap-6 gap-2">
                  <IconExperStar />
                  <h4 className="text-black">{item?.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-[412px] h-[468px] w-full relative shrink-0">
            <Image src="/whytydd.webp" alt="image" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
