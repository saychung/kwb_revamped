import type { Metadata } from 'next'
import { Inter} from 'next/font/google'
import { Montserrat } from 'next/font/google';
import './globals.css'
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin']})



export const metadata: Metadata = {
  title: "Khandu Wangchuk Bhutia Portfolio" ,
  description: 'Portfolio website of Shri Khandu Wangchuk Bhutia, Padmashree 2022, Thangka Master Artist',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.className} !scroll-smooth bg-[url(/nnnoise.svg)]`}>
      <body>{children}<Analytics /></body>
    </html>
  )
}
