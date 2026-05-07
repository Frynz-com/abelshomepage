"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Off-Market Immobilienverkauf: Diskret zum Erfolg',
  description: 'Was ist ein Off-Market-Verkauf, wie funktioniert er und wann ist er sinnvoll?',
  author: { '@type': 'Organization', name: 'Abels Immobilien GmbH', url: 'https://abels-immobilien.de' },
  publisher: { '@type': 'Organization', name: 'Abels Immobilien GmbH', url: 'https://abels-immobilien.de' },
  url: 'https://abels-immobilien.de/ratgeber/off-market-verkauf',
  datePublished: '2024-01-01',
  dateModified: '2026-04-01',
  inLanguage: 'de-DE',
}

const faq = [
  {
    q: "Was bedeutet Off-Market bei Immobilien?",
    a: "Off-Market bedeutet, dass eine Immobilie verkauft wird, ohne öffentlich inseriert zu werden — also ohne Anzeige auf Portalen wie ImmoScout24 oder Immowelt. Der Makler vermittelt die Immobilie direkt aus seinem vorgemerkten Käufernetzwerk.",
  },
  {
    q: "Ist ein Off-Market-Verkauf legal?",
    a: "Ja, vollständig. Es gibt keine gesetzliche Pflicht, eine Immobilie öffentlich anzubieten. Der Off-Market-Verkauf ist eine legitime und häufig genutzte Methode im Premium-Segment.",
  },
  {
    q: "Erziele ich beim Off-Market-Verkauf einen guten Preis?",
    a: "Ja — vorausgesetzt, der Makler verfügt über ein qualifiziertes Käufernetzwerk. Da weniger Käufer Zugang haben, ist die Preissetzung entscheidend. Ein professioneller Makler erzielt auch Off-Market marktgerechte oder überdurchschnittliche Preise.",
  },
  {
    q: "Für welche Immobilien eignet sich der Off-Market-Verkauf?",
    a: "Besonders für Villen, Penthäuser, Mehrfamilienhäuser und Anlageimmobilien im gehobenen Segment. Auch bei Erbimmobilien oder Scheidungsverkäufen, bei denen Diskretion besonders wichtig ist.",
  },
  {
    q: "Wie lange dauert ein Off-Market-Verkauf?",
    a: "In der Regel schneller als ein öffentlicher Verkauf — da qualifizierte Käufer bereits vorgemerkt sind und oft schnell entscheiden. Realistisch sind 4–12 Wochen von der Beauftragung bis zur Beurkundung.",
  },
  {
    q: "Was kostet ein Off-Market-Makler?",
    a: "Die Provision entspricht der gesetzlichen Regelung: seit 2020 teilen sich Käufer und Verkäufer die Provision zu gleichen Teilen. Üblicherweise je 3,57 % inkl. MwSt.",
  },
]

