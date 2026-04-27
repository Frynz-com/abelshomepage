import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Über Abels Immobilien | Inhabergeführt seit 1999 | Premium-Makler',
  description: 'Abels Immobilien — seit 1999 inhabergeführter Premium-Makler für diskrete Vermittlung hochwertiger Wohnimmobilien. 500+ erfolgreiche Verkäufe. 7 deutsche Standorte.',
  keywords: [
    'Abels Immobilien', 'Über uns', 'Immobilienmakler Geschichte', 'Premium Makler Deutschland',
    'inhabergeführt', 'Michael Abels', 'Immobilienmakler seit 1999', 'Luxusmakler'
  ],
  openGraph: {
    title: 'Über Abels Immobilien — Inhabergeführt seit 1999',
    description: '25 Jahre Erfahrung, 500+ erfolgreiche Verkäufe. Persönlich. Diskret. Inhabergeführt.',
    url: 'https://abels-immobilien.de/ueber-uns',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: {
    canonical: 'https://abels-immobilien.de/ueber-uns',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
