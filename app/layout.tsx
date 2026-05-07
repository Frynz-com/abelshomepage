import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieBanner } from '@/components/cookie-banner'
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
  metadataBase: new URL('https://abels-immobilien.de'),
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
    url: 'https://abels-immobilien.de',
    title: 'Abels Immobilien | Premium-Makler in 7 deutschen Städten',
    description: 'Diskrete Vermittlung von Luxusimmobilien in Düsseldorf, München, Grünwald, Hamburg, Frankfurt, Essen und Stuttgart. Kostenfreie Bewertung in 72 Stunden.',
    images: [{ url: '/images/hero-luxury.jpg', width: 1200, height: 630, alt: 'Abels Immobilien – Premium Makler' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abels Immobilien | Premium-Makler in 7 deutschen Städten',
    description: 'Diskrete Vermittlung von Luxusimmobilien. Kostenfreie Bewertung in 72 Stunden.',
    images: ['/images/hero-luxury.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  alternates: {
    canonical: 'https://abels-immobilien.de',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Abels Immobilien GmbH',
  url: 'https://abels-immobilien.de',
  logo: 'https://abels-immobilien.de/images/logo.png',
  description: 'Inhabergeführter Premium-Immobilienmakler für den Verkauf hochwertiger Wohnimmobilien. Seit 1995. 7 Standorte.',
  foundingDate: '1995',
  telephone: '+49-211-5591751',
  email: 'info@abels-immobilien.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alt Niederkassel 124',
    addressLocality: 'Düsseldorf',
    postalCode: '40547',
    addressCountry: 'DE',
  },
  areaServed: ['Düsseldorf', 'München', 'Grünwald', 'Hamburg', 'Frankfurt', 'Essen', 'Stuttgart'],
  priceRange: '€€€€',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '17',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://abels-immobilien.de',
    'https://www.linkedin.com/company/abels-immobilien',
    'https://www.instagram.com/abelsimmobiliengmbhduesseldorf',
    'https://www.provenexpert.com/de-de/abels-immobilien-gmbh/',
    'https://www.jacasa.de/immobilienmakler/abels-immobilien-duesseldorf',
    'https://www.immobilienscout24.de/anbieter/profil/abels-immobilien-gmbh-komfort-und-luxusobjekte',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="bg-cream" data-scroll-behavior="smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
