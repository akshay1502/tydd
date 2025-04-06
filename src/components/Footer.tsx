import IconFaceBook from '@/assets/icons/facebook'
import IconInstagram from '@/assets/icons/instagram'
import IconLinkedIn from '@/assets/icons/linkedin'
import IconLogo from '@/assets/icons/logo'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
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
        <div>
          <h4 className="text-white">Destination</h4>
          <ul className="mt-4">
            <li className="lg:py-2">
              <Link
                href="/package/packages/Maldives"
                className="text-lg font-semibold lg:font-normal lg:text-xl text-offWhite"
              >
                Maldives
              </Link>
            </li>
            <li className="pt-2 lg:py-2">
              <Link
                href="/package/packages/Mauritius"
                className="text-lg font-semibold lg:font-normal lg:text-xl text-offWhite"
              >
                Mauritius
              </Link>
            </li>
            <li className="pt-2 lg:py-2">
              <Link
                href="/package/packages/Sri-Lanka"
                className="text-lg font-semibold lg:font-normal lg:text-xl text-offWhite"
              >
                Sri Lanka
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white">General</h4>
          <ul className="mt-4">
            <li className="lg:py-2">
              <Link
                href="/all-packages?type=domestic"
                className="text-lg font-semibold lg:font-normal lg:text-xl text-offWhite"
              >
                Domestic packages
              </Link>
            </li>
            <li className="pt-2 lg:py-2">
              <Link
                href="/all-packages?type=international"
                className="text-lg font-semibold lg:font-normal lg:text-xl text-offWhite"
              >
                International packages
              </Link>
            </li>
            <li className="pt-2 lg:py-2">
              <Link
                href="/all-packages?type=cruise"
                className="text-lg font-semibold lg:font-normal lg:text-xl text-offWhite"
              >
                Cruise packages
              </Link>
            </li>
            <li className="pt-2 lg:py-2">
              <Link
                href="/about"
                className="text-lg font-semibold lg:font-normal lg:text-xl text-offWhite"
              >
                About us
              </Link>
            </li>
            <li className="pt-2 lg:py-2">
              <Link
                href="/contact-us"
                className="text-lg font-semibold lg:font-normal lg:text-xl text-offWhite"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white">Reach us</h4>
          <ul className="mt-4">
            <li className="lg:py-2 text-offWhite">Info@tydd.com</li>
            <li className="pt-2 lg:py-2 text-offWhite">Connect over Whatsapp</li>
            <li className="pt-2 lg:py-2 text-offWhite">+91-7891234560</li>
          </ul>
        </div>
      </div>
      <p className="text-xs lg:text-xl py-2 lg:py-4 text-center border-t border-offWhite mt-12 lg:mt-14 text-white">
        @2023 Travel Your Dream Destination. All rights reserved.
      </p>
    </footer>
  )
}
