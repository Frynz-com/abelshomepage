"use client"

import { useEffect } from "react"

export default function InvestierenRedirect() {
  useEffect(() => {
    window.location.replace("/vermietung")
  }, [])
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <p className="text-graphite text-sm">Weiterleitung…</p>
    </div>
  )
}
