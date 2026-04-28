import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Erbimmobilie: Geerbt und jetzt? Alles was Erben wissen müssen | Abels Immobilien',
  description: 'Immobilie geerbt – was nun? Halten, vermieten oder verkaufen? Erbschaftsteuer, Erbengemeinschaft, Spekulationssteuer und die richtige Strategie für Ihre Erbimmobilie.',
  keywords: [
    'Erbimmobilie verkaufen',
    'geerbtes Haus verkaufen',
    'Immobilie geerbt was tun',
    'Erbschaft Immobilie Steuern',
    'geerbte Wohnung verkaufen',
    'Erbengemeinschaft Immobilie',
    'Erbimmobilie Düsseldorf',
    'Erbschaftsteuer Immobilien',
    'Spekulationssteuer Erbimmobilie',
    'geerbtes Haus Makler',
    'Erbfall Immobilie',
    'Erbimmobilie bewerten',
  ],
  openGraph: {
    title: 'Geerbt und jetzt? Erbimmobilie richtig einschätzen und verwerten',
    description: 'Was passiert rechtlich beim Erbfall, welche Steuern fallen an, und wann ist der Verkauf die beste Entscheidung? Der umfassende Ratgeber für Erben.',
    url: 'https://abels-immobilien.de/ratgeber/erbimmobilie',
    type: 'article',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/ratgeber/erbimmobilie' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
