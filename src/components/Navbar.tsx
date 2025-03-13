import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Navbar() {
  return (
    <nav className="px-20 py-1 flex justify-between items-center">
      <Link href="/">
        <Image src="/logo.png" alt="tydd" width={172} height={56} className="h-14 w-44" />
      </Link>
      <ul className="flex gap-12 items-center">
        <li>
          <Link href="/" className="text-black font-semibold">
            Home
          </Link>
        </li>
        <li className="group relative">
          <Link href="/all-packages?type=domestic" className="text-black font-semibold">
            Packages
          </Link>
          {/* Below ui was not given in figma */}
          <div className="absolute pt-3 z-10 hidden group-hover:block">
            <div className="bg-[#737373cc] rounded-lg">
              <Link href="/all-packages?type=domestic" className="block text-white px-4 py-2">
                Domestic
              </Link>
              <Link href="/all-packages?type=international" className="block text-white px-4 py-2">
                International
              </Link>
              <Link href="/all-packages?type=cruise" className="block text-white px-4 py-2">
                Cruise
              </Link>
            </div>
          </div>
        </li>
        <li>
          <Link href="/about" className="text-black font-semibold">
            About Us
          </Link>
        </li>
        <li>
          <Button asChild>
            <Link href="/contact-us">Contact Us</Link>
          </Button>
        </li>
      </ul>
    </nav>
  )
}
