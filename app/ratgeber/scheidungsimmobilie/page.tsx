"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft, Check, AlertCircle, Scale, Home, HandshakeIcon } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Immobilie bei Scheidung: Was tun mit dem gemeinsamen Haus?',
  description: 'Trennung oder Scheidung – was passiert mit dem gemeinsamen Haus? Zugewinnausgleich, Verkauf, Auszahlung und alle Optionen erklärt.',
  author: { '@type': 'Organization', name: 'Abels Immobilien GmbH', url: 'https://abels-immobilien.de' },
  publisher: { '@type': 'Organization', name: 'Abels Immobilien GmbH', url: 'https://abels-immobilien.de' },
  url: 'https://abels-immobilien.de/ratgeber/scheidungsimmobilie',
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
      name: 'Muss das Haus bei einer Scheidung verkauft werden?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nein, ein Verkauf ist nicht zwingend. Es gibt drei Hauptoptionen: Ein Partner kauft den anderen aus, einer übernimmt die Immobilie gegen Zugewinnausgleich, oder beide verkaufen gemeinsam. Nur wenn keine Einigung möglich ist, kann ein Partner die Teilungsversteigerung beantragen – die wirtschaftlich schlechteste Option.' },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Zugewinnausgleich bei Immobilien?',
      acceptedAnswer: { '@type': 'Answer', text: 'Der Zugewinnausgleich sorgt dafür, dass der während der Ehe erzielte Vermögenszuwachs (also auch Wertsteigerungen der Immobilie) zu gleichen Teilen auf beide Eheleute verteilt wird. Grundlage ist der aktuelle Verkehrswert der Immobilie abzüglich des Anfangsvermögens bei Eheschließung.' },
    },
    {
      '@type': 'Question',
      name: 'Kann ich meinen Ex-Partner aus dem Grundbuch löschen lassen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja – aber nur mit schriftlicher Zustimmung des anderen Eigentümers per notariell beurkundetem Vertrag oder per Gerichtsurteil. Eine einseitige Löschung ist nicht möglich. Im Rahmen der Scheidungsfolgenvereinbarung wird dies meist gemeinsam geregelt.' },
    },
    {
      '@type': 'Question',
      name: 'Was passiert mit dem Immobilienkredit bei Scheidung?',
      acceptedAnswer: { '@type': 'Answer', text: 'Beide Partner haften gemeinsam für den Kredit, solange beide im Darlehensvertrag stehen. Übernimmt ein Partner die Immobilie, muss die Bank dem Schuldbeitritt zustimmen und den anderen Partner aus der Haftung entlassen. Alternativ: gemeinsamer Verkauf und vollständige Kreditablösung aus dem Erlös.' },
    },
    {
      '@type': 'Question',
      name: 'Fällt bei der Übertragung der Immobilie auf den Ex-Partner Grunderwerbsteuer an?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nein – Immobilienübertragungen zwischen Eheleuten im Rahmen der Scheidungsfolgenvereinbarung sind von der Grunderwerbsteuer befreit. Dies gilt auch noch bis zu einem Jahr nach der Scheidung.' },
    },
    {
      '@type': 'Question',
      name: 'Was ist eine Teilungsversteigerung und wie vermeide ich sie?',
      acceptedAnswer: { '@type': 'Answer', text: 'Die Teilungsversteigerung ist ein Zwangsverkauf über das Gericht, bei dem die Immobilie meist weit unter Marktwert versteigert wird. Sie droht, wenn sich beide Parteien nicht einigen können. Vermeiden lässt sie sich durch einen gemeinsamen freihändigen Verkauf über einen neutralen Makler – der fast immer deutlich mehr Erlös bringt.' },
    },
  ],
}

