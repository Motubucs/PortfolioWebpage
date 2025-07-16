import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mustafa Tarig - Portfolio',
  description: 'Full Stack Developer & Creative Technologist',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
