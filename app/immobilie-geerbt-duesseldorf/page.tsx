"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export default function ImmobilieGeerbtDuesseldorf() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <section className="pt-40 pb-24 px-6 max-w-5xl mx-auto">
        <p className="text-gold text-xs uppercase tracking-[0.2em] mb-4">Erbimmobilien</p>
        <h1 className="font-serif text-5xl lg:text-6xl text-ink tracking-[-0.02em] leading-[1.05] mb-8">
          Sie haben eine Immobilie geerbt? Das sollten Sie wissen.
        </h1>
        <p className="text-graphite text-xl leading-relaxed mb-16 max-w-3xl">
          Ein Erbe ist oft gleichzeitig eine rechtliche und finanzielle Herausforderung. Wir unterstützen Erben und Erbengemeinschaften in Düsseldorf — von der Bewertung über den Verkauf bis zur fairen Aufteilung unter Miterbern.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-serif text-3xl text-ink mb-8">Häufige Fragen bei Erbfall</h2>
            <ul className="space-y-6">
              {[
                { q: "Was ist die Immobilie wert?", a: "Erste Schritt: Kostenfreie Bewertung. Das klärt den Vermögenswert für Erbschaftsteuer und Aufteilung." },
                { q: "Soll ich verkaufen oder halten?", a: "Das hängt ab: Sind Sie selbst die Immobilie, brauchen Sie das Geld, oder sind Sie Teil einer Erbengemeinschaft?" },
                { q: "Müssen alle Erben zustimmen?", a: "Ja, in einer Erbengemeinschaft benötigt jeder Verkauf die Zustimmung aller Erben." },
                { q: "Wen bezahl ich zuerst — Bank, Makler oder Notar?", a: "Die Reihenfolge ist wichtig. Wir erklären es Ihnen genau — und begleiten die komplette Abwicklung." },
                { q: "Gibt es Steuern auf den Verkauf?", a: "Ja — Erbschaftsteuer (beim Erbe), ggfs. Spekulationssteuer (wenn unter 10 Jahren verkauft). Ein Steuerberater hilft." },
                { q: "Wie lange dauert ein Erbimmobilien-Verkauf?", a: "Mit Abels: 6–12 Wochen von Erstgespräch bis Notartermin, abhängig von Erbenanzahl und Komplexität." }
              ].map((item) => (
                <li key={item.q} className="border-l-2 border-gold pl-4">
                  <p className="font-serif text-ink mb-2">{item.q}</p>
                  <p className="text-graphite text-sm">{item.a}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-line p-10">
            <h3 className="font-serif text-2xl text-ink mb-6">Rechtliche & finanzielle Schritte</h3>
            <ol className="space-y-4 text-graphite text-sm">
              <li><strong>1. Erbschein beantragen</strong> — beim Amtsgericht, um Ihre Erbenstellung nachzuweisen.</li>
              <li><strong>2. Testament & Erbfolge klären</strong> — mit Notar oder Rechtsanwalt, falls Streit droht.</li>
              <li><strong>3. Immobilie bewerten</strong> — für Erbschaftsteuer und faire Aufteilung.</li>
              <li><strong>4. Finanzierung klären</strong> — falls Sie Erben auszahlen müssen.</li>
              <li><strong>5. Verkauf planen</strong> — wenn Sie die Immobilie nicht halten möchten.</li>
              <li><strong>6. Makler beauftragen</strong> — für professionelle Vermarktung und Abwicklung.</li>
              <li><strong>7. Notar</strong> — für Kaufvertrag und Grundbucheintrag.</li>
              <li><strong>8. Aufteilung</strong> — Erlös wird entsprechend den Erbquoten verteilt.</li>
            </ol>
          </div>
        </div>

        <div className="mb-24 bg-white border border-line p-12">
          <h2 className="font-serif text-3xl text-ink mb-6">Spezialfälle: Erbengemeinschaft</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl text-ink mb-3">Szenario 1: Alle Erben sind einig — Verkauf</h3>
              <p className="text-graphite mb-4">
                Wenn alle Erben zustimmen, ist der Verkauf relativ unkompliziert. Wir vermarkten die Immobilie, und der Erlös wird entsprechend den Erbquoten verteilt. Ein Erbe kann den anderen ausgezahlt werden.
              </p>
              <p className="text-graphite text-sm text-stone italic">
                → Abels übernimmt die komplette Vermarktung und Abwicklung, Sie kümmern sich um nichts.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-ink mb-3">Szenario 2: Ein Erbe will behalten, andere verkaufen</h3>
              <p className="text-graphite mb-4">
                Einer kauft die anderen aus — das klingt einfach, ist aber rechtlich komplex. Bewertung, Finanzierung und Auszahlung müssen stimmen. Fehler sind teuer.
              </p>
              <p className="text-graphite text-sm text-stone italic">
                → Wir helfen mit ehrlicher Bewertung, damit die Auszahlung fair ist.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-ink mb-3">Szenario 3: Keine Einigung — Teilungsversteigerung?</h3>
              <p className="text-graphite mb-4">
                Wenn Erben nicht einig werden, kann es zur Teilungsversteigerung kommen — das ist für alle nachteilig. Der Preis fällt oft 20–30% unter Marktwert. Besser: mediieren und gemeinsam verkaufen.
              </p>
              <p className="text-graphite text-sm text-stone italic">
                → Wir moderieren zwischen Erben und finden faire Lösungen — das vermeidet Gerichtskosten.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Erbschaftsteuer und Steuern</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-lg text-ink mb-4">Erbschaftsteuer beim Empfänger</h3>
              <p className="text-graphite text-sm mb-4">
                Die Erbschaftsteuer ist abhängig vom Steuerfreibetrag und der Steuerklasse:
              </p>
              <ul className="space-y-2 text-graphite text-sm">
                <li>• <strong>Ehepartner:</strong> € 400.000 Freibetrag, Klasse I</li>
                <li>• <strong>Kinder:</strong> € 400.000 Freibetrag, Klasse I</li>
                <li>• <strong>Enkel:</strong> € 200.000 Freibetrag, Klasse I</li>
                <li>• <strong>Sonstige Erben:</strong> € 20.000 Freibetrag, Klasse III</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg text-ink mb-4">Spekulationssteuer beim Verkauf</h3>
              <p className="text-graphite text-sm mb-4">
                Wenn Sie die Immobilie innerhalb 10 Jahren verkaufen, müssen Sie Spekulationssteuer zahlen. Ausnahme: es ist Ihr Hauptwohnsitz.
              </p>
              <ul className="space-y-2 text-graphite text-sm">
                <li>• Satz: 19% + Solidaritätszuschlag</li>
                <li>• Basis: Verkaufspreis minus Kaufpreis</li>
                <li>• 10-Jahres-Regel: Nach 10 Jahren steuerfrei</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-24 bg-gold/10 border border-gold/30 p-10 rounded-sm">
          <h2 className="font-serif text-2xl text-ink mb-4">Kostenübersicht bei Erbimmobilien-Verkauf</h2>
          <div className="space-y-3 text-graphite">
            <p><strong>Maklergebühr:</strong> 3,57% inkl. MwSt. (nur im Erfolgsfall, nach Verkauf fällig)</p>
            <p><strong>Notar:</strong> ca. 1,5–2% des Kaufpreises</p>
            <p><strong>Erbschein:</strong> ca. € 50–300 (je nach Vermögensumfang)</p>
            <p><strong>Grundbucheintrag:</strong> ca. € 10–20</p>
            <p><strong>Rechtsberatung (optional):</strong> ca. € 500–2.000 (wenn nötig)</p>
            <p className="text-sm text-stone italic mt-4">Bei Abels: Makler-Marketing 100% kostenlos — Fotos, Videos, Exposé sind im Service enthalten.</p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Unser Erbimmobilien-Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Erbenberatung & Koordination", desc: "Wir helfen allen Erben zu verstehen, was ihre Optionen sind — verkaufen, halten oder auszahlen." },
              { title: "Realistische Bewertung", desc: "Unabhängige, ehrliche Marktbewertung für faire Aufteilung und Erbschaftsteuer-Feststellung." },
              { title: "Vermarktung & Verkauf", desc: "Professionelle Vermarktung der Erbimmobilie — schnell und zum besten Preis." },
              { title: "Rechtliche Begleitung", desc: "Zusammenarbeit mit Notaren und Steuerberatern — alle Schritte sind korrekt und sauber." },
              { title: "Erlös-Aufteilung", desc: "Transparente Abrechnung und Aufteilung des Verkaufserlöses nach Erbquoten." },
              { title: "Mediation bei Streit", desc: "Falls sich Erben nicht einig sind, helfen wir bei der Findung von fairen, praktikablen Lösungen." }
            ].map((service) => (
              <div key={service.title} className="border-l-4 border-gold pl-6">
                <h3 className="font-serif text-lg text-ink mb-2">{service.title}</h3>
                <p className="text-graphite text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Typischer Ablauf: Erbfall → Verkauf (8–12 Wochen)</h2>
          <div className="space-y-4">
            {[
              { week: "Woche 1–2", title: "Erstgespräch & Bewertung", desc: "Sie schildern die Situation, wir bewerten die Immobilie kostenlos, alle Fragen werden beantwortet." },
              { week: "Woche 2–3", title: "Erbschein & Dokumenten", desc: "Erbschein wird beantragt, Testament geklärt, alle Unterlagen für Verkauf werden zusammengestellt." },
              { week: "Woche 3–4", title: "Vermarktung startet", desc: "Professionelle Fotos, Videos, Exposé und Annoncen — aktive Interessenten-Akquisition." },
              { week: "Woche 4–6", title: "Besichtigungen & Verhandlungen", desc: "Qualifizierte Interessenten besichtigen, Preisverhandlungen führen zum besten Ergebnis." },
              { week: "Woche 6–8", title: "Kaufvertrag & Notar", desc: "Kaufvertrag wird vorbereitet, alle Details geklärt, Notartermin vereinbart." },
              { week: "Woche 8–10", title: "Notarielle Beurkundung", desc: "Kaufvertrag wird beurkundet, Finanzierung abgewickelt, Kaufpreis überwiesen." },
              { week: "Woche 10–12", title: "Übergabe & Aufteilung", desc: "Grundbuch wird aktualisiert, Erlös wird auf Erbquoten verteilt, Abrechnung erfolgt." }
            ].map((step) => (
              <div key={step.week} className="bg-white border border-line p-6 flex gap-6">
                <div className="flex-shrink-0">
                  <span className="font-serif text-lg text-gold font-bold">{step.week}</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-ink mb-1">{step.title}</h3>
                  <p className="text-graphite text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-ink mb-8">Jetzt Erbimmobilien-Beratung vereinbaren</h2>
          <p className="text-graphite text-lg mb-8">
            Sie haben eine Immobilie geerbt und wissen nicht, wie es weitergeht? Wir helfen Ihnen mit kostenfreier, unverbindlicher Beratung — und übernehmen die komplette Abwicklung, damit Sie sich um Trauer und Familie kümmern können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-graphite transition-colors font-medium"
            >
              Kostenfreie Beratung zum Erbfall
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
