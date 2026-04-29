"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft, Check, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Immobilienbewertung: Wie wird der Wert ermittelt?',
  description: 'Die drei Bewertungsverfahren erklärt — Vergleichswert, Sachwert, Ertragswert — und warum der richtige Preis über den Verkaufserfolg entscheidet.',
  author: { '@type': 'Organization', name: 'Abels Immobilien GmbH', url: 'https://abels-immobilien.de' },
  publisher: { '@type': 'Organization', name: 'Abels Immobilien GmbH', url: 'https://abels-immobilien.de' },
  url: 'https://abels-immobilien.de/ratgeber/immobilienbewertung',
  datePublished: '2024-01-01',
  dateModified: '2026-04-01',
  inLanguage: 'de-DE',
}

const faq = [
  {
    q: "Was kostet eine professionelle Immobilienbewertung?",
    a: "Ein zertifiziertes Wertgutachten eines vereidigten Sachverständigen kostet je nach Umfang zwischen 1.500 und 5.000 €. Viele Makler — darunter Abels Immobilien — erstellen eine fundierte Marktpreiseinschätzung kostenlos im Rahmen der Verkaufsberatung.",
  },
  {
    q: "Was ist der Unterschied zwischen Marktwert und Verkehrswert?",
    a: "Rechtlich gesehen sind die Begriffe identisch: Der Verkehrswert (§ 194 BauGB) ist der Preis, der im gewöhnlichen Geschäftsverkehr erzielbar ist. Der Begriff 'Marktwert' wird umgangssprachlich synonym verwendet.",
  },
  {
    q: "Wie genau sind Online-Bewertungstools?",
    a: "Online-Rechner liefern grobe Richtwerte — keine verlässliche Grundlage für Verkaufsentscheidungen. Sie kennen weder den tatsächlichen Zustand der Immobilie noch die Mikrolage, Grundrissqualität oder aktuellen Angebots- vs. Nachfragesituationen im Quartier.",
  },
  {
    q: "Welche Faktoren erhöhen den Immobilienwert am stärksten?",
    a: "Lage (Makro- und Mikrolage), Wohnfläche, Baujahr und Zustand, Ausstattungsqualität, Energieeffizienz und aktuelle Marktlage. Bei Renditeobjekten ist außerdem die Miete bzw. der Mietmultiplikator entscheidend.",
  },
  {
    q: "Kann ich den Wert meiner Immobilie selbst ermitteln?",
    a: "Grundsätzlich ja — mit Vergleichsangeboten auf Portalen und Kaufpreissammlungen der Gutachterausschüsse. Für eine präzise, verkaufsreife Bewertung empfiehlt sich jedoch immer ein Experte mit lokaler Marktkenntnis.",
  },
  {
    q: "Was passiert, wenn ich meine Immobilie zu teuer anbiete?",
    a: "Die Immobilie bleibt im Markt liegen. Interessenten beobachten Preissenkungen genau — und verhandeln aggressiver, je länger das Objekt inseriert war. Im schlimmsten Fall erzielen Sie nach einer Preiskorrektur weniger als bei einem von Anfang an marktgerecht angebotenen Objekt.",
  },
]

const factors = [
  { label: "Makrolage", note: "Stadt, Region, Infrastruktur, Wirtschaftskraft" },
  { label: "Mikrolage", note: "Straße, Quartier, Nachbarschaft, Ruhe/Lärm" },
  { label: "Wohnfläche", note: "Berechnete Wohnfläche nach WoFlV" },
  { label: "Baujahr & Zustand", note: "Modernisierungsstand, Restnutzungsdauer" },
  { label: "Grundriss & Raumaufteilung", note: "Funktionalität, Helligkeit, Raumhöhen" },
  { label: "Ausstattung", note: "Küche, Bad, Bodenbeläge, Heizung" },
  { label: "Energieeffizienz", note: "Energieausweis-Klasse, Heizungsart" },
  { label: "Grundstücksgröße", note: "Bei Häusern: Lage und Zuschnitt des Grundstücks" },
  { label: "Mieteinnahmen", note: "Bei Renditeobjekten: Ist- und Sollmiete" },
  { label: "Marktlage", note: "Aktuelles Angebot/Nachfrage im Teilmarkt" },
]

