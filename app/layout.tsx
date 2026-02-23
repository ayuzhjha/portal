import type { Metadata } from 'next'
import { Bangers, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bangers = Bangers({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bangers',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Synchronize Portal',
  description: 'Join Synchronize 4.0, the premier techfest featuring hackathons, robotics competitions, esports tournaments, and cultural events. 3 days of innovation, competition, and celebration.',
  keywords: 'techfest, hackathon, robotics, esports, innovation, competitions',
  openGraph: {
    title: 'Synchronize 4.0 - The Ultimate Techfest',
    description: 'Join 3 days of innovation, competition, and celebration',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${bangers.variable} ${oswald.variable}`}>
      <body className={`${oswald.className} antialiased overflow-x-hidden scroll-smooth`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
