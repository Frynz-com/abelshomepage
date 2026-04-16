"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export default function VillaVerkaufenDuesseldorf() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <section className="pt-40 pb-24 px-6 max-w-5xl mx-auto">
        <p className="text-gold text-xs uppercase tracking-[0.2em] mb-4">Villa & Luxusimmobilien</p>
        <h1 className="font-serif text-5xl lg:text-6xl text-ink tracking-[-0.02em] leading-[1.05] mb-8">
          Villa oder Penthouse in Düsseldorf verkaufen
        </h1>
        <p className="text-graphite text-xl leading-relaxed mb-16 max-w-3xl">
          Hochwertige Immobilien verdienen einen hochwertige Vermarktung. Abels Immobilien bietet spezialisierten Service für den Verkauf von Villen, Pent­houses und exklusiven Immobilien — diskret, professionell, mit internationalem Netzwerk und ohne Massenmakler-Getümmel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-serif text-3xl text-ink mb-8">Premium-Verkauf mit Abels</h2>
            <ul className="space-y-6">
              {[
                { title: "Spezialisierte Bewertung", desc: "Wir kennen den Markt für Premiumimmobilien in Oberkassel, Grafenberg und Kaiserswerth — realistische, nicht überoptimistische Preise." },
                { title: "Internationale Käufer", desc: "Zugang zu High-Net-Worth-Individuals in Deutschland, Benelux und Skandinavien durch unser Netzwerk." },
                { title: "Diskrete Vermarktung", desc: "Off-Market-Vermarktung für Ihre Villa — nur qualifizierte, seriöse Interessenten erfahren vom Angebot." },
                { title: "Premium-Präsentation", desc: "Professionelle Videoproduktion, Drohnenaufnahmen, Architekturfotografie, virtuelle 3D-Touren." },
                { title: "Geschützte Privatsphäre", desc: "Keine öffentlichen Annoncen, Interessenten-Screening vor Besichtigungen, vollständige Diskretion." },
                { title: "Steuerberatung", desc: "Wir arbeiten eng mit Notaren und Steuerberatern zusammen — alle legalen Aspekte sind geklärt." }
              ].map((item) => (
                <li key={item.title} className="border-l-2 border-gold pl-4">
                  <p className="font-serif text-lg text-ink mb-2">{item.title}</p>
                  <p className="text-graphite text-sm">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-line p-10">
            <h3 className="font-serif text-2xl text-ink mb-6">Luxusmarkt Düsseldorf</h3>
            <div className="space-y-6">
              <div>
                <p className="font-serif text-ink mb-2 text-gold">€ 8.500–15.000+ pro m²</p>
                <p className="text-graphite text-sm">Top-Lagen wie Oberkassel, Grafenberg und Kaiserswerth für Villa-/Penthouse-Neubau und Altbau-Sanierung.</p>
              </div>
              <div>
                <p className="font-serif text-ink mb-2">Käufertypen</p>
                <p className="text-graphite text-sm">Erfolgreiche Unternehmer, Freiberufler, internationale Käufer, Kapitalanleger mit Langfrist-Perspektive.</p>
              </div>
              <div>
                <p className="font-serif text-ink mb-2">Durchschnittliche Verkaufsdauer</p>
                <p className="text-graphite text-sm">60–120 Tage bei fairen Preisen. Off-Market-Verkäufe oft schneller.</p>
              </div>
              <div>
                <p className="font-serif text-ink mb-2">Trends 2026</p>
                <p className="text-graphite text-sm">Smart Home, Nachhaltigkeit (Wärmepumpe, Solar), Homeoffice-Raume und Wellness-Bereiche wertsteigernd.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Die Top-Lagen für Villen und Penthouse in Düsseldorf</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Oberkassel", price: "€ 12.000–15.000+/m²", desc: "König der Premium-Wohnlagen. Rheinblick, großzügige Grundstücke, etablierte Top-Käufer." },
              { name: "Grafenberg", price: "€ 10.000–13.000/m²", desc: "Grüne, ruhige Lage mit herrlichen Villen auf Hanggrundstücken. Familienfreundlich und exklusiv." },
              { name: "Kaiserswerth", price: "€ 9.000–12.000/m²", desc: "Historischer Charme trifft modernen Luxus. Altstadtvilla mit Charakter." },
              { name: "Gerresheim", price: "€ 8.500–11.000/m²", desc: "Aufstrebende Premium-Lage mit modernen Architektenhäusern und großzügigen Grundstücken." }
            ].map((lage) => (
              <div key={lage.name} className="border-l-4 border-gold pl-6">
                <h3 className="font-serif text-lg text-ink mb-1">{lage.name}</h3>
                <p className="text-gold text-sm font-medium mb-2">{lage.price}</p>
                <p className="text-graphite text-sm">{lage.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24 bg-white border border-line p-12">
          <h2 className="font-serif text-3xl text-ink mb-6">Checkliste: Was macht eine Villa wertvoll?</h2>
          <div className="space-y-4 text-graphite">
            <div className="flex gap-4">
              <span className="text-gold font-serif text-2xl">✓</span>
              <div>
                <p className="font-serif text-ink mb-1">Lage mit Panoramablick oder Rheinfront</p>
                <p className="text-sm">Südausrichtung, Fernblick, Nähe zu Parks und Grünflächen.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-gold font-serif text-2xl">✓</span>
              <div>
                <p className="font-serif text-ink mb-1">Großzügige Grundstücksfläche</p>
                <p className="text-sm">Mindestens 1.500–2.000 m² für echte Privatsphäre und Ausbaupotenzial.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-gold font-serif text-2xl">✓</span>
              <div>
                <p className="font-serif text-ink mb-1">Hochwertige Materialien und Handwerk</p>
                <p className="text-sm">Naturstein, Echtholz, Custom-Lösungen, namhafte Architekten-Planung.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-gold font-serif text-2xl">✓</span>
              <div>
                <p className="font-serif text-ink mb-1">Smart-Home und Sicherheit</p>
                <p className="text-sm">Intelligente Gebäudetechnik, Zutrittskontrolle, Alarm- und Überwachungssysteme.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-gold font-serif text-2xl">✓</span>
              <div>
                <p className="font-serif text-ink mb-1">Energieeffizienz & Nachhaltigkeit</p>
                <p className="text-sm">Wärmepumpe, Solar, hochwertige Dämmung, EH55 oder besser.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-gold font-serif text-2xl">✓</span>
              <div>
                <p className="font-serif text-ink mb-1">Wellness & Lifestyle-Features</p>
                <p className="text-sm">Pool, Sauna, Fitnessraum, Homeoffice, Gästeappartement, Premium-Küche.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Prozess: Villa-Verkauf Schritt für Schritt</h2>
          <ol className="space-y-6">
            {[
              { num: "1", title: "Vertrauliches Erstgespräch", desc: "Persönliches Gespräch über Ihre Ziele, Zeitrahmen und Geheimhaltungsanforderungen. Unterzeichnung einer NDA." },
              { num: "2", title: "Spezialisierte Bewertung", desc: "Marktrealistische Preiseinschätzung unter Berücksichtigung aller Besonderheiten Ihrer Villa." },
              { num: "3", title: "Premium-Exposé & Fotografie", desc: "Professionelle Video, Architektur-Fotografie, Drohnenaufnahmen, 3D-Virtual-Tour." },
              { num: "4", title: "Diskrete Käufersuche", desc: "Off-Market-Vermarktung über unser internationales Netzwerk, keine öffentlichen Annoncen." },
              { num: "5", title: "Interessenten-Screening", desc: "Prüfung der Bonität und ernsthafte Absicht vor jeder Besichtigung. Geheimhaltungsvereinbarung." },
              { num: "6", title: "Besichtigung & Verhandlung", desc: "Begleitung bei Besichtigungen, Verhandlung Kaufpreis und Bedingungen für Sie." },
              { num: "7", title: "Notariat & Abwicklung", desc: "Vorbereitung aller Unterlagen, Steuerberatung, Begleitung bis Eintragung ins Grundbuch." }
            ].map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gold text-cream font-serif font-bold">
                    {step.num}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-ink mb-2">{step.title}</h3>
                  <p className="text-graphite">{step.desc}</p>
                </div>
              </div>
            ))}
          </ol>
        </div>

        <div className="bg-gold/10 border border-gold/30 p-10 rounded-sm mb-24">
          <h2 className="font-serif text-2xl text-ink mb-4">Kosten und Provisionen</h2>
          <div className="space-y-4 text-graphite">
            <p><strong>Maklerprovision:</strong> 3,57% inkl. MwSt. (nur bei erfolgreichen Verkauf, Aufteilung verhandelbar)</p>
            <p><strong>Notar:</strong> Ca. 1,5–2% des Kaufpreises</p>
            <p><strong>Marketing & Exposé:</strong> 100% kostenlos bei Abels Immobilien</p>
            <p className="text-sm text-stone italic">Bei hochpreisigen Objekten ab € 2.000.000 können Provisionen verhandelt werden.</p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Jetzt kostenloses Gespräch vereinbaren</h2>
          <p className="text-graphite text-lg mb-8">
            Gerne besprechen wir Ihre spezifische Situation vertraulich und diskret. Eine unverbindliche Bewertung und strategische Beratung zum Verkauf Ihrer Villa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-graphite transition-colors font-medium"
            >
              Vertrauliches Gespräch vereinbaren
            </button>
            <Link 
              href="/standorte/duesseldorf"
              className="inline-flex items-center justify-center border-2 border-ink text-ink px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-ink/5 transition-colors font-medium"
            >
              Zurück zu Immobilienmakler
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}
