import { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Off-Market Immobilienverkauf Düsseldorf',
  description: 'Diskrete Off-Market-Vermarktung von Immobilien in Düsseldorf — ohne öffentliche Anzeigen, nur vorqualifizierte Käufer.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Abels Immobilien',
    url: 'https://abels-immobilien.de',
  },
  areaServed: { '@type': 'City', name: 'Düsseldorf' },
  serviceType: 'Off-Market Immobilienvermittlung',
}

export const metadata: Metadata = {
  title: 'Off-Market Immobilien Düsseldorf | Diskret verkaufen',
  description: 'Off-Market Immobilienverkauf in Düsseldorf — maximale Diskretion, nur vorqualifizierte Käufer, keine öffentlichen Annoncen. Für Premiumobjekte und anspruchsvolle Eigentümer.',
  keywords: [
    'Off-Market Immobilien Düsseldorf', 'diskret verkaufen Düsseldorf', 'Off-Market Makler Düsseldorf',
    'Immobilie anonym verkaufen', 'Off-Market Vermarktung', 'diskrete Vermarktung Düsseldorf'
  ],
  openGraph: {
    title: 'Off-Market Immobilien Düsseldorf — Diskret & Professionell',
    description: 'Verkaufen Sie Ihre Immobilie ohne öffentliche Anzeigen. Nur vorqualifizierte Käufer sehen Ihr Angebot.',
    url: 'https://abels-immobilien.de/off-market-immobilien-duesseldorf',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: {
    canonical: 'https://abels-immobilien.de/off-market-immobilien-duesseldorf',
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
