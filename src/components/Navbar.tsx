import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Navbar() {
  return (
    <nav className="px-20 flex justify-between items-center">
      <div>
        <Image src="/logo.png" alt="tydd" width={64} height={64} className="h-16 w-16" />
      </div>
      <ul className="flex gap-12 items-center">
        <li>
          <Link href="/" className="text-black font-semibold">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="text-black font-semibold">
            Packages
          </Link>
        </li>
        <li>
          <Link href="/" className="text-black font-semibold">
            About Us
          </Link>
        </li>
        <li>
          <Button asChild>
            <Link href="/">Contact Us</Link>
          </Button>
        </li>
      </ul>
    </nav>
  )
}
