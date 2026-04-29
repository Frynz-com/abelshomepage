import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Baufinanzierung Düsseldorf – Immobilienfinanzierung | Abels Immobilien',
  description: 'Baufinanzierung in Düsseldorf: Abels Immobilien unterstützt Kaufinteressenten bei der Planung einer passenden Immobilienfinanzierung – unabhängig, transparent und individuell.',
  keywords: [
    'Baufinanzierung Düsseldorf',
    'Immobilienfinanzierung Düsseldorf',
    'Finanzierung Eigentumswohnung Düsseldorf',
    'Hausfinanzierung Düsseldorf',
    'Immobilienkredit Düsseldorf',
    'Anschlussfinanzierung Düsseldorf',
    'KfW Förderung Immobilien',
    'Baufinanzierung Beratung',
  ],
  openGraph: {
    title: 'Baufinanzierung Düsseldorf – sicher und individuell geplant',
    description: 'Als inhabergeführter Immobilienmakler unterstützt Abels Immobilien Kaufinteressenten auf Wunsch auch bei der Planung einer passenden Baufinanzierung.',
    url: 'https://abels-immobilien.de/finanzierung',
    type: 'article',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/finanzierung' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
