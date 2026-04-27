import { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was tun, wenn man eine Immobilie geerbt hat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zuerst Erbschein beantragen, dann die Immobilie professionell bewerten lassen. Abels Immobilien berät kostenlos bei allen Fragen rund um Erbimmobilien in Düsseldorf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Müssen alle Erben beim Verkauf zustimmen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, in einer Erbengemeinschaft benötigt jeder Verkauf die Zustimmung aller Erben. Wir moderieren bei Uneinigkeit und finden faire Lösungen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Fällt Spekulationssteuer beim Erbimmobilien-Verkauf an?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wenn die geerbte Immobilie innerhalb von 10 Jahren verkauft wird, kann Spekulationssteuer anfallen. Ausnahme: Eigennutzung als Hauptwohnsitz. Ein Steuerberater klärt den konkreten Fall.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Immobilie geerbt Düsseldorf | Erbimmobilien verkaufen',
  description: 'Sie haben eine Immobilie in Düsseldorf geerbt? Kostenfreie Beratung zu Bewertung, Steuern, Erbengemeinschaft und Verkauf. Abels Immobilien begleitet Sie durch jeden Schritt.',
  keywords: [
    'Immobilie geerbt Düsseldorf', 'Erbimmobilie verkaufen', 'Erbengemeinschaft Immobilien',
    'Erbfall Immobilien Düsseldorf', 'Erbschaft Immobilie verkaufen', 'geerbtes Haus verkaufen'
  ],
  openGraph: {
    title: 'Geerbte Immobilie in Düsseldorf verkaufen — Abels Immobilien',
    description: 'Kompetente Beratung bei Erbimmobilien: Bewertung, Steuern, Erbengemeinschaft und Verkauf.',
    url: 'https://abels-immobilien.de/immobilie-geerbt-duesseldorf',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: {
    canonical: 'https://abels-immobilien.de/immobilie-geerbt-duesseldorf',
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
