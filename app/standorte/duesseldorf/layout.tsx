import { Metadata } from 'next'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Was kostet ein Immobilienmakler in Düsseldorf?', acceptedAnswer: { '@type': 'Answer', text: 'Die Maklerprovision beträgt in der Regel 3,57 % inkl. MwSt. vom Kaufpreis, geteilt zwischen Käufer und Verkäufer. Bei Abels Immobilien zahlen Sie als Verkäufer standardmäßig 1,785 %.' } },
    { '@type': 'Question', name: 'Wie lange dauert ein Immobilienverkauf in Düsseldorf?', acceptedAnswer: { '@type': 'Answer', text: 'In Premium-Lagen wie Oberkassel oder Kaiserswerth verkaufen sich marktgerecht eingepreiste Immobilien oft innerhalb weniger Wochen, da Abels Immobilien über ein etabliertes Käufernetzwerk verfügt.' } },
    { '@type': 'Question', name: 'Kann ich meine Immobilie diskret verkaufen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Beim Off-Market-Verkauf erscheint Ihre Immobilie nicht öffentlich. Wir vermitteln direkt an vorgeprüfte Käufer aus unserem Netzwerk.' } },
    { '@type': 'Question', name: 'Was ist meine Immobilie in Düsseldorf wert?', acceptedAnswer: { '@type': 'Answer', text: 'In Premium-Lagen wie Oberkassel liegen Quadratmeterpreise bei 7.500–9.000 EUR. Eine kostenfreie Vor-Ort-Bewertung durch Abels Immobilien gibt Ihnen präzise Klarheit.' } },
    { '@type': 'Question', name: 'Was passiert, wenn meine Immobilie nicht verkauft wird?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Abels Immobilien entstehen Ihnen nur Kosten im Erfolgsfall. Wird Ihre Immobilie nicht verkauft, zahlen Sie keine Provision.' } },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Abels Immobilien Düsseldorf',
  url: 'https://abels-immobilien.de/standorte/duesseldorf',
  description: 'Premium-Immobilienmakler in Düsseldorf. Spezialisiert auf Oberkassel, Kaiserswerth, Zooviertel und alle A-Lagen.',
  areaServed: { '@type': 'City', name: 'Düsseldorf' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alt Niederkassel 124',
    addressLocality: 'Düsseldorf',
    postalCode: '40547',
    addressCountry: 'DE',
  },
  telephone: '+49-211-5591751',
  parentOrganization: { '@type': 'Organization', name: 'Abels Immobilien GmbH' },
}

export const metadata: Metadata = {
  title: 'Immobilienmakler Düsseldorf | Premium & Luxus — Abels Immobilien',
  description: 'Ihr Makler für Oberkassel, Kaiserswerth, Zooviertel: Abels Immobilien vermittelt Premium-Immobilien in Düsseldorf. Kostenfreie Bewertung in 72 Stunden.',
  keywords: [
    'Immobilienmakler Düsseldorf', 'Immobilien Düsseldorf', 'Haus verkaufen Düsseldorf',
    'Wohnung Düsseldorf', 'Makler Oberkassel', 'Makler Kaiserswerth', 'Premium Immobilien Düsseldorf'
  ],
  openGraph: {
    title: 'Immobilienmakler Düsseldorf — Premium & Luxus',
    description: 'Spezialist für Oberkassel, Kaiserswerth und alle A-Lagen Düsseldorfs. Kostenfreie Bewertung in 72 Stunden.',
    url: 'https://abels-immobilien.de/standorte/duesseldorf',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/standorte/duesseldorf' },
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
