import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PureEstCare - Smart Doorbells with Camera | Advanced Home Security',
  description: 'Premium smart doorbells with 4K HDR camera, AI person detection, and two-way audio. Protect your home with cutting-edge security technology.',
  keywords: 'smart doorbell, video doorbell, home security, doorbell camera, wireless doorbell, AI detection',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: '#0ea5e9',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
