import { Metadata } from 'next'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Was kostet ein Immobilienmakler in Frankfurt?', acceptedAnswer: { '@type': 'Answer', text: 'Die Maklerprovision in Frankfurt beträgt üblicherweise 3,57 % inkl. MwSt. Abels Immobilien teilt die Provision nach dem seit 2020 geltenden Gesetz fair zwischen Käufer und Verkäufer auf.' } },
    { '@type': 'Question', name: 'Wie hoch sind Immobilienpreise im Frankfurter Westend?', acceptedAnswer: { '@type': 'Answer', text: 'Im Westend und Sachsenhausen liegen Quadratmeterpreise für Eigentumswohnungen bei 7.500–11.000 EUR. Penthäuser und Villen erzielen im Diplomatenviertel deutlich höhere Preise.' } },
    { '@type': 'Question', name: 'Kann ich meine Frankfurter Immobilie Off-Market verkaufen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Abels Immobilien hat ein etabliertes Netzwerk aus Kapitalanlegern, Family Offices und Privatinteressenten für diskrete Transaktionen in Frankfurt.' } },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Abels Immobilien Frankfurt',
  url: 'https://abels-immobilien.de/standorte/frankfurt',
  description: 'Premium-Immobilienmakler in Frankfurt am Main. Spezialisiert auf Westend, Sachsenhausen und Sachsenhausen Nord.',
  areaServed: { '@type': 'City', name: 'Frankfurt am Main' },
  telephone: '+49-211-5591751',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
