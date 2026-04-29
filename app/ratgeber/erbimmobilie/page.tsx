"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft, Check, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Geerbt und jetzt? Was Erben über ihre Immobilie wissen müssen',
  description: 'Immobilie geerbt – halten, vermieten oder verkaufen? Erbschaftsteuer, Erbengemeinschaft, Spekulationssteuer und die richtige Strategie.',
  author: { '@type': 'Organization', name: 'Abels Immobilien GmbH', url: 'https://abels-immobilien.de' },
  publisher: { '@type': 'Organization', name: 'Abels Immobilien GmbH', url: 'https://abels-immobilien.de' },
  url: 'https://abels-immobilien.de/ratgeber/erbimmobilie',
  datePublished: '2024-01-01',
  dateModified: '2026-04-01',
  inLanguage: 'de-DE',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Muss ich eine geerbte Immobilie versteuern?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, eine geerbte Immobilie unterliegt der Erbschaftsteuer. Der Steuersatz richtet sich nach dem Verwandtschaftsgrad und dem Wert der Immobilie. Für Ehegatten und Kinder gelten hohe Freibeträge (500.000 € bzw. 400.000 €). Das selbst genutzte Familienheim ist unter bestimmten Bedingungen sogar vollständig steuerfrei.' },
    },
    {
      '@type': 'Question',
      name: 'Fällt Spekulationssteuer auf eine Erbimmobilie an?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nicht automatisch. Die Spekulationssteuer fällt an, wenn die Immobilie weniger als 10 Jahre im Besitz war (Anschaffung durch den Erblasser) und nicht selbst bewohnt wurde. Als Erbe übernehmen Sie die steuerliche Haltedauer des Erblassers — oft ist die 10-Jahres-Frist bereits erfüllt.' },
    },
    {
      '@type': 'Question',
      name: 'Was passiert, wenn mehrere Geschwister eine Immobilie erben?',
      acceptedAnswer: { '@type': 'Answer', text: 'Es entsteht automatisch eine Erbengemeinschaft. Alle Entscheidungen — Vermietung, Renovierung, Verkauf — müssen gemeinsam getroffen werden. Bei Uneinigkeit kann ein Miterbe die Teilungsversteigerung beantragen. Ein frühzeitiger Verkauf mit gemeinsamem Einverständnis ist fast immer wirtschaftlich sinnvoller.' },
    },
    {
      '@type': 'Question',
      name: 'Wie lange habe ich Zeit, über die Erbimmobilie zu entscheiden?',
      acceptedAnswer: { '@type': 'Answer', text: 'Die Erbschaftsteuerpflicht entsteht mit dem Erbfall. Die Steuererklärung muss in der Regel innerhalb von 3 Monaten beim Finanzamt gemeldet werden. Für die Verkaufsentscheidung gibt es keine gesetzliche Frist, aber laufende Kosten (Grundsteuer, Versicherung, Instandhaltung) sprechen für eine zügige Entscheidung.' },
    },
    {
      '@type': 'Question',
      name: 'Lohnt es sich, eine Erbimmobilie zu renovieren vor dem Verkauf?',
      acceptedAnswer: { '@type': 'Answer', text: 'Das hängt vom Zustand und der Lage ab. In Toplagen amortisieren sich Renovierungen oft — aber nicht immer. Eine professionelle Bewertung vor der Entscheidung ist unerlässlich. Oft erzielen gut präsentierte Immobilien ohne aufwändige Renovierung bessere Ergebnisse als aufwändig modernisierte Objekte.' },
    },
    {
      '@type': 'Question',
      name: 'Kann ich eine geerbte Immobilie direkt verkaufen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja — aber erst nach Erteilung des Erbscheins, der Sie als Eigentümer ausweist. Ohne Erbschein (oder notarielles Testament mit Eröffnungsprotokoll) kann keine Eigentumsumschreibung im Grundbuch vorgenommen werden.' },
    },
  ],
}

