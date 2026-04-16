"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export default function WohnungVerkaufenDuesseldorf() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      
      <section className="pt-40 pb-24 px-6 max-w-5xl mx-auto">
        <p className="text-gold text-xs uppercase tracking-[0.2em] mb-4">Wohnung verkaufen</p>
        <h1 className="font-serif text-5xl lg:text-6xl text-ink tracking-[-0.02em] leading-[1.05] mb-8">
          Ihre Wohnung in Düsseldorf verkaufen
        </h1>
        <p className="text-graphite text-xl leading-relaxed mb-16 max-w-3xl">
          Sie besitzen eine Eigentumswohnung in Düsseldorf und möchten diese verkaufen? Abels Immobilien unterstützt Sie mit professioneller Vermarktung, diskreter Käufersuche und fairer Preisverhandlung. Von der kostenlosen Bewertung bis zur notariellen Übergabe — wir begleiten Sie persönlich durch jeden Schritt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-serif text-3xl text-ink mb-8">Warum Wohnungsverkauf mit Abels?</h2>
            <ul className="space-y-6">
              {[
                { title: "Realistische Bewertung", desc: "Kostenfreie Vor-Ort-Analyse basiert auf aktuellen Vergleichsobjekten in Ihrer Lage — keine leeren Versprechungen." },
                { title: "Hochwertige Vermarktung", desc: "Professionelle Fotos, Drohnenaufnahmen, 360°-Videos und detaillierte Exposés präsentieren Ihre Wohnung optimal." },
                { title: "Qualifizierte Käufer", desc: "Kein Besichtigungsmarathon: Wir prüfen Kaufinteressenten auf Finanzierungsfähigkeit und ernsthafte Absicht." },
                { title: "Diskrete Verhandlung", desc: "Wir führen Preisverhandlungen für Sie und schützen Ihre Privatsphäre während des gesamten Prozesses." },
                { title: "Effizienter Verkauf", desc: "Strukturierter Prozess vom Erstgespräch bis zur Notarbeurkundung - bei höchster Sicherheit." },
                { title: "Vollständige Begleitung", desc: "Von der Exposé-Erstellung bis zur Finanzierungsabwicklung — wir kümmern uns um alle Details." }
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
                <p className="font-serif text-ink mb-2">Wie lange dauert es, eine Wohnung in Düsseldorf zu verkaufen?</p>
                <p className="text-graphite text-sm">Die Verkaufsdauer hängt von Lage und Preis ab. In gefragten Lagen wie Oberkassel, Kaiserswerth oder Düsseltal verkaufen sich marktgerecht eingepreiste Wohnungen oft innerhalb weniger Wochen.</p>
              </div>
              <div>
                <p className="font-serif text-ink mb-2">Wie wird meine Wohnung bewertet?</p>
                <p className="text-graphite text-sm">Wir analysieren Vergleichsobjekte in Ihrer Lage, Baujahr, Zustand, Ausstattung und aktuelle Markttrends. Ergebnis: ein realistischer Marktpreis.</p>
              </div>
              <div>
                <p className="font-serif text-ink mb-2">Kann ich meine Wohnung auch ohne öffentliche Anzeige verkaufen?</p>
                <p className="text-graphite text-sm">Ja — mit unserer diskreten Off-Market-Vermarktung. Ideal, wenn Ihnen Privatsphäre wichtig ist.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Wohnungsverkauf in Düsseldorf — Schritt für Schritt</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Bewertung & Gespräch", desc: "Kostenfreies Erstgespräch vor Ort. Wir analysieren Ihre Wohnung und erstellen eine ehrliche Preiseinschätzung." },
              { num: "2", title: "Exposé & Marketing", desc: "Hochwertige Fotos, Videos, Drohnenaufnahmen und professionelle Texte — Ihre Wohnung verdient die beste Präsentation." },
              { num: "3", title: "Interessenten-Vorqualifikation", desc: "Wir filtern nur qualifizierte, finanzierungsfähige Kaufinteressenten. Kein Zeitverschwendung bei ernsthaften Gesprächen." },
              { num: "4", title: "Besichtigungen & Verhandlung", desc: "Wir leiten Besichtigungen professionell und verhandeln Kaufpreis und Bedingungen für Sie." },
              { num: "5", title: "Kaufvertrag & Notariat", desc: "Vorbereitung aller Unterlagen, Begleitung zum Notar und Finanzierungsabwicklung." },
              { num: "6", title: "Übergabe & Abrechnung", desc: "Übergabetermin, Schlüsselübergabe, finale Abrechnung und Provisionsausgleich." }
            ].map((step) => (
              <div key={step.num} className="bg-white border border-line p-6">
                <div className="flex items-start gap-4 mb-3">
                  <span className="font-serif text-3xl text-gold">{step.num}</span>
                  <h3 className="font-serif text-lg text-ink">{step.title}</h3>
                </div>
                <p className="text-graphite text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24 bg-white border border-line p-12">
          <h2 className="font-serif text-3xl text-ink mb-6">Immobilienmarkt Düsseldorf — Aktuelle Lage für Wohnungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl text-ink mb-4">Preise pro m² (Q1 2026)</h3>
              <div className="space-y-3 text-graphite">
                <p><strong>Top-Lagen</strong> (Oberkassel, Kaiserswerth): 8.500–10.500 €/m²</p>
                <p><strong>Mittlere Lagen</strong> (Düsseltal, Pempelfort): 6.500–8.000 €/m²</p>
                <p><strong>Randlagen</strong> (Garath, Reisholz): 4.500–6.000 €/m²</p>
                <p className="text-sm text-stone italic mt-4">Preise sind Orientierungswerte und variieren je nach Objektzustand, Ausstattung und Lage.</p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl text-ink mb-4">Markttrends 2026</h3>
              <ul className="space-y-3 text-graphite">
                <li className="flex gap-3">
                  <span className="text-gold">—</span>
                  <span><strong>Käufernachfrage</strong> bleibt stabil in A-Lagen, moderate Nachfrage in Randlagen</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">—</span>
                  <span><strong>Verkaufsdauer variiert</strong> je nach Lage, Zustand und Angebotspreis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">—</span>
                  <span><strong>Energieeffizienz</strong> wird immer wichtiger — schlecht isolierte Wohnungen verkaufen schwerer</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">—</span>
                  <span><strong>Lage schlägt Größe</strong> — zentrale Lagen mit Balkon und Fensterfront bevorzugt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Beliebte Lagen für Wohnungen in Düsseldorf</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Oberkassel", desc: "Exklusive, grüne Wohnlage am Rhein mit großzügigen Altbauwohnungen. Top-Käufer, Premium-Preise." },
              { name: "Kaiserswerth", desc: "Charmantes Altstadtviertel mit Charakter. Beliebte Wohnlage mit historischem Flair." },
              { name: "Düsseltal", desc: "Zentrale Lage, guter Verkehrsanschluss, beliebt bei jungen Profis und Familien." },
              { name: "Pempelfort", desc: "Lebendiges Viertel mit Kultur- und Gastronomie-Angebot. Wachsende Nachfrage." },
              { name: "Golzheim", desc: "Ruhige, grüne Wohnlage mit guter Infrastruktur und moderaten Preisen." },
              { name: "Carlstadt", desc: "Häufig übersehen, aber solide Wohnlage mit gutem Preis-Leistungs-Verhältnis." }
            ].map((lage) => (
              <div key={lage.name} className="border-l-4 border-gold pl-6">
                <h3 className="font-serif text-lg text-ink mb-2">{lage.name}</h3>
                <p className="text-graphite">{lage.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gold/10 border border-gold/30 p-10 rounded-sm mb-24">
          <h2 className="font-serif text-2xl text-ink mb-4">Kosten für den Wohnungsverkauf</h2>
          <div className="space-y-4 text-graphite">
            <p><strong>Maklerprovision:</strong> 3,57% inkl. MwSt. (im Erfolgsfall fällig, meist geteilt zwischen Käufer und Verkäufer)</p>
            <p><strong>Grundbuchauszug:</strong> ca. 10–20 € (beim Amtsgericht)</p>
            <p><strong>Makler-Marketing:</strong> Kostenlos bei uns (Fotos, Videos, Exposé, Annoncen)</p>
            <p><strong>Notar & Registereintrag:</strong> ca. 1,5–2% des Kaufpreises</p>
            <p className="text-sm text-stone italic">Bei Abels Immobilien zahlen Sie die Provision <strong>nur im Erfolgsfall</strong> — keine Vorauszahlungen, keine versteckten Kosten.</p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Noch Fragen?</h2>
          <p className="text-graphite text-lg mb-8">
            Wir unterstützen Sie gerne bei der Vorbereitung zum Wohnungsverkauf — mit einer kostenlosen, unverbindlichen Bewertung und persönlicher Beratung.
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

        <div className="text-center py-12 border-t border-line">
          <p className="text-graphite text-sm mb-4">
            Absatz vom <Link href="/impressum" className="underline hover:text-ink transition-colors">Impressum</Link> · <Link href="/datenschutz" className="underline hover:text-ink transition-colors">Datenschutz</Link>
          </p>
        </div>
      </section>

      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}
