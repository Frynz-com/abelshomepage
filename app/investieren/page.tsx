"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function InvestierenPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />

      {/* ── HERO ── */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 hero-zoom">
          <Image
            src="/images/hero-luxury.jpg"
            alt="Neubauwohnungen Investment"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-16 lg:pb-24 px-6 lg:px-20 max-w-[1440px] mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold/80" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-gold/90">Kapitalanlage</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] text-white leading-[0.97] tracking-[-0.02em] mb-6"
            >
              In Neubauwohnungen<br />
              <span className="text-white/70">investieren.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
              Ausgewählte Neubauprojekte an Premium-Standorten — für Anleger, die auf nachhaltige Wertsteigerung und stabile Mietrenditen setzen.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projekte"
                className="inline-flex items-center justify-center gap-2 bg-gold text-white text-xs uppercase tracking-[0.14em] px-7 py-4 hover:bg-gold/90 transition-colors"
              >
                Projekte ansehen
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/verkaufen"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-xs uppercase tracking-[0.14em] px-7 py-4 hover:bg-white/10 transition-colors"
              >
                Beratungsgespräch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20 lg:py-28 bg-cream border-b border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
              >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-gold/60" />
                  <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Warum Neubau</span>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-ink leading-[1.05] tracking-[-0.02em]"
                >
                  Sichere Rendite.<br />
                  <span className="text-graphite">Ohne Kompromisse.</span>
                </motion.h2>
              </motion.div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[16px] text-graphite leading-[1.75]"
              >
                Neubauwohnungen verbinden steuerliche Vorteile mit geringem Instandhaltungsaufwand und hoher Vermietbarkeit. In wachstumsstarken Lagen bieten sie eine der stabilsten Anlageformen für private Investoren — mit planbaren Erträgen und langfristiger Wertsteigerung.
              </motion.p>
            </div>
          </div>

          {/* Stats row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line/40 mt-16 border border-line/40"
          >
            {[
              { value: "3–5 %", label: "Ø Mietrendite p.a.", sub: "an unseren Standorten" },
              { value: "2 %", label: "AfA Abschreibung", sub: "Steuerlicher Vorteil" },
              { value: "10 J.", label: "Spekulationsfrist", sub: "Steuerfreier Verkauf" },
              { value: "25+", label: "Jahre Markterfahrung", sub: "Abels Immobilien" },
            ].map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="bg-cream px-6 py-8 lg:px-8 lg:py-10"
              >
                <p className="font-serif text-3xl lg:text-4xl text-ink mb-1">{s.value}</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink mb-1">{s.label}</p>
                <p className="text-[12px] text-graphite/50">{s.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VORTEILE ── */}
      <section className="py-20 lg:py-28 bg-bone">
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
              <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Ihre Vorteile</span>
            </div>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] text-ink leading-[1.08]">
              Was Neubau-Investment auszeichnet
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line/40 border border-line/40"
          >
            {[
              {
                num: "01",
                title: "Steuerliche Abschreibung",
                desc: "Neubauwohnungen können mit 2 % p.a. linear abgeschrieben werden. Das reduziert Ihre Steuerlast direkt und erhöht die effektive Nachsteuerrendite erheblich.",
              },
              {
                num: "02",
                title: "Kein Sanierungsstau",
                desc: "Neubauten sind für 15–20 Jahre weitgehend wartungsfrei. Keine unerwarteten Kosten für Heizung, Dach oder Leitungen — maximale Planungssicherheit.",
              },
              {
                num: "03",
                title: "Hohe Vermietbarkeit",
                desc: "Moderne Grundrisse, Energieeffizienz und zeitgemäße Ausstattung machen Neubauten besonders attraktiv für qualitätsbewusste Mieter in Toplagen.",
              },
              {
                num: "04",
                title: "Energieeffizienz & Zukunftssicherheit",
                desc: "KfW-Standards und moderne Haustechnik schützen vor künftigen Sanierungspflichten. Neubau erfüllt heute bereits die Anforderungen von morgen.",
              },
              {
                num: "05",
                title: "Finanzierung & Förderung",
                desc: "Neubauprojekte profitieren von KfW-Förderkrediten und günstigen Zinskonditionen. Wir begleiten Sie bei der optimalen Finanzierungsstruktur.",
              },
              {
                num: "06",
                title: "Wertsteigerungspotenzial",
                desc: "In wachstumsstarken Lagen entwickeln sich Neubauwohnungen langfristig überdurchschnittlich. Nach 10 Jahren steuerfreier Verkauf möglich.",
              },
            ].map((item) => (
              <motion.div
                key={item.num}
                variants={fadeUp}
                className="bg-bone p-7 lg:p-9 group"
              >
                <span className="font-serif text-4xl text-gold/20 block mb-5">{item.num}</span>
                <h3 className="font-serif text-lg text-ink mb-3">{item.title}</h3>
                <p className="text-sm text-graphite/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROJEKTE ── */}
      <section id="projekte" className="py-20 lg:py-28 bg-cream">
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
              <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Aktuelle Projekte</span>
            </div>
            <div className="grid lg:grid-cols-12 items-end gap-8">
              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] text-ink leading-[1.08] lg:col-span-6">
                Ausgewählte Neubauprojekte
              </h2>
              <p className="text-graphite/60 text-sm leading-relaxed lg:col-span-5 lg:col-start-8">
                Alle Projekte werden von unserem Team sorgfältig geprüft — Lage, Bauträger, Mietmarkt und Wertsteigerungspotenzial. Nur was überzeugt, empfehlen wir.
              </p>
            </div>
          </motion.div>

          {/* Project cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-px bg-line/40 border border-line/40"
          >
            {[
              {
                city: "Düsseldorf",
                district: "Oberkassel",
                title: "Rheinufer Residenz",
                type: "Eigentumswohnungen",
                units: "24 Einheiten",
                size: "55–130 m²",
                status: "In Planung",
                statusColor: "text-amber-600 bg-amber-50",
              },
              {
                city: "München",
                district: "Schwabing",
                title: "Schwabinger Höfe",
                type: "Eigentumswohnungen",
                units: "18 Einheiten",
                size: "48–110 m²",
                status: "Verfügbar",
                statusColor: "text-green-700 bg-green-50",
              },
              {
                city: "Hamburg",
                district: "Harvestehude",
                title: "Alster Quartier",
                type: "Eigentumswohnungen",
                units: "32 Einheiten",
                size: "60–150 m²",
                status: "Auf Anfrage",
                statusColor: "text-gold bg-gold/10",
              },
            ].map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="bg-cream p-7 lg:p-9 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">{p.city} · {p.district}</p>
                    <h3 className="font-serif text-xl text-ink">{p.title}</h3>
                  </div>
                  <span className={`text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 shrink-0 ${p.statusColor}`}>
                    {p.status}
                  </span>
                </div>
                <div className="space-y-2 mb-6 pb-6 border-b border-line/40">
                  {[
                    ["Typ", p.type],
                    ["Einheiten", p.units],
                    ["Größen", p.size],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-sm">
                      <span className="text-graphite/50">{k}</span>
                      <span className="text-ink">{v}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/verkaufen"
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-gold hover:text-ink transition-colors group-hover:gap-3"
                >
                  Details anfragen <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[12px] text-graphite/40 text-center mt-6"
          >
            Weitere Off-Market Projekte auf Anfrage verfügbar.
          </motion.p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 lg:py-28 bg-ink text-white">
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
              <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Ihr Weg zur Anlage</span>
            </div>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] text-white leading-[1.08]">
              So begleiten wir Sie
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {[
              { step: "01", title: "Beratungsgespräch", desc: "Wir analysieren Ihre Anlageziele, Ihr Budget und die optimale Finanzierungsstruktur." },
              { step: "02", title: "Projektauswahl", desc: "Wir präsentieren geprüfte Projekte, die zu Ihrer Strategie passen — auch Off-Market." },
              { step: "03", title: "Due Diligence", desc: "Lage, Bauträger, Mietmarkt: Wir prüfen jeden Aspekt, bevor wir eine Empfehlung aussprechen." },
              { step: "04", title: "Kauf & Vermietung", desc: "Vom Notartermin bis zur Erstvermietung — wir begleiten Sie bis zum ersten Mieter." },
            ].map((s) => (
              <motion.div key={s.step} variants={fadeUp}>
                <span className="font-serif text-5xl text-gold/20 block mb-5">{s.step}</span>
                <h3 className="font-serif text-lg text-white mb-3">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="py-20 lg:py-28 bg-bone border-t border-line/50"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Jetzt starten</span>
              </div>
              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] text-ink leading-[1.08] mb-4">
                Bereit für Ihre erste Neubauwohnung?
              </h2>
              <p className="text-[15px] text-graphite leading-[1.75]">
                Wir beraten Sie kostenlos und unverbindlich — zu Projekten, Finanzierung und Renditeerwartungen an Ihrem Wunschstandort.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-4">
              <Link
                href="/verkaufen"
                className="inline-flex items-center justify-center gap-2 bg-ink text-white text-xs uppercase tracking-[0.14em] px-8 py-4 hover:bg-ink/90 transition-colors"
              >
                Kostenlose Erstberatung
                <ArrowRight size={13} />
              </Link>
              <ul className="space-y-2">
                {["Unverbindlich & kostenlos", "Persönliche Beratung", "Über 25 Jahre Erfahrung"].map((i) => (
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
  )
}
