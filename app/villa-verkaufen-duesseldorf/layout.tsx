import { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Villa & Penthouse verkaufen Düsseldorf',
  description: 'Diskrete Vermarktung von Villen, Penthäusern und Luxusimmobilien in Düsseldorf durch Abels Immobilien.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Abels Immobilien',
    url: 'https://abels-immobilien.de',
  },
  areaServed: {
    '@type': 'City',
    name: 'Düsseldorf',
  },
  serviceType: 'Immobilienvermittlung Luxus',
}

export const metadata: Metadata = {
  title: 'Villa verkaufen Düsseldorf | Penthouse & Luxusimmobilien',
  description: 'Villa oder Penthouse in Düsseldorf verkaufen — diskret, professionell, mit internationalem Käufernetzwerk. Spezialisiert auf Oberkassel, Grafenberg und Kaiserswerth.',
  keywords: [
    'Villa verkaufen Düsseldorf', 'Penthouse verkaufen Düsseldorf', 'Luxusimmobilien Düsseldorf verkaufen',
    'Villenmakler Düsseldorf', 'Off-Market Villa Düsseldorf', 'Premium Immobilien Oberkassel'
  ],
  openGraph: {
    title: 'Villa & Penthouse verkaufen Düsseldorf — Abels Immobilien',
    description: 'Diskreter Luxus-Immobilienverkauf mit internationalem Käufernetzwerk.',
    url: 'https://abels-immobilien.de/villa-verkaufen-duesseldorf',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: {
    canonical: 'https://abels-immobilien.de/villa-verkaufen-duesseldorf',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
