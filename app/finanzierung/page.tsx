"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Check, ChevronDown, Shield, BarChart2, Landmark, FileText } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinanzierungModal } from "@/components/finanzierung-modal"

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Wie viel Eigenkapital benötigt man für eine Immobilienfinanzierung?', acceptedAnswer: { '@type': 'Answer', text: 'Als Faustregel gilt: mindestens 20–30 % des Kaufpreises zuzüglich der Nebenkosten (Grunderwerbsteuer, Notar, Makler). Das senkt den Kreditbedarf, verbessert die Zinskonditionen und erhöht die Sicherheit der Finanzierung. In sehr guten Lagen können Banken auch höhere Beleihungsausläufe akzeptieren.' } },
    { '@type': 'Question', name: 'Welche Nebenkosten fallen beim Immobilienkauf an?', acceptedAnswer: { '@type': 'Answer', text: 'Grunderwerbsteuer (in NRW 6,5 %), Notarkosten (ca. 1,5–2 %), Grundbucheintragung (ca. 0,5 %) und ggf. Maklerprovision. Insgesamt sollten Sie mit 10–12 % des Kaufpreises an Nebenkosten rechnen. Diese werden in der Regel nicht finanziert und müssen aus Eigenkapital gedeckt werden.' } },
    { '@type': 'Question', name: 'Wie hoch darf die monatliche Rate sein?', acceptedAnswer: { '@type': 'Answer', text: 'Banken empfehlen, dass die Kreditrate nicht mehr als 35–40 % des monatlichen Nettoeinkommens beträgt. Bei der Planung sollten Sie Rücklagen für Instandhaltung, Betriebskosten und unerwartete Ausgaben einkalkulieren. Eine konservative Planung schützt vor finanziellen Engpässen.' } },
    { '@type': 'Question', name: 'Was ist eine Anschlussfinanzierung?', acceptedAnswer: { '@type': 'Answer', text: 'Nach Ablauf der Zinsbindungsfrist (z. B. 10 oder 15 Jahre) läuft das Darlehen zu den dann aktuellen Zinsen weiter — entweder bei der gleichen oder einer neuen Bank. Eine frühzeitige Planung der Anschlussfinanzierung (6–12 Monate vor Ablauf) sichert günstigere Konditionen.' } },
    { '@type': 'Question', name: 'Was bedeutet Tilgung und wie hoch sollte sie sein?', acceptedAnswer: { '@type': 'Answer', text: 'Tilgung ist der Anteil der monatlichen Rate, der das Darlehen tatsächlich zurückführt. Eine anfängliche Tilgung von 2–3 % ist heute Standard. Höhere Tilgung verkürzt die Laufzeit und reduziert die Zinskosten erheblich — bei niedrigen Zinsen besonders empfehlenswert.' } },
    { '@type': 'Question', name: 'Lohnt sich eine lange Zinsbindung?', acceptedAnswer: { '@type': 'Answer', text: 'In einem Niedrigzinsumfeld ist eine längere Zinsbindung (15–20 Jahre) sinnvoll, um günstige Konditionen langfristig zu sichern. In Hochzinsphasen können kürzere Laufzeiten vorteilhafter sein. Die richtige Entscheidung hängt von Ihrer persönlichen Risikobereitschaft und den aktuellen Markterwartungen ab.' } },
    { '@type': 'Question', name: 'Wie lange dauert die Finanzierungsgenehmigung?', acceptedAnswer: { '@type': 'Answer', text: 'Bei vollständigen Unterlagen dauert eine Kreditzusage in der Regel 1–3 Wochen. Bei komplexeren Objekten oder mehreren Finanzierungspartnern kann es länger dauern. Wir empfehlen, die Finanzierungsplanung vor oder parallel zur Objektsuche zu beginnen.' } },
    { '@type': 'Question', name: 'Kann man auch ohne Eigenkapital eine Immobilie finanzieren?', acceptedAnswer: { '@type': 'Answer', text: 'Vollfinanzierungen sind möglich, jedoch deutlich teurer und nur bei sehr guter Bonität und sicheren Einkommensverhältnissen realisierbar. Banken verlangen dann erhöhte Risikoaufschläge. Im gehobenen Segment ist eine solide Eigenkapitalbasis fast immer empfehlenswert.' } },
  ],
}

