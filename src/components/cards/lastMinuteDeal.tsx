import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import IconFeature from '@/assets/icons/feature'
import { LastMinutePackages, PopularPackages } from '@/types/global'

export default function LastMinuteDeal({ data }: { data: LastMinutePackages }) {
  return (
    <Link
      href={`/package/last-minute-packages/${data?.id}`}
      className="flex flex-col w-[300px] p-2 border border-offWhite rounded-2xl bg-last-minute-card-gradient"
    >
      <div className="relative rounded-lg overflow-hidden shadow-packages">
        <div className="w-[284px] h-52">
          <Image src={data?.image?.url} alt={data?.image?.alt} fill className="object-cover" />
        </div>
        <p className="rounded-br-lg py-1 px-2 text-white text-xs font-semibold absolute top-0 left-0 bg-last-minute-discount-gradient">
          {data?.discount}% OFF
        </p>
        <p className="absolute bottom-6 left-4 text-white font-semibold text-xl">
          {data?.destination}
        </p>
      </div>
      <div className="flex flex-col gap-2 my-3">
        <p className="text-white">{data?.package}</p>
        {data?.features?.map((item) => {
          return (
            <div className="text-white font-semibold flex items-center gap-2" key={item?.id}>
              <IconFeature color="white" />
              <p className="text-white text-sm">{item?.feature}</p>
            </div>
          )
        })}
        <div className="text-white font-semibold flex items-center gap-2">
          <p className="text-white font-semibold">
            ₹{(data?.cost - data?.cost * (data?.discount / 100))?.toLocaleString('en-IN')} per
            person
          </p>
          <p className="text-white text-xs line-through">₹{data?.cost?.toLocaleString('en-IN')}</p>
        </div>
      </div>
      <Button asChild>
        <Link href="/">Explore</Link>
      </Button>
    </Link>
  )
}
