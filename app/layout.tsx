import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Blog - Vikram ',
  description: 'Blog website of Vikram Palani',
  other: {
    "color-scheme" : "only light"
  }
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
