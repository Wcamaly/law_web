import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Romio & Asociados — Estudio Jurídico Mar del Plata',
  description:
    'Estudio jurídico en Mar del Plata especializado en derecho civil, salud, tránsito, divorcios y legal tech.',
  openGraph: {
    title: 'Romio & Asociados — Estudio Jurídico',
    description: 'Asesoramiento legal profesional en Mar del Plata.',
    url: 'https://romioasociados.com.ar',
    siteName: 'Romio & Asociados',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
