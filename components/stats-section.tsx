export function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-foreground text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-serif mb-2">25</p>
            <p className="text-white/40 text-sm">Jahre Erfahrung</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-serif mb-2">500+</p>
            <p className="text-white/40 text-sm">Vermittelte Objekte</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-serif mb-2">12</p>
            <p className="text-white/40 text-sm">Mitarbeiter</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-serif mb-2">98%</p>
            <p className="text-white/40 text-sm">Zufriedene Kunden</p>
          </div>
        </div>
      </div>
    </section>
  )
}
