import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Immobilien-Ratgeber | Kosten, Bewertung & Tipps',
  description: 'Fundierte Ratgeber rund um Immobilienverkauf, Maklerkosten, Energieausweis, Notarkosten und mehr. Expertenwissen von Abels Immobilien — kostenlos und verständlich.',
  keywords: [
    'Immobilien Ratgeber', 'Maklerkosten', 'Energieausweis', 'Notarkosten',
    'Immobilien Tipps', 'Verkauf Ratgeber', 'Immobilien Wissen', 'Haus verkaufen Tipps'
  ],
  openGraph: {
    title: 'Immobilien-Ratgeber — Expertenwissen von Abels Immobilien',
    description: 'Alles rund um Maklerkosten, Energieausweis, Notarkosten und Verkaufstipps.',
    url: 'https://abels-immobilien.de/ratgeber',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: {
    canonical: 'https://abels-immobilien.de/ratgeber',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
