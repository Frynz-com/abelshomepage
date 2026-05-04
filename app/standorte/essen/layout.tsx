import { Metadata } from 'next'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Abels Immobilien Essen',
  url: 'https://abels-immobilien.de/standorte/essen',
  description: 'Premium-Immobilienmakler in Essen. Diskrete Vermittlung hochwertiger Wohnimmobilien im Ruhrgebiet.',
  areaServed: { '@type': 'City', name: 'Essen' },
  telephone: '+49-211-5591751',
  parentOrganization: { '@type': 'Organization', name: 'Abels Immobilien GmbH' },
}

export const metadata: Metadata = {
  title: 'Immobilienmakler Essen | Premium Immobilien Ruhrgebiet',
  description: 'Abels Immobilien in Essen: Diskrete Vermittlung hochwertiger Wohnimmobilien im Ruhrgebiet. Kostenfreie Bewertung. Persönliche Beratung.',
  keywords: [
    'Immobilienmakler Essen', 'Immobilien Essen', 'Haus verkaufen Essen',
    'Wohnung kaufen Essen', 'Premium Makler Ruhrgebiet', 'Luxusimmobilien Essen'
  ],
  openGraph: {
    title: 'Immobilienmakler Essen — Premium Immobilien Ruhrgebiet',
    description: 'Diskrete Vermittlung hochwertiger Wohnimmobilien in Essen und dem Ruhrgebiet.',
    url: 'https://abels-immobilien.de/standorte/essen',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/standorte/essen' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {children}
    </>
  )
}
