"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check, Shield, Users, TrendingUp, Star, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FinanzierungModal } from "@/components/finanzierung-modal"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as number[] } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const usps = [
  {
    icon: Users,
    title: "Exklusives Netzwerk",
    text: "Unser Netzwerk umfasst vermögende Privatpersonen, Führungskräfte und internationale Mieter, die gezielt nach hochwertigen Immobilien suchen — weit abseits öffentlicher Portale.",
  },
  {
    icon: Shield,
    title: "Absolute Diskretion",
    text: "Auf Wunsch erfolgt die Vermietung vollständig ohne öffentliche Vermarktung — vertraulich, kontrolliert und mit maximalem Schutz Ihrer Privatsphäre.",
  },
  {
    icon: TrendingUp,
    title: "Höchste Mietrendite",
    text: "Durch gezielte Platzierung im richtigen Segment erzielen wir überdurchschnittliche Mietpreise bei gleichzeitig langfristig stabilen Mietverhältnissen.",
  },
]

const selektion = [
  "Bonitätsprüfung (inkl. SCHUFA & Einkommensnachweise)",
  "Persönliche Vorauswahl geeigneter Mieter:innen",
  "Diskrete Einzelbesichtigungen",
  "Strukturierte Entscheidungsgrundlage für Eigentümer",
]

const schritte = [
  { nr: "01", title: "Vertrauliches Erstgespräch & Strategieentwicklung", text: "Wir analysieren Ihre Immobilie, Ihre Ziele und entwickeln eine individuelle Vermietungsstrategie — persönlich und unverbindlich." },
  { nr: "02", title: "Detaillierte Mietpreisanalyse im Premiumsegment", text: "Fundierte Marktanalyse der aktuellen Mietpreise in Ihrer Mikrolage. Keine Schätzungen — belastbare Einschätzungen auf Basis echter Transaktionen." },
  { nr: "03", title: "Individuelle Vermarktung (On- & Off-Market)", text: "Je nach Wunsch diskretes Off-Market-Vorgehen oder gezielte Ansprache über ausgewählte Kanäle. Immer mit Fokus auf qualifizierte Interessenten." },
  { nr: "04", title: "Diskrete Einzelbesichtigungen mit qualifizierten Interessenten", text: "Keine Massenbesichtigungen. Nur vorqualifizierte, bonitätsgeprüfte Mietinteressenten erhalten Zugang zu Ihrer Immobilie." },
  { nr: "05", title: "Vertragsgestaltung auf höchstem Niveau", text: "Wir begleiten die Mietvertragsverhandlung und -gestaltung professionell — in Ihrem Interesse, transparent und rechtssicher." },
  { nr: "06", title: "Persönliche Übergabe inkl. vollständiger Dokumentation", text: "Strukturierter Übergabeprozess mit lückenloser Dokumentation. Für maximale Sicherheit auf beiden Seiten." },
]

const propertyTypes = [
  {
    title: "Eigentumswohnungen",
    text: "Vom kompakten Stadtappartement bis zur Penthausanlage mit Panoramablick. Wir begleiten die Vermietung hochwertiger Eigentumswohnungen in allen gefragten Lagen — diskret, präzise und mit dem richtigen Mieter.",
  },
  {
    title: "Einfamilienhäuser & Villen",
    text: "Exklusive Häuser in ruhigen Toplagen. Wir kennen die Mietergruppen und die richtige Preisstrategie für jede Lage — in Düsseldorf, München, Frankfurt und darüber hinaus.",
  },
  {
    title: "Besondere Stadtwohnungen",
    text: "Einzigartige Wohnungen in zentralen Lagen — mit Charakter, Geschichte oder besonderer Ausstattung. Diskrete Vermarktung an vorqualifizierte Interessenten aus unserem Netzwerk.",
  },
]

const cities = ["Düsseldorf", "München", "Frankfurt am Main", "Hamburg", "Stuttgart", "Essen", "Grünwald"]

