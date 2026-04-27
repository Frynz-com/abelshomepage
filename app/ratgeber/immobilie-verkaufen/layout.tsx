import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Immobilie verkaufen: Der vollständige Leitfaden 2026 | Abels Immobilien',
  description: 'Schritt für Schritt zum erfolgreichen Immobilienverkauf: Bewertung, Unterlagen, Vermarktung, Verhandlung bis zur Beurkundung. Alles was Eigentümer wissen müssen.',
  keywords: [
    'Immobilie verkaufen',
    'Haus verkaufen',
    'Wohnung verkaufen',
    'Immobilie verkaufen Tipps',
    'Immobilienmakler beauftragen',
    'Immobilienverkauf Ablauf',
    'Haus verkaufen Düsseldorf',
    'Immobilie verkaufen ohne Makler',
    'Immobilienverkauf Checkliste',
  ],
  openGraph: {
    title: 'Immobilie verkaufen: Der vollständige Leitfaden 2026',
    description: 'Von der Bewertung bis zur Schlüsselübergabe — alle Schritte des Immobilienverkaufs verständlich erklärt.',
    url: 'https://abels-immobilien.de/ratgeber/immobilie-verkaufen',
    type: 'article',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/ratgeber/immobilie-verkaufen' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
