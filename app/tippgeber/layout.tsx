import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tippgeber-Programm | Provision für Empfehlungen',
  description: 'Kennen Sie jemanden, der eine Immobilie verkaufen möchte? Empfehlen Sie Abels Immobilien und erhalten Sie eine attraktive Provision bei erfolgreichem Abschluss.',
  keywords: [
    'Tippgeber Immobilien', 'Provision Empfehlung', 'Immobilien Empfehlungsprogramm',
    'Tippgeber Makler', 'Abels Tippgeber', 'Provision für Empfehlung'
  ],
  openGraph: {
    title: 'Tippgeber-Programm — Provision für Immobilien-Empfehlungen',
    description: 'Empfehlen Sie Abels Immobilien und profitieren Sie bei jedem erfolgreichen Verkauf.',
    url: 'https://abels-immobilien.de/tippgeber',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: {
    canonical: 'https://abels-immobilien.de/tippgeber',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