export default function ImmobilienbewertungPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative bg-bone pt-[120px] pb-20 lg:pb-28 border-b border-line/40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(180,145,80,0.07),transparent_60%)]" />
          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/ratgeber"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-stone hover:text-ink transition-colors mb-10"
              >
                <ArrowLeft className="w-3 h-3" />
                Ratgeber
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] uppercase tracking-[0.24em] text-gold bg-gold/10 px-3 py-1">Bewertung</span>
                <span className="text-[11px] text-stone">8 Min. Lesezeit</span>
              </div>
              <h1 className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] text-ink leading-[1.02] mb-6 max-w-[820px]">
                Immobilienbewertung:<br />
                <span className="text-ink/55">Wie wird der Wert ermittelt?</span>
              </h1>
              <p className="text-graphite text-[16px] lg:text-[18px] leading-relaxed max-w-[620px]">
                Vergleichswert-, Sachwert- und Ertragswertverfahren erklärt — und warum der richtige Angebotspreis die wichtigste Entscheidung beim Immobilienverkauf ist.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro + TOC */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7 space-y-6 text-[16px] text-graphite leading-[1.85]"
            >
              <p>
                Was ist meine Immobilie wert? Diese Frage steht am Anfang jedes Verkaufsprozesses — und die Antwort ist weitaus komplexer als ein Quadratmeterpreis multipliziert mit der Wohnfläche.
              </p>
              <p>
                Eine fundierte Immobilienbewertung berücksichtigt Lage, Zustand, Ausstattung, aktuelle Marktdaten und das jeweilige Bewertungsverfahren. Wer zu hoch ansetzt, verliert Verhandlungsmacht. Wer zu niedrig ansetzt, verschenkt Geld.
              </p>
              <p>
                In diesem Ratgeber erklären wir die drei anerkannten Bewertungsverfahren, welche Faktoren den Wert beeinflussen — und wie eine professionelle Marktbewertung abläuft.
              </p>
              <div className="bg-bone border border-line p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <p className="text-[14px] text-graphite leading-relaxed">
                    <strong className="text-ink font-medium">Hinweis:</strong> Für rechtlich verbindliche Wertermittlungen (z. B. Erbschaft, Scheidung, Beleihung) ist ein zertifizierter Sachverständiger erforderlich. Für den Immobilienverkauf genügt in der Regel eine fundierte Marktpreiseinschätzung durch einen erfahrenen Makler.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4 lg:col-start-9"
            >
              <div className="bg-bone border border-line p-8 sticky top-28">
                <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-6">Inhalt</p>
                <nav className="space-y-3">
                  {[
                    ["Die 3 Bewertungsverfahren", "#verfahren"],
                    ["Wertbeeinflussende Faktoren", "#faktoren"],
                    ["Marktpreis vs. Gutachterwert", "#marktpreis"],
                    ["Typische Bewertungsfehler", "#fehler"],
                    ["Ablauf einer Bewertung", "#ablauf"],
                    ["Häufige Fragen (FAQ)", "#faq"],
                  ].map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      className="flex items-center gap-2 text-[13px] text-graphite hover:text-ink transition-colors group"
                    >
                      <span className="w-3 h-px bg-line group-hover:bg-gold transition-colors" />
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3 Verfahren */}
        <section id="verfahren" className="bg-bone border-y border-line/40">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">01</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-10">Die drei Bewertungsverfahren</h2>
              <div className="grid lg:grid-cols-3 gap-6">
                {[
                  {
                    num: "01",
                    title: "Vergleichswertverfahren",
                    tag: "Eigentumswohnungen & Einfamilienhäuser",
                    text: "Das gebräuchlichste Verfahren beim Verkauf von Wohnimmobilien. Der Wert wird aus tatsächlich erzielten Kaufpreisen vergleichbarer Objekte in derselben Lage abgeleitet. Grundlage sind die Kaufpreissammlungen der Gutachterausschüsse sowie aktuelle Marktdaten.",
                    when: "Anwendbar, wenn ausreichend Vergleichsobjekte vorhanden sind. Besonders geeignet für Eigentumswohnungen und Reihenhäuser in gefragten Lagen.",
                    items: ["Vergleichspreise aus Kaufpreissammlungen", "Anpassung für Lage, Zustand, Ausstattung", "Aktueller Marktpreisspiegel", "Am marktnahsten für Wohnimmobilien"],
                  },
                  {
                    num: "02",
                    title: "Sachwertverfahren",
                    tag: "Häuser & Spezialimmobilien",
                    text: "Berechnet den Wert aus dem Bodenwert (Bodenrichtwert × Grundstücksfläche) plus dem Sachwert des Gebäudes (Herstellungskosten abzgl. Altersabschreibung). Ergibt den objektiven Substanzwert — unabhängig vom Marktgeschehen.",
                    when: "Wird eingesetzt, wenn keine ausreichenden Vergleichspreise vorliegen: bei Einfamilienhäusern in Kleinstädten, ungewöhnlichen Objekten oder Denkmalimmobilien.",
                    items: ["Bodenwert nach Bodenrichtwert", "Herstellungskosten des Gebäudes", "Altersabschreibung & Zustandskorrektur", "Marktanpassungsfaktor"],
                  },
                  {
                    num: "03",
                    title: "Ertragswertverfahren",
                    tag: "Mehrfamilienhäuser & Kapitalanlagen",
                    text: "Bewertet die Immobilie anhand der erzielbaren Mieteinnahmen. Der Ertragswert ergibt sich aus dem Bodenwert plus dem kapitalisierten Reinertrag (Jahresnettokaltmiete abzgl. Bewirtschaftungskosten, diskontiert über die Restnutzungsdauer).",
                    when: "Standard bei Renditeobjekten: Mehrfamilienhäuser, Zinshäuser, Büro- und Gewerbeimmobilien. Käufer rechnen hier primär mit Renditekennzahlen (Mietmultiplikator, Brutto-/Nettomietrendite).",
                    items: ["Jahresnettokaltmiete (Ist- und Sollmiete)", "Bewirtschaftungskosten & Leerstandsrisiko", "Liegenschaftszinssatz", "Mietmultiplikator & Renditekennzahlen"],
                  },
                ].map((v) => (
                  <motion.div
                    key={v.num}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-cream border border-line p-7 flex flex-col"
                  >
                    <span className="font-serif text-[2.2rem] text-gold/60 leading-none mb-4">{v.num}</span>
                    <h3 className="font-medium text-ink text-[16px] mb-1">{v.title}</h3>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-stone mb-4">{v.tag}</p>
                    <p className="text-[14px] text-graphite leading-[1.8] mb-4">{v.text}</p>
                    <p className="text-[13px] text-graphite/70 italic leading-relaxed mb-6">{v.when}</p>
                    <div className="mt-auto pt-5 border-t border-line/50">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-stone mb-3">Kernkomponenten</p>
                      <ul className="space-y-2">
                        {v.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[13px] text-graphite">
                            <Check className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Wertfaktoren */}
        <section id="faktoren" className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">02</p>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-10">Wertbeeinflussende Faktoren</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line/30">
              {factors.map((f) => (
                <div key={f.label} className="bg-cream p-6">
                  <p className="font-medium text-ink text-[14px] mb-1.5">{f.label}</p>
                  <p className="text-[12px] text-stone leading-relaxed">{f.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Marktpreis vs Gutachten */}
        <section id="marktpreis" className="bg-bone border-y border-line/40">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-[760px]"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">03</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-7">Marktpreis vs. Gutachterwert</h2>
              <div className="space-y-5 text-[16px] text-graphite leading-[1.85]">
                <p>
                  Es gibt einen wichtigen Unterschied, den viele Eigentümer nicht kennen: Der <strong className="text-ink font-medium">Gutachterwert</strong> (ermittelt nach ImmoWertV durch einen vereidigten Sachverständigen) und der <strong className="text-ink font-medium">tatsächlich erzielbare Marktpreis</strong> können erheblich voneinander abweichen.
                </p>
                <p>
                  Gutachterwerte sind methodisch konservativ und stichtagsbezogen. Sie berücksichtigen keine aktuellen Nachfrageüberhänge, keine emotionalen Kaufentscheidungen und keine Bieterwettbewerbe. In gefragten Lagen liegt der tatsächliche Verkaufspreis oft 10–25 % über dem formalen Gutachterwert.
                </p>
                <p>
                  Für den Verkauf ist deshalb die <strong className="text-ink font-medium">Marktpreiseinschätzung</strong> entscheidend: Was zahlt ein realer Käufer heute, in diesem Quartier, für dieses Objekt? Diese Frage beantwortet ein erfahrener Makler mit lokaler Marktkenntnis präziser als jedes standardisierte Gutachten.
                </p>
              </div>
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <div className="bg-cream border border-line p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone mb-4">Gutachterwert</p>
                  <ul className="space-y-2.5 text-[13px] text-graphite">
                    {["Normiertes Verfahren (ImmoWertV)", "Rechtlich verbindlich (Erbschaft, Gericht)", "Konservativ und stichtagsbezogen", "Kosten: 1.500–5.000 €", "Für Verkauf oft zu niedrig"].map((i) => (
                      <li key={i} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-px bg-stone shrink-0" />{i}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-cream border border-line p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone mb-4">Marktpreiseinschätzung</p>
                  <ul className="space-y-2.5 text-[13px] text-graphite">
                    {["Basiert auf aktuellen Transaktionsdaten", "Berücksichtigt aktuelle Nachfrage", "Lokale Marktkenntnis des Maklers", "Oft kostenlos im Rahmen der Beratung", "Optimale Grundlage für den Verkauf"].map((i) => (
                      <li key={i} className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Typische Fehler */}
        <section id="fehler" className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-[760px]"
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">04</p>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-8">Typische Bewertungsfehler</h2>
            <div className="space-y-5">
              {[
                {
                  title: "Online-Rechner als Entscheidungsgrundlage",
                  text: "Portalbewertungen basieren auf statistischen Mittelwerten ohne Kenntnis des tatsächlichen Objektzustands, der Mikrolage oder der aktuellen lokalen Nachfrage. Sie eignen sich zur groben Orientierung — nicht als Angebotspreis.",
                },
                {
                  title: "Emotionaler Aufschlag",
                  text: "Eigentümer schätzen die eigene Immobilie im Schnitt 15–20 % höher ein als Käufer. Erinnerungen, Investitionen und emotionale Bindung führen zu einem verzerrten Wertbild — mit realen Konsequenzen für den Verkaufserfolg.",
                },
                {
                  title: "Renovierungskosten 1:1 aufschlagen",
                  text: "Nicht jede Investition erhöht den Marktwert um denselben Betrag. Eine neue Küche für 20.000 € schlägt sich selten mit 20.000 € im Kaufpreis nieder. Entscheidend ist, was der Markt bereit ist zu zahlen.",
                },
                {
                  title: "Veraltete Vergleichsdaten",
                  text: "In bewegten Märkten können Preise innerhalb von 12–18 Monaten um 10–20 % fallen oder steigen. Eine Bewertung von vor zwei Jahren ist keine zuverlässige Grundlage für einen Verkauf heute.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 py-5 border-b border-line/50 last:border-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <div>
                    <p className="font-medium text-ink text-[15px] mb-2">{item.title}</p>
                    <p className="text-[14px] text-graphite leading-[1.8]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Ablauf */}
        <section id="ablauf" className="bg-bone border-y border-line/40">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-[760px]"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">05</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-8">Ablauf einer professionellen Bewertung</h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Objektbesichtigung", text: "Der Makler besichtigt die Immobilie persönlich — Zustand, Ausstattung, Grundrissqualität und Besonderheiten können nur vor Ort beurteilt werden." },
                  { step: "02", title: "Unterlagenprüfung", text: "Grundbuchauszug, Grundrisse, Baujahr, Wohnflächenberechnung und vorhandene Modernisierungsnachweise fließen in die Bewertung ein." },
                  { step: "03", title: "Marktdatenanalyse", text: "Auswertung aktueller Kaufpreise vergleichbarer Objekte im Quartier — aus Portaldaten, Kaufpreissammlungen der Gutachterausschüsse und dem eigenen Transaktionsarchiv." },
                  { step: "04", title: "Lage- und Nachfrageanalyse", text: "Mikrolage, Infrastruktur, Entwicklungsperspektiven und aktueller Nachfrageüberhang im Teilmarkt werden bewertet." },
                  { step: "05", title: "Werteinschätzung & Strategie", text: "Das Ergebnis: eine fundierte Marktpreiseinschätzung mit konkreter Empfehlung für den Angebotspreis — und einer klaren Vermarktungsstrategie." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <span className="font-serif text-[1.8rem] text-gold/60 leading-none shrink-0 w-10">{item.step}</span>
                    <div className="pt-1">
                      <p className="font-medium text-ink text-[15px] mb-2">{item.title}</p>
                      <p className="text-[14px] text-graphite leading-[1.8]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">FAQ</p>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-10">Häufige Fragen</h2>
            <div className="max-w-[760px] divide-y divide-line/50">
              {faq.map((item) => (
                <div key={item.q} className="py-7">
                  <h3 className="font-medium text-ink text-[16px] mb-3">{item.q}</h3>
                  <p className="text-[15px] text-graphite leading-[1.8]">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="bg-bone border-t border-line/40">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-stone mb-4">Kostenlose Bewertung</p>
                <h2 className="font-serif text-[clamp(1.6rem,3vw,2.6rem)] text-ink leading-tight max-w-[500px]">
                  Was ist Ihre Immobilie heute wert?
                </h2>
                <p className="text-graphite text-[15px] mt-4 max-w-[480px] leading-relaxed">
                  Wir ermitteln den Marktwert Ihrer Immobilie kostenlos und unverbindlich — auf Basis aktueller Transaktionsdaten und lokaler Marktkenntnis seit 1999.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/bewertung"
                  className="inline-flex items-center justify-center gap-2 bg-ink text-white text-[11px] uppercase tracking-[0.18em] px-8 py-4 hover:bg-ink/85 transition-colors"
                >
                  Jetzt bewerten lassen
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 border border-line text-ink text-[11px] uppercase tracking-[0.18em] px-8 py-4 hover:border-ink/40 transition-colors"
                >
                  Erstgespräch vereinbaren
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
