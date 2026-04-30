"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, ArrowRight, Quote } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const values = [
  {
    number: "01",
    title: "Diskretion",
    text: "Jeder Verkauf beginnt mit einem Vertrauensvorschuss. Wir behandeln alle Informationen zu Ihrer Immobilie, Ihrer Lebenssituation und Ihren Zielen mit absoluter Vertraulichkeit — gegenüber Dritten ebenso wie intern.",
  },
  {
    number: "02",
    title: "Präzision",
    text: "Eine fundierte Marktbewertung ist kein Schätzwert. Sie basiert auf verifizierten Vergleichsdaten, Lagebewertung und realistischer Käuferanalyse. Wir arbeiten ohne Wunschpreise und ohne Kompromisse an der Wahrheit.",
  },
  {
    number: "03",
    title: "Persönlichkeit",
    text: "Kein Callcenter, keine wechselnden Ansprechpartner. Sie werden von Anfang bis Ende von derselben Person begleitet — inhabergeführt, verbindlich, erreichbar.",
  },
]

const milestones = [
  { year: "1999", text: "Gründung in Düsseldorf durch Michael Abels mit dem Fokus auf hochwertige Wohnimmobilien." },
  { year: "2007", text: "Expansion nach München — Eintritt in einen der anspruchsvollsten Immobilienmärkte Deutschlands." },
  { year: "2012", text: "Eröffnung der Standorte Hamburg und Frankfurt. Wachstum durch Empfehlung statt durch Werbung." },
  { year: "2018", text: "Stuttgart, Essen und Grünwald komplettieren das Netzwerk. Sieben Standorte, ein Anspruch." },
  { year: "2024", text: "Über 1.800 erfolgreich begleitete Transaktionen. Inhabergeführt, unabhängig, persönlich — wie am ersten Tag." },
]

const testimonials = [
  {
    quote: "Die Nachbarn haben vom Verkauf unseres Hauses erst erfahren, als die neuen Eigentümer eingezogen sind. Genau so haben wir es uns gewünscht.",
    author: "Dr. M. K.",
    location: "Oberkassel, Düsseldorf",
    type: "Verkauf Einfamilienhaus",
    rating: 5,
  },
  {
    quote: "Herr Abels hat unsere Wohnung innerhalb von drei Wochen verkauft — deutlich über dem Preis, den wir für realistisch gehalten hatten. Die Bewertung war präzise, die Kommunikation jederzeit klar.",
    author: "Familie S.",
    location: "Bogenhausen, München",
    type: "Verkauf Eigentumswohnung",
    rating: 5,
  },
  {
    quote: "Professionell, diskret und immer erreichbar. So sollte ein Makler arbeiten. Wir wurden zu keinem Zeitpunkt unter Druck gesetzt und haben genau den Käufer gefunden, der zur Immobilie passt.",
    author: "Dr. M. Weber",
    location: "Harvestehude, Hamburg",
    type: "Verkauf Stadthaus",
    rating: 5,
  },
  {
    quote: "Die Bewertung war fundiert und realistisch, ohne übertriebene Versprechungen. Der gesamte Verkaufsprozess lief reibungslos — wir wurden in jede Entscheidung einbezogen.",
    author: "K. Hoffmann",
    location: "Westend, Frankfurt",
    type: "Verkauf Penthouse",
    rating: 5,
  },
  {
    quote: "Abels Immobilien hat unsere Villa in Grünwald innerhalb weniger Wochen an einen vorgemerkten Käufer vermittelt. Keine öffentliche Vermarktung, kein Aufwand für uns — und ein sehr gutes Ergebnis.",
    author: "Familie B.",
    location: "Grünwald bei München",
    type: "Off-Market Verkauf Villa",
    rating: 5,
  },
  {
    quote: "Seit über zehn Jahren empfehle ich Abels Immobilien in meinem Bekanntenkreis. Jedes Mal dasselbe Ergebnis: Zufriedene Verkäufer und ein fairer, transparenter Prozess.",
    author: "Prof. T. Richter",
    location: "Killesberg, Stuttgart",
    type: "Wiederholungskunde",
    rating: 5,
  },
]

