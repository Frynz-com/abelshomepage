import { Metadata } from 'next'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Was kostet ein Immobilienmakler in Essen?', acceptedAnswer: { '@type': 'Answer', text: 'Die Maklerprovision in Essen beträgt üblicherweise 3,57 % inkl. MwSt. Bei Abels Immobilien entstehen Ihnen Kosten ausschließlich im Erfolgsfall.' } },
    { '@type': 'Question', name: 'Wie hoch sind die Immobilienpreise in Essen-Bredeney?', acceptedAnswer: { '@type': 'Answer', text: 'In Bredeney und am Baldeneysee liegen Quadratmeterpreise für Villen und gehobene Einfamilienhäuser bei 3.500–6.500 EUR. Kettwig und Heisingen bieten attraktive Lagen mit stabilem Preisniveau.' } },
    { '@type': 'Question', name: 'Welche Immobilien vermittelt Abels in Essen?', acceptedAnswer: { '@type': 'Answer', text: 'Abels Immobilien ist auf hochwertige Wohnimmobilien in Bredeney, Kettwig und am Baldeneysee spezialisiert — Villen, Einfamilienhäuser, Eigentumswohnungen und Mehrfamilienhäuser.' } },
  ],
}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
