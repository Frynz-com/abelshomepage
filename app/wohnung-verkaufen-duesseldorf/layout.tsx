import { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Eigentumswohnung in Düsseldorf verkaufen',
  description: 'Schritt-für-Schritt-Anleitung zum erfolgreichen Wohnungsverkauf in Düsseldorf.',
  step: [
    { '@type': 'HowToStep', name: 'Kostenfreie Bewertung', text: 'Realistische Preiseinschätzung auf Basis aktueller Vergleichsobjekte in Ihrer Lage.' },
    { '@type': 'HowToStep', name: 'Hochwertige Vermarktung', text: 'Professionelle Fotos, Videos und Exposé für beste Präsentation Ihrer Wohnung.' },
    { '@type': 'HowToStep', name: 'Interessenten-Vorqualifikation', text: 'Kein Besichtigungsmarathon — nur qualifizierte, finanzierungsfähige Käufer.' },
    { '@type': 'HowToStep', name: 'Verhandlung & Abschluss', text: 'Diskrete Verhandlungsführung und professionelle Notartermin-Vorbereitung.' },
  ],
}

export const metadata: Metadata = {
  title: 'Wohnung verkaufen Düsseldorf | Eigentumswohnung',
  description: 'Eigentumswohnung in Düsseldorf verkaufen — kostenfreie Bewertung, hochwertige Vermarktung, nur qualifizierte Käufer. Abels Immobilien, inhabergeführt seit 1999.',
  keywords: [
    'Wohnung verkaufen Düsseldorf', 'Eigentumswohnung Düsseldorf verkaufen', 'Wohnungsverkauf Düsseldorf',
    'Immobilienmakler Düsseldorf Wohnung', 'ETW verkaufen Düsseldorf', 'Makler Oberkassel Wohnung'
  ],
  openGraph: {
    title: 'Wohnung verkaufen Düsseldorf — Abels Immobilien',
    description: 'Professioneller Wohnungsverkauf in Düsseldorf. Kostenfreie Bewertung. Nur qualifizierte Käufer.',
    url: 'https://abels-immobilien.de/wohnung-verkaufen-duesseldorf',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: {
    canonical: 'https://abels-immobilien.de/wohnung-verkaufen-duesseldorf',
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
