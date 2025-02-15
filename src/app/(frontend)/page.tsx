import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import config from '@/payload.config'
import './styles.css'
import Packages from '@/components/cards/package'
import SwiperPackages from '@/components/Swiper/popularPackages'
import FixedDeparture from '@/components/cards/fixedDeparture'
import SwiperPopularPackages from '@/components/Swiper/popularPackages'
import SwiperFixedPackages from '@/components/Swiper/fixedPackages'
import SwiperInternationalPackages from '@/components/Swiper/internationalPackages'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div>
      <SwiperPopularPackages title="Popular Packages">
        <Packages />
      </SwiperPopularPackages>
      <SwiperFixedPackages title="Fixed Departures">
        <FixedDeparture />
      </SwiperFixedPackages>
      <SwiperInternationalPackages title="International Budget-Friendly Packages">
        <Packages />
      </SwiperInternationalPackages>
    </div>
  )
}
