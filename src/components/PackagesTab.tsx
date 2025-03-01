'use client'
import { useState } from 'react'

export default function PackagesTab() {
  const [activeTab, setActiveTab] = useState('domestic')

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
          onClick={() => setActiveTab(tab?.value)}
        >
          {tab?.key}
        </button>
      ))}
    </div>
  )
}