export default function VermietungPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />

      {/* ── HERO ── */}
      <section className="relative h-[92vh] min-h-[640px] overflow-hidden">
        <div className="absolute inset-0 hero-zoom">
          <Image
            src="/images/vermieten bild.jpg"
            alt="Premium Vermietung Luxusimmobilien – Abels Immobilien"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-end pb-20 lg:pb-32">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 w-full">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-[780px]"
            >
              <motion.p variants={fadeUp} className="text-gold text-[11px] uppercase tracking-[0.28em] mb-6">
                Vermietung · Premium & Diskret
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-serif text-[clamp(2.8rem,6vw,5.8rem)] text-white leading-[0.97] tracking-[-0.02em] mb-8"
              >
                Diskret. Zielgerichtet.<br />
                <span className="text-white/60">Auf höchstem Niveau.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white/70 text-[17px] leading-[1.75] max-w-[560px] mb-10">
                Die Vermietung hochwertiger Immobilien in Düsseldorf, München, Frankfurt und weiteren Premium-Standorten erfordert weit mehr als Standardprozesse — sie erfordert Präzision, Diskretion und das richtige Netzwerk.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold/85 transition-colors group"
                >
                  Vertrauliche Erstberatung anfragen
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating cities strip */}
        <div className="absolute bottom-0 right-0 hidden lg:flex flex-col gap-3 items-end pr-20 pb-20">
          {cities.map((c) => (
            <span key={c} className="text-[10px] uppercase tracking-[0.22em] text-white/40">{c}</span>
          ))}
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="bg-bone border-b border-line/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-10 lg:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-16">
            <p className="text-gold text-[11px] uppercase tracking-[0.24em] shrink-0">Unsere Städte</p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {cities.map((c) => (
                <span key={c} className="text-[14px] text-graphite">{c}</span>
              ))}
            </div>
            <div className="lg:ml-auto shrink-0">
              <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
                </span>
                Aktiv in 7 Städten
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIE ── */}
      <section className="py-24 lg:py-36 bg-cream border-b border-line/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="w-8 h-px bg-gold/60 mb-8" />
              <p className="text-gold text-[11px] uppercase tracking-[0.26em] mb-5">Unsere Philosophie</p>
              <h2 className="font-serif text-[clamp(2rem,3.8vw,3.4rem)] text-ink leading-[1.06] tracking-[-0.015em] mb-8">
                Für besondere Immobilien braucht es eine besondere Strategie.
              </h2>
              <p className="text-graphite text-[16px] leading-[1.8] mb-8">
                In den Top-Lagen von Düsseldorf, München, Frankfurt, Hamburg und Stuttgart entscheidet nicht die Sichtbarkeit allein — sondern die Qualität der Ansprache. Wir entwickeln für jede Immobilie eine individuelle Vermietungsstrategie.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 text-ink text-[13px] font-medium hover:text-gold transition-colors group"
              >
                Jetzt Erstgespräch vereinbaren
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="lg:col-span-6 lg:col-start-7"
            >
              <ul className="space-y-0 divide-y divide-line/50 border-t border-b border-line/50">
                {[
                  "Diskrete Off-Market-Vermarktung (auf Wunsch ohne öffentliche Inserate)",
                  "Direkter Zugang zu geprüften, vorgemerkten Premium-Mietern",
                  "Präzise Mietpreispositionierung im oberen Marktsegment",
                  "Individuelle Auswahl statt Massenbesichtigungen",
                  "Persönliche Begleitung von der Erstanalyse bis zur Übergabe",
                  "Vollständiger rechtlicher Rahmen inkl. Vertragsgestaltung",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 py-5">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span className="text-[15px] text-ink leading-[1.65]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-bone border border-line/40">
                <p className="text-[12px] uppercase tracking-[0.2em] text-gold mb-2">Ihr Vorteil</p>
                <p className="font-serif text-[1.35rem] text-ink leading-tight">Zugang statt Streuverlust.</p>
                <p className="text-[14px] text-graphite mt-2 leading-relaxed">Wir bringen Ihre Immobilie nicht zu jedem — sondern zum richtigen Mieter.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3 USPs ── */}
      <section className="bg-bone py-24 lg:py-32 border-b border-line/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <div className="w-8 h-px bg-gold/60 mb-8" />
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] text-ink leading-[1.08] tracking-[-0.01em] max-w-[600px]">
              Was Abels Immobilien bei der Vermietung auszeichnet.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-line/30 border border-line/30">
            {usps.map((usp, i) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-bone p-8 lg:p-10"
              >
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center mb-6">
                  <usp.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-[1.25rem] text-ink mb-4 leading-snug">{usp.title}</h3>
                <p className="text-[14px] text-graphite leading-[1.75]">{usp.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELEKTION ── */}
      <section className="py-24 lg:py-32 bg-cream border-b border-line/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-px bg-gold/60 mb-8" />
              <p className="text-gold text-[11px] uppercase tracking-[0.26em] mb-5">Mieterauswahl</p>
              <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.8rem)] text-ink leading-[1.08] mb-6">
                Selektionsprozess auf höchstem Niveau.
              </h2>
              <p className="text-graphite text-[15px] leading-[1.8] mb-10">
                Wir prüfen jede Mietanfrage sorgfältig und strukturiert. Nur Interessenten, die alle Kriterien erfüllen, erhalten Zugang zu Ihrer Immobilie.
              </p>
              <ul className="space-y-4">
                {selektion.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-[15px] text-ink leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src="/images/hero-luxury.jpg"
                alt="Exklusive Immobilienvermietung – Premium-Mieter Selektion"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-white text-[1.4rem] leading-tight mb-1">Nur die besten Mieter.</p>
                <p className="text-white/60 text-[13px]">Bonitätsprüfung & persönliche Selektion</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 6 SCHRITTE ── */}
      <section className="py-24 lg:py-36 bg-bone border-b border-line/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <div className="w-8 h-px bg-gold/60 mb-8" />
            <p className="text-gold text-[11px] uppercase tracking-[0.26em] mb-5">Der Prozess</p>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] text-ink leading-[1.08] max-w-[600px]">
              Unsere 6 Schritte zur exklusiven Vermietung.
            </h2>
          </motion.div>

          <div className="border-t border-line/50">
            {schritte.map((s, i) => (
              <motion.div
                key={s.nr}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-8 lg:py-10 border-b border-line/50 group"
              >
                <span className="text-[2.4rem] lg:text-[2.8rem] font-bold text-gold/50 lg:col-span-1 leading-none">{s.nr}</span>
                <div className="lg:col-span-4">
                  <h3 className="font-serif text-[1.15rem] lg:text-[1.25rem] text-ink leading-snug group-hover:text-gold transition-colors duration-300">{s.title}</h3>
                </div>
                <p className="text-[14px] text-graphite leading-[1.75] lg:col-span-6">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OBJEKTARTEN ── */}
      <section className="py-24 lg:py-32 bg-cream border-b border-line/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="w-8 h-px bg-gold/60 mb-8" />
            <p className="text-gold text-[11px] uppercase tracking-[0.26em] mb-5">Unser Fokus</p>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] text-ink leading-[1.08] max-w-[620px]">
              Welche Immobilien wir vermieten — in allen unseren Städten.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 border-t border-line/50 pt-12">
            {propertyTypes.map((pt, i) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-[1.2rem] text-ink mb-4 leading-snug">{pt.title}</h3>
                <p className="text-[14px] text-graphite leading-[1.75]">{pt.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-14 pt-10 border-t border-line/40 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { stat: "7", label: "Metropolstandorte" },
              { stat: "30+", label: "Jahre Erfahrung" },
              { stat: "1.800+", label: "Transaktionen" },
              { stat: "100%", label: "Erfolgsbasiert" },
            ].map((s) => (
              <div key={s.label} className="bg-bone border border-line/40 px-6 py-7">
                <p className="font-serif text-[2.2rem] text-ink font-bold leading-none mb-2">{s.stat}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIAL STRIP ── */}
      <section className="bg-bone border-b border-line/40 py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-3 gap-px bg-line/30 border border-line/30">
            {[
              { quote: "Abels Immobilien hat unsere Wohnung in Düsseldorf innerhalb von drei Wochen diskret und zu einem exzellenten Preis vermietet — ganz ohne öffentliche Ausschreibung.", name: "Eigentümerin", loc: "Düsseldorf · Oberkassel" },
              { quote: "Die Mieterauswahl war tadellos. Wir hatten innerhalb kürzester Zeit zwei bonitätsstarke Interessenten — die Entscheidung lag bei uns.", name: "Eigentümer", loc: "München · Bogenhausen" },
              { quote: "Professionell, diskret und mit echtem Marktverständnis. Genau das, was man bei einer Immobilie dieser Klasse erwartet.", name: "Investor", loc: "Frankfurt · Westend" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-bone p-8 lg:p-10"
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />)}
                </div>
                <p className="text-[14px] text-graphite leading-[1.8] mb-6 italic">„{t.quote}"</p>
                <p className="text-[13px] text-ink font-medium">{t.name}</p>
                <p className="text-[11px] text-stone uppercase tracking-[0.14em] mt-0.5">{t.loc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 lg:py-36 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="w-8 h-px bg-gold/60 mb-8" />
              <p className="text-gold text-[11px] uppercase tracking-[0.26em] mb-5">Jetzt starten</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.6rem)] text-ink leading-[1.04] tracking-[-0.015em] mb-6">
                Vermieten Sie Ihre Immobilie diskret und optimal.
              </h2>
              <p className="text-graphite text-[16px] leading-[1.8] max-w-[560px]">
                Seit über 30 Jahren vertrauen Eigentümer auf unsere Expertise in Vermietung und Verkauf. Wir begleiten Sie bei der Vermietung Ihrer Immobilie — mit Marktkenntnis, Erfahrung und einem klaren Blick für die richtigen Mieter. Präzise, vertraulich und ergebnisorientiert.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="lg:col-span-4 lg:col-start-9 flex flex-col gap-3"
            >
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold/85 transition-colors group"
              >
                Vertrauliche Erstberatung anfragen
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 border border-line text-ink/70 px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-medium hover:bg-bone transition-colors"
              >
                Kontakt aufnehmen
              </Link>
              <p className="text-[12px] text-stone text-center mt-1">Wir sind für Sie da — diskret und unverbindlich.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <FinanzierungModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Footer />
    </main>
  )
}
