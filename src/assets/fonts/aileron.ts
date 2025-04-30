import localFont from 'next/font/local'

export const aileron = localFont({
  src: [
    {
      path: './Aileron-Thin.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Aileron-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Aileron-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Aileron-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Aileron-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-aileron',
})
