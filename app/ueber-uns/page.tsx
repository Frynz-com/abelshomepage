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
  { year: "2024", text: "Über 1.000 erfolgreich begleitete Transaktionen. Inhabergeführt, unabhängig, persönlich — wie am ersten Tag." },
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

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />

      {/* Hero */}
      <section className="relative bg-ink text-cream overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team-meeting.jpg"
            alt="Abels Immobilien Team"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 pt-44 pb-28 lg:pt-52 lg:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Über Abels Immobilien</span>
            </div>
            <h1 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] text-cream leading-[0.96] tracking-[-0.02em] max-w-[820px] mb-8">
              Inhabergeführt.<br />
              <span className="text-cream/55">Seit 1999.</span>
            </h1>
            <p className="text-[17px] text-cream/60 leading-[1.75] max-w-[560px]">
              Abels Immobilien ist kein Franchise-Unternehmen und kein Massenanbieter. Wir sind ein inhabergeführtes Maklerhaus mit dem Anspruch, jeden Verkauf so zu begleiten, als wäre es der einzige.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zahlen / Facts strip */}
      <section className="border-b border-line/50 bg-bone">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line/50">
            {[
              { value: "Seit 1999", label: "Inhabergeführt" },
              { value: "7 Standorte", label: "In deutschen Metropolen" },
              { value: "IHK-zertifiziert", label: "§34c GewO" },
              { value: "Diskret", label: "Off-Market auf Wunsch" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="py-10 px-6 lg:px-10"
              >
                <span className="block font-serif text-[32px] lg:text-[40px] text-ink leading-none mb-2 tracking-[-0.01em]">
                  {item.value}
                </span>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-stone">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geschichte / Timeline */}
      <section className="py-24 lg:py-36 bg-cream border-b border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-gold/60" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Unsere Geschichte</span>
              </div>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-ink leading-[1.08] tracking-[-0.01em] mb-6">
                25 Jahre.<br />Eine Linie.
              </h2>
              <p className="text-[15px] text-graphite leading-[1.75]">
                Abels Immobilien ist gewachsen — aber nie von dem abgewichen, was 1999 den Anfang gemacht hat: Der persönliche Anspruch des Inhabers, der hinter jedem Mandat steht.
              </p>
            </motion.div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex gap-10 py-8 border-b border-line/50 group"
                  >
                    <span className="font-serif text-[13px] text-gold shrink-0 w-12 pt-0.5">{m.year}</span>
                    <p className="text-[15px] text-graphite leading-[1.7] group-hover:text-ink transition-colors duration-300">
                      {m.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="py-24 lg:py-36 bg-bone border-b border-line/50">
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
                className="grid lg:grid-cols-12 gap-8 py-10 border-b border-line/50 group hover:bg-cream/50 transition-colors duration-300 px-4 -mx-4"
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

      {/* Team — full-bleed */}
      <section className="bg-cream border-b border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-24 lg:pt-36 pb-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-10 items-end mb-12"
          >
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-gold/60" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-gold">Das Team</span>
              </div>
              <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-ink leading-[1.08] tracking-[-0.01em]">
                Menschen, die zuhören.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-[15px] text-graphite leading-[1.75] mb-4">
                Kein Callcenter. Keine automatisierten Prozesse. Jedes Mandat wird von einem festen Ansprechpartner begleitet — von der ersten Besichtigung bis zur notariellen Beurkundung.
              </p>
              <p className="text-[15px] text-graphite leading-[1.75]">
                Unsere Makler kennen ihre Standorte nicht aus Broschüren, sondern weil sie dort leben, netzwerken und täglich aktiv im Markt sind.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Full-bleed team photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[16/7] overflow-hidden"
        >
          <Image
            src="/images/team.jpg"
            alt="Das Team von Abels Immobilien"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 max-w-[1440px] mx-auto px-6 lg:px-20 pb-10">
            <Link
              href="/bewertung"
              className="inline-flex items-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold-soft transition-colors group"
            >
              Jetzt Beratung anfragen
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ─── BEKANNT AUS ─── */}
      <section className="py-16 lg:py-20 bg-bone border-b border-line/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-stone text-center mb-10">
              Bekannt aus
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 lg:gap-20">
              {/* FAZ */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative h-10 w-48 grayscale opacity-55 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src="/images/press/faz.png"
                  alt="Frankfurter Allgemeine Zeitung"
                  fill
                  className="object-contain"
                />
              </motion.div>

              <div className="hidden sm:block w-px h-8 bg-line/70" />

              {/* Stuttgarter Zeitung */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-10 w-52 grayscale opacity-55 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src="/images/press/stuttgarter-zeitung.png"
                  alt="Stuttgarter Zeitung"
                  fill
                  className="object-contain"
                />
              </motion.div>

              <div className="hidden sm:block w-px h-8 bg-line/70" />

              {/* Süddeutsche Zeitung */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative h-10 w-52 grayscale opacity-55 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src="/images/press/sueddeutsche-zeitung.svg"
                  alt="Süddeutsche Zeitung"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── REFERENZEN ─── */}
      <section className="bg-ink text-cream py-24 lg:py-36">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

          {/* Section header */}
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
              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] text-cream leading-[0.97] tracking-[-0.02em] lg:col-span-6">
                Was unsere Mandanten sagen.
              </h2>
              <p className="text-[15px] text-cream/50 leading-[1.75] lg:col-span-5 lg:col-start-8">
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
            className="border border-cream/10 p-10 lg:p-16 mb-6 relative"
          >
            <Quote className="absolute top-8 right-8 w-10 h-10 text-gold/20" />
            <div className="flex gap-1 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="font-serif italic text-[clamp(1.3rem,2.5vw,2rem)] text-cream leading-[1.4] max-w-[780px] mb-10">
              „{testimonials[0].quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-px h-8 bg-gold/40" />
              <div>
                <span className="block text-[14px] text-cream/80 font-medium">{testimonials[0].author}</span>
                <span className="block text-[12px] text-cream/40 uppercase tracking-[0.14em]">{testimonials[0].location} · {testimonials[0].type}</span>
              </div>
            </div>
          </motion.div>

          {/* Grid of remaining testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/8">
            {testimonials.slice(1).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-ink p-8 lg:p-10 group hover:bg-ink/80 transition-colors duration-300"
              >
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-[14px] text-cream/70 leading-[1.75] mb-8 italic font-serif">
                  „{t.quote}"
                </blockquote>
                <div className="border-t border-cream/10 pt-6">
                  <span className="block text-[13px] text-cream/80 font-medium mb-0.5">{t.author}</span>
                  <span className="block text-[11px] text-cream/35 uppercase tracking-[0.14em]">{t.location}</span>
                  <span className="block text-[11px] text-gold/60 uppercase tracking-[0.12em] mt-1">{t.type}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 pt-12 border-t border-cream/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          >
            <p className="text-[14px] text-cream/40">
              Alle Bewertungen sind authentisch und stammen von verifizierten Mandanten.
            </p>
            <a
              href="https://g.page/r/abels-immobilien/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-cream/50 hover:text-gold transition-colors group shrink-0"
            >
              Alle Google-Bewertungen lesen
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
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
                className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-gold-soft transition-colors group"
              >
                Kostenlose Bewertung
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
