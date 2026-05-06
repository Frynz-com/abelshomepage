import { Metadata } from 'next'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Was kostet ein Immobilienmakler in München?', acceptedAnswer: { '@type': 'Answer', text: 'Die Maklerprovision in München beträgt üblicherweise 3,57 % inkl. MwSt., geteilt zwischen Käufer und Verkäufer. Bei Abels Immobilien zahlen Sie nur im Erfolgsfall.' } },
    { '@type': 'Question', name: 'Wie hoch sind die Immobilienpreise in München?', acceptedAnswer: { '@type': 'Answer', text: 'In Toplagen wie Bogenhausen oder Lehel liegen Quadratmeterpreise bei 12.000–18.000 EUR. Schwabing und Harlaching bewegen sich zwischen 9.000 und 13.000 EUR/m².' } },
    { '@type': 'Question', name: 'Kann ich meine Münchner Immobilie diskret verkaufen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Abels Immobilien bietet Off-Market-Verkäufe ohne öffentliche Vermarktung. Über 70 % unserer Münchner Transaktionen erfolgen diskret über unser Netzwerk.' } },
    { '@type': 'Question', name: 'Wie lange dauert ein Immobilienverkauf in München?', acceptedAnswer: { '@type': 'Answer', text: 'Bei marktgerecht eingepreisten Immobilien in gefragten Lagen Münchens sind im Schnitt 8–12 Wochen realistisch. Off-Market-Verkäufe über unseren vorgemerkten Käuferpool können deutlich schneller ablaufen.' } },
  ],
}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
