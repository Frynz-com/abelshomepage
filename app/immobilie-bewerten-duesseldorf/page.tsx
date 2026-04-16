"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export default function ImmobilieBewertung() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <section className="pt-40 pb-24 px-6 max-w-5xl mx-auto">
        <p className="text-gold text-xs uppercase tracking-[0.2em] mb-4">Immobilienbewertung</p>
        <h1 className="font-serif text-5xl lg:text-6xl text-ink tracking-[-0.02em] leading-[1.05] mb-8">
          Ihre Immobilie in Düsseldorf bewerten lassen
        </h1>
        <p className="text-graphite text-xl leading-relaxed mb-16 max-w-3xl">
          Sie möchten wissen, was Ihre Wohnung, Ihr Haus oder Ihre Villa aktuell wert ist? Die kostenfreie Bewertung von Abels Immobilien ist der erste Schritt — ob Sie verkaufen, neu refinanzieren oder einfach Ihren Vermögensstand klären möchten.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-serif text-3xl text-ink mb-8">Warum professionelle Bewertung?</h2>
            <ul className="space-y-6">
              {[
                { title: "Realistische Preise", desc: "Nicht zu optimistisch, nicht zu pessimistisch — basiert auf echten Vergleichsdaten und Marktkenntnis." },
                { title: "Grundlage für Entscheidungen", desc: "Ob Verkauf, Vererbung, Refinanzierung oder Steuer-Feststellung — Sie treffen informierte Entscheidungen." },
                { title: "Schutz vor Überraschungen", desc: "Keine unerwarteten Preiseinbußen beim Verkauf wegen falscher Anfangseinschätzung." },
                { title: "Verhandlung & Sicherheit", desc: "Mit realistischem Wert können Sie selbstsicher verhandeln und werden nicht ausgenutzt." },
                { title: "Steuer- & Erbrecht", desc: "Offizielle Bewertung für Erbschaftsteuer, Schenkungsteuer oder Vermögensaufstellung." },
                { title: "Finanzierungsverhandlung", desc: "Ein realistischer Wert ist die Basis für bessere Kreditkonditionen bei der Bank." }
              ].map((item) => (
                <li key={item.title} className="border-l-2 border-gold pl-4">
                  <p className="font-serif text-lg text-ink mb-2">{item.title}</p>
                  <p className="text-graphite text-sm">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-line p-10">
            <h3 className="font-serif text-2xl text-ink mb-6">Bewertungs-Ablauf</h3>
            <div className="space-y-6">
              <div>
                <p className="font-serif text-ink mb-2">Schritt 1: Telefonische Vorqualifikation</p>
                <p className="text-graphite text-sm">Erste Eckdaten: Objekttyp, Lage, Größe, Alter, Zustand.</p>
              </div>
              <div>
                <p className="font-serif text-ink mb-2">Schritt 2: Vor-Ort-Besichtigung</p>
                <p className="text-graphite text-sm">Ein Experte besucht Ihre Immobilie und dokumentiert alle Besonderheiten.</p>
              </div>
              <div>
                <p className="font-serif text-ink mb-2">Schritt 3: Datenauswertung</p>
                <p className="text-graphite text-sm">Wir vergleichen mit ähnlichen Objekten, analysieren Markttrends.</p>
              </div>
              <div>
                <p className="font-serif text-ink mb-2">Schritt 4: Bewertungsbericht</p>
                <p className="text-graphite text-sm">Innerhalb 72 Stunden erhalten Sie eine detaillierte Bewertung.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24 bg-white border border-line p-12">
          <h2 className="font-serif text-3xl text-ink mb-6">Was fließt in die Bewertung ein?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-lg text-ink mb-4">Objektmerkmale</h3>
              <ul className="space-y-2 text-graphite text-sm">
                <li>• Wohnfläche und Grundstücksgröße</li>
                <li>• Baujahr und Zustand</li>
                <li>• Anzahl Zimmer, Bäder, Stellplätze</li>
                <li>• Ausstattung und Sanierungsstand</li>
                <li>• Energieausweis (EH-Klasse)</li>
                <li>• Besonderheiten (Balkon, Terrasse, Pool)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg text-ink mb-4">Markt & Lage</h3>
              <ul className="space-y-2 text-graphite text-sm">
                <li>• Stadtteil und Lage-Qualität</li>
                <li>• Infrastruktur (Schulen, Einkaufen)</li>
                <li>• Nähe zu Parks, Rhein, Verkehr</li>
                <li>• Nachbarschaft und Reputation</li>
                <li>• Aktuelle Markttrends Q1 2026</li>
                <li>• Vergleichsobjekte in der Region</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Häufig gefragt: Bewertung & Preisfindung</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: "Wie genau ist eine Immobilienbewertung?", a: "Eine professionelle Bewertung ist auf ±5–10% genau. Die finale Marktpreis hängt aber auch von Verhandlung und Marktlage ab." },
              { q: "Brauche ich ein offizielles Wertgutachten?", a: "Für Verkauf: eher informativ. Für Erbschaft/Schenkung/Steuern: Ja, dann brauchen Sie ein offizielles Gutachten." },
              { q: "Was ist der Unterschied zwischen Angebotspreis und realem Wert?", a: "Der Angebotspreis ist oft 5–15% höher. Nur Immobilien unter Marktwert verkaufen schneller." },
              { q: "Wie wirkt sich Energieeffizienz auf den Wert aus?", a: "Sehr stark. Eine EH70 ist 10–15% günstiger als EH40. Modernisierung kann sich rentieren." },
              { q: "Kann sich der Wert in kurzer Zeit ändern?", a: "Ja. Marktveränderungen, Zinssatz-Anpassungen und Nachbarschafts-Entwicklung beeinflussen den Wert." },
              { q: "Kostet die Bewertung wirklich nichts?", a: "Ja, 100% kostenlos und unverbindlich. Wir verdienen erst bei einem Verkauf." }
            ].map((faq) => (
              <div key={faq.q} className="border-l-4 border-gold pl-6">
                <p className="font-serif text-ink mb-2">{faq.q}</p>
                <p className="text-graphite text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24 bg-gold/10 border border-gold/30 p-10 rounded-sm">
          <h2 className="font-serif text-2xl text-ink mb-4">Wie wird der Preis pro Quadratmeter bestimmt?</h2>
          <p className="text-graphite mb-6">Der €/m²-Preis ist die wichtigste Kennzahl bei der Bewertung. Hier sind Richtwerte für Düsseldorf Q1 2026:</p>
          <div className="space-y-4">
            {[
              { type: "Eigentumswohnungen", ranges: ["Top-Lagen: € 8.500–10.500/m²", "Mittlere Lagen: € 6.500–8.000/m²", "Randlagen: € 4.500–6.000/m²"] },
              { type: "Einfamilienhäuser", ranges: ["Priviligierte Lagen: € 8.000–11.000/m²", "Gute Wohnlagen: € 6.000–8.000/m²", "Durchschnittliche Lagen: € 4.500–6.000/m²"] },
              { type: "Villen & Penthouse", ranges: ["Premium-Lagen: € 12.000–15.000+/m²", "Gute Lagen: € 10.000–13.000/m²", "Attraktive Lagen: € 8.500–11.000/m²"] }
            ].map((item) => (
              <div key={item.type} className="bg-white p-4 rounded-sm">
                <p className="font-serif text-ink mb-3">{item.type}</p>
                <ul className="space-y-1 text-graphite text-sm">
                  {item.ranges.map((range) => (
                    <li key={range}>• {range}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-stone italic mt-6">Hinweis: Dies sind Orientierungswerte. Der tatsächliche Wert hängt von Objektzustand, Ausstattung, Sanierungsstand und Marktsituation ab.</p>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Nächste Schritte nach der Bewertung</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Sie möchten verkaufen", desc: "Wir unterstützen Sie mit professioneller Vermarktung, Exposé und Käufersuche." },
              { title: "Sie möchten halten", desc: "Sie kennen jetzt den Vermögenswert Ihrer Immobilie für Versicherung und Finanzplanung." },
              { title: "Sie möchten refinanzieren", desc: "Mit realem Wert können Sie bessere Kreditkonditionen bei der Bank verhandeln." },
              { title: "Sie planen die Vererbung", desc: "Für Erbschaftsteuer und Aufteilung unter Erben — ein offizielles Gutachten ist dann nötig." },
              { title: "Sie überlegen noch", desc: "Kein Problem. Sie haben die Information und können in Ruhe entscheiden." },
              { title: "Sie benötigen Beratung", desc: "Unser Team beantwortet alle Ihre Fragen zum Immobilienwert und den nächsten Schritten." }
            ].map((step) => (
              <div key={step.title} className="bg-white border border-line p-6">
                <h3 className="font-serif text-lg text-ink mb-3">{step.title}</h3>
                <p className="text-graphite text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Jetzt kostenfrei bewerten lassen</h2>
          <p className="text-graphite text-lg mb-8">
            Sie haben nur 2 Möglichkeiten: Entweder Sie treffen die Entscheidung ohne alle Informationen — oder Sie lassen Ihre Immobilie jetzt kostenlos bewerten und treffen dann eine informierte Entscheidung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-graphite transition-colors font-medium"
            >
              Kostenfreie Bewertung vereinbaren
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
