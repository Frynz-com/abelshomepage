import { Metadata } from 'next'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Abels Immobilien Stuttgart',
  url: 'https://abels-immobilien.de/standorte/stuttgart',
  description: 'Premium-Immobilienmakler in Stuttgart. Diskrete Vermittlung hochwertiger Wohnimmobilien in Stuttgart und der Region.',
  areaServed: { '@type': 'City', name: 'Stuttgart' },
  telephone: '+49-211-5591751',
  parentOrganization: { '@type': 'Organization', name: 'Abels Immobilien GmbH' },
}

export const metadata: Metadata = {
  title: 'Immobilienmakler Stuttgart | Premium Immobilien',
  description: 'Abels Immobilien Stuttgart: Diskrete Vermittlung hochwertiger Wohnimmobilien in Stuttgart und der Region. Kostenfreie Bewertung. Persönliche Beratung.',
  keywords: [
    'Immobilienmakler Stuttgart', 'Immobilien Stuttgart', 'Haus verkaufen Stuttgart',
    'Wohnung Stuttgart', 'Premium Makler Stuttgart', 'Luxusimmobilien Stuttgart'
  ],
  openGraph: {
    title: 'Immobilienmakler Stuttgart — Premium Immobilien',
    description: 'Diskrete Vermittlung hochwertiger Wohnimmobilien in Stuttgart.',
    url: 'https://abels-immobilien.de/standorte/stuttgart',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/standorte/stuttgart' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {children}
    </>
  )
}