export default function OffMarketVerkaufPage() {
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
                <span className="text-[10px] uppercase tracking-[0.24em] text-gold bg-gold/10 px-3 py-1">Off-Market</span>
                <span className="text-[11px] text-stone">7 Min. Lesezeit</span>
              </div>
              <h1 className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] text-ink leading-[1.02] mb-6 max-w-[800px]">
                Off-Market Immobilienverkauf:<br />
                <span className="text-ink/55">Diskret zum Erfolg.</span>
              </h1>
              <p className="text-graphite text-[16px] lg:text-[18px] leading-relaxed max-w-[600px]">
                Warum viele hochwertige Immobilien nie öffentlich inseriert werden — und wie Off-Market-Transaktionen wirklich funktionieren.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7 space-y-6 text-[16px] text-graphite leading-[1.85]"
            >
              <p>
                Ein erheblicher Teil der Premium-Immobilien in Deutschland wechselt den Besitzer, ohne dass die breite Öffentlichkeit davon erfährt. Kein Inserat auf Immobilienportalen, kein Schild am Zaun, kein Bieterverfahren — stattdessen ein direkter Kontakt zwischen Makler und vorgemerktem Käufer.
              </p>
              <p>
                Dieses Modell nennt man <strong className="text-ink font-medium">Off-Market-Verkauf</strong>. Es ist keine Nische, sondern im Hochpreissegment der Standard. Für Eigentümer, die Diskretion priorisieren, bietet es entscheidende Vorteile — setzt aber einen Makler mit echtem Netzwerk voraus.
              </p>
              <p>
                In diesem Ratgeber erklären wir, wie Off-Market-Transaktionen funktionieren, für welche Immobilien sie geeignet sind, welche Risiken es gibt — und worauf Sie bei der Wahl des richtigen Partners achten sollten.
              </p>
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
                    ["Was ist Off-Market?", "#was-ist"],
                    ["Vorteile für Eigentümer", "#vorteile"],
                    ["Wann ist es sinnvoll?", "#wann"],
                    ["Ablauf im Detail", "#ablauf"],
                    ["Risiken & Grenzen", "#risiken"],
                    ["Die richtige Maklerwahl", "#makler"],
                    ["Häufige Fragen", "#faq"],
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

        {/* Was ist Off-Market */}
        <section id="was-ist" className="bg-bone border-y border-line/40">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-[760px]"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">01</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-7">Was bedeutet Off-Market?</h2>
              <div className="space-y-5 text-[16px] text-graphite leading-[1.85]">
                <p>
                  Der Begriff stammt aus dem Finanzmarkt und bezeichnet dort Transaktionen, die außerhalb der offiziellen Börse stattfinden. Im Immobilienbereich bedeutet Off-Market schlicht: <strong className="text-ink font-medium">Die Immobilie wird nicht öffentlich angeboten.</strong>
                </p>
                <p>
                  Konkret heißt das: kein Inserat auf ImmoScout24, Immowelt, Ebay-Kleinanzeigen oder vergleichbaren Plattformen. Keine breit gestreuten E-Mail-Aussendungen. Keine Besichtigungstage mit unbekannten Interessenten.
                </p>
                <p>
                  Stattdessen vermittelt der Makler die Immobilie direkt und gezielt — an vorgemerkte, geprüfte Käufer aus seinem persönlichen Netzwerk. Oft wird die Immobilie an nur wenige Interessenten gezeigt, manchmal sogar an genau einen einzigen.
                </p>
                <p>
                  <strong className="text-ink font-medium">Wichtig:</strong> Off-Market ist kein Geheimmarkt und auch keine Methode, um Steuern zu umgehen. Es ist schlicht eine andere Vermarktungsstrategie — mit anderer Zielgruppe, anderem Ablauf und anderen Anforderungen an den Makler.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vorteile */}
        <section id="vorteile" className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">02</p>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-10">Vorteile für Eigentümer</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Absolute Diskretion",
                  text: "Nachbarn, Mitarbeiter oder Geschäftspartner erfahren vom Verkauf erst nach der Beurkundung. Für viele Eigentümer ist das der entscheidende Faktor.",
                },
                {
                  title: "Geprüfte Käufer",
                  text: "Nur vorgemerkte, bonitätsgeprüfte Interessenten erhalten Zugang. Keine Neugierigen, keine nicht-qualifizierten Anfragen.",
                },
                {
                  title: "Weniger Aufwand",
                  text: "Keine Massen-Besichtigungen, kein Durchgangsverkehr, keine aufwändige Kommunikation mit hunderten Anfragen.",
                },
                {
                  title: "Schnellere Abwicklung",
                  text: "Vorgemerkte Käufer sind kaufbereit. Entscheidungsprozesse dauern oft nur Tage statt Wochen.",
                },
                {
                  title: "Kein Preisverfall durch Sichtbarkeit",
                  text: "Eine Immobilie, die lange öffentlich inseriert ist, verliert Verhandlungsmacht. Off-Market verhindert diesen Effekt.",
                },
                {
                  title: "Persönliche Begleitung",
                  text: "Der Verkauf läuft durch eine vertrauensvolle Beziehung zwischen Makler, Eigentümer und Käufer — keine anonymen Portalprozesse.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-bone border border-line p-7">
                  <div className="flex items-start gap-3 mb-3">
                    <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <h3 className="font-medium text-ink text-[15px]">{item.title}</h3>
                  </div>
                  <p className="text-[14px] text-graphite leading-[1.75] pl-7">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Wann sinnvoll */}
        <section id="wann" className="bg-bone border-y border-line/40">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-[760px]"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">03</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-7">Wann ist Off-Market sinnvoll?</h2>
              <div className="space-y-5 text-[16px] text-graphite leading-[1.85]">
                <p>
                  Nicht jede Immobilie eignet sich für den Off-Market-Verkauf. Entscheidend sind der Preispunkt, der Zustand der Immobilie und die Motive des Eigentümers.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                {[
                  {
                    label: "Premium-Immobilien ab ca. 800.000 €",
                    note: "Die Zielgruppe ist kleiner, aber kaufbereit und qualifiziert. Off-Market ist hier besonders effektiv.",
                  },
                  {
                    label: "Villen, Landsitze, Penthäuser",
                    note: "Hochwertige Objekte profitieren von Exklusivität — öffentliche Sichtbarkeit mindert oft den Premiumcharakter.",
                  },
                  {
                    label: "Mehrfamilienhäuser & Zinshäuser",
                    note: "Investoren-Netzwerke sind gut vernetzt. Renditeimmobilien werden häufig off-market zwischen Family Offices gehandelt.",
                  },
                  {
                    label: "Erbimmobilien & Scheidungsverkäufe",
                    note: "Emotionale oder familiäre Situationen machen Diskretion oft zur Priorität.",
                  },
                  {
                    label: "Eigentümer mit Zeitdruck",
                    note: "Vorgemerkte Käufer bedeuten kürzere Entscheidungswege und schnellere Beurkundung.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-5 py-5 border-b border-line/50 last:border-0">
                    <ArrowRight className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[15px] text-ink font-medium mb-1">{item.label}</p>
                      <p className="text-[14px] text-graphite leading-relaxed">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ablauf */}
        <section id="ablauf" className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">04</p>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-10">Der Ablauf im Detail</h2>
            <div className="grid lg:grid-cols-2 gap-8 max-w-[960px]">
              {[
                { step: "01", title: "Erstgespräch & Bewertung", text: "Der Makler besichtigt die Immobilie, erstellt eine fundierte Marktbewertung und erläutert, welche Käuferprofile realistisch sind. Keine Portalpräsenz bedeutet: Der Preis muss von Anfang an stimmen." },
                { step: "02", title: "Diskretes Exposé", text: "Es wird ein reduziertes Kurzexposé erstellt — ohne vollständige Adresse, oft ohne Außenfoto. Nur qualifizierte Interessenten erhalten nach einer Vertraulichkeitsvereinbarung das vollständige Exposé." },
                { step: "03", title: "Gezielte Käuferansprache", text: "Der Makler kontaktiert selektiv vorgemerkte Käufer aus seinem Netzwerk. Keine Massenaussendung, sondern individuelle, persönliche Ansprache." },
                { step: "04", title: "Besichtigung & Verhandlung", text: "Meist werden nur 1–3 Interessenten besichtigt. Alle haben sich legitimiert und sind finanzierungsbereit. Verhandlungen finden im Vertrauen statt." },
                { step: "05", title: "Kaufvertrag & Notartermin", text: "Nach der Einigung wird der Kaufvertrag notariell beurkundet. Der Ablauf entspricht dem eines regulären Verkaufs — nur diskret und ohne öffentliche Spuren." },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 bg-bone border border-line p-7">
                  <span className="font-serif text-[2rem] text-gold/60 leading-none shrink-0">{item.step}</span>
                  <div>
                    <h3 className="font-medium text-ink text-[15px] mb-2">{item.title}</h3>
                    <p className="text-[14px] text-graphite leading-[1.75]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Risiken */}
        <section id="risiken" className="bg-bone border-y border-line/40">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-[760px]"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">05</p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-7">Risiken & Grenzen</h2>
              <div className="space-y-5 text-[16px] text-graphite leading-[1.85]">
                <p>
                  Off-Market ist kein Allheilmittel. Wer den falschen Makler wählt oder eine falsch bewertete Immobilie still vermarktet, riskiert einen unnötig niedrigen Verkaufspreis.
                </p>
                <p>
                  <strong className="text-ink font-medium">Das Netzwerk entscheidet alles.</strong> Ein Makler, der nur wenige vorgemerkte Käufer hat, kann Off-Market nicht seriös anbieten. Die Vermarktungsstrategie steht und fällt mit der Qualität und Breite des Käuferpools.
                </p>
                <p>
                  Außerdem gilt: Ist die Immobilie zu einem zu hohen Preis bewertet, bleibt sie auch off-market liegen — und hat dann das Problem, weder im Netzwerk noch im Markt platziert zu sein. Eine korrekte Erstbewertung ist deshalb noch wichtiger als beim öffentlichen Verkauf.
                </p>
                <p>
                  <strong className="text-ink font-medium">Empfehlung:</strong> Lassen Sie sich vor der Entscheidung für Off-Market von einem erfahrenen Makler beraten, der Ihnen transparent darlegt, wie groß sein aktiver Käuferpool ist — und welche Referenzen er für vergleichbare Objekte vorweisen kann.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Makler */}
        <section id="makler" className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-[760px]"
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-5">06</p>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink mb-7">Die richtige Maklerwahl</h2>
            <div className="space-y-5 text-[16px] text-graphite leading-[1.85]">
              <p>
                Für einen Off-Market-Verkauf brauchen Sie keinen Makler mit der größten Werbepräsenz — sondern einen mit dem besten Netzwerk. Das sind zwei sehr unterschiedliche Dinge.
              </p>
              <p>
                Stellen Sie bei der Auswahl konkrete Fragen:
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Wie viele aktive, qualifizierte Käufer sind in Ihrer Datenbank für dieses Preissegment vorgemerkt?",
                "Welche Off-Market-Referenzen können Sie für vergleichbare Objekte in meiner Region vorweisen?",
                "Wie sieht das diskrete Exposé aus, das an Käufer gesendet wird?",
                "Welche Vertraulichkeitsvereinbarung wird mit Käufern unterzeichnet?",
                "Wie lange dauert erfahrungsgemäß die Vermarktungsphase bis zur Beurkundung?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-graphite leading-[1.7]">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
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
                  Sie möchten Ihre Immobilie diskret verkaufen?
                </h2>
                <p className="text-graphite text-[15px] mt-4 max-w-[480px] leading-relaxed">
                  Wir begleiten Off-Market-Verkäufe im Premium-Segment seit 1995. Sprechen Sie vertraulich mit uns.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-ink text-white text-[11px] uppercase tracking-[0.18em] px-8 py-4 hover:bg-ink/85 transition-colors"
                >
                  Kostenloses Erstgespräch
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/bewertung"
                  className="inline-flex items-center justify-center gap-2 border border-line text-ink text-[11px] uppercase tracking-[0.18em] px-8 py-4 hover:border-ink/40 transition-colors"
                >
                  Immobilie bewerten
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
