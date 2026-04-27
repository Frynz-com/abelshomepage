import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

const standorte: Record<string, any> = {
  duesseldorf: {
    name: "Düsseldorf",
    metaTitle: "Immobilienmakler Düsseldorf | Abels Immobilien — Premium & Luxus",
    metaDesc: "Ihr Makler für Oberkassel, Kaiserswerth, Zooviertel: Abels Immobilien vermittelt Premium-Immobilien in Düsseldorf. Kostenfreie Bewertung in 72 Stunden.",
    h1: "Immobilienmakler Düsseldorf",
    heroLead: "Vom Rhein bis zur Kö: Premium-Immobilien in Düsseldorf, vermittelt von denen, die die Stadt am besten kennen. Spezialisten für Oberkassel, Kaiserswerth, Zooviertel und alle A-Lagen der Landeshauptstadt.",
    image: "/images/cities/duesseldorf.jpg",
    mainContent: "Der Düsseldorfer Immobilienmarkt 2026. Düsseldorf ist nach München und Frankfurt der drittteuerste Wohnungsmarkt Deutschlands. Die Landeshauptstadt Nordrhein-Westfalens profitiert von einem stabilen Zuzug, einer starken Dienstleistungsökonomie und einer internationalen Käuferschaft — insbesondere aus Japan, den Niederlanden und dem Nahen Osten. Die Rheinlage prägt den Markt in doppelter Hinsicht: linksrheinisch dominieren Oberkassel und Niederkassel mit Gründerzeit-Altbauten und Blick auf die Skyline. Rechtsrheinisch liegen die urbanen Szene-Quartiere Pempelfort, Flingern und Bilk neben den gehobenen Wohnlagen Zooviertel, Golzheim und Kaiserswerth.",
    priceTable: [
      { stadtteil: "Oberkassel", wohnung: "7.800", haus: "9.500", miete: "16,80", trend: "→" },
      { stadtteil: "Niederkassel", wohnung: "6.900", haus: "8.400", miete: "15,20", trend: "↑" },
      { stadtteil: "Kaiserswerth", wohnung: "6.500", haus: "8.800", miete: "14,50", trend: "↑" },
      { stadtteil: "Zooviertel", wohnung: "7.400", haus: "9.200", miete: "15,90", trend: "→" },
      { stadtteil: "Carlstadt", wohnung: "8.500", haus: "—", miete: "17,50", trend: "↑" },
      { stadtteil: "Golzheim", wohnung: "6.100", haus: "7.500", miete: "14,20", trend: "→" },
      { stadtteil: "Pempelfort", wohnung: "6.400", haus: "7.200", miete: "14,80", trend: "↑" },
      { stadtteil: "Düsseltal", wohnung: "6.400", haus: "7.600", miete: "14,30", trend: "→" },
    ],
    faqs: [
      { q: "Welcher ist der teuerste Stadtteil in Düsseldorf?", a: "Carlstadt und Oberkassel führen die Preisliste an. Carlstadt erreicht bei Eigentumswohnungen Spitzenpreise von über 12.000 €/m² in denkmalgeschützten Altbauten. Oberkassel liegt im Durchschnitt bei 7.800 €/m², in der Cäcilienallee oder direkt am Rhein deutlich darüber." },
      { q: "Wie lange dauert ein Immobilienverkauf in Düsseldorf?", a: "Der Vermarktungszeitraum in Düsseldorf hängt von Lage und Preissegment ab. In Top-Lagen wie Oberkassel und Kaiserswerth verkaufen sich marktgerecht eingepreiste Immobilien oft schneller durch unser Netzwerk vorqualifizierter Käufer." },
      { q: "Lohnt sich ein Immobilienmakler in Düsseldorf?", a: "Bei Objekten ab 500.000 € ist professionelle Vermittlung nahezu immer wirtschaftlich. Studien der IHK zeigen: professionell vermarktete Immobilien erzielen im Düsseldorfer Markt 7–15 Prozent höhere Verkaufspreise gegenüber privatem Verkauf." },
    ]
  },
  muenchen: {
    name: "München",
    metaTitle: "Immobilienmakler München | Abels — Bogenhausen, Lehel, Schwabing",
    metaDesc: "Premium-Makler in München für Bogenhausen, Lehel, Schwabing-West und Harlaching. Diskrete Vermittlung von Villen, Penthäusern und Kapitalanlagen.",
    h1: "Immobilienmakler München",
    heroLead: "München ist Deutschlands teuerster Markt. Das ist unser Terrain. Abels Immobilien vermittelt in Bogenhausen, Lehel, Schwabing-West, Harlaching und allen A-Lagen der bayerischen Landeshauptstadt.",
    image: "/images/cities/muenchen.jpg",
    mainContent: "Der Münchener Immobilienmarkt 2026. München ist der mit Abstand teuerste Wohnimmobilienmarkt Deutschlands. Der Stadtstaat funktioniert wie kein anderer deutscher Markt: chronisch knappes Angebot in A-Lagen, eine sehr internationale Käuferschaft (DACH, Italien, Schweiz, Nahost) und ein seit zwei Jahrzehnten ununterbrochener Aufwärtstrend bei den Preisen. Der Markt ist stark segmentiert. Während in Lagen wie Hasenbergl oder Berg am Laim moderate Preise möglich sind, liegen die Spitzenlagen Altstadt-Lehel, Bogenhausen (Herzogpark) und Maxvorstadt (Kunstareal) auf Höhen, die sonst nur in Genf, Monaco oder London erreicht werden.",
    priceTable: [
      { stadtteil: "Altstadt-Lehel", wohnung: "14.500", haus: "—", miete: "28,50", trend: "→" },
      { stadtteil: "Lehel", wohnung: "14.000", haus: "—", miete: "27,80", trend: "→" },
      { stadtteil: "Maxvorstadt", wohnung: "12.800", haus: "—", miete: "25,40", trend: "↑" },
      { stadtteil: "Bogenhausen", wohnung: "13.500", haus: "15.800", miete: "26,20", trend: "→" },
      { stadtteil: "Schwabing-West", wohnung: "11.500", haus: "13.200", miete: "23,50", trend: "↑" },
      { stadtteil: "Nymphenburg", wohnung: "11.000", haus: "12.800", miete: "22,10", trend: "→" },
      { stadtteil: "Harlaching", wohnung: "10.800", haus: "13.500", miete: "20,80", trend: "↑" },
      { stadtteil: "Solln", wohnung: "10.200", haus: "12.200", miete: "19,50", trend: "→" },
    ],
    faqs: [
      { q: "Was ist der teuerste Stadtteil in München?", a: "Altstadt-Lehel und Lehel führen die Preisliste an mit Durchschnittswerten von 14.000–14.500 €/m². In absoluten Spitzenobjekten — etwa historischen Stadtpalais oder Penthouse-Wohnungen mit Isarblick — werden Preise von 25.000 bis über 35.000 €/m² erzielt." },
      { q: "Lohnt sich Immobilienkauf in München 2026 noch?", a: "Als Kapitalanlage bleibt München trotz hoher Einstiegspreise eines der sichersten Ziele Europas. Die Mietrendite liegt aktuell bei 2,3–3,1 Prozent, die Wertsteigerung der letzten zehn Jahre betrug kumuliert rund 110 Prozent." },
      { q: "Wie lange dauert ein Immobilienverkauf in München?", a: "Die Verkaufsdauer hängt von Lage und Preissegment ab. In A-Lagen verkaufen sich marktgerecht eingepreiste Immobilien deutlich schneller. Off-Market-Verkäufe an vorgemerkte Käufer können innerhalb von Tagen abgeschlossen werden." },
    ]
  },
  gruenwald: {
    name: "Grünwald",
    metaTitle: "Immobilienmakler Grünwald | Abels — Villen & Off-Market",
    metaDesc: "Premium-Makler in Grünwald: Diskrete Vermittlung von Villen und Grundstücken in Deutschlands reichster Gemeinde. 90 Prozent unserer Objekte off-market.",
    h1: "Immobilienmakler Grünwald",
    heroLead: "Grünwald ist diskret, wohlhabend und knapp. Wir vermitteln hier, wo andere nicht einmal Zugang haben. Villen, Grundstücke und Luxus-Penthouses — überwiegend off-market.",
    image: "/images/cities/gruenwald.jpg",
    mainContent: "Der Grünwalder Immobilienmarkt 2026. Grünwald ist eine eigene Gemeinde im Landkreis München mit rund 11.400 Einwohnern. Der Ort ist seit den 1960er-Jahren ein Synonym für gehobenes Wohnen in der Metropolregion München und beherbergt laut Statistik die höchste Dichte an Vermögensmillionären Deutschlands. Der Grünwalder Markt funktioniert nach eigenen Regeln. Rund 90 Prozent aller Transaktionen laufen ohne öffentliche Vermarktung über etablierte lokale Makler und geschlossene Netzwerke.",
    faqs: [
      { q: "Warum ist Grünwald so teuer?", a: "Drei Faktoren: extreme Wohnqualität (Waldlage, Isartal, nur 20 Autominuten Stadtmitte), sehr strenge Gemeinde-Bauordnung mit niedriger Bebauungsdichte und historisch gewachsene Kapitalkonzentration." },
      { q: "Was kostet ein Haus in Grünwald?", a: "Realistische Bandbreite 2026: 2,8–25 Millionen Euro. Einstiegsimmobilien (Reihenhäuser, kleinere Einfamilienhäuser) ab etwa 2,5 Millionen Euro. Klassische Villen in Top-Lage zwischen 6 und 12 Millionen Euro." },
      { q: "Wie finde ich eine Immobilie in Grünwald?", a: "Die öffentlichen Portale zeigen nur einen Bruchteil des Marktes. Rund 90 Prozent der Transaktionen laufen off-market über etablierte Makler. Abels Immobilien pflegt ein kuratiertes Netzwerk aus Eigentümern und solventen Interessenten." },
    ]
  },
  hamburg: {
    name: "Hamburg",
    metaTitle: "Immobilienmakler Hamburg | Abels — Harvestehude, Blankenese",
    metaDesc: "Premium-Makler in Hamburg für Harvestehude, Blankenese, HafenCity und Uhlenhorst. Hanseatische Diskretion. Kostenfreie Bewertung in 72 Stunden.",
    h1: "Immobilienmakler Hamburg",
    heroLead: "Hanseatische Zurückhaltung, gepaart mit klaren Preisen. Immobilien-Exzellenz in Harvestehude, Blankenese, HafenCity und allen A-Lagen der Hansestadt.",
    image: "/images/cities/hamburg.jpg",
    mainContent: "Der Hamburger Immobilienmarkt 2026. Hamburg ist der zweitgrößte Immobilienmarkt Deutschlands und geprägt von hanseatischer Kaufmannstradition. Die Stadt unterscheidet drei klare Premium-Segmente: Alstervillen — die traditionelle Hamburger Oberschicht entlang Außen- und Binnenalster, Elbvororte — von Othmarschen bis Blankenese mit Blick auf den Strom, und HafenCity — das moderne Premium-Segment.",
    faqs: [
      { q: "Was kostet eine Wohnung in Harvestehude?", a: "Der Durchschnittspreis liegt bei rund 8.200 €/m² für Wohnungen. Altbauvilla-Wohnungen an der Außenalster erreichen deutlich höhere Preise von bis zu 12.000 €/m²." },
      { q: "Wie teuer ist Blankenese?", a: "Blankenese ist mit durchschnittlich 8.500 €/m² für Wohnungen die gehobene Adresse an der Elbe. Villen mit Ausblick beginnen ab 4 Millionen Euro." },
    ]
  }
}

