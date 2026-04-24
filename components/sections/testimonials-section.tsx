"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const testimonials = [
  {
    quote: "Abels hat unsere Villa in Oberkassel diskret und schneller verkauft, als wir es für möglich gehalten hätten. Kein öffentliches Inserat — und trotzdem den idealen Käufer. Die persönliche Betreuung war außergewöhnlich.",
    name: "Familie B.",
    location: "Düsseldorf-Oberkassel",
    detail: "Stadthaus · Verkauf 2023",
  },
  {
    quote: "Was mich überzeugt hat: ein einziger Ansprechpartner von Anfang bis Ende. Kein Callcenter, keine Weitergabe. Echte Verantwortung — und ein Ergebnis, das über dem Marktwert lag.",
    name: "Dr. M. H.",
    location: "München-Bogenhausen",
    detail: "Eigentumswohnung · Verkauf 2024",
  },
  {
    quote: "Ich war skeptisch, ob ein Off-Market-Verkauf wirklich funktioniert. Er tat es — innerhalb weniger Wochen, ohne einen einzigen öffentlichen Auftritt. Professionell, diskret, verlässlich.",
    name: "K. S.",
    location: "Hamburg-Blankenese",
    detail: "Einfamilienhaus · Verkauf 2023",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-28 lg:py-36 bg-cream border-t border-line/40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-px bg-gold/70" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-gold">
                Stimmen unserer Mandanten
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.8vw,3.2rem)] text-ink leading-[1.06] tracking-[-0.015em]">
              Was Eigentümer über uns sagen.
            </h2>
          </div>
          <Link
            href="/ueber-uns"
            className="inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.22em] text-stone hover:text-gold transition-colors duration-200 group shrink-0"
          >
            Mehr erfahren
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-gold" />
          </Link>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-3 gap-px bg-line/40">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-cream p-10 lg:p-12 flex flex-col"
            >
              <span className="block font-serif text-[52px] text-gold/25 leading-none mb-4 -mt-3">
                &ldquo;
              </span>

              <p className="text-[15px] text-graphite leading-[1.8] flex-1 mb-10">
                {t.quote}
              </p>

              <div className="border-t border-line/50 pt-6">
                <span className="block font-medium text-[14px] text-ink mb-0.5">
                  {t.name}
                </span>
                <span className="block text-[12px] text-stone mb-0.5">
                  {t.location}
                </span>
                <span className="block text-[11px] uppercase tracking-[0.16em] text-gold/70 mt-2">
                  {t.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-[12px] text-stone/60 italic text-center"
        >
          Aus Gründen der Diskretion werden Namen und Objekte anonymisiert dargestellt.
        </motion.p>

      </div>
    </section>
  )
}
