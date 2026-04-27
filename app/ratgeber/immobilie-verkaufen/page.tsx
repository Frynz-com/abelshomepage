"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft, Check, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Immobilie verkaufen: Der vollständige Leitfaden 2026',
  description: 'Schritt für Schritt zum erfolgreichen Immobilienverkauf — von der Bewertung bis zur Beurkundung.',
  author: { '@type': 'Organization', name: 'Abels Immobilien GmbH', url: 'https://abels-immobilien.de' },
  publisher: { '@type': 'Organization', name: 'Abels Immobilien GmbH', url: 'https://abels-immobilien.de' },
  url: 'https://abels-immobilien.de/ratgeber/immobilie-verkaufen',
  datePublished: '2024-01-01',
  dateModified: '2026-04-01',
  inLanguage: 'de-DE',
}

const faq = [
  {
    q: "Wann ist der beste Zeitpunkt, eine Immobilie zu verkaufen?",
    a: "Es gibt keinen universell richtigen Zeitpunkt. Entscheidender als das Marktumfeld ist die eigene Situation: Ist die Finanzierung des nächsten Schritts gesichert? Stimmt die Bewertung? Ein erfahrener Makler kann einschätzen, ob der lokale Markt gerade günstig ist.",
  },
  {
    q: "Wie lange dauert ein Immobilienverkauf?",
    a: "Realistisch 3–6 Monate von der Beauftragung bis zur Beurkundung. Bei Off-Market-Verkäufen oder vorgemerkten Käufern kann es deutlich schneller gehen. Verzögerungen entstehen oft bei der Beschaffung fehlender Unterlagen.",
  },
  {
    q: "Welche Kosten entstehen beim Immobilienverkauf?",
    a: "Als Verkäufer tragen Sie in der Regel die Maklerprovision (seit 2020: gleiche Höhe wie Käufer, oft je 3,57 % inkl. MwSt.), ggf. Kosten für den Energieausweis, eventuelle Renovierungsmaßnahmen und die Vorfälligkeitsentschädigung bei laufenden Darlehen.",
  },
  {
    q: "Muss ich beim Verkauf Steuern zahlen?",
    a: "Wenn Sie die Immobilie selbst bewohnt haben oder sie länger als 10 Jahre besitzen, ist der Verkaufsgewinn in der Regel steuerfrei. Bei vermieteten Immobilien innerhalb der 10-Jahresfrist fällt Spekulationssteuer an. Bitte steuerlich beraten lassen.",
  },
  {
    q: "Brauche ich einen Makler für den Immobilienverkauf?",
    a: "Nicht gesetzlich. Aber ein guter Makler erzielt nachweislich höhere Preise, spart Zeit und schützt vor rechtlichen Fehlern. Die Provision ist bei einem qualifizierten Verkauf in der Regel durch einen besseren Kaufpreis mehr als kompensiert.",
  },
  {
    q: "Welche Unterlagen benötige ich für den Verkauf?",
    a: "Grundbuchauszug, Lageplan, Grundrisse, Wohnflächenberechnung, Energieausweis, ggf. Teilungserklärung (bei Eigentumswohnungen), Nebenkostenabrechnungen, Mietverträge (bei vermieteten Objekten) und aktuelle Betriebskostenabrechnungen.",
  },
]

