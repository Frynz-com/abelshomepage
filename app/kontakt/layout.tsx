import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt | Abels Immobilien | 7 Standorte deutschlandweit',
  description: 'Kontaktieren Sie Abels Immobilien. Persönliche Beratung in Düsseldorf, München, Hamburg, Frankfurt, Stuttgart, Essen und Grünwald. Tel: +49 211 5597510.',
  keywords: [
    'Kontakt Abels Immobilien', 'Immobilienmakler kontaktieren', 'Beratung Immobilien',
    'Telefon Immobilienmakler', 'Standorte Abels', 'Immobilien Erstgespräch'
  ],
  openGraph: {
    title: 'Kontakt — Abels Immobilien',
    description: 'Persönliche Beratung in 7 deutschen Städten. Wir freuen uns auf Ihr Anliegen.',
    url: 'https://abels-immobilien.de/kontakt',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: {
    canonical: 'https://abels-immobilien.de/kontakt',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