// Referenzen — editorial strip, no filters
// Bilder unter /public/images/referenzen/ ablegen (ref-01.jpg … ref-20.jpg)
const referenzen = [
  { id: 1,  ort: "Düsseldorf",   typ: "Wohnanlage",            status: "Vermittelt",           image: "/images/referenzen/ref-01.jpg", pos: "center", size: "wide" },
  { id: 2,  ort: "Essen",        typ: "Doppelhaus",             status: "Verkauft",             image: "/images/referenzen/ref-02.jpg", pos: "center", size: "tall" },
  { id: 3,  ort: "Hamburg",      typ: "Mehrfamilienhaus",       status: "Vermittelt",           image: "/images/referenzen/ref-03.jpg", pos: "top",    size: "square" },
  { id: 4,  ort: "Bergisches Land", typ: "Fachwerkhaus",        status: "Off-Market vermittelt",image: "/images/referenzen/ref-04.jpg", pos: "center", size: "wide" },
  { id: 5,  ort: "Düsseldorf",   typ: "Bungalow",               status: "Verkauft",             image: "/images/referenzen/ref-05.jpg", pos: "top",    size: "tall" },
  { id: 6,  ort: "Frankfurt",    typ: "Klassische Villa",        status: "Diskret vermittelt",  image: "/images/referenzen/ref-06.jpg", pos: "center", size: "square" },
  { id: 7,  ort: "Bergisches Land", typ: "Fachwerkensemble",    status: "Vermittelt",           image: "/images/referenzen/ref-07.jpg", pos: "center", size: "wide" },
  { id: 8,  ort: "Düsseldorf",   typ: "Architektenhaus",        status: "Verkauft",             image: "/images/referenzen/ref-08.jpg", pos: "top",    size: "tall" },
  { id: 9,  ort: "Stuttgart",    typ: "Modernes Stadthaus",     status: "Vermittelt",           image: "/images/referenzen/ref-09.jpg", pos: "center", size: "square" },
  { id: 10, ort: "Grünwald",     typ: "Landhausvilla",          status: "Off-Market vermittelt",image: "/images/referenzen/ref-10.jpg", pos: "center", size: "wide" },
  { id: 11, ort: "Düsseldorf",   typ: "Doppelhaushälfte",       status: "Verkauft",             image: "/images/referenzen/ref-11.jpg", pos: "top",    size: "tall" },
  { id: 12, ort: "Essen",        typ: "Mehrfamilienhaus",       status: "Vermittelt",           image: "/images/referenzen/ref-12.jpg", pos: "center", size: "square" },
  { id: 13, ort: "Hamburg",      typ: "Klassisches Stadthaus",  status: "Diskret vermittelt",  image: "/images/referenzen/ref-13.jpg", pos: "center", size: "wide" },
  { id: 14, ort: "Niederrhein",  typ: "Reetdachvilla",          status: "Off-Market vermittelt",image: "/images/referenzen/ref-14.jpg", pos: "center", size: "tall" },
  { id: 15, ort: "Niederrhein",  typ: "Landhaus mit Scheune",   status: "Verkauft",             image: "/images/referenzen/ref-15.jpg", pos: "center", size: "wide" },
  { id: 16, ort: "Stuttgart",    typ: "Modernes Hanghaus",      status: "Vermittelt",           image: "/images/referenzen/ref-16.jpg", pos: "center", size: "wide" },
  { id: 17, ort: "Frankfurt",    typ: "Doppelhaushälfte",       status: "Verkauft",             image: "/images/referenzen/ref-17.jpg", pos: "top",    size: "tall" },
  { id: 18, ort: "München",      typ: "Stadtvilla Neubau",      status: "Vermarktung abgeschl.",image: "/images/referenzen/ref-18.jpg", pos: "center", size: "square" },
  { id: 19, ort: "Grünwald",     typ: "Landhaus im Grünen",     status: "Diskret vermittelt",  image: "/images/referenzen/ref-19.jpg", pos: "center", size: "wide" },
  { id: 20, ort: "Essen",        typ: "Mehrfamilienhaus",       status: "Verkauft",             image: "/images/referenzen/ref-20.jpg", pos: "top",    size: "tall" },
  { id: 21, ort: "Düsseldorf",   typ: "Gründerzeithaus",        status: "Vermittelt",           image: "/images/referenzen/ref-21.jpg", pos: "center", size: "square" },
  { id: 22, ort: "Frankfurt",    typ: "Neubau-Wohnanlage",      status: "Vermarktung abgeschl.",image: "/images/referenzen/ref-22.jpg", pos: "center", size: "wide" },
  { id: 23, ort: "München",      typ: "Luxuswohnanlage",        status: "Off-Market vermittelt",image: "/images/referenzen/ref-23.jpg", pos: "bottom", size: "wide" },
  { id: 24, ort: "Niederrhein",  typ: "Herrschaftlicher Landsitz", status: "Diskret vermittelt",image: "/images/referenzen/ref-24.jpg", pos: "center", size: "tall" },
  { id: 25, ort: "Düsseldorf",   typ: "Einfamilienhaus",        status: "Verkauft",             image: "/images/referenzen/ref-25.jpg", pos: "top",    size: "square" },
]

