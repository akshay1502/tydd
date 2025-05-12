import './styles.css'

export const metadata = {
  description:
    'Explore the world with TYDD! Based in Mumbai, we offer personalized, affordable luxury trips—national & international. Travel made hassle-free.',
  title: 'Travel Your Dream Destination',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