const faqs = [
  { q: 'Wie viel Eigenkapital benötigt man?', a: 'Als Faustregel gilt: mindestens 20–30 % des Kaufpreises zuzüglich aller Nebenkosten. Das senkt den Kreditbedarf, verbessert die Zinskonditionen und gibt Ihnen finanzielle Stabilität. In attraktiven Lagen können Banken auch höhere Beleihungsausläufe akzeptieren — abhängig von Ihrer Bonität.' },
  { q: 'Welche Nebenkosten fallen beim Kauf an?', a: 'In NRW beträgt die Grunderwerbsteuer 6,5 % des Kaufpreises. Hinzu kommen Notarkosten (ca. 1,5–2 %), Grundbucheintragung (ca. 0,5 %) und ggf. Maklerprovision. Insgesamt sollten Sie mit 10–12 % an Nebenkosten rechnen, die aus Eigenkapital zu bestreiten sind.' },
  { q: 'Wie hoch darf die monatliche Rate sein?', a: 'Banken empfehlen, dass die Kreditrate 35–40 % des monatlichen Nettoeinkommens nicht überschreitet. Planen Sie zusätzlich Rücklagen für Instandhaltung und unerwartete Ausgaben ein. Eine konservative Kalkulation schützt vor finanziellen Engpässen — besonders wichtig bei Zinsänderungen.' },
  { q: 'Was ist eine Anschlussfinanzierung?', a: 'Nach Ablauf der Zinsbindung — meist nach 10 oder 15 Jahren — muss das Restdarlehen neu verhandelt werden. Wer frühzeitig plant (6–12 Monate vor Ablauf), kann günstigere Konditionen sichern und hat die Wahl zwischen bestehender und neuer Bank.' },
  { q: 'Was bedeutet Tilgung?', a: 'Tilgung ist der Teil der Rate, der das Darlehen direkt reduziert. Eine anfängliche Tilgung von 2–3 % ist heute üblich. Wer höher tilgt, zahlt weniger Zinsen insgesamt und ist schneller schuldenfrei — besonders bei niedrigen Zinsen eine kluge Strategie.' },
  { q: 'Lohnt sich eine lange Zinsbindung?', a: 'Bei stabilen oder steigenden Zinsen ist eine lange Bindung (15–20 Jahre) empfehlenswert, um Planungssicherheit zu gewinnen. Bei erwarteten Zinssenkungen können kürzere Laufzeiten flexibler sein. Die richtige Wahl hängt von Ihrer Risikobereitschaft und den Markterwartungen ab.' },
  { q: 'Wie lange dauert die Genehmigung?', a: 'Bei vollständigen Unterlagen erhalten Sie eine Kreditzusage in der Regel binnen 1–3 Wochen. Wir empfehlen, die Finanzierungsplanung parallel zur Objektsuche zu starten — so sind Sie handlungsfähig, sobald das richtige Objekt gefunden ist.' },
  { q: 'Kann man ohne Eigenkapital finanzieren?', a: 'Vollfinanzierungen sind in Ausnahmefällen möglich, jedoch mit deutlich höheren Zinsaufschlägen verbunden. Voraussetzung ist eine sehr gute Bonität und ein stabiles Einkommen. Im gehobenen Segment ist eine solide Eigenkapitalbasis fast immer die bessere Grundlage.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-line/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group"
      >
        <span className="font-serif text-[17px] text-ink group-hover:text-gold transition-colors duration-200">{q}</span>
        <ChevronDown
          size={16}
          className={`text-gold/60 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-[15px] text-graphite/70 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FinanzierungPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-cream text-ink">
        <Header />

        {/* ── HERO ── */}
        <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 bg-cream border-b border-line/50">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid lg:grid-cols-12 gap-12 items-end"
            >
              <div className="lg:col-span-7">
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-gold/60" />
                  <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Baufinanzierung · Düsseldorf</span>
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] text-ink leading-[1.02] tracking-[-0.02em] mb-6"
                >
                  Baufinanzierung in Düsseldorf –<br />
                  <span className="text-graphite/60">sicher und individuell geplant.</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="text-[17px] text-graphite leading-[1.75] max-w-[540px] mb-10">
                  Abels Immobilien GmbH unterstützt Sie bei der Planung einer passenden Immobilienfinanzierung und begleitet Sie auf Wunsch bei allen wichtigen Schritten — transparent, unabhängig und in Ihrem Interesse.
                </motion.p>
                <motion.div variants={fadeUp}>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-ink text-cream text-xs uppercase tracking-[0.16em] px-8 py-4 hover:bg-graphite transition-colors"
                  >
                    Finanzierung anfragen
                    <ArrowRight size={13} />
                  </button>
                </motion.div>
              </div>

              <motion.div variants={fadeUp} className="lg:col-span-4 lg:col-start-9 space-y-4">
                {[
                  { icon: Shield, label: "Unabhängige Beratung" },
                  { icon: BarChart2, label: "Vergleich verschiedener Banken" },
                  { icon: Landmark, label: "Unterstützung bei Förderungen" },
                  { icon: FileText, label: "Individuelle Finanzierungskonzepte" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-4 p-4 border border-line/60 bg-bone/50">
                    <Icon size={16} className="text-gold shrink-0" />
                    <span className="text-[14px] text-graphite">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── VERTRAUEN ── */}
        <section className="py-20 lg:py-24 bg-bone border-b border-line/50">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <motion.div variants={fadeUp} className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-gold/60" />
                  <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Unser Ansatz</span>
                </div>
                <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] text-ink leading-[1.08] tracking-[-0.01em]">
                  Ehrlich beraten.<br />
                  <span className="text-graphite/60">Transparent begleitet.</span>
                </h2>
              </motion.div>
              <motion.div variants={fadeUp} className="lg:col-span-6 lg:col-start-7">
                <p className="text-[16px] text-graphite leading-[1.8]">
                  Als unabhängiger und inhabergeführter Immobilienmakler handeln wir stets in Ihrem Interesse. Bei der Planung Ihres Immobilienkaufs weisen wir transparent auf alle anfallenden Kosten hin und unterstützen Sie dabei, eine sichere und fundierte Entscheidung zu treffen — ohne versteckte Gebühren, ohne einseitige Empfehlungen.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── LEISTUNGEN ── */}
        <section className="py-20 lg:py-28 bg-cream border-b border-line/50">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Unsere Leistungen</span>
              </div>
              <div className="grid lg:grid-cols-12 items-end gap-8">
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] text-ink leading-[1.08] lg:col-span-6">
                  Was wir für Sie tun
                </h2>
                <p className="text-graphite/60 text-[15px] leading-relaxed lg:col-span-5 lg:col-start-8">
                  Von der ersten Einschätzung bis zur fertigen Finanzierungsstruktur — wir begleiten Sie Schritt für Schritt.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line/40 border border-line/40"
            >
              {[
                { num: "01", title: "Analyse der sinnvollen Kredithöhe", desc: "Wir ermitteln gemeinsam mit Ihnen, welche Finanzierungshöhe zu Ihrem Einkommen, Eigenkapital und langfristigen Zielen passt — ohne Über- oder Unterfinanzierung." },
                { num: "02", title: "Erstellung eines Finanzierungskonzepts", desc: "Auf Basis Ihrer persönlichen Situation entwickeln wir ein individuelles Konzept mit konkreten Raten, Laufzeiten und Zinsbindungen." },
                { num: "03", title: "Vergleich verschiedener Banken", desc: "Wir vergleichen Angebote mehrerer Finanzierungspartner, damit Sie die Konditionen erhalten, die wirklich zu Ihnen passen." },
                { num: "04", title: "Individuelle Laufzeiten und Tilgungen", desc: "Wir passen Tilgungssatz und Laufzeit an Ihre Lebensplanung an — inklusive Sondertilgungsoptionen und Flexibilitätsklauseln." },
                { num: "05", title: "Prüfung möglicher Förderungen", desc: "Nicht jede Förderung ist bekannt. Wir prüfen, welche staatlichen oder kommunalen Programme für Ihre Finanzierung in Frage kommen." },
                { num: "06", title: "KfW und energetische Förderungen", desc: "Beim Kauf von Neubauten oder bei geplanter Sanierung prüfen wir KfW-Förderkredite und Zuschüsse, die Ihre Finanzierungskosten senken können." },
              ].map((item) => (
                <motion.div
                  key={item.num}
                  variants={fadeUp}
                  className="bg-cream p-7 lg:p-9 group hover:bg-bone transition-colors duration-300"
                >
                  <span className="font-serif text-5xl text-gold/55 block mb-6 leading-none font-bold">{item.num}</span>
                  <h3 className="font-serif text-[18px] text-ink mb-3 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
                  <p className="text-[14px] text-graphite/70 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 lg:py-28 bg-bone border-b border-line/50">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-12 gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="lg:col-span-4 lg:sticky lg:top-32 self-start"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-gold/60" />
                  <span className="text-[11px] uppercase tracking-[0.28em] text-gold">FAQ</span>
                </div>
                <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] text-ink leading-[1.08] mb-5">
                  Häufige Fragen
                </h2>
                <p className="text-[15px] text-graphite/60 leading-relaxed mb-8">
                  Antworten auf die wichtigsten Fragen rund um Baufinanzierung und Immobilienkauf in Düsseldorf.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-gold hover:text-ink transition-colors"
                >
                  Weitere Fragen? Schreiben Sie uns
                  <ArrowRight size={12} />
                </Link>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
                className="lg:col-span-7 lg:col-start-6"
              >
                <div className="divide-y divide-line/50 border-t border-line/50">
                  {faqs.map((item) => (
                    <motion.div key={item.q} variants={fadeUp}>
                      <FaqItem q={item.q} a={item.a} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="py-20 lg:py-28 bg-cream"
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-gold/60" />
                  <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Jetzt starten</span>
                </div>
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] text-ink leading-[1.08] mb-4">
                  Persönliche Unterstützung bei Ihrer Immobilienfinanzierung
                </h2>
                <p className="text-[15px] text-graphite leading-[1.75]">
                  Wir begleiten Sie auf Wunsch bei der Planung einer passenden Finanzierungslösung — gemeinsam mit unseren unabhängigen Finanzierungspartnern.
                </p>
              </div>
              <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-ink text-cream text-xs uppercase tracking-[0.16em] px-8 py-4 hover:bg-graphite transition-colors"
                >
                  Jetzt unverbindlich anfragen
                  <ArrowRight size={13} />
                </button>
                <ul className="space-y-2">
                  {["Kostenlos & unverbindlich", "Persönliche Beratung", "Unabhängig & transparent"].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-graphite/60">
                      <Check size={12} className="text-gold shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <Footer />
      </main>

      <FinanzierungModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
