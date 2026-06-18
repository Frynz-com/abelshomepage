"use client"

import Link from "next/link"

type WiderrufConsentProps = {
  tone?: "light" | "dark"
  className?: string
}

export function WiderrufConsent({ tone = "light", className = "" }: WiderrufConsentProps) {
  const textClass = tone === "dark" ? "text-cream/70" : "text-stone/70"
  const linkClass = tone === "dark" ? "text-gold hover:text-cream" : "text-ink hover:text-gold"
  const boxClass = tone === "dark" ? "border-cream/40 bg-cream/10" : "border-line bg-white"

  return (
    <label className={`flex items-start gap-3 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        name="widerrufsbelehrung"
        required
        className={`mt-0.5 h-4 w-4 shrink-0 accent-gold ${boxClass}`}
      />
      <span className={`text-[12px] leading-relaxed ${textClass}`}>
        Ich habe die{" "}
        <Link
          href="/widerrufsrecht"
          target="_blank"
          className={`underline underline-offset-2 transition-colors ${linkClass}`}
        >
          Widerrufsbelehrung
        </Link>{" "}
        gelesen und akzeptiere sie. <span className="text-gold">*</span>
      </span>
    </label>
  )
}
