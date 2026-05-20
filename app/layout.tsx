import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/motion/ScrollProgress'
import FloatingWhatsApp from '@/components/motion/FloatingWhatsApp'
import { getDictionary } from '@/i18n'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const { site } = getDictionary().metadata

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.openGraph.title,
    description: site.openGraph.description,
    url: site.openGraph.url,
    siteName: site.openGraph.siteName,
    locale: site.openGraph.locale,
    type: site.openGraph.type as 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang={site.htmlLang}
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
