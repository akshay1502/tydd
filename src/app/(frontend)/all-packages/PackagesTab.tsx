'use client'
import { useRouter, useSearchParams } from 'next/navigation'

export default function PackagesTab() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeTab = searchParams.get('type') || 'domestic'

  const tabs = [
    {
      value: 'domestic',
      key: 'Domestic',
    },
    {
      value: 'international',
      key: 'International',
    },
    {
      value: 'cruise',
      key: 'Cruise',
    },
  ]

  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 rounded-lg py-3 px-6 flex gap-10 z-10 bg-all-packages-buttons backdrop-blur-[50px]">
      {tabs?.map((tab) => (
        <button
          key={tab?.value}
          className={`font-semibold text-xl ${tab?.value == activeTab ? 'text-blue pb-0.5 border-b border-blue' : 'text-white'}`}
          onClick={() => router.push(`/all-packages?type=${tab.value}`, { scroll: false })}
        >
          {tab?.key}
        </button>
      ))}
    </div>
  )
}
