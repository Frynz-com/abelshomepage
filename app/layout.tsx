import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: 'Abels Immobilien | Premium-Makler in 7 deutschen Städten',
    template: '%s | Abels Immobilien'
  },
  description: 'Diskrete Vermittlung von Luxusimmobilien in Düsseldorf, München, Grünwald, Hamburg, Frankfurt, Essen und Stuttgart. Kostenfreie Bewertung in 72 Stunden.',
  keywords: ['Immobilienmakler', 'Premium Immobilien', 'Luxusimmobilien', 'Düsseldorf', 'München', 'Hamburg', 'Grünwald', 'Frankfurt', 'Essen', 'Stuttgart', 'Immobilienbewertung', 'Off-Market', 'Villen', 'Penthouse'],
  authors: [{ name: 'Abels Immobilien GmbH', url: 'https://abels-immobilien.de' }],
  creator: 'Abels Immobilien GmbH',
  publisher: 'Abels Immobilien GmbH',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien GmbH',
    title: 'Abels Immobilien | Premium-Makler in 7 deutschen Städten',
    description: 'Diskrete Vermittlung von Luxusimmobilien in Düsseldorf, München, Grünwald, Hamburg, Frankfurt, Essen und Stuttgart. Kostenfreie Bewertung in 72 Stunden.',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="bg-cream" data-scroll-behavior="smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
