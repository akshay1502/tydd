import IconFeatuer from '@/assets/icons/feature'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const Pill = ({ text }: { text: string }) => {
  return <button className="text-sm py-1 px-3 rounded-full bg-blue text-white">{text}</button>
}

export default function LastMinuteDeal() {
  return (
    <Link
      href="/"
      className="flex flex-col w-[300px] p-2 border border-offWhite rounded-2xl bg-last-minute-card-gradient"
    >
      <div className="relative rounded-lg overflow-hidden shadow-packages">
        <div className="w-[284px] h-52">
          <Image src="/destination.jpg" alt="image" fill className="object-cover" />
        </div>
        <p className="rounded-br-lg py-1 px-2 text-white text-xs font-semibold absolute top-0 left-0 bg-last-minute-discount-gradient">
          20% OFF
        </p>
        <p className="absolute bottom-6 left-4 text-white font-semibold text-xl">Maldives</p>
      </div>
      <div className="flex flex-col gap-2 my-3">
        <p className="text-white">3 days & 4 Nights</p>
        <div className="text-white font-semibold flex items-center gap-2">
          <IconFeatuer />
          <p className="text-white text-sm">4 Star Hotel</p>
        </div>
        <div className="text-white font-semibold flex items-center gap-2">
          <p className="text-white font-semibold">₹1,20,000 per person</p>
          <p className="text-white text-xs line-through">₹1,00,000 </p>
        </div>
      </div>
      <Button asChild>
        <Link href="/">Explore</Link>
      </Button>
    </Link>
  )
}