const faq = [
  {
    q: "Muss ich eine geerbte Immobilie versteuern?",
    a: "Ja, eine geerbte Immobilie unterliegt der Erbschaftsteuer. Der Steuersatz richtet sich nach dem Verwandtschaftsgrad und dem Wert der Immobilie. Für Ehegatten und Kinder gelten hohe Freibeträge (500.000 € bzw. 400.000 €). Das selbst genutzte Familienheim ist unter bestimmten Bedingungen sogar vollständig steuerfrei.",
  },
  {
    q: "Fällt Spekulationssteuer auf eine Erbimmobilie an?",
    a: "Nicht automatisch. Die Spekulationssteuer fällt an, wenn die Immobilie weniger als 10 Jahre im Besitz war und nicht selbst bewohnt wurde. Als Erbe übernehmen Sie die steuerliche Haltedauer des Erblassers — oft ist die 10-Jahres-Frist bereits erfüllt.",
  },
  {
    q: "Was passiert, wenn mehrere Geschwister eine Immobilie erben?",
    a: "Es entsteht automatisch eine Erbengemeinschaft. Alle Entscheidungen müssen gemeinsam getroffen werden. Bei Uneinigkeit kann ein Miterbe die Teilungsversteigerung beantragen. Ein einvernehmlicher Verkauf ist fast immer wirtschaftlich sinnvoller.",
  },
  {
    q: "Wie lange habe ich Zeit, über die Erbimmobilie zu entscheiden?",
    a: "Die Erbschaftsteuerpflicht entsteht mit dem Erbfall und muss innerhalb von 3 Monaten gemeldet werden. Für die Verkaufsentscheidung gibt es keine Frist, aber laufende Kosten sprechen für eine zügige Entscheidung.",
  },
  {
    q: "Lohnt es sich, eine Erbimmobilie zu renovieren vor dem Verkauf?",
    a: "Das hängt von Zustand und Lage ab. In Toplagen amortisieren sich Renovierungen oft — aber nicht immer. Eine professionelle Bewertung vor der Entscheidung ist unerlässlich.",
  },
  {
    q: "Kann ich eine geerbte Immobilie direkt verkaufen?",
    a: "Ja — aber erst nach Erteilung des Erbscheins, der Sie als Eigentümer ausweist. Ohne Erbschein kann keine Eigentumsumschreibung im Grundbuch vorgenommen werden.",
  },
]

