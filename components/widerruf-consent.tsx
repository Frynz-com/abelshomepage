import Link from "next/link"

type WiderrufConsentProps = {
  tone?: "light" | "dark"
  className?: string
}

export function WiderrufConsent({ tone = "light", className = "" }: WiderrufConsentProps) {
  const textClass = tone === "dark" ? "text-cream/70" : "text-stone/70"
  const linkClass = tone === "dark" ? "text-cream underline hover:text-gold" : "text-ink underline hover:text-gold"

  return (
    <label className={`flex items-start gap-3 text-[12px] leading-relaxed ${textClass} ${className}`}>
      <input
        type="checkbox"
        name="widerrufsbelehrung"
        required
        className="mt-0.5 accent-gold shrink-0"
      />
      <span>
        Ich habe die{" "}
        <Link href="/widerrufsrecht" className={linkClass}>
          Widerrufsbelehrung
        </Link>{" "}
        gelesen und akzeptiert.
      </span>
    </label>
  )
}
