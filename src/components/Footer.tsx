import IconFaceBook from '@/assets/icons/facebook'
import IconInstagram from '@/assets/icons/instagram'
import IconLinkedIn from '@/assets/icons/linkedin'
import IconLogo from '@/assets/icons/logo'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const footerData = [
    {
      header: 'Destination',
      links: [
        { name: 'Maldives', href: '/package/packages/Maldives' },
        { name: 'Mauritius', href: '/package/packages/Mauritius' },
        { name: 'Sri Lanka', href: '/package/packages/Sri-Lanka' },
      ],
    },
    {
      header: 'General',
      links: [
        { name: 'Domestic packages', href: '/all-packages?type=domestic' },
        { name: 'International packages', href: '/all-packages?type=international' },
        { name: 'Cruise packages', href: '/all-packages?type=cruise' },
        { name: 'About us', href: '/about' },
        { name: 'Contact us', href: '/contact-us' },
      ],
    },
    {
      header: 'Reach us',
      links: [
        { name: 'info@tydd.in', href: 'mailto:info@tydd.in' },
        { name: 'Connect over Whatsapp', href: 'https://wa.me/917891234560' },
        { name: '+91-7891234560', href: 'tel:+917891234560' },
      ],
    },
  ]
  return (
    <footer className="relative px-4 pt-10 lg:px-20 lg:pt-12">
      <Image src="/footerBackground.webp" alt="footer" fill className="object-cover -z-10" />
      <div className="flex justify-between flex-col lg:flex-row gap-8 lg:gap-0">
        <div>
          <Link href="/" aria-label="Home">
            <IconLogo />
          </Link>
          <div className="mt-4 lg:mt-8 flex gap-10">
            <IconFaceBook />
            <IconInstagram />
            <IconLinkedIn />
          </div>
        </div>
        {footerData.map((item, index) => (
          <div key={index} className="lg:py-2">
            <h4 className="text-white h4 font-bold">{item.header}</h4>
            <ul className="mt-4">
              {item.links.map((link, index) => (
                <li key={index} className="lg:py-2 py-0.5">
                  <Link href={link.href} className="b2reg text-offWhite">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-xs lg:text-xl py-2 lg:py-4 text-center border-t border-offWhite mt-12 lg:mt-14 text-white">
        @2023 Travel Your Dream Destination. All rights reserved.
      </p>
    </footer>
  )
}
