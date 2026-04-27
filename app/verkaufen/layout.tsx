import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Immobilie verkaufen | Diskrete Vermarktung',
  description: 'Verkaufen Sie Ihre Immobilie mit Plan. Inhabergeführter Premium-Makler mit 500+ erfolgreichen Verkäufen. Kostenfreie Bewertung in 72 Stunden. Kein Risiko.',
  keywords: [
    'Immobilie verkaufen', 'Haus verkaufen Deutschland', 'Wohnung verkaufen',
    'Makler beauftragen', 'diskrete Vermarktung', 'Immobilienmakler beaufragen',
    'Abels verkaufen', 'Verkaufsprozess Immobilien'
  ],
  openGraph: {
    title: 'Immobilie verkaufen — Diskret & Professionell',
    description: 'Strukturierter Verkaufsprozess. Nur qualifizierte Käufer. Kostenfreie Erstbewertung.',
    url: 'https://abels-immobilien.de/verkaufen',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: {
    canonical: 'https://abels-immobilien.de/verkaufen',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
