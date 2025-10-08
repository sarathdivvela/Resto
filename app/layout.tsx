import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sri Manikyamba Restaurant - Taste the Tradition, Savor the Fusion',
  description: 'Experience authentic Indian cuisine and popular Chinese dishes at Sri Manikyamba Restaurant. Order online, make reservations, and discover our fusion of flavors.',
  keywords: 'restaurant, Indian food, Chinese food, fusion cuisine, Hyderabad, delivery, takeout',
  authors: [{ name: 'Sri Manikyamba Restaurant' }],
  openGraph: {
    title: 'Sri Manikyamba Restaurant',
    description: 'Taste the Tradition, Savor the Fusion',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
} 
