import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karriere bei Abels Immobilien | Premium-Makler',
  description: 'Werden Sie Teil des Teams von Abels Immobilien. Offene Stellen als Immobilienberater, Marketing Manager und mehr — an 7 Standorten in Deutschland.',
  keywords: ['Karriere Immobilien', 'Jobs Immobilienmakler', 'Stellenangebote Düsseldorf', 'Arbeitgeber Immobilien'],
  openGraph: {
    title: 'Karriere bei Abels Immobilien',
    description: 'Gestalten Sie die Zukunft des Premium-Immobilienmarktes. Offene Stellen und Initiativbewerbung.',
    url: 'https://abels-immobilien.de/karriere',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/karriere' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
