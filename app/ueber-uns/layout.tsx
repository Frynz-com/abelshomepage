import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Über Abels Immobilien | Inhabergeführt seit 1999 | Premium-Makler',
  description: 'Abels Immobilien — seit 1999 inhabergeführter Premium-Makler für diskrete Vermittlung hochwertiger Wohnimmobilien in 7 deutschen Städten. Persönlich. Vertrauenswürdig.',
  keywords: [
    'Abels Immobilien', 'Über uns', 'Immobilienmakler Geschichte', 'Premium Makler Deutschland',
    'inhabergeführt', 'Peter Abels', 'Immobilienmakler seit 1999', 'Luxusmakler'
  ],
  openGraph: {
    title: 'Über Abels Immobilien — Inhabergeführt seit 1999',
    description: 'Über 25 Jahre Erfahrung. Persönlich. Diskret. Inhabergeführt. 7 Standorte in Deutschland.',
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
