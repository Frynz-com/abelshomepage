import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Off-Market Immobilienverkauf: Diskret zum Erfolg | Abels Immobilien',
  description: 'Was ist ein Off-Market-Verkauf? Wie funktioniert der diskrete Immobilienverkauf ohne öffentliche Vermarktung? Vorteile, Ablauf und wann Off-Market sinnvoll ist.',
  keywords: [
    'Off-Market Immobilien',
    'Off-Market Verkauf',
    'Immobilien diskret verkaufen',
    'Off-Market Düsseldorf',
    'stille Vermarktung Immobilien',
    'Immobilien ohne Exposé',
    'diskreter Hausverkauf',
    'Off-Market Makler',
  ],
  openGraph: {
    title: 'Off-Market Immobilienverkauf: Diskret, schnell, erfolgreich',
    description: 'Wie Off-Market-Transaktionen funktionieren, wann sie sinnvoll sind und warum hochwertige Immobilien oft nie öffentlich inseriert werden.',
    url: 'https://abels-immobilien.de/ratgeber/off-market-verkauf',
    type: 'article',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/ratgeber/off-market-verkauf' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
