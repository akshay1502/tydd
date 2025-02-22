import IconExperStar from '@/assets/icons/whytddstart'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="px-20 pt-10 flex flex-col gap-28">
      <div className="w-full h-[508px] relative rounded-3xl overflow-hidden">
        <Image src="/contact.jpg" alt="image" fill className="object-cover" />
        <div className="absolute top-1/2 -translate-y-1/2 left-24 w-[848px]">
          <h2 className="text-white text-[40px] leading-[48px] font-bold mb-5">About us</h2>
          <p className="text-xl text-white">
            At Travel Your Dream Destination (TYDD), we turn your travel dreams into reality with
            affordable yet luxurious experiences. Based in Mumbai, we specialize in personalized
            national and international trips crafted to suit your preferences. Our passion lies in
            creating unique journeys while ensuring hassle-free planning. Let us help you explore
            the world, one unforgettable adventure at a time.
          </p>
        </div>
      </div>
      <div className="flex gap-24">
        <div>
          <h2 className="text-black text-[40px] leading-[48px] font-bold">Meet the founder</h2>
          <p className="text-3xl text-black font-semibold mt-8 mb-12">Eshant</p>
          <p className="text-2xl text-black">
            Eshant, the visionary founder of Travel Your Dream Destination (TYDD), is a passionate
            traveler with a mission to make dream vacations accessible to all. With years of
            experience in curating personalized travel experiences, he brings expertise and a deep
            understanding of what makes a journey truly memorable. Based in Mumbai, Eshant founded
            TYDD to blend affordability with luxury, ensuring every traveler enjoys a unique and
            seamless experience. His commitment to quality and customer satisfaction drives the
            agency's success. Eshant believes in turning travel dreams into lifelong memories for
            every client.
          </p>
        </div>
        <div className="w-[508px] h-[508px] relative rounded-2xl overflow-hidden shrink-0 self-center">
          <Image src="/contact.jpg" alt="image" fill className="object-cover" />
        </div>
      </div>

      <div className="flex gap-24">
        <div className="w-[508px] h-[508px] relative rounded-2xl overflow-hidden shrink-0 self-center">
          <Image src="/contact.jpg" alt="image" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-black text-[40px] leading-[48px] font-bold">Meet the founder</h2>
          <p className="text-3xl text-black font-semibold mt-8 mb-12">Eshant</p>
          <p className="text-2xl text-black">
            Eshant, the visionary founder of Travel Your Dream Destination (TYDD), is a passionate
            traveler with a mission to make dream vacations accessible to all. With years of
            experience in curating personalized travel experiences, he brings expertise and a deep
            understanding of what makes a journey truly memorable. Based in Mumbai, Eshant founded
            TYDD to blend affordability with luxury, ensuring every traveler enjoys a unique and
            seamless experience. His commitment to quality and customer satisfaction drives the
            agency's success. Eshant believes in turning travel dreams into lifelong memories for
            every client.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold">Why TYDD</h2>
        <div className="mt-12 flex gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="p-6 flex gap-6 bg-skin flex-col shadow-about rounded-xl">
              <IconExperStar />
              <h4 className="text-black font-bold text-2xl">Affordable Luxury</h4>
              <p className="text-black text-xl">
                Your journey, your way—every itinerary is crafted to match your unique preferences
                and desires.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-darkBlue text-[40px] leading-[48px] font-bold">Why TYDD</h2>
        <div className="mt-14 flex gap-32">
          <div className="flex flex-col gap-14">
            <p className="text-xl">
              At TYDD, we go beyond ordinary travel experiences to create extraordinary memories.
              Our dedication to personalized service and seamless journeys ensures your trip is
              unforgettable. With expert planning and attention to detail, every aspect of your
              travel is in safe hands. Let us turn your dream vacation into a reality, stress-free
              and memorable.
            </p>
            <div className="grid grid-cols-2 gap-y-10 gap-x-16">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="py-2 flex items-center gap-6">
                  <IconExperStar />
                  <h4 className="text-black font-bold text-2xl">Affordable Luxury</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[412px] h-[468px] relative shrink-0">
            <Image src="/whytydd.png" alt="image" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
