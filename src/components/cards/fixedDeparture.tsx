import IconCalendar from '@/assets/icons/calendar'
import { FixedPackages } from '@/types/global'
import Image from 'next/image'
import Link from 'next/link'

const Pill = ({ text }: { text: string }) => {
  return <button className="text-sm py-1 px-3 rounded-full bg-blue text-white">{text}</button>
}

export default function FixedDeparture({ data }: { data: FixedPackages }) {
  return (
    <Link
      href={`/package/fixed-packages/${data?.id}`}
      className="flex flex-col w-[300px] border border-offWhite rounded-lg"
    >
      <div className="relative rounded-lg overflow-hidden shadow-packages">
        <div className="w-[300] h-56">
          <Image src={data?.image?.url} alt={data?.image?.alt} fill className="object-cover" />
        </div>
        <p className="absolute bottom-3 left-3 text-white font-semibold text-xl">
          {data?.destination}
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="flexCenter">
          <p className="text-black">{data?.package}</p>
          {/* <Pill text="Group" /> */}
        </div>
        <p className="text-black font-semibold">
          ₹{data?.cost?.toLocaleString('en-IN')} per person
        </p>
        <div className="text-black font-semibold flex items-center gap-1.5">
          <IconCalendar />
          <p className="text-black">
            {new Date(data?.start_date as string).toLocaleDateString('en-GB', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
            })}{' '}
            -{' '}
            {new Date(data?.end_date as string).toLocaleDateString('en-GB', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
            })}
          </p>
        </div>
      </div>
    </Link>
  )
}
