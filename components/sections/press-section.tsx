export function PressSection() {
  const logos = [
    "FOCUS",
    "Handelsblatt",
    "Capital",
    "IVD",
    "ImmoScout24"
  ]

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <div key={logo} className="flex items-center gap-12 md:gap-16">
              <span className="font-serif italic text-stone text-lg tracking-wide">
                {logo}
              </span>
              {index < logos.length - 1 && (
                <div className="w-px h-6 bg-line hidden sm:block" />
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-stone text-sm mt-12">
          Ausgezeichnet von führenden deutschen Wirtschaftsmedien.
        </p>
      </div>
    </section>
  )
}