const faq = [
  {
    q: "Muss das Haus bei einer Scheidung verkauft werden?",
    a: "Nein, ein Verkauf ist nicht zwingend. Es gibt drei Hauptoptionen: Ein Partner kauft den anderen aus, einer übernimmt die Immobilie gegen Zugewinnausgleich, oder beide verkaufen gemeinsam. Nur wenn keine Einigung möglich ist, droht die Teilungsversteigerung – die wirtschaftlich schlechteste Option für beide.",
  },
  {
    q: "Was ist der Zugewinnausgleich bei Immobilien?",
    a: "Der Zugewinnausgleich sorgt dafür, dass der während der Ehe erzielte Vermögenszuwachs zu gleichen Teilen auf beide Eheleute verteilt wird. Grundlage ist der aktuelle Verkehrswert der Immobilie abzüglich des Anfangsvermögens bei Eheschließung.",
  },
  {
    q: "Kann ich meinen Ex-Partner aus dem Grundbuch löschen lassen?",
    a: "Ja – aber nur mit notariell beurkundetem Vertrag oder Gerichtsurteil. Eine einseitige Löschung ist nicht möglich. Im Rahmen der Scheidungsfolgenvereinbarung wird dies gemeinsam geregelt.",
  },
  {
    q: "Was passiert mit dem Immobilienkredit bei Scheidung?",
    a: "Beide Partner haften gemeinsam für den Kredit, solange beide im Darlehensvertrag stehen. Übernimmt ein Partner die Immobilie, muss die Bank zustimmen und den anderen aus der Haftung entlassen.",
  },
  {
    q: "Fällt bei der Übertragung Grunderwerbsteuer an?",
    a: "Nein – Immobilienübertragungen zwischen Eheleuten im Rahmen der Scheidungsfolgenvereinbarung sind von der Grunderwerbsteuer befreit. Dies gilt auch noch bis zu einem Jahr nach der Scheidung.",
  },
  {
    q: "Was ist eine Teilungsversteigerung und wie vermeide ich sie?",
    a: "Die Teilungsversteigerung ist ein Zwangsverkauf über das Gericht, bei dem die Immobilie meist weit unter Marktwert versteigert wird. Vermeiden lässt sie sich durch einen gemeinsamen freihändigen Verkauf – der fast immer deutlich mehr Erlös bringt.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function ScheidungsimmobiliePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      {/* ── HERO ── */}
      <section className="relative bg-bone pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-zoom">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(135deg, #f5f0e8 0%, #ede8de 50%, #e8e3d8 100%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link
              href="/ratgeber"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-graphite/50 hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft size={12} /> Alle Ratgeber
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/40 px-3 py-1.5">
                Scheidung & Trennung
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-graphite/40">
                12 Min. Lesezeit
              </span>
            </div>

            <h1 className="font-serif text-4xl lg:text-6xl text-ink leading-[1.1] mb-6 max-w-3xl">
              Was machen bei Trennung oder Scheidung?
            </h1>
            <p className="text-graphite/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Das gemeinsame Haus ist oft die größte Vermögensposition einer Ehe – und in der Trennungsphase die emotionalste.
              Wir zeigen alle Optionen, klären rechtliche Fragen und helfen Ihnen, die beste Entscheidung zu treffen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">
            {/* ── LEFT: ARTICLE ── */}
            <div>

              {/* TABLE OF CONTENTS */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="border border-line/60 p-6 lg:p-8 mb-14"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-graphite/40 mb-5">Inhalt</p>
                <div className="grid sm:grid-cols-3 gap-x-8 gap-y-3">
                  {[
                    ["01", "Die vier Optionen"],
                    ["02", "Rechtliche Grundlagen"],
                    ["03", "Zugewinnausgleich"],
                    ["04", "Kredit & Finanzierung"],
                    ["05", "Steuerliche Aspekte"],
                    ["06", "Häufige Fehler"],
                  ].map(([num, label]) => (
                    <div key={num} className="flex items-center gap-3 group">
                      <span className="text-[10px] text-gold/60 font-serif">{num}</span>
                      <span className="text-sm text-graphite/70 group-hover:text-ink transition-colors">{label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ── SECTION 01: Die vier Optionen ── */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="mb-16"
              >
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-serif text-5xl text-gold/55">01</span>
                  <h2 className="font-serif text-2xl lg:text-3xl text-ink">
                    Die vier Optionen für Ihre Immobilie
                  </h2>
                </div>
                <p className="text-graphite/70 leading-relaxed mb-8">
                  Eine Trennung bedeutet nicht automatisch, dass das gemeinsame Haus verkauft werden muss.
                  Es gibt vier grundsätzliche Wege – jeder mit eigenen Vor- und Nachteilen:
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    {
                      icon: "①",
                      title: "Gemeinsamer Verkauf",
                      desc: "Beide verkaufen die Immobilie, teilen den Erlös und tilgen gemeinsam den restlichen Kredit. Meist die einfachste und emotional sauberste Lösung.",
                      pros: ["Klarer Schlussstrich", "Erlös wird geteilt", "Keine laufende Bindung"],
                      tag: "Häufigste Wahl",
                    },
                    {
                      icon: "②",
                      title: "Ein Partner kauft aus",
                      desc: "Ein Partner übernimmt die Immobilie vollständig, zahlt dem anderen seinen Anteil aus und übernimmt allein den Kredit.",
                      pros: ["Kontinuität für Kinder", "Kein Marktverkauf nötig", "Wert bleibt erhalten"],
                      tag: "Bei Einigkeit",
                    },
                    {
                      icon: "③",
                      title: "Vermietung als Gemeinschaft",
                      desc: "Beide bleiben Eigentümer und vermieten die Immobilie. Die Mieteinnahmen werden geteilt. Setzt dauerhaftes kooperatives Verhältnis voraus.",
                      pros: ["Laufende Einnahmen", "Wertsteigerung möglich", "Kein sofortiger Verkauf"],
                      tag: "Langfristige Option",
                    },
                    {
                      icon: "④",
                      title: "Teilungsversteigerung",
                      desc: "Gerichtlich erzwungener Verkauf, wenn keine Einigung möglich ist. Erlöse liegen meist 20–40 % unter dem Marktwert.",
                      pros: [],
                      tag: "Letzte Option vermeiden",
                      warning: true,
                    },
                  ].map((opt) => (
                    <div
                      key={opt.title}
                      className={`p-6 border ${opt.warning ? "border-red-200 bg-red-50/30" : "border-line/60 bg-bone/30"}`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="font-serif text-2xl text-gold/40">{opt.icon}</span>
                          <h3 className="font-serif text-lg text-ink">{opt.title}</h3>
                        </div>
                        <span className={`text-[9px] uppercase tracking-[0.15em] px-2 py-1 shrink-0 ${opt.warning ? "bg-red-100 text-red-600" : "bg-gold/10 text-gold"}`}>
                          {opt.tag}
                        </span>
                      </div>
                      <p className="text-sm text-graphite/70 leading-relaxed mb-4">{opt.desc}</p>
                      {opt.pros.length > 0 && (
                        <ul className="space-y-1.5">
                          {opt.pros.map((p) => (
                            <li key={p} className="flex items-center gap-2 text-sm text-graphite/60">
                              <Check size={13} className="text-gold shrink-0" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      )}
                      {opt.warning && (
                        <div className="flex items-start gap-2 mt-2">
                          <AlertCircle size={14} className="text-red-400 shrink-0 mt-0.5" />
                          <p className="text-sm text-red-500">
                            Erlösverluste von 20–40 % sind typisch. Nur wenn alle anderen Wege scheitern.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ── SECTION 02: Rechtliche Grundlagen ── */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="mb-16"
              >
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-serif text-5xl text-gold/55">02</span>
                  <h2 className="font-serif text-2xl lg:text-3xl text-ink">
                    Rechtliche Grundlagen
                  </h2>
                </div>

                <p className="text-graphite/70 leading-relaxed mb-8">
                  Wer eine gemeinsame Immobilie besitzt, muss mehrere rechtliche Ebenen kennen:
                  das Grundbuch, den Güterstand und die Scheidungsfolgenvereinbarung.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      title: "Das Grundbuch ist entscheidend",
                      content: "Wer im Grundbuch steht, ist Eigentümer. Stehen beide Partner im Grundbuch, sind sie zu je 1/2 Anteil Eigentümer – unabhängig davon, wer mehr eingezahlt hat. Wer allein im Grundbuch steht, ist alleiniger Eigentümer, auch wenn der andere den Kredit mitfinanziert hat.",
                    },
                    {
                      title: "Güterstand: Zugewinngemeinschaft als Regelfall",
                      content: "Die meisten Ehen werden im gesetzlichen Güterstand der Zugewinngemeinschaft geführt. Das bedeutet: Beide behalten ihr Eigentum getrennt – aber beim Auseinandergehen wird der während der Ehe erzielte Vermögenszuwachs ausgeglichen (Zugewinnausgleich). Das betrifft auch Wertsteigerungen der Immobilie.",
                    },
                    {
                      title: "Scheidungsfolgenvereinbarung",
                      content: "Alle Regelungen zur Immobilie sollten in einer notariell beurkundeten Scheidungsfolgenvereinbarung festgehalten werden. Nur so sind Grundbuchänderungen, Kreditübernahmen und Zahlungsverpflichtungen rechtlich verbindlich.",
                    },
                    {
                      title: "Trennungsjahr und Nutzungsrecht",
                      content: "Während des Trennungsjahres hat derjenige, der die Wohnung bewohnt, ein Nutzungsrecht – auch wenn der andere Eigentümer ist. Der auszugezogene Partner kann nach dem Trennungsjahr eine Nutzungsvergütung verlangen, wenn er die Hälfte des Eigentumsanteils hält.",
                    },
                    {
                      title: "Grundbuchänderung: Ablauf",
                      content: "Um einen Partner aus dem Grundbuch zu löschen, braucht es: (1) Notariellen Übertragungsvertrag, (2) Zustimmung der finanzierenden Bank, (3) Ggf. Grunderwerbsteuerbefreiung nachweisen, (4) Eintragung beim Grundbuchamt. Dauer: typischerweise 4–10 Wochen.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-5 p-5 border-l-2 border-gold/30">
                      <div>
                        <h3 className="font-serif text-base text-ink mb-2">{item.title}</h3>
                        <p className="text-sm text-graphite/70 leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ── SECTION 03: Zugewinnausgleich ── */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="mb-16"
              >
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-serif text-5xl text-gold/55">03</span>
                  <h2 className="font-serif text-2xl lg:text-3xl text-ink">
                    Zugewinnausgleich: Wer bekommt was?
                  </h2>
                </div>

                <p className="text-graphite/70 leading-relaxed mb-6">
                  Der Zugewinnausgleich ist der häufigste Streitpunkt bei Scheidungen mit Immobilien.
                  Er stellt sicher, dass der während der Ehe erwirtschaftete Wertzuwachs gerecht aufgeteilt wird.
                </p>

                <div className="bg-bone/50 border border-line/60 p-6 lg:p-8 mb-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-graphite/40 mb-5">Berechnungsbeispiel</p>
                  <div className="grid sm:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="font-serif text-base text-ink mb-3">Bei Eheschließung</p>
                      <table className="w-full">
                        <tbody className="divide-y divide-line/30">
                          <tr>
                            <td className="py-2 text-graphite/60">Immobilienwert</td>
                            <td className="py-2 text-right font-mono text-ink">380.000 €</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-graphite/60">Anfangsvermögen A</td>
                            <td className="py-2 text-right font-mono text-ink">190.000 €</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-graphite/60">Anfangsvermögen B</td>
                            <td className="py-2 text-right font-mono text-ink">190.000 €</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <p className="font-serif text-base text-ink mb-3">Bei Scheidung</p>
                      <table className="w-full">
                        <tbody className="divide-y divide-line/30">
                          <tr>
                            <td className="py-2 text-graphite/60">Immobilienwert</td>
                            <td className="py-2 text-right font-mono text-ink">520.000 €</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-graphite/60">Wertzuwachs</td>
                            <td className="py-2 text-right font-mono text-gold">+140.000 €</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-graphite/60">Ausgleich (½)</td>
                            <td className="py-2 text-right font-mono text-ink font-medium">70.000 €</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <p className="text-[11px] text-graphite/40 mt-4">
                    Im Beispiel zahlt der übernehmende Partner zusätzlich zu seinem Hälfteanteil (260.000 €) noch 70.000 € Zugewinnausgleich.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-amber-50/50 border border-amber-200/50">
                    <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-ink mb-1">Verkehrswertgutachten ist Pflicht</p>
                      <p className="text-sm text-graphite/70">
                        Der Zugewinnausgleich basiert auf dem aktuellen Verkehrswert. Ein unabhängiges Gutachten schützt vor Unter- oder Überbewertung durch eine Partei. Kostet 1.000–3.000 € und ist in strittigen Fällen unverzichtbar.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-green-50/50 border border-green-200/50">
                    <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-ink mb-1">Ausnahme: Gütertrennung</p>
                      <p className="text-sm text-graphite/70">
                        Haben Sie einen Ehevertrag mit Gütertrennung geschlossen, entfällt der Zugewinnausgleich. Jeder behält sein Eigentum. Das Grundbuch bleibt aber entscheidend für die Eigentumsanteile.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ── SECTION 04: Kredit ── */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="mb-16"
              >
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-serif text-5xl text-gold/55">04</span>
                  <h2 className="font-serif text-2xl lg:text-3xl text-ink">
                    Kredit & Finanzierung: Die Bank als dritte Partei
                  </h2>
                </div>

                <p className="text-graphite/70 leading-relaxed mb-8">
                  Die finanzierende Bank ist oft der übersehene Akteur bei Scheidungen.
                  Ohne ihre Zustimmung kann kein Partner den anderen aus der Haftung entlassen.
                </p>

                <div className="grid sm:grid-cols-3 gap-5 mb-8">
                  {[
                    {
                      scenario: "Szenario A",
                      title: "Gemeinsamer Verkauf",
                      steps: [
                        "Immobilie wird verkauft",
                        "Kredit wird vollständig getilgt",
                        "Resterlös wird geteilt",
                        "Vorfälligkeitsentschädigung prüfen",
                      ],
                    },
                    {
                      scenario: "Szenario B",
                      title: "Ein Partner übernimmt",
                      steps: [
                        "Bonität des übernehmenden Partners prüfen",
                        "Bank muss Alleinschuldnerschaft genehmigen",
                        "Anderen Partner aus Grundbuch löschen",
                        "Neue Zinskonditionen verhandeln",
                      ],
                    },
                    {
                      scenario: "Szenario C",
                      title: "Bank verweigert Übernahme",
                      steps: [
                        "Keine Alleinübernahme möglich",
                        "Umschuldung bei anderer Bank prüfen",
                        "Eventuell gemeinsam weiterfinanzieren",
                        "Im Zweifel: Verkauf",
                      ],
                    },
                  ].map((s) => (
                    <div key={s.title} className="border border-line/60 p-5">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-gold/60">{s.scenario}</span>
                      <h3 className="font-serif text-base text-ink mt-1 mb-4">{s.title}</h3>
                      <ol className="space-y-2">
                        {s.steps.map((step, i) => (
                          <li key={step} className="flex items-start gap-2 text-sm text-graphite/70">
                            <span className="text-gold/40 font-serif text-xs mt-0.5 shrink-0">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>

                <div className="border border-line/60 p-6">
                  <p className="font-serif text-base text-ink mb-3">Vorfälligkeitsentschädigung</p>
                  <p className="text-sm text-graphite/70 leading-relaxed">
                    Wird der Kredit vor Ablauf der Zinsbindung durch einen Verkauf getilgt, verlangt die Bank eine Vorfälligkeitsentschädigung.
                    Diese kann je nach Restlaufzeit und Zinsdifferenz erheblich sein – von wenigen Tausend bis hin zu fünfstelligen Beträgen.
                    Prüfen Sie: Bei Trennung wegen Verkauf auf eigenen Wunsch kann die Entschädigung entfallen, wenn ein außerordentliches Kündigungsrecht greift (z. B. bei Ablauf von 10 Jahren).
                  </p>
                </div>
              </motion.div>

              {/* ── SECTION 05: Steuerliche Aspekte ── */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="mb-16"
              >
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-serif text-5xl text-gold/55">05</span>
                  <h2 className="font-serif text-2xl lg:text-3xl text-ink">
                    Steuerliche Aspekte
                  </h2>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      ok: true,
                      title: "Grunderwerbsteuer: Befreit bei Scheidungsübertragung",
                      content: "Überträgt ein Ehegatte seinen Eigentumsanteil auf den anderen im Rahmen der Scheidungsfolgenvereinbarung, fällt keine Grunderwerbsteuer an. Diese Befreiung gilt bis zu einem Jahr nach rechtskräftiger Scheidung. Danach fällt die reguläre Grunderwerbsteuer (je nach Bundesland 3,5–6,5 %) an.",
                    },
                    {
                      ok: true,
                      title: "Keine Schenkungssteuer bei Ausgleichszahlung",
                      content: "Ausgleichszahlungen im Rahmen des Zugewinnausgleichs sind grundsätzlich steuerfrei – sie stellen keine Schenkung dar, sondern eine gesetzliche Ausgleichspflicht.",
                    },
                    {
                      ok: null,
                      title: "Spekulationssteuer: Vorsicht bei kurzem Haltezeitraum",
                      content: "Wenn die Immobilie weniger als 10 Jahre im Eigentum war und nicht selbst bewohnt wurde, kann beim Verkauf Spekulationssteuer anfallen. Das gilt auch bei Scheidungsverkäufen. Ausnahme: Eigennutzung im Jahr des Verkaufs und in den beiden Vorjahren.",
                    },
                    {
                      ok: true,
                      title: "Werbungskosten während der Trennungsphase",
                      content: "Wenn die Immobilie vermietet ist, können beide Eigentümer anteilig Werbungskosten steuerlich geltend machen – auch wenn ein Partner bereits ausgezogen ist. Klären Sie, wer die Erklärung abgibt.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`flex gap-4 p-5 border ${item.ok === true ? "border-green-200/60 bg-green-50/20" : item.ok === false ? "border-red-200/60 bg-red-50/20" : "border-amber-200/60 bg-amber-50/20"}`}
                    >
                      {item.ok === true ? (
                        <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <h3 className="text-sm font-medium text-ink mb-1.5">{item.title}</h3>
                        <p className="text-sm text-graphite/70 leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ── SECTION 06: Häufige Fehler ── */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="mb-16"
              >
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-serif text-5xl text-gold/55">06</span>
                  <h2 className="font-serif text-2xl lg:text-3xl text-ink">
                    7 häufige Fehler – und wie Sie sie vermeiden
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      num: "01",
                      fehler: "Emotionale statt rationale Entscheidung",
                      folge: "Das Haus wird um jeden Preis gehalten – auch wenn es finanziell nicht sinnvoll ist. Laufende Kosten, Kredit und Marktchancen werden ignoriert.",
                      lösung: "Lassen Sie die Immobilie professionell bewerten und vergleichen Sie Kosten vs. Nutzen nüchtern.",
                    },
                    {
                      num: "02",
                      fehler: "Ohne Anwalt und Notar handeln",
                      folge: "Mündliche Absprachen sind nicht bindend. Ohne Notar kann keine Grundbuchänderung vorgenommen werden.",
                      lösung: "Immer einen Fachanwalt für Familienrecht und einen Notar einschalten. Die Kosten sind geringer als spätere Rechtsstreitigkeiten.",
                    },
                    {
                      num: "03",
                      fehler: "Die Bank zu spät informieren",
                      folge: "Übernahme oder Kreditumschuldung scheitern, weil die Bank nicht rechtzeitig einbezogen wurde.",
                      lösung: "Die Bank frühzeitig über die Trennung informieren und die Optionen gemeinsam durchsprechen.",
                    },
                    {
                      num: "04",
                      fehler: "Kein Verkehrswertgutachten einholen",
                      folge: "Uneinigkeit über den Immobilienwert führt zu monatelangen Streitigkeiten und blockiert die Scheidung.",
                      lösung: "Ein unabhängiger Gutachter gibt einen verbindlichen Wert, den beide Seiten akzeptieren können.",
                    },
                    {
                      num: "05",
                      fehler: "Teilungsversteigerung als Druckmittel nutzen",
                      folge: "Die Versteigerung wird tatsächlich durchgeführt – mit Verlusten von oft 20–40 % für beide Seiten.",
                      lösung: "Die Teilungsversteigerung ist kein Verhandlungschip, sondern ein echtes finanzielles Risiko für beide.",
                    },
                    {
                      num: "06",
                      fehler: "Steuerfristen vergessen",
                      folge: "Die Grunderwerbsteuerbefreiung bei Übertragungen gilt nur bis 1 Jahr nach der Scheidung. Danach fallen Steuern an.",
                      lösung: "Alle steuerrelevanten Fristen im Blick behalten und mit einem Steuerberater abstimmen.",
                    },
                    {
                      num: "07",
                      fehler: "Makler erst nach der Scheidung beauftragen",
                      folge: "Marktchancen werden verpasst. Ein rechtzeitig beauftragter Makler kann den Prozess begleiten, bevor Emotionen eskalieren.",
                      lösung: "Beauftragen Sie frühzeitig einen neutralen Makler, der beiden Parteien gegenüber unabhängig agiert.",
                    },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-5 p-5 border border-line/50">
                      <span className="font-serif text-3xl text-gold/55 leading-none shrink-0 w-10">{item.num}</span>
                      <div>
                        <h3 className="font-serif text-base text-ink mb-1">Fehler: {item.fehler}</h3>
                        <p className="text-sm text-graphite/60 mb-2">
                          <span className="font-medium text-graphite/80">Folge: </span>{item.folge}
                        </p>
                        <p className="text-sm text-graphite/70">
                          <span className="font-medium text-green-700">Lösung: </span>{item.lösung}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ── FAQ ── */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="mb-12"
              >
                <h2 className="font-serif text-2xl lg:text-3xl text-ink mb-8">
                  Häufige Fragen
                </h2>
                <div className="space-y-0 divide-y divide-line/50">
                  {faq.map((item) => (
                    <div key={item.q} className="py-6">
                      <h3 className="font-serif text-base text-ink mb-3">{item.q}</h3>
                      <p className="text-sm text-graphite/70 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT: SIDEBAR ── */}
            <div className="space-y-6 lg:sticky lg:top-32">

              {/* CTA Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="bg-ink text-white p-7"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold/80 mb-4">Kostenlose Beratung</p>
                <p className="font-serif text-xl leading-snug mb-3">
                  Neutrale Bewertung Ihrer Immobilie in der Trennungsphase
                </p>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  Wir beraten beide Parteien fair und unabhängig. Kein Druck, keine einseitigen Interessen – nur faktenbasierte Einschätzungen.
                </p>
                <Link
                  href="/verkaufen"
                  className="inline-flex items-center gap-2 bg-gold text-white text-xs uppercase tracking-[0.12em] px-5 py-3 hover:bg-gold/90 transition-colors w-full justify-center"
                >
                  Jetzt Beratung anfragen
                  <ArrowRight size={13} />
                </Link>
              </motion.div>

              {/* Checkliste */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="border border-line/60 p-6"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-graphite/40 mb-5">
                  Ihre erste Checkliste
                </p>
                <ul className="space-y-3">
                  {[
                    "Grundbuchauszug besorgen",
                    "Kreditvertrag prüfen (Restschuld)",
                    "Fachanwalt Familienrecht einschalten",
                    "Immobilienbewertung beauftragen",
                    "Bank über Trennung informieren",
                    "Güterstand klären (Vertrag vorhanden?)",
                    "Steuerverpflichtungen prüfen",
                    "Scheidungsfolgenvereinbarung planen",
                    "Makler bei gemeinsamem Verkauf wählen",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-graphite/70">
                      <Check size={14} className="text-gold shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Related */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="border border-line/60 p-6"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-graphite/40 mb-5">
                  Weitere Ratgeber
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Geerbt und jetzt? Erbimmobilie", href: "/ratgeber/erbimmobilie" },
                    { label: "Immobilie richtig verkaufen", href: "/verkaufen" },
                    { label: "Immobilienbewertung – wie läuft das ab?", href: "/verkaufen" },
                  ].map((link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      className="flex items-center justify-between text-sm text-graphite/70 hover:text-ink group py-2 border-b border-line/30 last:border-0"
                    >
                      {link.label}
                      <ArrowRight size={12} className="text-gold/40 group-hover:text-gold transition-colors shrink-0" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="bg-bone py-16 lg:py-20"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-4">Jetzt handeln</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink mb-5">
            Treffen Sie die richtige Entscheidung für Ihre Immobilie
          </h2>
          <p className="text-graphite/60 max-w-xl mx-auto mb-8 leading-relaxed">
            Trennung ist belastend genug. Wir sorgen dafür, dass Ihre Immobilie kein zusätzlicher Streitpunkt wird –
            mit fairer, neutraler Beratung und über 25 Jahren Erfahrung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/verkaufen"
              className="inline-flex items-center justify-center gap-2 bg-ink text-white text-xs uppercase tracking-[0.12em] px-8 py-4 hover:bg-ink/90 transition-colors"
            >
              Kostenlos beraten lassen
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/ratgeber"
              className="inline-flex items-center justify-center gap-2 border border-ink text-ink text-xs uppercase tracking-[0.12em] px-8 py-4 hover:bg-ink hover:text-white transition-colors"
            >
              Alle Ratgeber
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  )
}
