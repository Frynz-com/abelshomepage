import { Metadata } from 'next'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Was kostet ein Immobilienmakler in Hamburg?', acceptedAnswer: { '@type': 'Answer', text: 'Die Maklerprovision beträgt in Hamburg üblicherweise 3,57 % inkl. MwSt., aufgeteilt zwischen Käufer und Verkäufer. Abels Immobilien berechnet nur im Erfolgsfall eine Provision.' } },
    { '@type': 'Question', name: 'Wie hoch sind die Immobilienpreise in Hamburg?', acceptedAnswer: { '@type': 'Answer', text: 'In Toplagen wie Harvestehude oder Blankenese liegen Quadratmeterpreise bei 8.000–14.000 EUR. Die HafenCity bewegt sich je nach Objekt zwischen 7.000 und 11.000 EUR/m².' } },
    { '@type': 'Question', name: 'Kann ich meine Immobilie in Hamburg diskret verkaufen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Abels Immobilien bietet Off-Market-Verkäufe ohne Portalauftritt. Wir vermitteln direkt an vorgeprüfte Käufer aus unserem nationalen Netzwerk.' } },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Abels Immobilien Hamburg',
  url: 'https://abels-immobilien.de/standorte/hamburg',
  description: 'Premium-Immobilienmakler in Hamburg. Spezialisiert auf Harvestehude, Blankenese, HafenCity und alle A-Lagen der Hansestadt.',
  areaServed: { '@type': 'City', name: 'Hamburg' },
  telephone: '+49-211-5591751',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
