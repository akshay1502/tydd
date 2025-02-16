import Image from 'next/image'
import IconEmail from '@/assets/icons/email'
import IconCall from '@/assets/icons/call'
import Link from 'next/link'
import ContactUsForm from '@/components/contactUsForm'

export default function ContactUsPage() {
  return (
    <div>
      <div className="w-full h-96 relative">
        <Image src="/contact.jpg" alt="image" fill className="object-cover" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[1062px]">
          <h2 className="text-white text-[40px] leading-[48px] font-bold mb-2">Get in touch</h2>
          <p className="text-lg text-white">Say Hello to New Adventures</p>
        </div>
      </div>
      <div className="rounded-2xl p-6 w-[1062px] flex gap-10 shadow-[0px_4px_13px_4px_rgba(0,0,0,0.15)] mx-auto -translate-y-20 bg-white">
        <div className="bg-[#6CC1E8] p-8 rounded-lg flex-1">
          <h3 className="text-white text-4xl font-semibold mb-10">Contact Information</h3>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-2xl font-bold">Address</h4>
              <p className="text-xl text-white">
                Vihang Valley phase 3, Thane West, Maharashtra (400615)
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-2xl font-bold">Contact</h4>
              <div className="flex items-center gap-2">
                <IconEmail />
                <p className="text-xl text-white">- info@tydd.in</p>
              </div>
              <div className="flex items-center gap-2">
                <IconCall />
                <p className="text-xl text-white">- +91 789123456</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-2xl font-bold">Find us on</h4>
              <div className="flex gap-2">
                {[...Array(4)].map((_, index) => (
                  <Link key={index} href="/">
                    <svg
                      width="40"
                      height="41"
                      viewBox="0 0 40 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M39.5 20.04C39.5 30.8095 30.7696 39.54 20 39.54C9.23045 39.54 0.5 30.8095 0.5 20.04C0.5 9.27043 9.23045 0.539978 20 0.539978C30.7696 0.539978 39.5 9.27043 39.5 20.04Z"
                        stroke="white"
                      />
                      <path
                        d="M27.7778 10.04C28.3671 10.04 28.9324 10.2741 29.3491 10.6909C29.7659 11.1076 30 11.6728 30 12.2622V27.8178C30 28.4071 29.7659 28.9724 29.3491 29.3891C28.9324 29.8059 28.3671 30.04 27.7778 30.04H12.2222C11.6329 30.04 11.0676 29.8059 10.6509 29.3891C10.2341 28.9724 10 28.4071 10 27.8178V12.2622C10 11.6728 10.2341 11.1076 10.6509 10.6909C11.0676 10.2741 11.6329 10.04 12.2222 10.04H27.7778ZM27.2222 27.2622V21.3733C27.2222 20.4126 26.8406 19.4913 26.1613 18.812C25.482 18.1327 24.5607 17.7511 23.6 17.7511C22.6556 17.7511 21.5556 18.3289 21.0222 19.1955V17.9622H17.9222V27.2622H21.0222V21.7844C21.0222 20.9289 21.7111 20.2289 22.5667 20.2289C22.9792 20.2289 23.3749 20.3928 23.6666 20.6845C23.9583 20.9762 24.1222 21.3719 24.1222 21.7844V27.2622H27.2222ZM14.3111 16.2178C14.8062 16.2178 15.281 16.0211 15.631 15.671C15.9811 15.321 16.1778 14.8462 16.1778 14.3511C16.1778 13.3178 15.3444 12.4733 14.3111 12.4733C13.8131 12.4733 13.3355 12.6711 12.9833 13.0233C12.6312 13.3755 12.4333 13.8531 12.4333 14.3511C12.4333 15.3844 13.2778 16.2178 14.3111 16.2178ZM15.8556 27.2622V17.9622H12.7778V27.2622H15.8556Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ContactUsForm />
      </div>
    </div>
  )
}
