import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function Navbar() {
  return (
    <nav className="px-20">
      <div className="">
        {/* <Image src={Logo} alt="tydd" width={64} height={64} className="h-16 w-16" /> */}
        <Image src="/logo.png" alt="tydd" width={64} height={64} className="h-16 w-16" />
        {/* <IconLogo /> */}
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
          <Button />
        </li>
      </ul>
    </nav>
  )
}
