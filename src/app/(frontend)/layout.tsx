import React from 'react'
import './styles.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  description:
    'Explore the world with TYDD! Based in Mumbai, we offer personalized, affordable luxury trips—national & international. Travel made hassle-free.',
  title: 'Travel Your Dream Destination',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
