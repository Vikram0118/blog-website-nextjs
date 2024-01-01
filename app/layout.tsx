import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Blog - Vikram ',
  description: 'Blog website of Vikram Palani',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300','400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
