import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'
import { Navbar } from '@/components/Navbar'

const monserrat = Montserrat({
  variable: '--font-monserrat',
  weight: '300',  
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Mi primera app con nexjs',
  description: 'Esta mi primera creacion con nexjs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${monserrat.className}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
