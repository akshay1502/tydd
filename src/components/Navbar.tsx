import Link from 'next/link'
import { Button } from './ui/button'
import IconLogo from '@/assets/icons/logo'
import IconHamburger from '@/assets/icons/hamburger'

export default function Navbar() {
  return (
    <nav className="px-4 py-2 lg:px-20 lg:py-1 flex justify-between items-center shadow-[0px_2px_10px_4px_#00000014] lg:shadow-none">
      <Link href="/">
        <IconLogo />
      </Link>
      <ul className="hidden lg:flex gap-12 items-center">
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
      <button className="block lg:hidden">
        <IconHamburger />
      </button>
    </nav>
  )
}
