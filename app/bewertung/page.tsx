"use client"

import { useEffect } from "react"

export default function BewertungRedirect() {
  useEffect(() => {
    window.location.replace("https://immowert.lovable.app/")
  }, [])

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <p className="text-graphite text-sm">Weiterleitung zum Bewertungstool…</p>
    </div>
  )
}
