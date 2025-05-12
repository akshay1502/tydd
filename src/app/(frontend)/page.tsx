import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <h1>Welcome To TYDD cms</h1>
      <Link href="/admin">Go to Admin</Link>
    </div>
  )
}