export default function ErbimmobiliePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
              <Link href="/ratgeber" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-stone hover:text-ink transition-colors mb-10">
                <ArrowLeft className="w-3 h-3" />
                Ratgeber
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] uppercase tracking-[0.24em] text-gold bg-gold/10 px-3 py-1">Erbschaft</span>
                <span className="text-[11px] text-stone">10 Min. Lesezeit</span>
              </div>
              <h1 className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] text-ink leading-[1.02] mb-6 max-w-[820px]">
                Geerbt und jetzt?<br />
                <span className="text-ink/55">Was Erben über ihre Immobilie wissen müssen.</span>
              </h1>
              <p className="text-graphite text-[16px] lg:text-[18px] leading-relaxed max-w-[640px]">
                Eine geerbte Immobilie bedeutet oft mehr als nur ein Vermögenszuwachs — sie bringt Verantwortung, Entscheidungen und manchmal Konflikte mit sich. Dieser Ratgeber hilft Ihnen, die richtigen Fragen zu stellen und fundierte Entscheidungen zu treffen.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Inhaltsverzeichnis */}
        <section className="border-b border-line/40 bg-cream">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-10">
            <div className="grid lg:grid-cols-3 gap-2">
              {[
                "1. Die drei Optionen: Halten, vermieten oder verkaufen",
                "2. Rechtliches: Erbschein, Grundbuch, Erbfolge",
                "3. Steuern: Erbschaftsteuer & Spekulationssteuer",
                "4. Die Erbengemeinschaft — wenn mehrere erben",
                "5. Erbimmobilie richtig bewerten lassen",
                "6. Häufige Fehler beim Erbimmobilien-Verkauf",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2.5">
                  <div className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                  <span className="text-[13px] text-graphite leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16 py-20 lg:py-28">

            {/* Main Content */}
            <article className="lg:col-span-8 space-y-20">

              {/* 1. Die drei Optionen */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gold/60 font-serif text-4xl leading-none">01</span>
                  <div className="h-px flex-1 bg-line/60" />
                </div>
                <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink leading-tight mb-6">
                  Die drei Optionen: Halten, vermieten oder verkaufen
                </h2>
                <p className="text-graphite text-[15px] leading-[1.85] mb-5">
                  Nach einem Erbfall stehen Erben vor einer der folgenreichsten Vermögensentscheidungen ihres Lebens. Es gibt grundsätzlich drei Wege — und keiner davon ist per se richtig oder falsch. Die richtige Wahl hängt von Ihrer persönlichen Situation, der Immobilie selbst und dem Markt ab.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 my-8">
                  {[
                    { title: "Selbst einziehen", desc: "Macht Sinn, wenn Sie die Immobilie nutzen möchten oder können. Steuerlich attraktiv: Das Familienheim ist unter Bedingungen erbschaftsteuerfrei, wenn Sie 10 Jahre selbst einziehen.", hint: "Achtung: Leerstand bis zum Einzug kostet." },
                    { title: "Vermieten", desc: "Langfristige Erträge durch Mieteinnahmen. Macht Sinn bei guter Lage und wenn Sie keine sofortige Liquidität benötigen.", hint: "Achtung: Laufender Verwaltungsaufwand, Instandhaltungspflicht." },
                    { title: "Verkaufen", desc: "Sofortige Liquidität, kein laufender Aufwand, klare Vermögensteilung — besonders bei Erbengemeinschaft.", hint: "Achtung: Steuerliche Prüfung vor Verkauf unerlässlich." },
                  ].map((opt, i) => (
                    <div key={i} className="bg-bone border border-line/50 p-5">
                      <p className="font-serif text-[1.1rem] text-ink mb-2">{opt.title}</p>
                      <p className="text-[13px] text-graphite leading-relaxed mb-3">{opt.desc}</p>
                      <p className="text-[12px] text-stone italic">{opt.hint}</p>
                    </div>
                  ))}
                </div>

                <p className="text-graphite text-[15px] leading-[1.85]">
                  Für viele Erben ist der Verkauf die praktischste Lösung — vor allem wenn die Immobilie weit entfernt liegt, sanierungsbedürftig ist oder mehrere Miterben beteiligt sind. Ein professioneller Makler unterstützt Sie dabei, den Wert realistisch einzuschätzen und den richtigen Zeitpunkt zu bestimmen.
                </p>
              </motion.div>

              {/* 2. Rechtliches */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gold/60 font-serif text-4xl leading-none">02</span>
                  <div className="h-px flex-1 bg-line/60" />
                </div>
                <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink leading-tight mb-6">
                  Rechtliches: Erbschein, Grundbuch, Erbfolge
                </h2>
                <p className="text-graphite text-[15px] leading-[1.85] mb-5">
                  Bevor Sie irgendetwas mit der Erbimmobilie unternehmen können, müssen die rechtlichen Grundlagen geklärt sein. Das ist oft aufwändiger als erwartet — unterschätzen Sie diesen Schritt nicht.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { title: "Der Erbschein", text: "Der Erbschein ist das offizielle Dokument, das Ihre Erbstellung nachweist. Er wird vom Nachlassgericht ausgestellt und ist Voraussetzung für die Grundbuchumschreibung. Ausnahme: Ein notarielles Testament mit Eröffnungsprotokoll kann den Erbschein in vielen Fällen ersetzen." },
                    { title: "Die Grundbuchumschreibung", text: "Nach dem Erbfall muss das Grundbuch auf die Erben umgeschrieben werden. Das geschieht auf Antrag beim Grundbuchamt. Wichtig: Die Grundbuchumschreibung ist innerhalb von 2 Jahren nach dem Erbfall kostenfrei — danach fallen reguläre Notargebühren an." },
                    { title: "Gesetzliche Erbfolge vs. Testament", text: "Gibt es kein Testament, gilt die gesetzliche Erbfolge: Ehegatte und Kinder erben als erste. Gibt es ein Testament oder einen Erbvertrag, geht dieser vor. Pflichtteilsberechtigte (nahe Verwandte) können ihren gesetzlichen Mindestanteil verlangen, auch wenn sie enterbt wurden." },
                    { title: "Erbausschlagung", text: "Innerhalb von 6 Wochen nach Kenntnis des Erbfalls können Sie das Erbe ausschlagen — sinnvoll, wenn Schulden das Erbe übersteigen. Wichtig: Bei einer Erbimmobilie mit laufenden Grundschulden ist die Schuldenanalyse vor Annahme des Erbes zwingend." },
                  ].map((item, i) => (
                    <div key={i} className="border-l-2 border-gold/30 pl-5 py-1">
                      <p className="font-serif text-[1.05rem] text-ink mb-1">{item.title}</p>
                      <p className="text-[14px] text-graphite leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 3. Steuern */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gold/60 font-serif text-4xl leading-none">03</span>
                  <div className="h-px flex-1 bg-line/60" />
                </div>
                <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink leading-tight mb-6">
                  Steuern: Was Erben unbedingt wissen müssen
                </h2>
                <p className="text-graphite text-[15px] leading-[1.85] mb-6">
                  Das Thema Steuern ist bei Erbimmobilien besonders komplex. Zwei Steuerarten sind relevant: die Erbschaftsteuer beim Erbfall selbst, und die Spekulationssteuer beim späteren Verkauf.
                </p>

                <h3 className="font-serif text-[1.3rem] text-ink mb-4">Erbschaftsteuer</h3>
                <div className="bg-bone border border-line/50 rounded-sm overflow-hidden mb-6">
                  <table className="w-full text-[13px]">
                    <thead>
                      <tr className="border-b border-line/50">
                        <th className="text-left px-5 py-3 font-medium text-stone uppercase tracking-[0.12em] text-[11px]">Verwandtschaftsgrad</th>
                        <th className="text-left px-5 py-3 font-medium text-stone uppercase tracking-[0.12em] text-[11px]">Freibetrag</th>
                        <th className="text-left px-5 py-3 font-medium text-stone uppercase tracking-[0.12em] text-[11px]">Steuersatz</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line/40">
                      {[
                        ["Ehegatte / eingetr. Partner", "500.000 €", "7–30 %"],
                        ["Kinder (je Kind)", "400.000 €", "7–30 %"],
                        ["Enkel", "200.000 €", "7–30 %"],
                        ["Eltern & Großeltern", "100.000 €", "7–30 %"],
                        ["Geschwister, Nichten, Neffen", "20.000 €", "15–43 %"],
                        ["Sonstige Erben", "20.000 €", "30–50 %"],
                      ].map(([grad, fb, steuer], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-bone" : "bg-cream"}>
                          <td className="px-5 py-3 text-graphite">{grad}</td>
                          <td className="px-5 py-3 text-ink font-medium">{fb}</td>
                          <td className="px-5 py-3 text-graphite">{steuer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-gold/8 border border-gold/20 p-5 mb-8">
                  <p className="text-[13px] font-medium text-ink mb-1">Sonderfall: Selbst genutztes Familienheim</p>
                  <p className="text-[13px] text-graphite leading-relaxed">
                    Ehegatten und Kinder können die selbst genutzte Immobilie erbschaftsteuerfrei erben — wenn sie 10 Jahre darin wohnen bleiben. Bei Kindern gilt zusätzlich eine Wohnflächenbegrenzung von 200 m². Wird die Immobilie innerhalb von 10 Jahren verkauft oder nicht mehr selbst bewohnt, fällt Erbschaftsteuer rückwirkend an.
                  </p>
                </div>

                <h3 className="font-serif text-[1.3rem] text-ink mb-4">Spekulationssteuer beim Verkauf</h3>
                <p className="text-graphite text-[15px] leading-[1.85] mb-4">
                  Als Erbe übernehmen Sie die Anschaffungsdaten des Erblassers — inklusive der steuerlichen Haltedauer. Das ist häufig ein unterschätzter Vorteil: Hat der Erblasser die Immobilie bereits vor mehr als 10 Jahren erworben, fällt beim Verkauf <strong>keine Spekulationssteuer</strong> an.
                </p>
                <div className="space-y-3 mb-4">
                  {[
                    { ok: true,  text: "Immobilie > 10 Jahre im Besitz des Erblassers → kein Spekulationsgewinn" },
                    { ok: true,  text: "Immobilie wurde vom Erblasser selbst bewohnt → kein Spekulationsgewinn" },
                    { ok: false, text: "Immobilie < 10 Jahre im Besitz und nicht selbst bewohnt → Spekulationssteuer auf Gewinn" },
                    { ok: false, text: "Erbe bewohnt die Immobilie selbst 2 Jahre und verkauft dann → kein Spekulationsgewinn" },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-3 p-3.5 ${item.ok ? "bg-[#f0f7f0]" : "bg-[#fdf5f5]"}`}>
                      {item.ok
                        ? <Check className="w-4 h-4 text-[#4a7c5a] shrink-0 mt-0.5" />
                        : <AlertCircle className="w-4 h-4 text-[#b05050] shrink-0 mt-0.5" />}
                      <p className="text-[13px] text-graphite">{item.text}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[13px] text-stone italic">
                  Wichtig: Lassen Sie die steuerliche Situation vor einem Verkauf von einem Steuerberater prüfen. Die hier dargestellten Informationen sind allgemeiner Natur und ersetzen keine individuelle Beratung.
                </p>
              </motion.div>

              {/* 4. Erbengemeinschaft */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gold/60 font-serif text-4xl leading-none">04</span>
                  <div className="h-px flex-1 bg-line/60" />
                </div>
                <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink leading-tight mb-6">
                  Die Erbengemeinschaft — wenn mehrere erben
                </h2>
                <p className="text-graphite text-[15px] leading-[1.85] mb-5">
                  Wenn mehrere Personen gemeinsam erben, entsteht automatisch eine Erbengemeinschaft. Das klingt harmlos — kann aber zu erheblichen Konflikten führen, wenn die Miterben unterschiedliche Vorstellungen haben.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { title: "Einstimmigkeit ist meist erforderlich", text: "Für wesentliche Entscheidungen — Verkauf, umfangreiche Renovierungen, Vermietung an neue Mieter — ist in der Regel die Zustimmung aller Miterben erforderlich. Ein einziger Miterbe kann den Prozess blockieren." },
                    { title: "Der Auseinandersetzungsanspruch", text: "Jeder Miterbe kann jederzeit die Auseinandersetzung der Erbengemeinschaft verlangen — also die Aufteilung des Nachlasses. Bei einer Immobilie bedeutet das in der Praxis: Verkauf mit Verteilung des Erlöses oder Übernahme durch einen Miterben gegen Auszahlung der anderen." },
                    { title: "Die Teilungsversteigerung als letztes Mittel", text: "Wenn keine Einigung möglich ist, kann ein Miterbe beim Amtsgericht die Teilungsversteigerung beantragen. Das Ergebnis ist fast immer ein deutlich niedrigerer Verkaufserlös als beim freihändigen Verkauf — oft 20–40 % unter Marktwert. Die Teilungsversteigerung sollte das allerletzte Mittel sein." },
                    { title: "Mediation und gemeinsame Lösung", text: "In vielen Fällen ist ein erfahrener Immobilienmakler als neutrale Vermittlerfigur hilfreich: Er bewertet die Immobilie unparteiisch, koordiniert den Verkaufsprozess und sorgt dafür, dass alle Miterben informiert und einbezogen werden." },
                  ].map((item, i) => (
                    <div key={i} className="border-l-2 border-gold/30 pl-5 py-1">
                      <p className="font-serif text-[1.05rem] text-ink mb-1">{item.title}</p>
                      <p className="text-[14px] text-graphite leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-bone border border-line/50 p-6">
                  <p className="font-serif text-[1.1rem] text-ink mb-3">Praxis-Tipp: Frühzeitig reden</p>
                  <p className="text-[14px] text-graphite leading-relaxed">
                    Je früher alle Miterben offen über ihre Vorstellungen sprechen, desto größer die Chance auf eine einvernehmliche Lösung. Ein gemeinsam beauftragter Makler, der alle Parteien gleich behandelt und informiert, verhindert oft, dass aus sachlichen Meinungsverschiedenheiten persönliche Konflikte werden.
                  </p>
                </div>
              </motion.div>

              {/* 5. Bewertung */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gold/60 font-serif text-4xl leading-none">05</span>
                  <div className="h-px flex-1 bg-line/60" />
                </div>
                <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink leading-tight mb-6">
                  Die Erbimmobilie richtig bewerten lassen
                </h2>
                <p className="text-graphite text-[15px] leading-[1.85] mb-5">
                  Für Steuerzwecke nimmt das Finanzamt eine eigene Bewertung vor — den sogenannten Grundbesitzwert. Dieser liegt oft unter dem tatsächlichen Marktwert. Für Ihre persönliche Entscheidung (Verkaufen, Halten, Auszahlen von Miterben) benötigen Sie jedoch eine realistische Marktbewertung.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { title: "Verkehrswertgutachten", desc: "Vom Sachverständigen erstellt. Rechtssicher, von Finanzämtern und Gerichten anerkannt. Kosten: 1.500–5.000 €. Sinnvoll bei Streitigkeiten oder steuerlicher Optimierung." },
                    { title: "Maklerbeurteilung", desc: "Kostenfreie Einschätzung durch einen erfahrenen Makler. Basiert auf aktuellen Marktdaten. Ausreichend für die Entscheidungsfindung und Verkaufsvorbereitung." },
                    { title: "Finanzamtsbewertung", desc: "Standardisiertes Verfahren (Vergleichswert-, Ertragswert- oder Sachwertverfahren). Nicht identisch mit dem Marktwert — kann niedriger oder höher liegen." },
                    { title: "Immobiliensachverständiger des VDI/RICS", desc: "Zertifizierte Gutachter mit internationalen Standards. Empfehlenswert bei Kapitalanlagen oder grenzüberschreitenden Erbfällen." },
                  ].map((item, i) => (
                    <div key={i} className="bg-bone border border-line/50 p-4">
                      <p className="font-serif text-[1rem] text-ink mb-1.5">{item.title}</p>
                      <p className="text-[13px] text-graphite leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 6. Häufige Fehler */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gold/60 font-serif text-4xl leading-none">06</span>
                  <div className="h-px flex-1 bg-line/60" />
                </div>
                <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink leading-tight mb-6">
                  Die 6 häufigsten Fehler beim Erbimmobilien-Verkauf
                </h2>

                <div className="space-y-4">
                  {[
                    { nr: "01", title: "Zu schnell verkaufen ohne Steuerprüfung", text: "Wer eine Erbimmobilie überstürzt verkauft, ohne die steuerliche Situation geprüft zu haben, riskiert unerwartete Steuerlasten — oder verzichtet auf legale Optimierungsmöglichkeiten." },
                    { nr: "02", title: "Den Wert unterschätzen", text: "Viele Erben orientieren sich am Kaufpreis des Erblassers oder an alten Unterlagen. Der tatsächliche Marktwert liegt heute oft deutlich höher. Eine professionelle Bewertung ist der erste Schritt." },
                    { nr: "03", title: "Unnötige Renovierungen durchführen", text: "Nicht jede Renovierung steigert den Verkaufserlös. Oft sind kosmetische Maßnahmen (Farbe, Reinigung, Entrümpelung) wirksamer als teure Kernsanierungen." },
                    { nr: "04", title: "Die Erbengemeinschaft unterschätzen", text: "Ohne klare Absprachen unter Miterben entstehen Verzögerungen, die den Verkauf Monate oder Jahre blockieren können. Frühzeitige Kommunikation ist entscheidend." },
                    { nr: "05", title: "Falsche Preisvorstellung", text: "Ein zu hoch angesetzter Preis führt zu langen Vermarktungszeiten und Preisreduktionen, die Käufer verunsichern. Ein realistischer Marktpreis erzielt meist das beste Ergebnis." },
                    { nr: "06", title: "Ohne Makler verkaufen wollen", text: "Der Privatverkauf einer Erbimmobilie ist zeitaufwändig und fehleranfällig — besonders wenn gleichzeitig Bürokratie, Steuer und Erbengemeinschaft zu managen sind. Ein erfahrener Makler nimmt Ihnen den Großteil der Arbeit ab und erzielt in der Regel bessere Preise." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 py-5 border-b border-line/40">
                      <span className="text-gold/60 font-serif text-3xl leading-none shrink-0 w-10">{item.nr}</span>
                      <div>
                        <p className="font-serif text-[1.05rem] text-ink mb-1">{item.title}</p>
                        <p className="text-[14px] text-graphite leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-ink leading-tight mb-8">
                  Häufige Fragen zur Erbimmobilie
                </h2>
                <div className="space-y-0 border-t border-line/50">
                  {faq.map((item, i) => (
                    <div key={i} className="py-6 border-b border-line/40">
                      <p className="font-serif text-[1.05rem] text-ink mb-3">{item.q}</p>
                      <p className="text-[14px] text-graphite leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-6">

                {/* CTA Card */}
                <div className="bg-ink text-cream p-8">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-gold mb-4">Kostenfreie Beratung</p>
                  <p className="font-serif text-[1.4rem] leading-snug mb-4">
                    Erbimmobilie bewerten lassen
                  </p>
                  <p className="text-[13px] text-cream/70 leading-relaxed mb-6">
                    Wir beraten Sie diskret und kostenfrei — ohne Verkaufsdruck. Erhalten Sie eine fundierte Einschätzung des Marktwertes Ihrer Erbimmobilie.
                  </p>
                  <Link
                    href="/bewertung"
                    className="flex items-center justify-between w-full bg-gold text-ink px-5 py-3.5 text-[11px] uppercase tracking-[0.16em] font-medium hover:bg-gold/90 transition-colors group"
                  >
                    Kostenlose Bewertung
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Checkliste */}
                <div className="bg-bone border border-line/50 p-6">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-4">Ihre Checkliste</p>
                  <p className="font-serif text-[1rem] text-ink mb-4">Erste Schritte nach dem Erbfall</p>
                  <ul className="space-y-3">
                    {[
                      "Erbschein beantragen (Nachlassgericht)",
                      "Grundbucheinsicht nehmen",
                      "Bestehende Lasten prüfen (Grundschulden, Hypotheken)",
                      "Erbschaftsteuer beim Finanzamt anmelden",
                      "Steuerberater konsultieren",
                      "Marktbewertung einholen",
                      "Miterben frühzeitig einbeziehen",
                      "Entscheidung: Halten, vermieten oder verkaufen",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 border border-gold/40 rounded-sm shrink-0 mt-0.5 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-gold/30 rounded-sm" />
                        </div>
                        <span className="text-[13px] text-graphite leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weitere Ratgeber */}
                <div className="border border-line/50 p-6">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-stone mb-4">Weitere Ratgeber</p>
                  <div className="space-y-3">
                    {[
                      { label: "Immobilie verkaufen", href: "/immobilie-verkaufen" },
                      { label: "Immobilienbewertung", href: "/ratgeber/immobilienbewertung" },
                      { label: "Off-Market Verkauf", href: "/ratgeber/off-market-verkauf" },
                      { label: "Trennung & Scheidung", href: "/ratgeber/scheidungsimmobilie" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between py-2 border-b border-line/30 group"
                      >
                        <span className="text-[13px] text-graphite group-hover:text-ink transition-colors">{item.label}</span>
                        <ArrowRight className="w-3 h-3 text-stone/40 group-hover:text-gold group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>

        {/* CTA Banner */}
        <section className="bg-bone border-t border-line/40">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-20">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-[10px] uppercase tracking-[0.24em] text-gold mb-4">Abels Immobilien</p>
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] text-ink leading-tight mb-4">
                  Erbimmobilie in guten Händen.
                </h2>
                <p className="text-[15px] text-graphite leading-relaxed max-w-[540px]">
                  Wir begleiten Erben seit über 25 Jahren bei der Entscheidungsfindung, der steuerlichen Abstimmung und dem diskreten Verkauf — mit Erfahrung, Empathie und ohne Zeitdruck.
                </p>
              </div>
              <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-3">
                <Link
                  href="/bewertung"
                  className="flex items-center justify-between bg-ink text-cream px-6 py-4 text-[11px] uppercase tracking-[0.16em] hover:bg-graphite transition-colors group"
                >
                  Kostenlose Bewertung anfordern
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/kontakt"
                  className="flex items-center justify-between border border-line text-ink px-6 py-4 text-[11px] uppercase tracking-[0.16em] hover:border-ink transition-colors group"
                >
                  Persönlich beraten lassen
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
