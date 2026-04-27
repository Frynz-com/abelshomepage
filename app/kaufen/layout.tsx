import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Immobilie kaufen | Off-Market Zugang',
  description: 'Exklusiver Zugang zu Off-Market-Immobilien in Düsseldorf, München, Hamburg und 4 weiteren Städten. Vorqualifizierte Angebote für anspruchsvolle Käufer.',
  keywords: [
    'Immobilie kaufen', 'Haus kaufen Düsseldorf', 'Wohnung kaufen München',
    'Off-Market Immobilien', 'Luxusimmobilien kaufen', 'Abels Immobilien Käufer',
    'Premium Immobilien Deutschland', 'diskret kaufen'
  ],
  openGraph: {
    title: 'Immobilie kaufen — Off-Market Zugang',
    description: 'Exklusiver Zugang zu Off-Market-Angeboten. Keine öffentlichen Portale — nur vorqualifizierte Immobilien für ernsthafte Käufer.',
    url: 'https://abels-immobilien.de/kaufen',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: {
    canonical: 'https://abels-immobilien.de/kaufen',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