const sizeMap: Record<string, string> = {
  wide:   "col-span-2 aspect-[16/7]",
  tall:   "col-span-1 aspect-[3/4]",
  square: "col-span-1 aspect-square",
}

// SVG Donut Chart
function DonutChart() {
  // Wohnen 58%, Gewerbe 7%, Invest 35%
  const segments = [
    { label: "WOHNEN", pct: 58, color: "#2C3A2E" },
    { label: "GEWERBE", pct: 7, color: "#9B9B8E" },
    { label: "INVEST", pct: 35, color: "#C8C4B8" },
  ]

  const cx = 100
  const cy = 100
  const r = 72
  const innerR = 42
  const gap = 2

  let cumulative = 0
  const paths = segments.map((seg) => {
    const startAngle = (cumulative / 100) * 360 - 90
    const endAngle = ((cumulative + seg.pct) / 100) * 360 - 90 - gap
    cumulative += seg.pct

    const toRad = (deg: number) => (deg * Math.PI) / 180
    const x1 = cx + r * Math.cos(toRad(startAngle))
    const y1 = cy + r * Math.sin(toRad(startAngle))
    const x2 = cx + r * Math.cos(toRad(endAngle))
    const y2 = cy + r * Math.sin(toRad(endAngle))
    const ix1 = cx + innerR * Math.cos(toRad(endAngle))
    const iy1 = cy + innerR * Math.sin(toRad(endAngle))
    const ix2 = cx + innerR * Math.cos(toRad(startAngle))
    const iy2 = cy + innerR * Math.sin(toRad(startAngle))
    const largeArc = seg.pct > 50 ? 1 : 0

    return {
      ...seg,
      d: `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${innerR} ${innerR} 0 ${largeArc} 0 ${ix2} ${iy2} Z`,
    }
  })

  return (
    <svg viewBox="0 0 200 200" className="w-full max-w-[200px]">
      {paths.map((p) => (
        <path key={p.label} d={p.d} fill={p.color} />
      ))}
    </svg>
  )
}

