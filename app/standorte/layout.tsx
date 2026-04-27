import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Standorte | Düsseldorf, München, Hamburg & mehr',
  description: 'Abels Immobilien an 7 deutschen Premium-Standorten: Düsseldorf, München, Grünwald, Hamburg, Frankfurt, Stuttgart und Essen. Lokale Expertise. Persönliche Beratung.',
  keywords: [
    'Immobilienmakler Standorte', 'Abels Immobilien Städte', 'Immobilienmakler Düsseldorf',
    'Immobilienmakler München', 'Immobilienmakler Hamburg', 'Immobilienmakler Frankfurt',
    'Premium Makler Deutschland', 'Luxusmakler mehrere Städte'
  ],
  openGraph: {
    title: 'Standorte — Abels Immobilien in 7 deutschen Städten',
    description: 'Lokale Expertise in Düsseldorf, München, Hamburg, Frankfurt, Stuttgart, Essen und Grünwald.',
    url: 'https://abels-immobilien.de/standorte',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
