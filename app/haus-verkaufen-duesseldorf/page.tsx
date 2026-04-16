"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export default function HausVerkaufenDuesseldorf() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <section className="pt-40 pb-24 px-6 max-w-5xl mx-auto">
        <p className="text-gold text-xs uppercase tracking-[0.2em] mb-4">Haus verkaufen</p>
        <h1 className="font-serif text-5xl lg:text-6xl text-ink tracking-[-0.02em] leading-[1.05] mb-8">
          Ihr Einfamilienhaus in Düsseldorf verkaufen
        </h1>
        <p className="text-graphite text-xl leading-relaxed mb-16 max-w-3xl">
          Sie möchten Ihr Einfamilienhaus in Düsseldorf verkaufen? Abels Immobilien bietet umfassende Unterstützung für den erfolgreichen Hausverkauf — von der realistischen Bewertung über hochwertige Vermarktung bis zur professionellen Verhandlung mit qualifizierten Käufern.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-serif text-3xl text-ink mb-8">Hausverkauf mit System</h2>
            <ul className="space-y-6">
              {[
                { title: "Marktgerechte Bewertung", desc: "Realistischer Preis basiert auf Vergleichsobjekten, Lage, Zustand und aktuellen Markttrends." },
                { title: "Hochwertige Präsentation", desc: "Drohnenaufnahmen, 360°-Rundgänge, professionelle Fotos und Videotour — Ihr Haus bekommt die beste Darstellung." },
                { title: "Zielgerichtete Käufersuche", desc: "Nur qualifizierte Kaufinteressenten mit nachgewiesener Finanzierungsfähigkeit." },
                { title: "Diskrete Verhandlungsführung", desc: "Wir verhandeln Kaufpreis und Bedingungen für Sie — anonym und ohne Konfrontation." },
                { title: "Effiziente Abwicklung", desc: "Strukturierter Prozess vom Erstgespräch bis zum Notartermin." },
                { title: "Vollständige Begleitung", desc: "Alle organisatorischen Details und Finanzierungsabwicklung in einer Hand." }
              ].map((item) => (
                <li key={item.title} className="border-l-2 border-gold pl-4">
                  <p className="font-serif text-lg text-ink mb-2">{item.title}</p>
                  <p className="text-graphite text-sm">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-line p-10">
            <h3 className="font-serif text-2xl text-ink mb-6">Häufig gefragt</h3>
            <div className="space-y-6">
              <div>
                <p className="font-serif text-ink mb-2">Welche Unterlagen brauche ich für den Hausverkauf?</p>
                <p className="text-graphite text-sm">Grundbuchauszug, Energieausweis, Grundrisse, Flurkarte, Bauunterlagen falls vorhanden, Belege für Renovierungen und Modernisierungen.</p>
              </div>
              <div>
                <p className="font-serif text-ink mb-2">Wie wird der Hauspreis bestimmt?</p>
                <p className="text-graphite text-sm">Vergleich mit ähnlich verkauften Häusern in derselben Lage, Berücksichtigung von Zustand, Ausstattung, Baujahr und Energieeffizienz.</p>
              </div>
              <div>
                <p className="font-serif text-ink mb-2">Was kostet die Vermarktung?</p>
                <p className="text-graphite text-sm">Bei Abels komplett kostenlos — Fotos, Videos, Drohnenaufnahmen, Annoncen und Exposé sind im Service enthalten.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Markt für Einfamilienhäuser in Düsseldorf (Q1 2026)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl text-ink mb-4">Preise pro m² Wohnfläche</h3>
              <div className="space-y-3 text-graphite">
                <p><strong>Privilegierte Lagen</strong> (Oberkassel, Kaiserswerth, Grafenberg): 8.000–11.000 €/m²</p>
                <p><strong>Gute Wohnlagen</strong> (Düsseltal, Pempelfort, Golzheim): 6.000–8.000 €/m²</p>
                <p><strong>Durchschnittliche Lagen</strong> (Gerresheim, Ludenberg): 4.500–6.000 €/m²</p>
                <p className="text-sm text-stone italic mt-4">Preisspanne hängt stark von Baujahr, Zustand und energetischem Standard ab.</p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl text-ink mb-4">Besonderheiten beim Hausverkauf</h3>
              <ul className="space-y-3 text-graphite">
                <li className="flex gap-3">
                  <span className="text-gold">—</span>
                  <span><strong>Energieausweis ist Pflicht</strong> — mangelhaft isolierte Häuser verkaufen schwerer</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">—</span>
                  <span><strong>Garten ist großer Vorteil</strong> — Käufer bewerten grüne Fläche sehr positiv</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">—</span>
                  <span><strong>Parkplatz entscheidend</strong> — vor allem in Düsseldorf-Zentrum wertvoll</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">—</span>
                  <span><strong>Ausbaupotenzial attraktiv</strong> — Dachausbau, Keller-Nutzung wirkt sich positiv auf Preis aus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-24 bg-white border border-line p-12">
          <h2 className="font-serif text-3xl text-ink mb-6">Beliebte Wohnlagen für Häuser</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Oberkassel", price: "8.000–11.000 €/m²", desc: "Exklusive Rheinlage, große Grundstücke, Top-Käufer." },
              { name: "Grafenberg", price: "7.500–9.500 €/m²", desc: "Grüne Wohnlage, beliebter bei Familien." },
              { name: "Golzheim", price: "6.500–8.000 €/m²", desc: "Ruhig, grün, gute Schulen und Infrastruktur." },
              { name: "Eller", price: "5.500–7.000 €/m²", desc: "Aufstrebend, gutes Preis-Leistungs-Verhältnis." },
              { name: "Unterrath", price: "5.000–6.500 €/m²", desc: "Grüne Lage, Nähe zum Rhein, wertstabil." },
              { name: "Hellerhof", price: "4.500–5.500 €/m²", desc: "Ruhig, günstig, weniger gewerbliche Nutzung." }
            ].map((lage) => (
              <div key={lage.name} className="border-l-4 border-gold pl-6">
                <h3 className="font-serif text-lg text-ink mb-1">{lage.name}</h3>
                <p className="text-gold text-sm font-medium mb-2">{lage.price}</p>
                <p className="text-graphite text-sm">{lage.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">6 Schritte zum erfolgreichen Hausverkauf</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Termin & Bewertung", desc: "Kostenfreies Gespräch vor Ort, ehrliche Preiseinschätzung." },
              { num: "2", title: "Vermarktungskonzept", desc: "Professionelle Fotos, Videos, Drohnenaufnahmen, detailliertes Exposé." },
              { num: "3", title: "Interessenten-Akquisition", desc: "Gezielte Ansprache qualifizierter Käufer aus unserem Netzwerk." },
              { num: "4", title: "Besichtigung & Verhandlung", desc: "Professionelle Besichtigungen, Verhandlung für Sie." },
              { num: "5", title: "Kaufvertrag & Notariat", desc: "Vorbereitung aller Unterlagen, Begleitung zum Notar." },
              { num: "6", title: "Übergabe", desc: "Schlüsselübergabe, finale Abrechnung, Provisionsausgleich." }
            ].map((step) => (
              <div key={step.num} className="bg-white border border-line p-6">
                <span className="font-serif text-3xl text-gold">{step.num}</span>
                <h3 className="font-serif text-lg text-ink mt-2 mb-2">{step.title}</h3>
                <p className="text-graphite text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gold/10 border border-gold/30 p-10 rounded-sm mb-24">
          <h2 className="font-serif text-2xl text-ink mb-4">Kosten beim Hausverkauf</h2>
          <div className="space-y-4 text-graphite">
            <p><strong>Maklerprovision:</strong> 3,57% inkl. MwSt. (nur im Erfolgsfall, meist geteilt)</p>
            <p><strong>Grundbuchauszug:</strong> ca. 10–20 €</p>
            <p><strong>Notar & Registereintrag:</strong> ca. 1,5–2% des Kaufpreises</p>
            <p><strong>Marketing:</strong> Kostenlos bei Abels Immobilien</p>
            <p className="text-sm text-stone italic">Wir arbeiten nach dem Erfolgsmodell — Sie zahlen nur, wenn Ihr Haus tatsächlich verkauft ist.</p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Noch Fragen?</h2>
          <p className="text-graphite text-lg mb-8">
            Gerne unterstützen wir Sie mit einer kostenfreien Bewertung und unverbindlichen Beratung zum Verkauf Ihres Hauses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-graphite transition-colors font-medium"
            >
              Kostenfreie Bewertung anfragen
            </button>
            <Link 
              href="/standorte/duesseldorf"
              className="inline-flex items-center justify-center border-2 border-ink text-ink px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-ink/5 transition-colors font-medium"
            >
              Zurück zu Immobilienmakler Düsseldorf
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}
