import { Metadata } from 'next'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Wie hoch sind Immobilienpreise in Grünwald?', acceptedAnswer: { '@type': 'Answer', text: 'Grünwald ist eine der teuersten Gemeinden Deutschlands. Villen und Einfamilienhäuser erzielen Quadratmeterpreise von 9.000–18.000 EUR. Bodenrichtwerte liegen deutlich über dem Münchner Umland.' } },
    { '@type': 'Question', name: 'Kann ich meine Villa in Grünwald diskret verkaufen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Über 90 % der Grünwalder Transaktionen über Abels Immobilien erfolgen Off-Market — ohne öffentliche Portale, vertraulich und mit maximalem Schutz Ihrer Privatsphäre.' } },
    { '@type': 'Question', name: 'Welche Käufer suchen Immobilien in Grünwald?', acceptedAnswer: { '@type': 'Answer', text: 'Unsere Käufer in Grünwald sind Unternehmer, Führungskräfte, Family Offices und international mobile Käufer, die Exklusivität und Nähe zu München schätzen.' } },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Abels Immobilien Grünwald',
  url: 'https://abels-immobilien.de/standorte/gruenwald',
  description: 'Premium-Immobilienmakler in Grünwald bei München. 90% Off-Market. Villen und Luxusimmobilien in Deutschlands reichster Gemeinde.',
  areaServed: { '@type': 'City', name: 'Grünwald' },
  telephone: '+49-211-5591751',
  parentOrganization: { '@type': 'Organization', name: 'Abels Immobilien GmbH' },
}

export const metadata: Metadata = {
  title: 'Immobilienmakler Grünwald | Villen & Off-Market',
  description: 'Abels Immobilien in Grünwald: Diskrete Vermittlung von Villen und Grundstücken in Deutschlands reichster Gemeinde. 90% Off-Market. Exklusiver Netzwerkzugang.',
  keywords: [
    'Immobilienmakler Grünwald', 'Villa Grünwald kaufen', 'Immobilien Grünwald',
    'Off-Market Grünwald', 'Luxusimmobilien Grünwald München', 'Makler Grünwald'
  ],
  openGraph: {
    title: 'Immobilienmakler Grünwald — Villen & Off-Market',
    description: 'Diskrete Vermittlung von Villen in Deutschlands reichster Gemeinde. 90% Off-Market.',
    url: 'https://abels-immobilien.de/standorte/gruenwald',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/standorte/gruenwald' },
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