export default function UeberUnsPage() {

  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-zoom">
          <Image
            src="/images/team-meeting.jpg"
            alt="Abels Immobilien Team"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          </div>
          <div className="absolute inset-0 bg-ink/28" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 pt-44 pb-28 lg:pt-52 lg:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] text-white leading-[0.96] tracking-[-0.02em] max-w-[820px] mb-8">
              Inhabergeführt.<br />
              <span className="text-white/60">Seit 1999.</span>
            </h1>
            <p className="text-[17px] text-white/75 leading-[1.75] max-w-[560px]">
              Abels Immobilien ist kein Franchise-Unternehmen und kein Massenanbieter. Wir sind ein inhabergeführtes Maklerhaus mit dem Anspruch, jeden Verkauf so zu begleiten, als wäre es der einzige.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── AUSZEICHNUNGEN ── */}
      <section className="bg-bone border-b border-line/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <p className="text-[10px] uppercase tracking-[0.28em] text-stone text-center mb-14">Auszeichnungen</p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-12 lg:gap-20"
          >
            {[
              { src: "/images/press/award-top-makler.jpg", alt: "Jacasa Top Makler Auszeichnung" },
              { src: "/images/press/award-top11.png",      alt: "Plus X Award 100" },
              { src: "/images/press/award-fokus.png",      alt: "Focus Top Immobilienmakler Düsseldorf" },
              { src: "/images/press/award-immo-profi.png", alt: "Immo Scout Profi Award" },
            ].map((award, i) => (
              <div key={i} className="relative h-48 w-48">
                <Image
                  src={award.src}
                  alt={award.alt}
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── UNTERNEHMEN: Text + Donut Chart ── */}
      <section className="bg-cream border-b border-line/40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-28">
          <p className="text-[10px] uppercase tracking-[0.28em] text-stone text-center mb-14">
            Unternehmen
          </p>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-8"
            >
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] text-ink leading-tight tracking-[-0.01em]">
                ABELS Immobilien GmbH
              </h2>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-medium">Warum Abels Immobilien GmbH</p>
                <p className="text-graphite text-[15px] leading-[1.8]">
                  Weil wir den Markt nicht nur kennen, wir gestalten ihn aktiv mit. Als Family Office stehen wir für Vertrauen, Diskretion und nachhaltigen Erfolg.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-medium">Unsere besondere Stärke – Off-Market Deals</p>
                <p className="text-graphite text-[15px] leading-[1.8]">
                  Wir stehen für diskrete Immobilienvermittlungen, bei denen Vertrauen, Exklusivität und persönliche Betreuung im Mittelpunkt stehen. Unsere lokale und überregionale Marktkenntnis, persönliche Präsenz sowie unser feines Gespür für Immobilien mit Substanz und Charakter machen uns zu Ihrem idealen Partner.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-medium">Unser Anspruch – Höchste Diskretion</p>
                <p className="text-graphite text-[15px] leading-[1.8]">
                  Maximale Reichweite. Beste Ergebnisse. Absolute Vertraulichkeit.
                </p>
              </div>
            </motion.div>

            {/* Right: Donut + Stats */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:col-start-8 flex flex-col sm:flex-row lg:flex-row items-center gap-10 lg:gap-12"
            >
              {/* Donut */}
              <div className="shrink-0">
                <div className="relative">
                  <DonutChart />
                  {/* Legend inside */}
                </div>
                <div className="mt-4 space-y-2">
                  {[
                    { color: "#2C3A2E", label: "WOHNEN" },
                    { color: "#9B9B8E", label: "GEWERBE" },
                    { color: "#C8C4B8", label: "INVEST" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span className="w-3 h-3 shrink-0" style={{ background: item.color }} />
                      <span className="text-[10px] uppercase tracking-[0.18em] text-stone">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Numbers */}
              <div className="space-y-6">
                <div className="border-b border-line/50 pb-6">
                  <p className="font-serif text-[3.4rem] text-ink leading-none tracking-tight font-bold">1.800</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-stone mt-2">Objekte vermittelt</p>
                </div>
                <div className="border-b border-line/50 pb-6">
                  <p className="font-serif text-[2.4rem] text-ink leading-none font-bold">1.044 <span className="text-stone text-[1.2rem] font-normal">/ 58 %</span></p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-stone mt-2">Wohnen</p>
                </div>
                <div className="border-b border-line/50 pb-6">
                  <p className="font-serif text-[2.4rem] text-ink leading-none font-bold">126 <span className="text-stone text-[1.2rem] font-normal">/ 7 %</span></p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-stone mt-2">Gewerbe</p>
                </div>
                <div>
                  <p className="font-serif text-[2.4rem] text-ink leading-none font-bold">630 <span className="text-stone text-[1.2rem] font-normal">/ 35 %</span></p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-stone mt-2">Invest</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── WEITERE UNTERNEHMENS-ABSCHNITTE ── */}
      <section className="py-20 lg:py-28 bg-bone border-b border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line/40 border border-line/40"
          >
            {[
              {
                label: "Ausgezeichnete Leistung – Mehrfach bestätigt",
                text: "PLUS X AWARD 2024, 2025 — Aufnahme in die TOP 100 Immobilienmakler Deutschlands. Zahlreiche Top-Bewertungen auf unabhängigen Portalen. Diese Auszeichnungen belegen unsere konstant hohe Service- und Beratungsqualität.",
              },
              {
                label: "Ihre Immobilie – In besten Händen",
                text: "Sie möchten Ihre Immobilie verkaufen oder kostenfrei bewerten lassen? Dank unserer über 30 Jahre Erfahrung im Verkauf, Eigenankauf und Immobilienvertrieb wissen wir genau, wie Immobilien optimal positioniert und erfolgreich vermarktet werden – diskret, zielgerichtet und mit maximaler Reichweite.",
              },
              {
                label: "Wir sind nicht nur Makler – Wir sind auch Investoren",
                text: "Mit unserer langjährigen Expertise als Family Office erwerben wir selbst Immobilien und begleiten Eigentümer, Investoren, Aufteiler und Projektentwickler beim diskreten Verkauf von Wohnanlagen und Gewerbeimmobilien – ohne öffentliche Vermarktung.",
              },
              {
                label: "Netzwerk",
                text: "Unser nationales Netzwerk aus Family Offices eröffnet Zugang zu exklusiven Off-Market-Transaktionen. Durch langjährig gewachsene Partnerschaften agieren wir bundesweit als verlässlicher Ansprechpartner für anspruchsvolle Investoren. Real Estate · Investment Management · Asset Management · Family Offices · Portfolio Management. Mit dem Anspruch, nachhaltige Werte und erstklassige Ergebnisse zu schaffen.",
              },
              {
                label: "Unsere Standorte – Ihre Vorteile vor Ort",
                text: "Wir sind präsent in den erfolgreichsten Immobilienmärkten Deutschlands: Düsseldorf, Hamburg, Frankfurt, München, Grünwald und dem Fünf-Seen-Land. So garantieren wir persönliche Betreuung und exzellente Marktkenntnis.",
              },
            ].map((block, i) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="bg-bone px-8 py-9 lg:px-10 lg:py-11 hover:bg-cream transition-colors duration-300"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-medium mb-4">{block.label}</p>
                <p className="text-[14px] text-graphite leading-[1.8]">{block.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Werte */}
      <section className="py-24 lg:py-36 bg-cream border-b border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Unsere Grundsätze</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-ink leading-[1.08] tracking-[-0.01em] max-w-[600px]">
              Drei Werte. Keine Kompromisse.
            </h2>
          </motion.div>

          <div className="border-t border-line/50">
            {values.map((v, i) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-12 gap-8 py-10 border-b border-line/50 group hover:bg-bone/50 transition-colors duration-300 px-4 -mx-4"
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold/70 lg:col-span-1 pt-1">{v.number}</span>
                <h3 className="font-serif text-[22px] lg:text-[26px] text-ink lg:col-span-3 group-hover:text-gold transition-colors duration-300 leading-tight">
                  {v.title}
                </h3>
                <p className="text-[15px] text-graphite leading-[1.75] lg:col-span-7">
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-cream border-b border-line/40 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Das Team</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-ink leading-[1.08] tracking-[-0.01em] max-w-[500px]">
              Menschen, die zuhören.
            </h2>
          </motion.div>

          <div className="space-y-10 lg:space-y-14">

            {/* Row 1: Team group photo — full width, not cropped */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden -mx-6 lg:-mx-20" style={{ aspectRatio: "16/9" }}>
                <Image
                  src="/images/team abels 2.PNG"
                  alt="Team von Abels Immobilien"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
              <div className="mt-5 pb-5 border-b border-line/50 text-center">
                <p className="font-serif text-[1.25rem] text-ink mb-1">Das Team</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Abels Immobilien</p>
              </div>
            </motion.div>

            {/* Row 2: Josefine left, Peter right */}
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">

              {/* Josefine Mokrani — left */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden aspect-[3/4] bg-bone">
                  <Image
                    src="/images/team-josefine-mokrani.jpg"
                    alt="Josefine Mokrani, Geschäftsführerin"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-5 pb-5 border-b border-line/50">
                  <p className="font-serif text-[1.25rem] text-ink mb-1">Josefine Mokrani</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Geschäftsführerin</p>
                </div>
                <p className="mt-4 text-[14px] text-graphite leading-[1.75]">
                  Josefine Mokrani verantwortet als Geschäftsführerin die strategische Entwicklung und das operative Management. Ihr Fokus liegt auf Qualitätssicherung, Kundenbeziehungen und der Weiterentwicklung des Beratungsstandards.
                </p>
              </motion.div>

              {/* Peter Abels — right */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden aspect-[3/4] bg-bone">
                  <Image
                    src="/images/team-peter-abels.jpg"
                    alt="Peter Abels, Inhaber"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-5 pb-5 border-b border-line/50">
                  <p className="font-serif text-[1.25rem] text-ink mb-1">Peter Abels</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Inhaber & Gründer</p>
                </div>
                <p className="mt-4 text-[14px] text-graphite leading-[1.75]">
                  Seit 1999 führt Peter Abels das Unternehmen inhabergeführt und persönlich. Mit über 25 Jahren Markterfahrung begleitet er anspruchsvolle Verkaufsmandate von der Bewertung bis zur Beurkundung.
                </p>
              </motion.div>

            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-stone hover:text-ink transition-colors"
            >
              Persönlichen Termin vereinbaren
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

        </div>
      </section>

      {/* ── REFERENZEN: Bildergalerie ── */}
      <section className="bg-bone border-b border-line/40 py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Referenzen</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-ink leading-tight mb-12">
              Ein Auszug aus über 1.800<br />
              <span className="text-ink/50">vermittelten Objekten.</span>
            </h2>

            {/* Kategorie-Icons — dekorativ */}
            <div className="flex flex-wrap items-start justify-center gap-10 lg:gap-16 py-10">
              {[
                {
                  label: "Wohnen",
                  icon: (
                    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-stone/90" stroke="currentColor" strokeWidth="1.4">
                      <path d="M6 18L20 6l14 12v16H26v-8h-4v8H6V18Z" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  label: "Gewerbe",
                  icon: (
                    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-stone/90" stroke="currentColor" strokeWidth="1.4">
                      <rect x="6" y="10" width="28" height="24" rx="1"/>
                      <path d="M13 34V22h6v12M21 22h6v6h-6z"/>
                      <path d="M6 10l7-6h14l7 6"/>
                    </svg>
                  ),
                },
                {
                  label: "Anlage",
                  icon: (
                    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-stone/90" stroke="currentColor" strokeWidth="1.4">
                      <polyline points="6,30 14,20 21,25 34,10"/>
                      <polyline points="28,10 34,10 34,16"/>
                    </svg>
                  ),
                },
                {
                  label: "Entwicklung",
                  icon: (
                    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-stone/90" stroke="currentColor" strokeWidth="1.4">
                      <rect x="4" y="28" width="8" height="6"/>
                      <rect x="16" y="18" width="8" height="16"/>
                      <rect x="28" y="8" width="8" height="26"/>
                    </svg>
                  ),
                },
                {
                  label: "Zinshäuser",
                  icon: (
                    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-stone/90" stroke="currentColor" strokeWidth="1.4">
                      <rect x="4" y="12" width="14" height="22"/>
                      <rect x="22" y="6" width="14" height="28"/>
                      <path d="M4 12l7-7 7 7M22 6l7-7 7 7"/>
                      <rect x="8" y="20" width="4" height="4"/><rect x="16" y="20" width="4" height="4" className="hidden"/>
                      <rect x="26" y="14" width="4" height="4"/><rect x="26" y="22" width="4" height="4"/>
                    </svg>
                  ),
                },
              ].map((cat) => (
                <div key={cat.label} className="flex flex-col items-center gap-3 select-none">
                  {cat.icon}
                  <span className="text-[9px] uppercase tracking-[0.22em] text-stone">{cat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image grid — 3 cols, uniform cards */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {referenzen.map((ref, i) => (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="break-inside-avoid"
              >
                <div className="relative overflow-hidden border border-line/50 bg-cream shadow-sm group">
                  <div className={`relative w-full overflow-hidden ${
                    ref.size === "wide"   ? "aspect-[16/10]" :
                    ref.size === "tall"   ? "aspect-[3/4]"   :
                                           "aspect-square"
                  }`}>
                    <Image
                      src={ref.image}
                      alt={`${ref.typ} ${ref.ort}`}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      style={{ objectPosition: ref.pos }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="px-4 py-3 border-t border-line/40">
                    <p className="text-[13px] text-ink font-medium">{ref.typ}</p>
                    <p className="text-[11px] text-stone mt-0.5">{ref.status}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── BEKANNT AUS / PRESSE LOGOS ── */}
      <section className="bg-cream border-b border-line/40 py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-stone text-center mb-14">
              Bekannt aus
            </p>

            {/* Logo row */}
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">

              {/* FAZ */}
              <div className="relative h-9 w-44 opacity-90 hover:opacity-100 transition-all duration-300">
                <Image
                  src="/images/press/faz.png"
                  alt="Frankfurter Allgemeine Zeitung"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="w-px h-7 bg-line/60 hidden sm:block" />

              {/* Süddeutsche */}
              <div className="relative h-9 w-52 opacity-90 hover:opacity-100 transition-all duration-300">
                <Image
                  src="/images/press/sueddeutsche-zeitung.svg"
                  alt="Süddeutsche Zeitung"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="w-px h-7 bg-line/60 hidden sm:block" />

              {/* Stuttgarter Zeitung */}
              <div className="relative h-9 w-52 opacity-90 hover:opacity-100 transition-all duration-300">
                <Image
                  src="/images/press/stuttgarter-zeitung.png"
                  alt="Stuttgarter Zeitung"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="w-px h-7 bg-line/60 hidden sm:block" />

              {/* WAZ */}
              <div className="relative h-9 w-28 opacity-90 hover:opacity-100 transition-all duration-300">
                <Image
                  src="/images/press/waz.png"
                  alt="WAZ – Westdeutsche Allgemeine Zeitung"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="w-px h-7 bg-line/60 hidden sm:block" />

              {/* Rheinische Post */}
              <div className="relative h-9 w-48 opacity-90 hover:opacity-100 transition-all duration-300">
                <Image
                  src="/images/press/rheinische-post.png"
                  alt="Rheinische Post"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-bone border-b border-line/40 py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Referenzen</span>
            </div>
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] text-ink leading-[0.97] tracking-[-0.02em] lg:col-span-6">
                Was unsere Mandanten sagen.
              </h2>
              <p className="text-[15px] text-graphite leading-[1.75] lg:col-span-5 lg:col-start-8">
                Unsere stärksten Argumente kommen nicht von uns. Sie kommen von Menschen, die uns mit einer ihrer bedeutendsten Entscheidungen vertraut haben.
              </p>
            </div>
          </motion.div>

          {/* Featured quote */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border border-line/50 p-10 lg:p-16 mb-6 relative bg-cream"
          >
            <Quote className="absolute top-8 right-8 w-10 h-10 text-gold/20" />
            <div className="flex gap-1 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="font-serif italic text-[clamp(1.3rem,2.5vw,2rem)] text-ink leading-[1.4] max-w-[780px] mb-10">
              „{testimonials[0].quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-px h-8 bg-gold/40" />
              <div>
                <span className="block text-[14px] text-ink/80 font-medium">{testimonials[0].author}</span>
                <span className="block text-[12px] text-graphite uppercase tracking-[0.14em]">{testimonials[0].location} · {testimonials[0].type}</span>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line/50">
            {testimonials.slice(1).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-bone border border-line/50 p-8 lg:p-10 group hover:bg-cream/50 transition-colors duration-300"
              >
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-[14px] text-graphite leading-[1.75] mb-8 italic font-serif">
                  „{t.quote}"
                </blockquote>
                <div className="border-t border-line/50 pt-6">
                  <span className="block text-[13px] text-ink font-medium mb-0.5">{t.author}</span>
                  <span className="block text-[11px] text-stone uppercase tracking-[0.14em]">{t.location}</span>
                  <span className="block text-[11px] text-gold/60 uppercase tracking-[0.12em] mt-1">{t.type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-bone border-t border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-ink leading-[1.08] tracking-[-0.01em] mb-4">
                Lernen Sie uns persönlich kennen.
              </h2>
              <p className="text-[15px] text-graphite leading-[1.75]">
                Ein erstes Gespräch ist unverbindlich, vertraulich und kostenlos. Wir nehmen uns die Zeit, die Ihre Immobilie verdient.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-3">
              <Link
                href="/bewertung"
                className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold/80 transition-colors"
              >
                Kostenlose Bewertung
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="tel:+492115591751"
                className="inline-flex items-center justify-center gap-2 border border-line text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-medium hover:border-gold/50 hover:text-gold transition-all duration-300"
              >
                +49 211 5591751
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
