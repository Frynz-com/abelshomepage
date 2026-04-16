"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const properties = [
  {
    id: "1",
    title: "Penthouse mit Rheinblick",
    location: "Düsseldorf · Oberkassel",
    type: "Penthouse",
    size: "320 m²",
    rooms: "5 Zimmer",
    price: "Auf Anfrage",
    badge: "EXKLUSIV",
    image: "/images/properties/property-1.jpg"
  },
  {
    id: "2",
    title: "Stilaltbau in Bestlage",
    location: "München · Bogenhausen",
    type: "Stilaltbau",
    size: "280 m²",
    rooms: "6 Zimmer",
    price: "2.850.000 €",
    badge: "OFF-MARKET",
    image: "/images/properties/property-2.jpg"
  },
  {
    id: "3",
    title: "Moderne Villa",
    location: "Hamburg · Blankenese",
    type: "Villa",
    size: "420 m²",
    rooms: "7 Zimmer",
    price: "4.200.000 €",
    badge: "EXKLUSIV",
    image: "/images/properties/property-3.jpg"
  }
]

export function PropertiesSection() {
  return (
    <section className="py-32 lg:py-40 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-24">
          <div className="max-w-[720px] mb-12 lg:mb-0">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-4">
              Aktuelle Angebote
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl text-ink tracking-[-0.015em] leading-[1.1] mb-6 max-w-[720px]">
              Ausgewählte Objekte
            </h2>
            <p className="text-graphite text-lg leading-relaxed max-w-[560px]">
              Aus unserem aktuellen Portfolio.
            </p>
          </div>
          <Link
            href="/objekte"
            className="inline-flex items-center gap-2 text-ink underline-offset-6 decoration-1 decoration-gold hover:decoration-2 transition-all"
            style={{ textDecorationLine: 'underline' }}
          >
            Alle Objekte ansehen →
          </Link>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/objekte/${property.id}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden mb-6 rounded-sm">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-104"
                  />
                  {/* Badge */}
                  <span className="absolute top-4 right-4 bg-gold text-surface px-3 py-1.5 text-xs uppercase tracking-[0.1em] rounded-sm">
                    {property.badge}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <p className="text-stone text-xs uppercase tracking-[0.15em] mb-3">
                    {property.location}
                  </p>
                  <h3 className="font-serif text-2xl text-ink mb-4 group-hover:text-gold transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-graphite text-sm mb-4">
                    {property.type} · {property.size} · {property.rooms}
                  </p>
                  <p className="font-serif text-xl text-ink">
                    {property.price}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
