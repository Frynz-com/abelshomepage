import { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Einfamilienhaus in Düsseldorf verkaufen',
  description: 'So verkaufen Sie Ihr Einfamilienhaus in Düsseldorf professionell und zum besten Preis.',
  step: [
    { '@type': 'HowToStep', name: 'Kostenfreie Bewertung', text: 'Marktgerechte Bewertung basierend auf Lage, Zustand und aktuellen Vergleichsobjekten.' },
    { '@type': 'HowToStep', name: 'Hochwertige Vermarktung', text: 'Professionelle Fotos, Drohnenaufnahmen, 360°-Tour und detailliertes Exposé.' },
    { '@type': 'HowToStep', name: 'Käufersuche', text: 'Nur qualifizierte Kaufinteressenten mit nachgewiesener Finanzierungsfähigkeit.' },
    { '@type': 'HowToStep', name: 'Verhandlung', text: 'Diskrete Preisverhandlungen für maximalen Verkaufserlös.' },
    { '@type': 'HowToStep', name: 'Notartermin', text: 'Vollständige Begleitung bis zur Beurkundung und Übergabe.' },
  ],
}

export const metadata: Metadata = {
  title: 'Haus verkaufen Düsseldorf | Einfamilienhaus',
  description: 'Einfamilienhaus in Düsseldorf verkaufen — professionell, diskret und zum Bestpreis. Kostenfreie Bewertung in 72 Stunden. Inhabergeführter Premium-Makler seit 1995.',
  keywords: [
    'Haus verkaufen Düsseldorf', 'Einfamilienhaus Düsseldorf verkaufen', 'Hausverkauf Düsseldorf',
    'Immobilienmakler Düsseldorf Haus', 'Haus Bewertung Düsseldorf', 'Makler Düsseldorf Haus'
  ],
  openGraph: {
    title: 'Haus verkaufen Düsseldorf — Abels Immobilien',
    description: 'Professioneller Hausverkauf in Düsseldorf. Kostenfreie Bewertung. Nur qualifizierte Käufer.',
    url: 'https://abels-immobilien.de/haus-verkaufen-duesseldorf',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: {
    canonical: 'https://abels-immobilien.de/haus-verkaufen-duesseldorf',
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
