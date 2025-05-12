import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="lg:p-8 p-4">
      <h1 className="font-bold text-3xl mb-8">Welcome To TYDD cms</h1>
      <Link href="/admin" className="bg-black text-white py-2 px-4 rounded-sm">
        Go to Admin
      </Link>
    </div>
  )
}
