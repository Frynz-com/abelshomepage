import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vermietung | Diskret & Zielgerichtet',
  description: 'Premium-Vermietung hochwertiger Immobilien in Düsseldorf, München, Frankfurt und weiteren Top-Standorten. Exklusives Netzwerk, absolute Diskretion, höchste Mietrendite.',
  keywords: [
    'Immobilie vermieten', 'Vermietung Luxusimmobilien', 'Wohnung vermieten Düsseldorf',
    'Villa vermieten München', 'diskrete Vermietung', 'Abels Vermietung', 'Off-Market Vermietung'
  ],
  openGraph: {
    title: 'Vermietung — Diskret & Zielgerichtet | Abels Immobilien',
    description: 'Exklusives Mieter-Netzwerk, Bonitätsprüfung, Off-Market-Vermietung. Für anspruchsvolle Eigentümer.',
    url: 'https://abels-immobilien.de/vermietung',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Abels Immobilien',
  },
  alternates: {
    canonical: 'https://abels-immobilien.de/vermietung',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
