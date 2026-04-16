"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    quote: "Herr Abels hat unsere Wohnung innerhalb von 3 Wochen verkauft — deutlich über dem erwarteten Preis.",
    author: "Familie S.",
    location: "Düsseldorf",
    rating: 5,
    date: "vor 2 Monaten"
  },
  {
    quote: "Professionell, diskret und immer erreichbar. So sollte ein Makler arbeiten.",
    author: "Dr. M. Weber",
    location: "München",
    rating: 5,
    date: "vor 3 Monaten"
  },
  {
    quote: "Die Bewertung war fundiert und realistisch. Der Verkauf lief reibungslos.",
    author: "K. Hoffmann",
    location: "Hamburg",
    rating: 5,
    date: "vor 1 Monat"
  }
]

export function TestimonialsSection() {
  return (
    <section className="bg-bone">
      {/* Hero Testimonial */}
      <div className="py-32 lg:py-40 bg-bone border-b border-line">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center gap-1 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <blockquote>
              <p className="font-serif italic text-3xl lg:text-4xl text-ink leading-relaxed max-w-[800px] mx-auto mb-8">
                &ldquo;Die Nachbarn haben vom Verkauf unseres Hauses erst erfahren, als die neuen 
                Eigentümer eingezogen sind. Genau so haben wir es uns gewünscht.&rdquo;
              </p>
              <footer className="text-stone text-lg">
                — Dr. M.K., Oberkassel · Verkauf 2024
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>

      {/* Google Reviews Grid */}
      <div className="py-32 lg:py-40 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="text-gold text-xs uppercase tracking-[0.2em] mb-6 text-center">
            Google Bewertungen
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-line p-8 rounded-sm hover:shadow-sm hover:border-gold/30 transition-all"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-graphite leading-relaxed mb-6 text-sm line-clamp-3">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Divider */}
                <div className="w-12 h-px bg-line mb-6" />

                {/* Author */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-ink font-medium text-sm">{testimonial.author}</p>
                    <p className="text-stone text-xs">{testimonial.location}</p>
                  </div>
                  <p className="text-stone text-xs whitespace-nowrap">{testimonial.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Link */}
          <div className="text-center">
            <Link
              href="https://g.page/r/abels-immobilien/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-ink underline-offset-6 decoration-1 decoration-gold hover:decoration-2 transition-all"
              style={{ textDecorationLine: 'underline' }}
            >
              Alle Bewertungen auf Google lesen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
