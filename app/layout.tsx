import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Synchronize 4.0 - The Ultimate Techfest',
  description: 'Join Synchronize 4.0, the premier techfest featuring hackathons, robotics competitions, esports tournaments, and cultural events. 3 days of innovation, competition, and celebration.',
  keywords: 'techfest, hackathon, robotics, esports, innovation, competitions',
  generator: 'v0.app',
  openGraph: {
    title: 'Synchronize 4.0 - The Ultimate Techfest',
    description: 'Join 3 days of innovation, competition, and celebration',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased overflow-x-hidden scroll-smooth">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
