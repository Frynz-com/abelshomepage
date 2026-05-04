import { Metadata } from 'next'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Was kostet ein Immobilienmakler in Stuttgart?', acceptedAnswer: { '@type': 'Answer', text: 'Die Maklerprovision in Stuttgart beträgt üblicherweise 3,57 % inkl. MwSt. Bei Abels Immobilien zahlen Sie nur im Erfolgsfall — keine Vorauszahlungen, keine versteckten Kosten.' } },
    { '@type': 'Question', name: 'Wie hoch sind Immobilienpreise in Stuttgart?', acceptedAnswer: { '@type': 'Answer', text: 'In Toplagen wie Killesberg oder Degerloch liegen Quadratmeterpreise bei 6.000–9.500 EUR. Stuttgart-West und Bopser bieten attraktive Lagen mit hoher Nachfrage bei 5.000–7.500 EUR/m².' } },
    { '@type': 'Question', name: 'Welche Immobilien vermittelt Abels in Stuttgart?', acceptedAnswer: { '@type': 'Answer', text: 'Abels Immobilien vermittelt in Stuttgart Eigentumswohnungen, Einfamilienhäuser, Villen und Kapitalanlagen — in allen gefragten Stadtteilen vom Killesberg bis Sillenbuch.' } },
  ],
}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
