import Image from 'next/image'
import Link from 'next/link'

export default function Packages() {
  return (
    <Link href="/" className="flex flex-col gap-2 w-48">
      <div className="relative rounded-lg overflow-hidden shadow-packages">
        <div className="w-48 h-48">
          <Image src="/destination.jpg" alt="image" fill className="object-cover" />
        </div>
        <p className="absolute bottom-3 left-3 text-white font-semibold text-xl">Maldives</p>
      </div>
      <p className="text-black">3 days & 4 Nights</p>
      <p className="text-black font-semibold">₹1,20,000 per person</p>
    </Link>
  )
}
