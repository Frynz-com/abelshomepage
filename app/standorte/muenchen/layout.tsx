import { Metadata } from 'next'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Abels Immobilien München',
  url: 'https://abels-immobilien.de/standorte/muenchen',
  description: 'Premium-Immobilienmakler in München. Spezialisiert auf Bogenhausen, Lehel, Schwabing-West und Harlaching.',
  areaServed: { '@type': 'City', name: 'München' },
  telephone: '+49-211-5591751',
  parentOrganization: { '@type': 'Organization', name: 'Abels Immobilien GmbH' },
}

export const metadata: Metadata = {
  title: 'Immobilienmakler München | Bogenhausen, Lehel, Schwabing',
  description: 'Abels Immobilien München: Premium-Makler für Bogenhausen, Lehel, Schwabing-West und Harlaching. Diskrete Vermittlung von Villen und Penthäusern.',
  keywords: [
    'Immobilienmakler München', 'Immobilien München', 'Haus verkaufen München',
    'Makler Bogenhausen', 'Makler Schwabing', 'Luxusimmobilien München', 'Villa München kaufen'
  ],
  openGraph: {
    title: 'Immobilienmakler München — Bogenhausen, Lehel & Schwabing',
    description: 'Deutschlands teuerster Markt. Das ist unser Terrain. Premium-Makler in München.',
    url: 'https://abels-immobilien.de/standorte/muenchen',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/standorte/muenchen' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {children}
    </>
  )
}
