import IconCalendar from '@/assets/icons/calendar'
import Image from 'next/image'
import Link from 'next/link'

const Pill = ({ text }: { text: string }) => {
  return <button className="text-sm py-1 px-3 rounded-full bg-blue text-white">{text}</button>
}

export default function FixedDeparture() {
  return (
    <Link href="/" className="flex flex-col w-[300px] border border-offWhite rounded-lg">
      <div className="relative rounded-lg overflow-hidden shadow-packages">
        <div className="w-[300] h-56">
          <Image src="/destination.jpg" alt="image" fill className="object-cover" />
        </div>
        <p className="absolute bottom-3 left-3 text-white font-semibold text-xl">Maldives</p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="flexCenter">
          <p className="text-black">3 days & 4 Nights</p>
          <Pill text="Group" />
        </div>
        <p className="text-black font-semibold">₹1,20,000 per person</p>
        <div className="text-black font-semibold flex items-center gap-1.5">
          <IconCalendar />
          <p className="text-black">Sat,11 Jan - Wed,15 Jan</p>
        </div>
      </div>
    </Link>
  )
}