const steps = [
  {
    num: "01",
    title: "Vorbereitung & Zielsetzung",
    text: "Bevor Sie aktiv werden: Klären Sie Ihre eigene Situation. Wohin ziehen Sie? Brauchen Sie den Erlös für einen Neukauf? Haben Sie laufende Darlehen, die abgelöst werden müssen? Nur wer seine eigenen Ziele kennt, kann einen Verkauf strategisch steuern.",
    items: ["Zeitplanung festlegen", "Finanzielle Ziele definieren", "Vorfälligkeitsentschädigung prüfen", "Steuerliche Situation klären"],
  },
  {
    num: "02",
    title: "Marktgerechte Bewertung",
    text: "Der Angebotspreis ist die wichtigste Entscheidung beim Immobilienverkauf. Zu hoch: Die Immobilie liegt monatelang im Markt und verliert Verhandlungsmacht. Zu niedrig: Geld bleibt auf dem Tisch. Eine fundierte Bewertung basiert auf aktuellen Vergleichspreisen, Lagebewertung und realistischer Käuferanalyse.",
    items: ["Vergleichspreise analysieren", "Lage und Mikrolage bewerten", "Renovierungsbedarf einpreisen", "Realistischen Angebotspreis festlegen"],
  },
  {
    num: "03",
    title: "Unterlagen beschaffen",
    text: "Fehlende Dokumente sind der häufigste Grund für Verzögerungen. Starten Sie frühzeitig mit der Beschaffung aller erforderlichen Unterlagen — einige benötigen mehrere Wochen Vorlaufzeit.",
    items: ["Grundbuchauszug (aktuell, nicht älter als 3 Monate)", "Lageplan & Flurkarte", "Grundrisse & Wohnflächenberechnung", "Energieausweis (Pflicht bei Verkauf)", "Teilungserklärung (bei ETW)", "Letzte Betriebskostenabrechnungen"],
  },
  {
    num: "04",
    title: "Professionelles Exposé",
    text: "Der erste Eindruck entscheidet. Ein hochwertiges Exposé mit professionellen Fotos, präzisen Beschreibungen und korrekten Angaben weckt das Interesse qualifizierter Käufer — und hält unqualifizierte fern. Stockfoto-Ästhetik und schlecht belichtete Handyfotos kosten Preise.",
    items: ["Professionelle Immobilienfotografie", "Vollständige und korrekte Beschreibung", "Grundriss aufbereitet & maßstabsgetreu", "Lage- und Umgebungsbeschreibung"],
  },
  {
    num: "05",
    title: "Vermarktung & Käuferansprache",
    text: "Je nach Strategie erfolgt die Vermarktung öffentlich über Portale oder diskret über ein Käufernetzwerk (Off-Market). Entscheidend ist, dass nur qualifizierte, bonitätsgeprüfte Interessenten zu Besichtigungen eingeladen werden.",
    items: ["Kanal-Entscheidung: öffentlich oder Off-Market", "Vorqualifikation der Interessenten", "Terminkoordination & Besichtigungsorganisation", "Feedback und Nachfassen"],
  },
  {
    num: "06",
    title: "Verhandlung & Kaufpreisfindung",
    text: "Professionelle Verhandlungsführung bedeutet: sachlich bleiben, Argumente kennen, keine emotionalen Reaktionen. Der Makler agiert hier als Puffer und Interessenvertreter des Verkäufers — und kennt die üblichen Verhandlungsspielräume im Markt.",
    items: ["Kaufpreisangebote prüfen", "Bonität des Käufers sicherstellen", "Verhandlungsstrategie festlegen", "Einigung dokumentieren"],
  },
  {
    num: "07",
    title: "Notartermin & Beurkundung",
    text: "Der Notar entwirft den Kaufvertrag auf Basis der vereinbarten Konditionen. Beide Parteien erhalten den Entwurf zur Prüfung — in der Regel 2 Wochen vor dem Termin. Am Beurkundungstag wird der Vertrag vorgelesen und von Käufer und Verkäufer unterzeichnet.",
    items: ["Kaufvertragsentwurf prüfen", "Offene Fragen klären", "Notartermin koordinieren", "Auflassungsvormerkung im Grundbuch"],
  },
  {
    num: "08",
    title: "Übergabe & Abschluss",
    text: "Nach Eingang des vollständigen Kaufpreises (und ggf. Löschung bestehender Grundschulden) erfolgt die Schlüsselübergabe. Übergabeprotokoll und Zählerablesungen nicht vergessen — sie schützen vor späteren Streitigkeiten.",
    items: ["Kaufpreiseingang bestätigen", "Zähler ablesen (Strom, Gas, Wasser)", "Übergabeprotokoll erstellen", "Schlüsselübergabe dokumentieren"],
  },
]

