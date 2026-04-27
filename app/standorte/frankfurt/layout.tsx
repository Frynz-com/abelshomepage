import { Metadata } from 'next'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Abels Immobilien Frankfurt',
  url: 'https://abels-immobilien.de/standorte/frankfurt',
  description: 'Premium-Immobilienmakler in Frankfurt am Main. Spezialisiert auf Westend, Sachsenhausen und Sachsenhausen Nord.',
  areaServed: { '@type': 'City', name: 'Frankfurt am Main' },
  telephone: '+49-211-5597510',
  parentOrganization: { '@type': 'Organization', name: 'Abels Immobilien GmbH' },
}

export const metadata: Metadata = {
  title: 'Immobilienmakler Frankfurt | Westend & Sachsenhausen',
  description: 'Abels Immobilien Frankfurt: Premium-Makler für Westend, Sachsenhausen und alle A-Lagen. Diskrete Vermittlung. Kostenfreie Bewertung in 72 Stunden.',
  keywords: [
    'Immobilienmakler Frankfurt', 'Immobilien Frankfurt am Main', 'Haus verkaufen Frankfurt',
    'Wohnung Frankfurt Westend', 'Premium Makler Frankfurt', 'Luxusimmobilien Frankfurt'
  ],
  openGraph: {
    title: 'Immobilienmakler Frankfurt — Westend & Sachsenhausen',
    description: 'Premium-Makler für Frankfurt am Main. Diskrete Vermittlung in Top-Lagen.',
    url: 'https://abels-immobilien.de/standorte/frankfurt',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/standorte/frankfurt' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {children}
    </>
  )
}
