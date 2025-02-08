import IconFaceBook from '@/assets/icons/facebook'
import IconInstagram from '@/assets/icons/instagram'
import IconLinkedIn from '@/assets/icons/linkedin'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative px-20 pt-12">
      <Image src="/footerBackground.jpg" alt="footer" fill className="object-cover -z-10" />
      <div className="flex justify-between">
        <div>
          <div>
            <Image src="/logo.png" alt="tydd" width={120} height={120} className="h-16 w-16" />
          </div>
          <div className="mt-8 flex gap-10">
            <IconFaceBook />
            <IconInstagram />
            <IconLinkedIn />
          </div>
        </div>
        <div>
          <h4 className="text-white">Destination</h4>
          <ul className="mt-4">
            <li>
              <Link href="/" className="py-2 text-offWhite">
                Maldives
              </Link>
            </li>
            <li>
              <Link href="/" className="py-2 text-offWhite">
                Turkey
              </Link>
            </li>
            <li>
              <Link href="/" className="py-2 text-offWhite">
                Vietnam
              </Link>
            </li>
            <li>
              <Link href="/" className="py-2 text-offWhite">
                Greece
              </Link>
            </li>
            <li>
              <Link href="/" className="py-2 text-offWhite">
                Dubai
              </Link>
            </li>
            <li>
              <Link href="/" className="py-2 text-offWhite">
                Switzerland
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white">General</h4>
          <ul className="mt-4">
            <li>
              <Link href="/" className="py-2 text-offWhite">
                National packages
              </Link>
            </li>
            <li>
              <Link href="/" className="py-2 text-offWhite">
                International packages
              </Link>
            </li>
            <li>
              <Link href="/" className="py-2 text-offWhite">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/" className="py-2 text-offWhite">
                About us
              </Link>
            </li>
            <li>
              <Link href="/" className="py-2 text-offWhite">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white">Reach us</h4>
          <ul className="mt-4">
            <li className="py-2 text-offWhite">Info@tydd.com</li>
            <li className="py-2 text-offWhite">Connect over Whatsapp</li>
            <li className="py-2 text-offWhite">+91-7891234560</li>
          </ul>
        </div>
      </div>
      <p className="py-4 text-center border-t border-offWhite mt-14 text-white">
        @2023 Travel Your Dream Destination. All rights reserved.
      </p>
    </footer>
  )
}
