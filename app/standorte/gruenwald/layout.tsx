import { Metadata } from 'next'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Abels Immobilien Grünwald',
  url: 'https://abels-immobilien.de/standorte/gruenwald',
  description: 'Premium-Immobilienmakler in Grünwald bei München. 90% Off-Market. Villen und Luxusimmobilien in Deutschlands reichster Gemeinde.',
  areaServed: { '@type': 'City', name: 'Grünwald' },
  telephone: '+49-211-5597510',
  parentOrganization: { '@type': 'Organization', name: 'Abels Immobilien GmbH' },
}

export const metadata: Metadata = {
  title: 'Immobilienmakler Grünwald | Villen & Off-Market',
  description: 'Abels Immobilien in Grünwald: Diskrete Vermittlung von Villen und Grundstücken in Deutschlands reichster Gemeinde. 90% Off-Market. Exklusiver Netzwerkzugang.',
  keywords: [
    'Immobilienmakler Grünwald', 'Villa Grünwald kaufen', 'Immobilien Grünwald',
    'Off-Market Grünwald', 'Luxusimmobilien Grünwald München', 'Makler Grünwald'
  ],
  openGraph: {
    title: 'Immobilienmakler Grünwald — Villen & Off-Market',
    description: 'Diskrete Vermittlung von Villen in Deutschlands reichster Gemeinde. 90% Off-Market.',
    url: 'https://abels-immobilien.de/standorte/gruenwald',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/standorte/gruenwald' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {children}
    </>
  )
}
