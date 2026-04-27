import { Metadata } from 'next'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Abels Immobilien Hamburg',
  url: 'https://abels-immobilien.de/standorte/hamburg',
  description: 'Premium-Immobilienmakler in Hamburg. Spezialisiert auf Harvestehude, Blankenese, HafenCity und alle A-Lagen der Hansestadt.',
  areaServed: { '@type': 'City', name: 'Hamburg' },
  telephone: '+49-211-5597510',
  parentOrganization: { '@type': 'Organization', name: 'Abels Immobilien GmbH' },
}

export const metadata: Metadata = {
  title: 'Immobilienmakler Hamburg | Harvestehude, Blankenese',
  description: 'Abels Immobilien Hamburg: Premium-Makler für Harvestehude, Blankenese, HafenCity und Uhlenhorst. Hanseatische Diskretion. Kostenfreie Bewertung.',
  keywords: [
    'Immobilienmakler Hamburg', 'Immobilien Hamburg', 'Haus verkaufen Hamburg',
    'Makler Harvestehude', 'Makler Blankenese', 'Luxusimmobilien Hamburg', 'Premium Makler Hamburg'
  ],
  openGraph: {
    title: 'Immobilienmakler Hamburg — Harvestehude & Blankenese',
    description: 'Hanseatische Diskretion für Premium-Immobilien in Hamburg. Harvestehude, Blankenese, HafenCity.',
    url: 'https://abels-immobilien.de/standorte/hamburg',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/standorte/hamburg' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {children}
    </>
  )
}
