import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Immobilie bei Scheidung: Was tun mit dem gemeinsamen Haus? | Abels Immobilien',
  description: 'Trennung oder Scheidung – was passiert mit der gemeinsamen Immobilie? Zugewinnausgleich, Verkauf, Auszahlung und Teilungsversteigerung einfach erklärt.',
  keywords: [
    'Immobilie Scheidung',
    'gemeinsames Haus Trennung',
    'Scheidung Haus verkaufen',
    'Zugewinnausgleich Immobilie',
    'Teilungsversteigerung',
    'Scheidung Wohnung',
    'Trennung Immobilie Düsseldorf',
    'Haus Scheidung Auszahlung',
    'gemeinsame Immobilie Trennung',
    'Scheidung Eigentümer',
    'Immobilie übertragen Scheidung',
    'Haus aufteilen Trennung',
  ],
  openGraph: {
    title: 'Was passiert mit dem Haus bei Trennung oder Scheidung?',
    description: 'Halten, verkaufen oder auszahlen? Alle Optionen für Ihre gemeinsame Immobilie bei Trennung und Scheidung – rechtlich, steuerlich und finanziell erklärt.',
    url: 'https://abels-immobilien.de/ratgeber/scheidungsimmobilie',
    type: 'article',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/ratgeber/scheidungsimmobilie' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
