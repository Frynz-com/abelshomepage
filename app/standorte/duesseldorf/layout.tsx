import { Metadata } from 'next'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Abels Immobilien Düsseldorf',
  url: 'https://abels-immobilien.de/standorte/duesseldorf',
  description: 'Premium-Immobilienmakler in Düsseldorf. Spezialisiert auf Oberkassel, Kaiserswerth, Zooviertel und alle A-Lagen.',
  areaServed: { '@type': 'City', name: 'Düsseldorf' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alt Niederkassel 124',
    addressLocality: 'Düsseldorf',
    postalCode: '40547',
    addressCountry: 'DE',
  },
  telephone: '+49-211-5591751',
  parentOrganization: { '@type': 'Organization', name: 'Abels Immobilien GmbH' },
}

export const metadata: Metadata = {
  title: 'Immobilienmakler Düsseldorf | Premium & Luxus — Abels Immobilien',
  description: 'Ihr Makler für Oberkassel, Kaiserswerth, Zooviertel: Abels Immobilien vermittelt Premium-Immobilien in Düsseldorf. Kostenfreie Bewertung in 72 Stunden.',
  keywords: [
    'Immobilienmakler Düsseldorf', 'Immobilien Düsseldorf', 'Haus verkaufen Düsseldorf',
    'Wohnung Düsseldorf', 'Makler Oberkassel', 'Makler Kaiserswerth', 'Premium Immobilien Düsseldorf'
  ],
  openGraph: {
    title: 'Immobilienmakler Düsseldorf — Premium & Luxus',
    description: 'Spezialist für Oberkassel, Kaiserswerth und alle A-Lagen Düsseldorfs. Kostenfreie Bewertung in 72 Stunden.',
    url: 'https://abels-immobilien.de/standorte/duesseldorf',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/standorte/duesseldorf' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {children}
    </>
  )
}
