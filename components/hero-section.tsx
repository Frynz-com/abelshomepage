"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative h-screen min-h-[700px]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxusimmobilie"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
      </div>

      <div className="relative h-full flex flex-col justify-end pb-32 md:pb-40 items-center text-center px-4">
        <div className="max-w-4xl">
          <p className="text-white/60 text-[11px] md:text-xs tracking-[0.4em] uppercase mb-8">
            Wohn- | Gewerbe- | Anlageimmobilien
          </p>
          
          <h1 className="font-serif text-[2.5rem] md:text-6xl lg:text-7xl text-white font-normal leading-[1.05] tracking-tight">
            Abels Immobilien
          </h1>
          
          <p className="text-white/50 text-sm md:text-base mt-6 max-w-xl mx-auto">
            Ihr Partner für erstklassige Immobilien in der Region
          </p>
        </div>
      </div>

      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
        aria-label="Weiter scrollen"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </button>
    </section>
  )
}
