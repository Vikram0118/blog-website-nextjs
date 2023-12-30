import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blog - Vikram ',
  description: 'Blog website of Vikram Palani',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
