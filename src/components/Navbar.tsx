'use client'
import Link from 'next/link'
import { Button } from './ui/button'
import IconLogo from '@/assets/icons/logo'
import IconHamburger from '@/assets/icons/hamburger'
import { useState } from 'react'
import IconCross from '@/assets/icons/cross'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className="hidden px-20 py-1 lg:flex justify-between items-center">
        <Link href="/" aria-label="Home">
          <IconLogo />
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
                <Link
                  href="/all-packages?type=international"
                  className="block text-white px-4 py-2"
                >
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
      <nav className="bg-white z-50 lg:hidden">
        <div
          className={`px-4 py-2 flex justify-between items-center shadow-[0px_2px_10px_4px_#00000014] z-[60] ${
            isOpen ? 'fixed top-0 w-full bg-white' : 'relative'
          }`}
        >
          <Link href="/">
            <IconLogo />
          </Link>
          <button className="block" onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <IconCross /> : <IconHamburger />}
          </button>
        </div>
        <ul
          className={`flex flex-col gap-4 p-4 w-full fixed left-0 h-screen z-50 transition-transform duration-300 bg-white ${
            isOpen ? 'translate-y-0 top-14' : '-translate-y-full top-0'
          }`}
          onClick={(e) => {
            setIsOpen(false)
          }}
        >
          <li>
            <Link href="/" className="text-black font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/all-packages?type=domestic" className="text-black font-semibold">
              Packages
            </Link>
            {/* Below ui was not given in figma */}
            <ul className="flex flex-col gap-4 p-4 pb-0">
              <li>
                <Link href="/all-packages?type=domestic">- Domestic</Link>
              </li>
              <li>
                <Link href="/all-packages?type=international">- International</Link>
              </li>
              <li>
                <Link href="/all-packages?type=cruise">- Cruise</Link>
              </li>
            </ul>
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
    </>
  )
}