export default function ImmobilieVerkaufenPage() {
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
                <span className="text-[10px] uppercase tracking-[0.24em] text-gold bg-gold/10 px-3 py-1">Verkaufen</span>
                <span className="text-[11px] text-stone">10 Min. Lesezeit</span>
              </div>
              <h1 className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] text-ink leading-[1.02] mb-6 max-w-[820px]">
                Immobilie verkaufen:<br />
                <span className="text-ink/55">Der vollständige Leitfaden.</span>
              </h1>
              <p className="text-graphite text-[16px] lg:text-[18px] leading-relaxed max-w-[620px]">
                Von der ersten Bewertung bis zur Schlüsselübergabe — alle Schritte des Immobilienverkaufs verständlich erklärt. Damit Sie vorbereitet sind und keine Fehler machen, die Geld kosten.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro + Inhaltsverzeichnis */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7 space-y-6 text-[16px] text-graphite leading-[1.85]"
            >
              <p>
                Der Verkauf einer Immobilie ist für die meisten Menschen die größte finanzielle Transaktion ihres Lebens. Entsprechend groß ist das Risiko, bei falschen Entscheidungen bares Geld zu verlieren — sei es durch einen zu niedrigen Angebotspreis, fehlende Unterlagen oder schlecht geführte Verhandlungen.
              </p>
              <p>
                Dieser Ratgeber führt Sie Schritt für Schritt durch den gesamten Prozess: von der Vorbereitung und Bewertung über Vermarktung und Verhandlung bis zur notariellen Beurkundung und Übergabe.
              </p>
              <div className="bg-bone border border-line p-6 mt-2">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <p className="text-[14px] text-graphite leading-relaxed">
                    <strong className="text-ink font-medium">Hinweis:</strong> Dieser Leitfaden gibt eine allgemeine Orientierung. Steuerliche und rechtliche Einzelfragen sollten immer mit einem Steuerberater bzw. Notar abgestimmt werden.
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
                    ["Die 8 Schritte im Überblick", "#schritte"],
                    ["Häufige Fehler vermeiden", "#fehler"],
                    ["Mit oder ohne Makler?", "#makler"],
                    ["Kosten & Steuern", "#kosten"],
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

        {/* 8 Schritte */}
        <section id="schritte" className="bg-bone border-y border-line/40">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">01</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-12">Die 8 Schritte zum erfolgreichen Verkauf</h2>
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className="bg-cream border border-line p-7 lg:p-9 grid lg:grid-cols-12 gap-6 lg:gap-10"
                  >
                    <div className="lg:col-span-1">
                      <span className="font-serif text-[2rem] text-gold/50 leading-none">{step.num}</span>
                    </div>
                    <div className="lg:col-span-5">
                      <h3 className="font-medium text-ink text-[17px] mb-3">{step.title}</h3>
                      <p className="text-[14px] text-graphite leading-[1.8]">{step.text}</p>
                    </div>
                    <div className="lg:col-span-5 lg:col-start-8">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-stone mb-3">Checkliste</p>
                      <ul className="space-y-2">
                        {step.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-[13px] text-graphite">
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

        {/* Häufige Fehler */}
        <section id="fehler" className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">02</p>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-10">Die häufigsten Fehler beim Immobilienverkauf</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Zu hoher Angebotspreis",
                  text: "Der häufigste Fehler. Eine überteuerte Immobilie liegt Monate am Markt — und jede Preissenkung sendet ein negatives Signal an alle Interessenten.",
                },
                {
                  title: "Schlechte Fotos",
                  text: "90 % der Käufer suchen online. Unscharfe oder schlecht belichtete Fotos sorgen dafür, dass Interessenten gar nicht erst anfragen.",
                },
                {
                  title: "Fehlende Unterlagen",
                  text: "Energieausweis, Grundbuchauszug, Grundrisse — wer diese Dokumente erst nach dem ersten Kaufinteresse beschafft, verzögert den Verkauf um Wochen.",
                },
                {
                  title: "Emotionale Verhandlungsführung",
                  text: "Das eigene Zuhause hat einen emotionalen Wert. Käufer spüren das — und nutzen es. Ein professioneller Makler verhandelt sachlich und interessenorientiert.",
                },
                {
                  title: "Ungeprüfte Käufer",
                  text: "Ein Kaufangebot ohne Finanzierungsbestätigung ist nichts wert. Käufer ohne Bonitätsprüfung lassen Verträge platzen — manchmal kurz vor der Beurkundung.",
                },
                {
                  title: "Alleinverkauf ohne Marktkenntnisse",
                  text: "Ohne Kenntnisse über aktuelle Vergleichspreise, rechtliche Pflichten und Verhandlungstaktiken kostet der Alleinverkauf am Ende mehr als die Maklerprovision.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-bone border border-line p-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mb-4" />
                  <h3 className="font-medium text-ink text-[15px] mb-2">{item.title}</h3>
                  <p className="text-[13px] text-graphite leading-[1.75]">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Makler ja/nein */}
        <section id="makler" className="bg-bone border-y border-line/40">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-[760px]"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">03</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-7">Mit oder ohne Makler verkaufen?</h2>
              <div className="space-y-5 text-[16px] text-graphite leading-[1.85]">
                <p>
                  Diese Frage stellen sich viele Eigentümer — verständlicherweise, denn die Provision erscheint auf den ersten Blick wie ein vermeidbarer Kostenpunkt.
                </p>
                <p>
                  Die Realität: Studien zeigen, dass Eigentümer mit Makler im Durchschnitt <strong className="text-ink font-medium">5–15 % höhere Kaufpreise</strong> erzielen als beim Direktverkauf. Der Grund liegt nicht nur in der Verhandlungsführung, sondern auch in der professionellen Präsentation und der Käuferqualifikation.
                </p>
                <p>
                  Hinzu kommt: Ein guter Makler schützt Sie vor rechtlichen Fehlern im Kaufvertrag, koordiniert alle Beteiligten (Notar, Bank, Gutachter) und spart Ihnen hunderte Stunden Eigenaufwand.
                </p>
              </div>
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <div className="bg-cream border border-line p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone mb-4">Mit Makler</p>
                  <ul className="space-y-2.5">
                    {[
                      "Höherer Verkaufspreis durch Verhandlungskompetenz",
                      "Professionelle Präsentation & Fotografie",
                      "Bonitätsgeprüfte Käufer",
                      "Rechtssicherheit & Vertragsprüfung",
                      "Zeitersparnis & weniger Stress",
                    ].map((i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-graphite">
                        <Check className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />{i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-cream border border-line p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone mb-4">Ohne Makler</p>
                  <ul className="space-y-2.5">
                    {[
                      "Keine Maklerprovision",
                      "Volle Kontrolle über den Prozess",
                      "Höherer Zeitaufwand",
                      "Risiko: Falsche Preiseinschätzung",
                      "Risiko: Unqualifizierte Käufer",
                    ].map((i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-graphite">
                        <span className="mt-2 w-1.5 h-px bg-stone shrink-0" />{i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Kosten */}
        <section id="kosten" className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-[760px]"
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">04</p>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-8">Kosten & Steuern beim Verkauf</h2>
            <div className="divide-y divide-line/50">
              {[
                {
                  label: "Maklerprovision",
                  value: "je 3,57 % für Käufer & Verkäufer",
                  note: "Seit 2020 gesetzlich geregelt: Makler darf vom Verkäufer nicht mehr verlangen als vom Käufer.",
                },
                {
                  label: "Energieausweis",
                  value: "ca. 80–500 €",
                  note: "Pflicht bei jedem Immobilienverkauf. Kosten abhängig von Art (Verbrauchs- oder Bedarfsausweis) und Anbieter.",
                },
                {
                  label: "Notarkosten (Anteil Verkäufer)",
                  value: "ca. 0,1–0,3 % des Kaufpreises",
                  note: "Löschung bestehender Grundschulden trägt in der Regel der Verkäufer.",
                },
                {
                  label: "Vorfälligkeitsentschädigung",
                  value: "individuell",
                  note: "Falls ein laufendes Darlehen vorzeitig abgelöst werden muss. Anfrage an Ihre Bank vor dem Verkaufsstart empfohlen.",
                },
                {
                  label: "Spekulationssteuer",
                  value: "0 % bei Eigennutzung oder >10 Jahren Haltedauer",
                  note: "Bei vermieteten Objekten innerhalb der 10-Jahresfrist fällt Steuer auf den Verkaufsgewinn an. Steuerberater konsultieren.",
                },
              ].map((item) => (
                <div key={item.label} className="py-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <p className="font-medium text-ink text-[15px]">{item.label}</p>
                    <p className="text-[13px] text-gold font-medium">{item.value}</p>
                  </div>
                  <p className="text-[13px] text-graphite leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-bone border-t border-line/40">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
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
          </div>
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
                <p className="text-[10px] uppercase tracking-[0.28em] text-stone mb-4">Abels Immobilien</p>
                <h2 className="font-serif text-[clamp(1.6rem,3vw,2.6rem)] text-ink leading-tight max-w-[500px]">
                  Bereit für den nächsten Schritt?
                </h2>
                <p className="text-graphite text-[15px] mt-4 max-w-[480px] leading-relaxed">
                  Wir begleiten Ihren Immobilienverkauf von der Bewertung bis zur Schlüsselübergabe — persönlich, inhabergeführt, diskret.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/bewertung"
                  className="inline-flex items-center justify-center gap-2 bg-ink text-white text-[11px] uppercase tracking-[0.18em] px-8 py-4 hover:bg-ink/85 transition-colors"
                >
                  Kostenlose Bewertung
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
