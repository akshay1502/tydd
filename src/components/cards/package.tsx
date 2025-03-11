import { Package } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function Packages({ data }: { data: Package }) {
  return (
    <Link
      href={`/package/packages/${data?.destination?.replace(/\s+/g, '-')}`}
      className="group flex flex-col gap-2 w-48"
    >
      <div className="relative rounded-lg overflow-hidden shadow-packages">
        <div className="w-48 h-48">
          <Image
            src={typeof data.image === 'object' && data.image?.url ? data.image.url : ''}
            alt={typeof data.image === 'object' && data.image?.alt ? data.image.alt : ''}
            fill
            className="object-cover group-hover:scale-110 ease-linear duration-300"
            sizes="(min-width: 1280px) 20vw"
          />
        </div>
        <p className="absolute bottom-3 left-3 text-white font-semibold text-xl">
          {data?.destination}
        </p>
      </div>
      <p className="text-black">{data?.package}</p>
      <p className="text-black font-semibold">₹{data?.cost?.toLocaleString('en-IN')} per person</p>
    </Link>
  )
}
