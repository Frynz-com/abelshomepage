import { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet eine Immobilienbewertung in Düsseldorf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die kostenfreie Erstbewertung von Abels Immobilien ist 100% kostenlos und unverbindlich. Sie erhalten innerhalb von 72 Stunden eine detaillierte Einschätzung des Marktwertes Ihrer Immobilie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist meine Immobilie in Düsseldorf wert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Wert hängt von Lage, Größe, Zustand und Ausstattung ab. In Düsseldorf liegen Eigentumswohnungen je nach Stadtteil zwischen 4.500 und über 12.000 €/m². Einfamilienhäuser zwischen 6.000 und 11.000 €/m².',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Immobilie bewerten Düsseldorf | Kostenfreie Bewertung',
  description: 'Kostenfreie Immobilienbewertung in Düsseldorf — Ergebnis in 72 Stunden. Professionelle Marktanalyse für Wohnungen, Häuser und Villen. Unverbindlich und diskret.',
  keywords: [
    'Immobilie bewerten Düsseldorf', 'Hausbewertung Düsseldorf kostenlos', 'Immobilienwert Düsseldorf',
    'Wohnungsbewertung Düsseldorf', 'Immobiliengutachten Düsseldorf', 'Marktwert Immobilie Düsseldorf'
  ],
  openGraph: {
    title: 'Immobilie bewerten Düsseldorf — Kostenlos in 72h',
    description: 'Professionelle Immobilienbewertung in Düsseldorf. Kostenlos, unverbindlich, Ergebnis in 72 Stunden.',
    url: 'https://abels-immobilien.de/immobilie-bewerten-duesseldorf',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: {
    canonical: 'https://abels-immobilien.de/immobilie-bewerten-duesseldorf',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
