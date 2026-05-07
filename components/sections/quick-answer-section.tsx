export function QuickAnswerSection() {
  return (
    <section className="py-32 lg:py-40 bg-cream">
      <div className="max-w-[720px] mx-auto px-6 lg:px-12 text-center">
        <p className="text-gold text-xs uppercase tracking-[0.2em] mb-6">
          Das Unternehmen
        </p>
        <h2 className="font-serif text-3xl lg:text-5xl text-ink tracking-[-0.015em] leading-[1.1] mb-8 max-w-[720px]">
          Abels Immobilien — im Überblick
        </h2>
        
        <p className="text-graphite text-lg leading-relaxed mb-16 max-w-[560px] mx-auto">
          Abels Immobilien GmbH ist ein inhabergeführter Premium-Makler mit Sitz in Düsseldorf und Büros in München, Grünwald, Hamburg, Frankfurt, Essen und Stuttgart. Spezialisiert auf hochwertige Wohnimmobilien, Villen, Penthäuser und Kapitalanlagen ab 500.000 €. Kostenfreie Vor-Ort-Bewertung innerhalb 72 Stunden. Provision ausschließlich im Erfolgsfall.
        </p>

        {/* Credentials */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
          <div className="md:px-16">
            <span className="block font-serif text-3xl text-ink mb-2">Seit 1995</span>
            <span className="text-xs uppercase tracking-[0.2em] text-stone">Inhabergefuhrt</span>
          </div>
          <div className="hidden md:block w-px h-14 bg-line" />
          <div className="md:px-16">
            <span className="block font-serif text-3xl text-ink mb-2">7 Standorte</span>
            <span className="text-xs uppercase tracking-[0.2em] text-stone">In Deutschland</span>
          </div>
        </div>
      </div>
    </section>
  )
}