export async function generateStaticParams() {
  return Object.keys(standorte).map((key) => ({
    standort: key,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ standort: string }> }) {
  const { standort: standortKey } = await params
  const standort = standorte[standortKey]
  const url = `https://abels-immobilien.de/standorte/${standortKey}`
  return {
    title: standort?.metaTitle || 'Standort | Abels Immobilien',
    description: standort?.metaDesc || '',
    keywords: [
      `Immobilienmakler ${standort?.name}`,
      `Immobilien ${standort?.name}`,
      `Haus verkaufen ${standort?.name}`,
      `Wohnung kaufen ${standort?.name}`,
      `Premium Makler ${standort?.name}`,
      'Abels Immobilien',
    ],
    openGraph: {
      title: standort?.metaTitle || 'Standort | Abels Immobilien',
      description: standort?.metaDesc || '',
      url,
      type: 'website' as const,
      locale: 'de_DE',
      siteName: 'Abels Immobilien',
    },
    alternates: {
      canonical: url,
    },
  }
}

export default async function StandortDetailPage({ params }: { params: Promise<{ standort: string }> }) {
  const { standort: standortKey } = await params
  const standort = standorte[standortKey]

  if (!standort) {
    return <div>Standort nicht gefunden</div>
  }

  const faqSchema = standort.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: standort.faqs.map((faq: any) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  } : null

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: `Abels Immobilien ${standort.name}`,
    url: `https://abels-immobilien.de/standorte/${standortKey}`,
    description: standort.metaDesc,
    areaServed: { '@type': 'City', name: standort.name },
    parentOrganization: { '@type': 'Organization', name: 'Abels Immobilien GmbH' },
  }

  return (
    <main className="bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Header />

      {/* Hero mit Bild */}
      <section className="relative h-96 lg:h-[500px] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={standort.image}
            alt={standort.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-ink/20 to-ink/80" />
        <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 pb-12 w-full">
          <h1 className="font-serif text-5xl lg:text-6xl text-white" style={{ textShadow: '0 2px 32px rgba(0,0,0,0.7)' }}>
            {standort.h1}
          </h1>
          <p className="text-white/90 text-lg lg:text-xl mt-4 max-w-[60ch]">
            {standort.heroLead}
          </p>
        </div>
      </section>

      {/* Hauptcontent */}
      <section className="py-32 lg:py-40 bg-cream">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <p className="text-graphite text-lg leading-relaxed mb-12">
            {standort.mainContent}
          </p>

          {/* Preiстabelle falls vorhanden */}
          {standort.priceTable && (
            <div className="mt-20 mb-20">
              <h2 className="font-serif text-3xl text-ink mb-8">Immobilienpreise {standort.name} — Stand Q1 2026</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-line">
                      <th className="text-left text-ink font-serif px-4 py-3">Stadtteil</th>
                      <th className="text-center text-ink font-serif px-4 py-3">Wohnung €/m²</th>
                      <th className="text-center text-ink font-serif px-4 py-3">Haus €/m²</th>
                      <th className="text-center text-ink font-serif px-4 py-3">Miete €/m²</th>
                      <th className="text-center text-ink font-serif px-4 py-3">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standort.priceTable.map((row: any, i: number) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-bone/50'}>
                        <td className="text-graphite px-4 py-3 border-b border-line">{row.stadtteil}</td>
                        <td className="text-center text-graphite px-4 py-3 border-b border-line">{row.wohnung}</td>
                        <td className="text-center text-graphite px-4 py-3 border-b border-line">{row.haus}</td>
                        <td className="text-center text-graphite px-4 py-3 border-b border-line">{row.miete}</td>
                        <td className="text-center text-graphite px-4 py-3 border-b border-line">{row.trend}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* FAQ */}
          {standort.faqs && (
            <div className="mt-20">
              <h2 className="font-serif text-3xl text-ink mb-8">Häufig gestellte Fragen</h2>
              <div className="space-y-6">
                {standort.faqs.map((faq: any, i: number) => (
                  <div key={i}>
                    <h3 className="font-serif text-xl text-ink mb-3">{faq.q}</h3>
                    <p className="text-graphite leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-20 pt-20 border-t border-line">
            <Link
              href="/bewertung"
              className="inline-flex items-center justify-center bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.1em] hover:bg-graphite transition-colors"
            >
              Kostenlose Bewertung anfordern
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
