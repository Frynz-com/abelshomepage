import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Presse & Medien | Abels Immobilien',
  description: 'Pressemitteilungen, Bildmaterial und Medienkontakte von Abels Immobilien. Informationen für Journalisten und Medienvertreter.',
  keywords: ['Abels Immobilien Presse', 'Pressemitteilungen Immobilien', 'Medienkontakt'],
  openGraph: {
    title: 'Presse & Medien — Abels Immobilien',
    description: 'Pressemitteilungen, Bildmaterial und Kontaktdaten für Journalisten und Medienvertreter.',
    url: 'https://abels-immobilien.de/presse',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: { canonical: 'https://abels-immobilien.de/presse' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
