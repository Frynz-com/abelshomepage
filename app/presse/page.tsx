"use client"

import { motion } from "framer-motion"
import { Download, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const pressReleases = [
  {
    date: "März 2026",
    title: "Abels Immobilien eröffnet neuen Standort in Stuttgart",
    excerpt: "Mit der Eröffnung des siebten Standorts stärkt Abels Immobilien seine Präsenz im süddeutschen Premium-Markt und baut das Beratungsnetzwerk weiter aus.",
  },
  {
    date: "Januar 2026",
    title: "Marktbericht 2025: Premium-Segment trotz Zinswende stabil",
    excerpt: "Abels Immobilien veröffentlicht den Jahresmarktbericht 2025. Trotz veränderter Finanzierungsbedingungen zeigt das Premiumsegment in den Metropolen eine stabile Nachfrage.",
  },
  {
    date: "April 2026",
    title: "Auszeichnung: Top-Immobilienmakler 2026 in Düsseldorf",
    excerpt: "Abels Immobilien wurde erneut als einer der führenden Immobilienmakler in Düsseldorf ausgezeichnet.",
  },
  {
    date: "Juni 2025",
    title: "Kooperation mit führendem Münchner Architekturbüro",
    excerpt: "Neue strategische Partnerschaft erweitert das Dienstleistungsangebot für Käufer und Bauträger im Münchner Luxussegment.",
  },
]

const mediaContacts = [
  {
    name: "Presseanfragen",
    contact: "presse@abels-immobilien.de",
    note: "Für Interviews, Statements und Presseanfragen",
  },
  {
    name: "Unternehmenskommunikation",
    contact: "info@ebla-immobilien.com",
    note: "Allgemeine Anfragen und Kooperationen",
  },
]

export default function PressePage() {
  return (
    <>
      <Header />
      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <section className="relative bg-bone pt-[120px] pb-24 lg:pb-32 border-b border-line/40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(180,145,80,0.07),transparent_60%)]" />
          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-gold text-[11px] uppercase tracking-[0.28em] mb-6">Presse & Medien</p>
              <h1 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] text-ink leading-[1.02] mb-6 max-w-[700px]">
                Informationen für<br />
                <span className="text-ink/60">Journalisten & Medien.</span>
              </h1>
              <p className="text-graphite text-[16px] lg:text-[17px] leading-relaxed max-w-[500px]">
                Pressemitteilungen, Bildmaterial und Kontaktdaten für Medienvertreter — alles an einem Ort.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[12px] uppercase tracking-[0.22em] text-stone mb-12">Pressemitteilungen</p>
            <div className="space-y-px bg-line/30">
              {pressReleases.map((pr) => (
                <article key={pr.title} className="bg-cream p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-[12px] uppercase tracking-[0.18em] text-stone mb-3">{pr.date}</p>
                      <h2 className="font-serif text-[1.5rem] lg:text-[1.7rem] text-ink mb-3 max-w-[640px]">{pr.title}</h2>
                      <p className="text-graphite text-[15px] leading-relaxed max-w-[600px]">{pr.excerpt}</p>
                    </div>
                    <a
                      href="mailto:presse@abels-immobilien.de"
                      className="shrink-0 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-stone hover:text-ink transition-colors self-start mt-1"
                    >
                      Volltext anfordern
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Press Kit + Media */}
        <section className="border-t border-line/40 bg-bone">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

              {/* Press Kit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[12px] uppercase tracking-[0.22em] text-stone mb-8">Pressekit</p>
                <div className="space-y-4">
                  {[
                    { label: "Unternehmenslogo (SVG, PNG)", note: "Für Druckmedien und Online" },
                    { label: "Führungsporträts (JPG, hochauflösend)", note: "Freigegeben für Pressezwecke" },
                    { label: "Kurzprofil Abels Immobilien", note: "PDF, 2 Seiten" },
                    { label: "Unternehmensfakten & Chronik", note: "PDF, aktualisiert März 2026" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-5 bg-cream border border-line group">
                      <div>
                        <p className="text-[15px] text-ink font-medium">{item.label}</p>
                        <p className="text-[13px] text-stone mt-0.5">{item.note}</p>
                      </div>
                      <a
                        href="mailto:presse@abels-immobilien.de?subject=Pressekit-Anfrage"
                        className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-stone hover:text-gold transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Anfragen
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Media Contacts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[12px] uppercase tracking-[0.22em] text-stone mb-8">Medienkontakte</p>
                <div className="space-y-6">
                  {mediaContacts.map((mc) => (
                    <div key={mc.name} className="p-6 bg-cream border border-line">
                      <p className="text-[12px] uppercase tracking-[0.18em] text-stone mb-2">{mc.name}</p>
                      <a
                        href={`mailto:${mc.contact}`}
                        className="text-[16px] text-ink hover:text-gold transition-colors font-medium block mb-1"
                      >
                        {mc.contact}
                      </a>
                      <p className="text-[14px] text-graphite">{mc.note}</p>
                    </div>
                  ))}
                  <div className="p-6 bg-cream border border-line">
                    <p className="text-[12px] uppercase tracking-[0.18em] text-stone mb-2">Telefon</p>
                    <a
                      href="tel:+492115591751"
                      className="text-[17px] text-ink hover:text-gold transition-colors font-medium block mb-1"
                    >
                      +49 211 5591751
                    </a>
                    <p className="text-[14px] text-graphite">Mo – Fr: 9:00 – 18:00 Uhr</p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-line/50">
                  <p className="text-[12px] uppercase tracking-[0.22em] text-stone mb-4">Über uns</p>
                  <p className="text-graphite text-[15px] leading-relaxed">
                    Abels Immobilien GmbH wurde 1999 gegründet und gehört heute zu den führenden Adressen für Premium-Immobilien in Deutschland. Das Unternehmen vermittelt Wohnimmobilien in sieben Metropolen und betreut sowohl Käufer als auch Verkäufer mit einem persönlichen Beratungsansatz.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
