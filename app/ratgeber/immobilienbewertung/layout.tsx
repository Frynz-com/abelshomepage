import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Immobilienbewertung: Wie wird der Wert ermittelt? | Abels Immobilien',
  description: 'Wie wird der Wert einer Immobilie berechnet? Vergleichswert-, Sachwert- und Ertragswertverfahren einfach erklärt. Wertfaktoren, typische Fehler und Profi-Tipps.',
  keywords: [
    'Immobilienbewertung',
    'Immobilienwert ermitteln',
    'Haus Wert berechnen',
    'Vergleichswertverfahren',
    'Sachwertverfahren',
    'Ertragswertverfahren',
    'Immobilienbewertung Düsseldorf',
    'Verkehrswert Immobilie',
    'Marktwert Immobilie berechnen',
  ],
  openGraph: {
    title: 'Immobilienbewertung: Wie wird der Wert ermittelt?',
    description: 'Die drei Bewertungsverfahren erklärt — und warum der richtige Angebotspreis über Erfolg oder Misserfolg des Verkaufs entscheidet.',
    url: 'https://abels-immobilien.de/ratgeber/immobilienbewertung',
    type: 'article',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/ratgeber/immobilienbewertung' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
