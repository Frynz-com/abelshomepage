"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    id: "wohnen",
    title: "Wohnen",
    subtitle: "Die eigenen vier Wände",
    description: "Häuser, Wohnungen, Grundstücke",
    image: "/images/wohnen.jpg",
  },
  {
    id: "gewerbe",
    title: "Gewerbe",
    subtitle: "Passende Unternehmensräume",
    description: "Büros, Hallen, Einzelhandel",
    image: "/images/gewerbe.jpg",
  },
  {
    id: "kapitalanlage",
    title: "Kapitalanlage",
    subtitle: "Sinnvolle Investitionen",
    description: "Mehrfamilienhäuser, Portfolios",
    image: "/images/kapitalanlage.jpg",
  },
  {
    id: "agrar",
    title: "Agrar & Forst",
    subtitle: "Wald, Wiesen, Landwirtschaft",
    description: "Acker, Wald, landw. Betriebe",
    image: "/images/agrar.jpg",
  },
]

export function ServiceCards() {
  return (
    <section id="services">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <Link 
      href={`#${service.id}`}
      className="group relative aspect-[16/10] md:aspect-[4/3] overflow-hidden cursor-pointer block"
    >
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />

      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-white/50 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-2">
              {service.subtitle}
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-serif font-normal">
              {service.title}
            </h3>
            <p className="text-white/40 text-sm mt-2 hidden md:block">
              {service.description}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </Link>
  )
}
